const basePerformanceObserverFactory = (
  ...args: ConstructorParameters<typeof PerformanceObserver>
): InstanceType<typeof PerformanceObserver> => new PerformanceObserver(...args);

/**
 * Factory function to create a new instance of `PerformanceObserver`.
 *
 * @returns {PerformanceObserver} A new instance of `PerformanceObserver`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver|PerformanceObserver - MDN}
 *
 * @example
 * const observer = createPerformanceObserver();
 * observer.observe({ entryTypes: ['measure'] });
 */
export const createPerformanceObserver = basePerformanceObserverFactory;
/**
 * Factory function to create a new instance of `PerformanceObserver`.
 *
 * @returns {PerformanceObserver} A new instance of `PerformanceObserver`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver|PerformanceObserver - MDN}
 *
 * @example
 * const observer = initPerformanceObserver();
 * observer.observe({ entryTypes: ['measure'] });
 */
export const initPerformanceObserver = basePerformanceObserverFactory;
/**
 * Factory function to create a new instance of `PerformanceObserver`.
 *
 * @returns {PerformanceObserver} A new instance of `PerformanceObserver`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver|PerformanceObserver - MDN}
 *
 * @example
 * const observer = spawnPerformanceObserver();
 * observer.observe({ entryTypes: ['measure'] });
 */
export const spawnPerformanceObserver = basePerformanceObserverFactory;
/**
 * Factory function to create a new instance of `PerformanceObserver`.
 *
 * @returns {PerformanceObserver} A new instance of `PerformanceObserver`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver|PerformanceObserver - MDN}
 *
 * @example
 * const observer = buildPerformanceObserver();
 * observer.observe({ entryTypes: ['measure'] });
 */
export const buildPerformanceObserver = basePerformanceObserverFactory;
/**
 * Factory function to create a new instance of `PerformanceObserver`.
 *
 * @returns {PerformanceObserver} A new instance of `PerformanceObserver`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver|PerformanceObserver - MDN}
 *
 * @example
 * const observer = makePerformanceObserver();
 * observer.observe({ entryTypes: ['measure'] });
 */
export const makePerformanceObserver = basePerformanceObserverFactory;
/**
 * Factory function to create a new instance of `PerformanceObserver`.
 *
 * @returns {PerformanceObserver} A new instance of `PerformanceObserver`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver|PerformanceObserver - MDN}
 *
 * @example
 * const observer = constructPerformanceObserver();
 * observer.observe({ entryTypes: ['measure'] });
 */
export const constructPerformanceObserver = basePerformanceObserverFactory;
