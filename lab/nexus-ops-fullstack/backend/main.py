from datetime import datetime, timezone
from random import randint
from threading import Lock
from time import sleep

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(
    title="NEXUS OPS API",
    description="Demonstration API for the NEXUS OPS lab dashboard.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

_lock = Lock()
pipeline_state = {"status": "idle", "last_run": None, "run_id": 0}

services = [
    {"id": "auth", "name": "Identity Gateway", "group": "CORE", "status": "operational", "uptime": "99.98%", "latency": 42},
    {"id": "api", "name": "Public API", "group": "EDGE", "status": "operational", "uptime": "99.95%", "latency": 86},
    {"id": "queue", "name": "Message Queue", "group": "DATA", "status": "degraded", "uptime": "98.72%", "latency": 214},
    {"id": "db", "name": "Primary Database", "group": "DATA", "status": "operational", "uptime": "99.99%", "latency": 18},
]

incidents = [
    {"id": "INC-2048", "title": "Fila de processamento acima do normal", "service": "Message Queue", "severity": "high", "status": "investigating", "age": "12 min", "description": "Aumento fictício no tempo de consumo da fila. Verificar consumidores e volume de mensagens."},
    {"id": "INC-2047", "title": "Latência intermitente na API", "service": "Public API", "severity": "medium", "status": "monitoring", "age": "38 min", "description": "Picos simulados de latência em uma parte das requisições. Acompanhar tendência."},
    {"id": "INC-2046", "title": "Rotação de certificado concluída", "service": "Identity Gateway", "severity": "low", "status": "resolved", "age": "2 h", "description": "Rotação demonstrativa concluída sem impacto esperado."},
    {"id": "INC-2045", "title": "Rotina de backup validada", "service": "Primary Database", "severity": "low", "status": "resolved", "age": "5 h", "description": "Verificação fictícia do ciclo de backup concluída."},
]


class PipelineRequest(BaseModel):
    ref: str = "main"


@app.get("/")
def root():
    return {"name": "NEXUS OPS API", "status": "online", "docs": "/docs"}


@app.get("/api/health")
def health():
    return {"status": "ok", "timestamp": datetime.now(timezone.utc).isoformat()}


@app.get("/api/overview")
def overview():
    return {
        "availability": "99.94%",
        "active_incidents": sum(i["status"] != "resolved" for i in incidents),
        "requests_per_minute": 12840 + randint(-180, 180),
        "avg_latency_ms": 86,
        "services_online": sum(s["status"] == "operational" for s in services),
        "services_total": len(services),
        "environment": "DEMO",
    }


@app.get("/api/services")
def get_services():
    return services


@app.get("/api/incidents")
def get_incidents():
    return incidents


@app.post("/api/pipeline/run")
def run_pipeline(payload: PipelineRequest):
    with _lock:
        pipeline_state["run_id"] += 1
        pipeline_state["status"] = "success"
        pipeline_state["last_run"] = datetime.now(timezone.utc).isoformat()
        run_id = pipeline_state["run_id"]
    return {
        "run_id": run_id,
        "ref": payload.ref,
        "status": "success",
        "stages": [
            {"name": "Source", "status": "success", "detail": f"Referência {payload.ref} recebida"},
            {"name": "Build", "status": "success", "detail": "Build demonstrativo concluído"},
            {"name": "Test", "status": "success", "detail": "12 verificações fictícias aprovadas"},
            {"name": "Release", "status": "success", "detail": "Artefato de demonstração preparado"},
            {"name": "Deploy", "status": "success", "detail": "Deploy simulado, nenhum serviço real foi alterado"},
        ],
        "completed_at": pipeline_state["last_run"],
    }


@app.get("/api/pipeline/status")
def get_pipeline_status():
    return pipeline_state
