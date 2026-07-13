# ts.vo1dee.com — Server Hub portal

Static landing page for **ts.vo1dee.com**: explains what runs at that address (a TeamSpeak
voice server and a Project Zomboid dedicated server) and walks visitors through connecting —
TeamSpeak 3, TeamSpeak 6, and Project Zomboid. Localized in English and Ukrainian
(toggle in the header, remembered in `localStorage`, auto-detected from the browser language
on first visit).

Plain HTML/CSS/JS, no build step, no external requests.

## Structure

```
index.html      — single page, all sections
css/style.css   — blue-toned theme, light/dark via prefers-color-scheme
js/main.js      — EN/UK i18n dictionary, language toggle, copy buttons, TS3/TS6 tabs
```

## Local preview

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to Cloudflare Pages

The site runs as the direct-upload Pages project **ts-vo1dee-portal**, live at
<https://ts-vo1dee-portal.pages.dev>.

Deploy manually from a checkout:

```sh
npx wrangler pages deploy . --project-name ts-vo1dee-portal --branch main --commit-dirty=true
```

### Auto-deploy on push

`.github/workflows/deploy.yml` deploys `main` to Pages on every push. It needs one repo
secret: **`CLOUDFLARE_API_TOKEN`** — create it at
[dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens)
with the **Cloudflare Pages — Edit** permission, then add it under repo
**Settings → Secrets and variables → Actions**, or run:

```sh
gh secret set CLOUDFLARE_API_TOKEN --repo vo1dee/ts-vo1dee-portal
```

### Custom domain — important caveat

Do **not** attach `ts.vo1dee.com` itself as the Pages custom domain: that would repoint its
DNS to Cloudflare's proxy, and TeamSpeak/Project Zomboid clients (raw UDP 9987/16261) would
no longer reach the game host. Keep `ts.vo1dee.com` as a DNS-only record pointing at the game
server, and attach the portal to another hostname instead (e.g. `vo1dee.com` or
`portal.vo1dee.com`) via Pages → **Custom domains**. The guides on the page always tell
players to connect to `ts.vo1dee.com`, so the portal works from any hostname.
