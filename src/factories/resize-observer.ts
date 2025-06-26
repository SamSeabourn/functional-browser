const baseResizeObserverFactory = (
  ...args: ConstructorParameters<typeof ResizeObserver>
): InstanceType<typeof ResizeObserver> => new ResizeObserver(...args);

/**
 * Factory function to create a new instance of ResizeObserver.
 *
 * @returns {ResizeObserver} A new instance of ResizeObserver.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver | MDN ResizeObserver}
 *
 * @example
 * // Create a new ResizeObserver instance
 * const resizeObserver = createResizeObserver();
 *
 * // Define a callback function to handle resize events
 * const callback = (entries) => {
 *   for (let entry of entries) {
 *     console.log('Element:', entry.target);
 *     console.log('Content Rect:', entry.contentRect);
 *   }
 * };
 *
 * // Observe a specific element
 * const element = document.querySelector('#myElement');
 * resizeObserver.observe(element);
 */
export const createResizeObserver = baseResizeObserverFactory;
/**
 * Factory function to create a new instance of ResizeObserver.
 *
 * @returns {ResizeObserver} A new instance of ResizeObserver.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver | MDN ResizeObserver}
 *
 * @example
 * // Create a new ResizeObserver instance
 * const resizeObserver = initResizeObserver();
 *
 * // Define a callback function to handle resize events
 * const callback = (entries) => {
 *   for (let entry of entries) {
 *     console.log('Element:', entry.target);
 *     console.log('Content Rect:', entry.contentRect);
 *   }
 * };
 *
 * // Observe a specific element
 * const element = document.querySelector('#myElement');
 * resizeObserver.observe(element);
 */
export const initResizeObserver = baseResizeObserverFactory;
/**
 * Factory function to create a new instance of ResizeObserver.
 *
 * @returns {ResizeObserver} A new instance of ResizeObserver.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver | MDN ResizeObserver}
 *
 * @example
 * // Create a new ResizeObserver instance
 * const resizeObserver = spawnResizeObserver();
 *
 * // Define a callback function to handle resize events
 * const callback = (entries) => {
 *   for (let entry of entries) {
 *     console.log('Element:', entry.target);
 *     console.log('Content Rect:', entry.contentRect);
 *   }
 * };
 *
 * // Observe a specific element
 * const element = document.querySelector('#myElement');
 * resizeObserver.observe(element);
 */
export const spawnResizeObserver = baseResizeObserverFactory;
/**
 * Factory function to create a new instance of ResizeObserver.
 *
 * @returns {ResizeObserver} A new instance of ResizeObserver.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver | MDN ResizeObserver}
 *
 * @example
 * // Create a new ResizeObserver instance
 * const resizeObserver = buildResizeObserver();
 *
 * // Define a callback function to handle resize events
 * const callback = (entries) => {
 *   for (let entry of entries) {
 *     console.log('Element:', entry.target);
 *     console.log('Content Rect:', entry.contentRect);
 *   }
 * };
 *
 * // Observe a specific element
 * const element = document.querySelector('#myElement');
 * resizeObserver.observe(element);
 */
export const buildResizeObserver = baseResizeObserverFactory;
/**
 * Factory function to create a new instance of ResizeObserver.
 *
 * @returns {ResizeObserver} A new instance of ResizeObserver.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver | MDN ResizeObserver}
 *
 * @example
 * // Create a new ResizeObserver instance
 * const resizeObserver = makeResizeObserver();
 *
 * // Define a callback function to handle resize events
 * const callback = (entries) => {
 *   for (let entry of entries) {
 *     console.log('Element:', entry.target);
 *     console.log('Content Rect:', entry.contentRect);
 *   }
 * };
 *
 * // Observe a specific element
 * const element = document.querySelector('#myElement');
 * resizeObserver.observe(element);
 */
export const makeResizeObserver = baseResizeObserverFactory;
/**
 * Factory function to create a new instance of ResizeObserver.
 *
 * @returns {ResizeObserver} A new instance of ResizeObserver.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver | MDN ResizeObserver}
 *
 * @example
 * // Create a new ResizeObserver instance
 * const resizeObserver = constructResizeObserver();
 *
 * // Define a callback function to handle resize events
 * const callback = (entries) => {
 *   for (let entry of entries) {
 *     console.log('Element:', entry.target);
 *     console.log('Content Rect:', entry.contentRect);
 *   }
 * };
 *
 * // Observe a specific element
 * const element = document.querySelector('#myElement');
 * resizeObserver.observe(element);
 */
export const constructResizeObserver = baseResizeObserverFactory;
