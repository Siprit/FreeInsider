'use strict';

/**
 * Merges Data Cloud Web SDK settings into PWA Kit `app` config from process.env.
 * @param {Record<string, unknown>} appConfig - Existing `app` object from PWA Kit config
 * @param {NodeJS.ProcessEnv} env - Typically process.env (Managed Runtime injects vars)
 * @returns {Record<string, unknown>} appConfig with optional dataCloudAPI
 */
function mergeDataCloudConfig(appConfig, env) {
  const tenantId = env.DATA_CLOUD_TENANT_ID || '';
  const appSourceId = env.DATA_CLOUD_APP_SOURCE_ID || '';
  const enabled =
    env.DATA_CLOUD_ENABLED === '1' ||
    env.DATA_CLOUD_ENABLED === 'true' ||
    env.DATA_CLOUD_ENABLED === 'yes';

  if (!tenantId && !appSourceId && !enabled) {
    return { ...appConfig };
  }

  if (enabled && (!tenantId || !appSourceId)) {
    // eslint-disable-next-line no-console
    console.warn(
      '[FreeInsider] DATA_CLOUD_ENABLED is set but DATA_CLOUD_TENANT_ID or DATA_CLOUD_APP_SOURCE_ID is missing.'
    );
  }

  return {
    ...appConfig,
    dataCloudAPI: {
      ...(appConfig.dataCloudAPI && typeof appConfig.dataCloudAPI === 'object'
        ? appConfig.dataCloudAPI
        : {}),
        tenantId: tenantId || appConfig.dataCloudAPI?.tenantId,
        appSourceId: appSourceId || appConfig.dataCloudAPI?.appSourceId,
    },
  };
}

module.exports = { mergeDataCloudConfig };
