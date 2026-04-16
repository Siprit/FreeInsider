#!/usr/bin/env node
'use strict';

/**
 * Optional: check FreeInsider / PWA Kit env vars from process.env.
 * Run from CI or locally: `npm run validate:env` in FreeInsider/
 *
 * Set DATA_CLOUD_ENABLED=true to fail if tenant or app source is missing.
 */

/**
 * @param {NodeJS.ProcessEnv} [env]
 * @returns {{ ok: boolean, errors: string[] }}
 */
function validateEnv(env = process.env) {
  const requiredWhenEnabled =
    env.DATA_CLOUD_ENABLED === 'true' ||
    env.DATA_CLOUD_ENABLED === '1' ||
    env.DATA_CLOUD_ENABLED === 'yes';

  const errors = [];

  if (requiredWhenEnabled) {
    if (!env.DATA_CLOUD_TENANT_ID) {
      errors.push(
        'DATA_CLOUD_TENANT_ID is required when DATA_CLOUD_ENABLED is true'
      );
    }
    if (!env.DATA_CLOUD_APP_SOURCE_ID) {
      errors.push(
        'DATA_CLOUD_APP_SOURCE_ID is required when DATA_CLOUD_ENABLED is true'
      );
    }
  }

  return { ok: errors.length === 0, errors };
}

function main() {
  const { ok, errors } = validateEnv();
  if (!ok) {
    // eslint-disable-next-line no-console
    console.error('[FreeInsider] validate-env failed:\n', errors.join('\n'));
    process.exit(1);
  }
  // eslint-disable-next-line no-console
  console.log('[FreeInsider] validate-env: OK');
}

if (require.main === module) {
  main();
}

module.exports = { validateEnv };
