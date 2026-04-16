# FreeInsider — buildable components

Copy these into your **PWA Kit** repository (or symlink during development). They do not deploy Salesforce metadata by themselves; they complement [Data Cloud setup](../02-data-cloud-pwa-kit.md) and [GTM governance](../06-gtm-consent-environments.md).

| Folder | Contents |
|--------|----------|
| [pwa-kit](pwa-kit/) | Data Cloud config merge (CommonJS), React route + `dataLayer` hook |
| [gtm](gtm/) | Typed `dataLayer` pushes, recommended event names |

From repo root you can run `npm run validate:env` inside `FreeInsider/` if you add a `.env` file (see `pwa-kit/pwa-kit-env.example`).
