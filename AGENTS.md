# AGENTS.md

Guidance for AI agents working in this repository.

## Project overview

Single-package **Next.js 16** (App Router) marketing site for Cursor Ambassador communities. Content lives under `content/`; there is no database, API server, or Docker stack.

## Cursor Cloud specific instructions

### Services

| Service | Port | Start command |
|---------|------|---------------|
| Next.js dev server | 3000 | `pnpm run dev` |

Only one process is required for local development. Open `http://localhost:3000`.

### Standard commands

See `README.md` and `package.json` scripts:

- **Install:** `pnpm install` (use pnpm; `packageManager` is `pnpm@10.8.0`)
- **Dev:** `pnpm run dev`
- **Lint:** `pnpm run lint`
- **Build:** `pnpm run build` (includes TypeScript check)
- **Format check:** `pnpm run format:check` (may report pre-existing formatting drift in some files)

There is no automated test runner (`jest`, `vitest`, `playwright`) in this repo.

### Environment variables

No `.env` file is required. Optional: `NEXT_PUBLIC_SITE_URL` for canonical URLs during local testing (defaults come from `content/site.config.ts`).

### Gotchas

- **Package manager:** Prefer `pnpm` over `npm` even though `CONTRIBUTING.md` mentions `npm install`.
- **Long-running dev server:** Run `pnpm run dev` in a tmux session if you need it to persist across shell commands.
- **pnpm build scripts:** `pnpm-workspace.yaml` sets `onlyBuiltDependencies` for `unrs-resolver`. A `sharp`/`esbuild` approve-builds warning on install is expected and does not block `pnpm run build`.
- **Content customization:** Community-specific values belong in `content/`, not hardcoded in `components/`.
