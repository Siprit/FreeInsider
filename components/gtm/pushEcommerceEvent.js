/**
 * Push a structured ecommerce event to window.dataLayer for GTM.
 * Does not send data to Salesforce directly — GTM loads Data Cloud + MCP scripts.
 *
 * @param {string} eventName - e.g. 'add_to_cart', 'view_item', 'begin_checkout'
 * @param {Record<string, unknown>} [payload] - Product line items, currency, value, etc.
 */
export function pushEcommerceEvent(eventName, payload = {}) {
  if (typeof window === 'undefined') {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ecommerce: payload,
  });
}

/**
 * @param {object} item
 * @param {string} item.item_id
 * @param {string} [item.item_name]
 * @param {string} [item.item_category]
 * @param {number} [item.price]
 * @param {number} [item.quantity]
 */
export function pushViewItem(item, currency = 'USD') {
  pushEcommerceEvent('view_item', {
    currency,
    value: item.price != null && item.quantity != null ? item.price * item.quantity : item.price,
    items: [item],
  });
}
