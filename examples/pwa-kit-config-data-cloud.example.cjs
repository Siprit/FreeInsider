/**
 * Example: PWA Kit configuration snippet for Data Cloud engagement events.
 * Merge into your project's config (e.g. config/default.js) per Composable Storefront docs.
 * Replace placeholder values from Data Cloud Setup → Website and Mobile App.
 *
 * @see https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/integrate-data-cloud.html
 */
// eslint-disable-next-line no-unused-vars
const exampleAppConfigFragment = {
    app: {
        dataCloudAPI: {
            appSourceId: 'YOUR_APP_SOURCE_UUID',
            tenantId: 'YOUR_TENANT_ID'
        }
    }
};

module.exports = { exampleAppConfigFragment };
