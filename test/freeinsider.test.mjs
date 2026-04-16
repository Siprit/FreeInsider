import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { mergeDataCloudConfig } = require('../components/pwa-kit/mergeDataCloudConfig.cjs');
const { validateEnv } = require('../scripts/validate-env.cjs');
const { pushEcommerceEvent, pushViewItem } = await import(
  '../components/gtm/pushEcommerceEvent.js'
);

describe('mergeDataCloudConfig', () => {
  it('returns a shallow copy unchanged when no env keys and not enabled', () => {
    const app = { url: { host: 'example.com' } };
    const out = mergeDataCloudConfig(app, {});
    assert.notStrictEqual(out, app);
    assert.deepEqual(out, app);
  });

  it('merges tenant and app source from env', () => {
    const out = mergeDataCloudConfig(
      {},
      {
        DATA_CLOUD_TENANT_ID: 'tenant-1',
        DATA_CLOUD_APP_SOURCE_ID: 'app-1',
      }
    );
    assert.equal(out.dataCloudAPI.tenantId, 'tenant-1');
    assert.equal(out.dataCloudAPI.appSourceId, 'app-1');
  });

  it('preserves existing dataCloudAPI keys and overrides from env', () => {
    const out = mergeDataCloudConfig(
      { dataCloudAPI: { tenantId: 'old', extra: 1 } },
      { DATA_CLOUD_APP_SOURCE_ID: 'new-app' }
    );
    assert.equal(out.dataCloudAPI.tenantId, 'old');
    assert.equal(out.dataCloudAPI.appSourceId, 'new-app');
    assert.equal(out.dataCloudAPI.extra, 1);
  });

  it('warns when DATA_CLOUD_ENABLED but ids missing', () => {
    const warnings = [];
    const orig = console.warn;
    console.warn = (...args) => {
      warnings.push(args.join(' '));
    };
    try {
      mergeDataCloudConfig(
        {},
        { DATA_CLOUD_ENABLED: 'true' }
      );
      assert.ok(
        warnings.some((w) => w.includes('DATA_CLOUD_ENABLED')),
        'expected console.warn about missing ids'
      );
    } finally {
      console.warn = orig;
    }
  });
});

describe('validateEnv', () => {
  it('returns ok when DATA_CLOUD_ENABLED is not set', () => {
    const { ok, errors } = validateEnv({});
    assert.equal(ok, true);
    assert.equal(errors.length, 0);
  });

  it('returns ok when enabled and both ids present', () => {
    const { ok, errors } = validateEnv({
      DATA_CLOUD_ENABLED: 'true',
      DATA_CLOUD_TENANT_ID: 't',
      DATA_CLOUD_APP_SOURCE_ID: 'a',
    });
    assert.equal(ok, true);
    assert.equal(errors.length, 0);
  });

  it('returns errors when enabled but tenant missing', () => {
    const { ok, errors } = validateEnv({
      DATA_CLOUD_ENABLED: 'true',
      DATA_CLOUD_APP_SOURCE_ID: 'a',
    });
    assert.equal(ok, false);
    assert.ok(errors.some((e) => e.includes('DATA_CLOUD_TENANT_ID')));
  });

  it('returns errors when enabled but app source missing', () => {
    const { ok, errors } = validateEnv({
      DATA_CLOUD_ENABLED: '1',
      DATA_CLOUD_TENANT_ID: 't',
    });
    assert.equal(ok, false);
    assert.ok(errors.some((e) => e.includes('DATA_CLOUD_APP_SOURCE_ID')));
  });
});

describe('pushEcommerceEvent', () => {
  beforeEach(() => {
    globalThis.window = { dataLayer: [] };
  });

  afterEach(() => {
    delete globalThis.window;
  });

  it('no-ops when window is undefined', () => {
    delete globalThis.window;
    assert.doesNotThrow(() => pushEcommerceEvent('x', {}));
  });

  it('pushes event and ecommerce payload to dataLayer', () => {
    pushEcommerceEvent('add_to_cart', { items: [{ item_id: 'SKU1' }] });
    assert.equal(globalThis.window.dataLayer.length, 1);
    assert.deepEqual(globalThis.window.dataLayer[0], {
      event: 'add_to_cart',
      ecommerce: { items: [{ item_id: 'SKU1' }] },
    });
  });

  it('pushViewItem computes value when price and quantity set', () => {
    pushViewItem(
      { item_id: 'A', price: 10, quantity: 2 },
      'GBP'
    );
    assert.equal(globalThis.window.dataLayer.length, 1);
    assert.equal(globalThis.window.dataLayer[0].event, 'view_item');
    assert.equal(globalThis.window.dataLayer[0].ecommerce.currency, 'GBP');
    assert.equal(globalThis.window.dataLayer[0].ecommerce.value, 20);
  });
});
