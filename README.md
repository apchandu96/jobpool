# Job Pool Application (MERN Skeleton)

This is a starter code‑base that matches the **Job Pool** requirements and the Figma design you provided.

## Quick Start (Local)

```bash
git clone <repo>
cd job-pool
cp .env.example .env             # put real secrets
docker compose up -d             # starts server, client, mongo
```

Open:

* Client – <http://localhost:5173>
* Server health – <http://localhost:5000/api/health>

## Tech Stack

* React 18 + Vite + TypeScript + TailwindCSS
* Express 4 + Node 18 + TypeScript
* Socket.IO for real‑time notifications / chat
* MongoDB (you can point to Atlas or local)
* Docker Compose + GitHub Actions CI (workflow stub)

## Folders

```
job-pool/
  client/   # React SPA
  server/   # Node / Express API
```

The MongoDB connection is a stub — wire up `MONGO_URI` in `.env`.

## Scripts

### Client

| NPM Script | What it does                |
|------------|----------------------------|
| `npm run dev` | Vite dev server at `5173` |
| `npm run build` | Production build |
| `npm run preview` | Preview built site |

### Server

| NPM Script | What it does |
|------------|--------------|
| `npm run dev` | ts‑node‑dev hot‑reload API |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm start` | Run compiled JS |

---

### Next Steps

* Finish controller logic (`server/src/controllers/*`).
* Flesh out client pages with real API calls & socket hooks.
* Add tests in `server/src/tests/` and `client/src/__tests__/`.
