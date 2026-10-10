# rea.run

Unofficial bilingual community docs and brand site for **REA** (Reverse Engineer Anything) — the open-source MCP/CLI that helps coding agents inspect software you are authorized to analyze.

- Site: https://rea.run
- Upstream project: https://github.com/morluto/rea
- Official docs: https://morluto.github.io/rea/

**Compliance:** legal, authorized reverse engineering and security research only. No crack, keygen, or DRM-circumvention content.

Stack: Astro (static) → Cloudflare Pages (`rea-run` project) on `rea.run`.


## Deploy

Cloudflare Pages project: `rea-run` (custom domains `rea.run`, `www.rea.run`).

```bash
npm ci && npm run build
npx wrangler pages deploy dist --project-name=rea-run
# or: ./scripts/deploy.sh
```

GitHub Actions: copy `deploy.workflow.yml.example` to `.github/workflows/deploy.yml` once the pushing credential has the `workflow` OAuth scope (or add the file in the GitHub UI). Repo secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` are already set.
