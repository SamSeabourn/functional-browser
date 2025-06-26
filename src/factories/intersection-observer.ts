const baseIntersectionObserverFactory = (
  ...args: ConstructorParameters<typeof IntersectionObserver>
): InstanceType<typeof IntersectionObserver> => new IntersectionObserver(...args);

/**
 * Creates an IntersectionObserver instance with the provided options.
 *
 * @param {IntersectionObserverCallback} callback - The function that is called whenever the target element intersects with the root.
 * @param {IntersectionObserverInit} [options] - Optional configuration options for the IntersectionObserver.
 * @param {Element | Document | null} [options.root] - The element that is used as the viewport for checking visibility of the target. Defaults to the browser viewport if not specified or if null.
 * @param {string} [options.rootMargin] - A string which specifies a set of offsets to add to the root's bounding box when calculating intersections, effectively shrinking or growing the root for calculation purposes. Defaults to "0px".
 * @param {number | number[]} [options.threshold] - Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. Defaults to 0.
 * @returns {IntersectionObserver} The created IntersectionObserver instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver | IntersectionObserver - MDN}
 *
 * @example
 * const observer = createIntersectionObserver((entries, observer) => {
 *   entries.forEach(entry => {
 *     if (entry.isIntersecting) {
 *       console.log('Element is in view:', entry.target);
 *     }
 *   });
 * }, {
 *   root: null,
 *   rootMargin: '0px',
 *   threshold: 0.5
 * });
 *
 * const targetElement = document.querySelector('#target');
 * if (targetElement) {
 *   observer.observe(targetElement);
 * }
 */
export const createIntersectionObserver = baseIntersectionObserverFactory;
/**
 * Creates an IntersectionObserver instance with the provided options.
 *
 * @param {IntersectionObserverCallback} callback - The function that is called whenever the target element intersects with the root.
 * @param {IntersectionObserverInit} [options] - Optional configuration options for the IntersectionObserver.
 * @param {Element | Document | null} [options.root] - The element that is used as the viewport for checking visibility of the target. Defaults to the browser viewport if not specified or if null.
 * @param {string} [options.rootMargin] - A string which specifies a set of offsets to add to the root's bounding box when calculating intersections, effectively shrinking or growing the root for calculation purposes. Defaults to "0px".
 * @param {number | number[]} [options.threshold] - Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. Defaults to 0.
 * @returns {IntersectionObserver} The created IntersectionObserver instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver | IntersectionObserver - MDN}
 *
 * @example
 * const observer = initIntersectionObserver((entries, observer) => {
 *   entries.forEach(entry => {
 *     if (entry.isIntersecting) {
 *       console.log('Element is in view:', entry.target);
 *     }
 *   });
 * }, {
 *   root: null,
 *   rootMargin: '0px',
 *   threshold: 0.5
 * });
 *
 * const targetElement = document.querySelector('#target');
 * if (targetElement) {
 *   observer.observe(targetElement);
 * }
 */
export const initIntersectionObserver = baseIntersectionObserverFactory;
/**
 * Creates an IntersectionObserver instance with the provided options.
 *
 * @param {IntersectionObserverCallback} callback - The function that is called whenever the target element intersects with the root.
 * @param {IntersectionObserverInit} [options] - Optional configuration options for the IntersectionObserver.
 * @param {Element | Document | null} [options.root] - The element that is used as the viewport for checking visibility of the target. Defaults to the browser viewport if not specified or if null.
 * @param {string} [options.rootMargin] - A string which specifies a set of offsets to add to the root's bounding box when calculating intersections, effectively shrinking or growing the root for calculation purposes. Defaults to "0px".
 * @param {number | number[]} [options.threshold] - Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. Defaults to 0.
 * @returns {IntersectionObserver} The created IntersectionObserver instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver | IntersectionObserver - MDN}
 *
 * @example
 * const observer = spawnIntersectionObserver((entries, observer) => {
 *   entries.forEach(entry => {
 *     if (entry.isIntersecting) {
 *       console.log('Element is in view:', entry.target);
 *     }
 *   });
 * }, {
 *   root: null,
 *   rootMargin: '0px',
 *   threshold: 0.5
 * });
 *
 * const targetElement = document.querySelector('#target');
 * if (targetElement) {
 *   observer.observe(targetElement);
 * }
 */
export const spawnIntersectionObserver = baseIntersectionObserverFactory;
/**
 * Creates an IntersectionObserver instance with the provided options.
 *
 * @param {IntersectionObserverCallback} callback - The function that is called whenever the target element intersects with the root.
 * @param {IntersectionObserverInit} [options] - Optional configuration options for the IntersectionObserver.
 * @param {Element | Document | null} [options.root] - The element that is used as the viewport for checking visibility of the target. Defaults to the browser viewport if not specified or if null.
 * @param {string} [options.rootMargin] - A string which specifies a set of offsets to add to the root's bounding box when calculating intersections, effectively shrinking or growing the root for calculation purposes. Defaults to "0px".
 * @param {number | number[]} [options.threshold] - Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. Defaults to 0.
 * @returns {IntersectionObserver} The created IntersectionObserver instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver | IntersectionObserver - MDN}
 *
 * @example
 * const observer = buildIntersectionObserver((entries, observer) => {
 *   entries.forEach(entry => {
 *     if (entry.isIntersecting) {
 *       console.log('Element is in view:', entry.target);
 *     }
 *   });
 * }, {
 *   root: null,
 *   rootMargin: '0px',
 *   threshold: 0.5
 * });
 *
 * const targetElement = document.querySelector('#target');
 * if (targetElement) {
 *   observer.observe(targetElement);
 * }
 */
export const buildIntersectionObserver = baseIntersectionObserverFactory;
/**
 * Creates an IntersectionObserver instance with the provided options.
 *
 * @param {IntersectionObserverCallback} callback - The function that is called whenever the target element intersects with the root.
 * @param {IntersectionObserverInit} [options] - Optional configuration options for the IntersectionObserver.
 * @param {Element | Document | null} [options.root] - The element that is used as the viewport for checking visibility of the target. Defaults to the browser viewport if not specified or if null.
 * @param {string} [options.rootMargin] - A string which specifies a set of offsets to add to the root's bounding box when calculating intersections, effectively shrinking or growing the root for calculation purposes. Defaults to "0px".
 * @param {number | number[]} [options.threshold] - Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. Defaults to 0.
 * @returns {IntersectionObserver} The created IntersectionObserver instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver | IntersectionObserver - MDN}
 *
 * @example
 * const observer = makeIntersectionObserver((entries, observer) => {
 *   entries.forEach(entry => {
 *     if (entry.isIntersecting) {
 *       console.log('Element is in view:', entry.target);
 *     }
 *   });
 * }, {
 *   root: null,
 *   rootMargin: '0px',
 *   threshold: 0.5
 * });
 *
 * const targetElement = document.querySelector('#target');
 * if (targetElement) {
 *   observer.observe(targetElement);
 * }
 */
export const makeIntersectionObserver = baseIntersectionObserverFactory;
/**
 * Creates an IntersectionObserver instance with the provided options.
 *
 * @param {IntersectionObserverCallback} callback - The function that is called whenever the target element intersects with the root.
 * @param {IntersectionObserverInit} [options] - Optional configuration options for the IntersectionObserver.
 * @param {Element | Document | null} [options.root] - The element that is used as the viewport for checking visibility of the target. Defaults to the browser viewport if not specified or if null.
 * @param {string} [options.rootMargin] - A string which specifies a set of offsets to add to the root's bounding box when calculating intersections, effectively shrinking or growing the root for calculation purposes. Defaults to "0px".
 * @param {number | number[]} [options.threshold] - Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. Defaults to 0.
 * @returns {IntersectionObserver} The created IntersectionObserver instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver | IntersectionObserver - MDN}
 *
 * @example
 * const observer = constructIntersectionObserver((entries, observer) => {
 *   entries.forEach(entry => {
 *     if (entry.isIntersecting) {
 *       console.log('Element is in view:', entry.target);
 *     }
 *   });
 * }, {
 *   root: null,
 *   rootMargin: '0px',
 *   threshold: 0.5
 * });
 *
 * const targetElement = document.querySelector('#target');
 * if (targetElement) {
 *   observer.observe(targetElement);
 * }
 */
export const constructIntersectionObserver = baseIntersectionObserverFactory;
