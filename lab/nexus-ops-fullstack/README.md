# NEXUS OPS · React + FastAPI

A full-stack evolution of the original standalone HTML dashboard. This is an independent learning/demo application with fictional operational data.

## Stack

- **Frontend:** React 18, Vite, Lucide React, CSS
- **Backend:** Python 3.10+, FastAPI, Uvicorn
- **API:** JSON over HTTP; Vite proxies `/api` to FastAPI during development

## Run locally

### 1. Start the API

From this directory:

```bash
python -m venv .venv
source .venv/bin/activate
# Windows PowerShell: .venv\\Scripts\\Activate.ps1
pip install -r requirements.txt
uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000
```

API docs: http://localhost:8000/docs

### 2. Start the React app

In a second terminal:

```bash
npm install
npm run dev -- --host 0.0.0.0
```

Open port **5173** in the Codespaces Ports tab. Keep port **8000** running for API requests.

## API routes

| Method | Route | Purpose |
|---|---|---|
| GET | `/api/health` | API health check |
| GET | `/api/overview` | Dashboard metrics |
| GET | `/api/services` | Service status |
| GET | `/api/incidents` | Incident list |
| POST | `/api/pipeline/run` | Run a fictional pipeline simulation |
| GET | `/api/pipeline/status` | Last simulation status |

## Scope and limitations

- All metrics, services, incidents, and pipeline runs are fictional.
- Pipeline execution is a backend simulation. It does not build, test, release, or deploy real software.
- Data is held in Python memory and resets when the API restarts.
- No authentication, database, external monitoring, or production infrastructure is connected.
- The original HTML prototype remains untouched in `lab/nexus-ops-dashboard/`.

This project is a technical exploration, not a production operations platform.
