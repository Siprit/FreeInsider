# PWA Kit components

## `mergeDataCloudConfig.cjs`

Use from **`config/default.js`** (or environment-specific config) so `tenantId` and `appSourceId` come from **Managed Runtime environment variables**, not hard-coded secrets.

```js
const { mergeDataCloudConfig } = require('./path/to/mergeDataCloudConfig.cjs');

module.exports = {
  app: {
    ...mergeDataCloudConfig(
      {
        url: { ... },
        // existing app keys
      },
      process.env
    ),
  },
};
```

Expected env vars:

- `DATA_CLOUD_TENANT_ID`
- `DATA_CLOUD_APP_SOURCE_ID`

Optional: `DATA_CLOUD_ENABLED` (`'true'` / `'1'` to require both vars in production validation.

## `useSpaRouteDataLayer.js`

React hook: on **route / pathname change**, pushes a minimal `page_view` event to `window.dataLayer` for GTM (and aligns with SPA analytics). Wire your **Einstein** `useEinstein` page views in the same `useEffect` if your app centralizes analytics here.

**Usage:** copy into `app/components/` (or similar), import in your root layout / route container, pass `location` from React Router (or `@salesforce/pwa-kit-runtime` equivalent).

This repo does not bundle React; your PWA Kit project supplies `react` / `react-router-dom`.
