# Job‑Pool — MERN Starter (Full)

A ready‑to‑hack candidate‑first job board with swipe approvals, chat and admin dashboard.

## Quick start (Docker)

```bash
cp .env.example .env   # fill secrets
docker compose up --build
```

Services:

| Service | Port | Description |
|---------|------|-------------|
| client  | 5173 | React SPA served by Vite |
| server  | 5000 | Express + Socket.IO API |
| mongo   | 27017| MongoDB instance (persisted in ./data/db) |

Visit <http://localhost:5173> to start.
