# ts.vo1dee.com — Server Hub portal

Static portal for **ts.vo1dee.com**: the home page walks visitors through connecting to the
TeamSpeak server (TS3 and TS6); a separate Project Zomboid page is reachable from the menu.
Localized in English and Ukrainian
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

Attaching `ts.vo1dee.com` itself as the Pages custom domain repoints its DNS to Cloudflare's
HTTP proxy, and TeamSpeak/Project Zomboid clients (raw UDP 9987/16261) would no longer reach
the game host — Cloudflare's proxy only carries web traffic. Options, best first:

1. **Different hostname for the portal** (recommended): keep `ts.vo1dee.com` DNS-only →
   game host; attach e.g. `portal.vo1dee.com` or `vo1dee.com` via Pages → **Custom domains**.
   The guides tell players to connect to `ts.vo1dee.com` regardless of where the portal lives.
2. **Serve the portal from the game host**: keep `ts.vo1dee.com` DNS-only and run
   nginx/Caddy on the game box serving this repo's files on 80/443. Same address for
   everything, but it's not Cloudflare Pages hosting.
3. **SRV trick (fixes TeamSpeak only)**: proxy `ts.vo1dee.com` for the portal and add a
   DNS-only `direct.vo1dee.com` → game host plus an SRV record
   `_ts3._udp.ts.vo1dee.com` → `direct.vo1dee.com:9987`. TeamSpeak clients resolve the SRV
   and keep working — but Project Zomboid doesn't use SRV, so players would have to join via
   `direct.vo1dee.com:16261`.

The site supports `?lang=en` / `?lang=uk` URLs for direct links to a specific language.
