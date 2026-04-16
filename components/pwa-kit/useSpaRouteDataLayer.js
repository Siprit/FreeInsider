import { useEffect, useRef } from 'react';

/**
 * On pathname change, push a GTM-friendly page context to dataLayer (SPA-friendly).
 * Extend the pushed object for Einstein / Data Cloud alignment per your runbook.
 *
 * @param {object} options
 * @param {import('react-router-dom').Location | { pathname: string, search?: string, hash?: string }} options.location - React Router location
 * @param {string} [options.pageType] - e.g. 'product', 'category', 'cart'
 * @param {string} [options.locale] - storefront locale if available
 */
export function useSpaRouteDataLayer({ location, pageType, locale }) {
  const lastPath = useRef('');

  useEffect(() => {
    const path = `${location.pathname}${location.search || ''}${location.hash || ''}`;
    if (path === lastPath.current) {
      return;
    }
    lastPath.current = path;

    if (typeof window === 'undefined') {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'spa_page_view',
      page_path: location.pathname,
      page_search: location.search || '',
      page_hash: location.hash || '',
      page_type: pageType || undefined,
      locale: locale || undefined,
    });
  }, [
    location.pathname,
    location.search,
    location.hash,
    pageType,
    locale,
  ]);
}
