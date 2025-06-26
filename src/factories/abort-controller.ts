const baseAbortControllerFactory = (
  ...args: ConstructorParameters<typeof AbortController>
): InstanceType<typeof AbortController> => new AbortController(...args);

/**
 * Creates and returns a new instance of `AbortController`.
 *
 * The `AbortController` interface represents a controller object that allows you to abort one or more Web requests as and when desired.
 *
 * @returns {AbortController} A new instance of `AbortController`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortController | MDN AbortController Documentation}
 *
 * @example
 * const abortController = createAbortController();
 * const signal = abortController.signal;
 *
 * fetch('https://example.com', { signal })
 *   .then(response => response.json())
 *   .then(data => console.log(data))
 *   .catch(err => {
 *     if (err.name === 'AbortError') {
 *       console.log('Fetch aborted');
 *     } else {
 *       console.error('Fetch error:', err);
 *     }
 *   });
 *
 * // To abort the fetch request
 * abortController.abort();
 */
export const createAbortController = baseAbortControllerFactory;
/**
 * Creates and returns a new instance of `AbortController`.
 *
 * The `AbortController` interface represents a controller object that allows you to abort one or more Web requests as and when desired.
 *
 * @returns {AbortController} A new instance of `AbortController`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortController | MDN AbortController Documentation}
 *
 * @example
 * const abortController = initAbortController();
 * const signal = abortController.signal;
 *
 * fetch('https://example.com', { signal })
 *   .then(response => response.json())
 *   .then(data => console.log(data))
 *   .catch(err => {
 *     if (err.name === 'AbortError') {
 *       console.log('Fetch aborted');
 *     } else {
 *       console.error('Fetch error:', err);
 *     }
 *   });
 *
 * // To abort the fetch request
 * abortController.abort();
 */
export const initAbortController = baseAbortControllerFactory;
/**
 * Creates and returns a new instance of `AbortController`.
 *
 * The `AbortController` interface represents a controller object that allows you to abort one or more Web requests as and when desired.
 *
 * @returns {AbortController} A new instance of `AbortController`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortController | MDN AbortController Documentation}
 *
 * @example
 * const abortController = spawnAbortController();
 * const signal = abortController.signal;
 *
 * fetch('https://example.com', { signal })
 *   .then(response => response.json())
 *   .then(data => console.log(data))
 *   .catch(err => {
 *     if (err.name === 'AbortError') {
 *       console.log('Fetch aborted');
 *     } else {
 *       console.error('Fetch error:', err);
 *     }
 *   });
 *
 * // To abort the fetch request
 * abortController.abort();
 */
export const spawnAbortController = baseAbortControllerFactory;
/**
 * Creates and returns a new instance of `AbortController`.
 *
 * The `AbortController` interface represents a controller object that allows you to abort one or more Web requests as and when desired.
 *
 * @returns {AbortController} A new instance of `AbortController`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortController | MDN AbortController Documentation}
 *
 * @example
 * const abortController = buildAbortController();
 * const signal = abortController.signal;
 *
 * fetch('https://example.com', { signal })
 *   .then(response => response.json())
 *   .then(data => console.log(data))
 *   .catch(err => {
 *     if (err.name === 'AbortError') {
 *       console.log('Fetch aborted');
 *     } else {
 *       console.error('Fetch error:', err);
 *     }
 *   });
 *
 * // To abort the fetch request
 * abortController.abort();
 */
export const buildAbortController = baseAbortControllerFactory;
/**
 * Creates and returns a new instance of `AbortController`.
 *
 * The `AbortController` interface represents a controller object that allows you to abort one or more Web requests as and when desired.
 *
 * @returns {AbortController} A new instance of `AbortController`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortController | MDN AbortController Documentation}
 *
 * @example
 * const abortController = makeAbortController();
 * const signal = abortController.signal;
 *
 * fetch('https://example.com', { signal })
 *   .then(response => response.json())
 *   .then(data => console.log(data))
 *   .catch(err => {
 *     if (err.name === 'AbortError') {
 *       console.log('Fetch aborted');
 *     } else {
 *       console.error('Fetch error:', err);
 *     }
 *   });
 *
 * // To abort the fetch request
 * abortController.abort();
 */
export const makeAbortController = baseAbortControllerFactory;
/**
 * Creates and returns a new instance of `AbortController`.
 *
 * The `AbortController` interface represents a controller object that allows you to abort one or more Web requests as and when desired.
 *
 * @returns {AbortController} A new instance of `AbortController`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortController | MDN AbortController Documentation}
 *
 * @example
 * const abortController = constructAbortController();
 * const signal = abortController.signal;
 *
 * fetch('https://example.com', { signal })
 *   .then(response => response.json())
 *   .then(data => console.log(data))
 *   .catch(err => {
 *     if (err.name === 'AbortError') {
 *       console.log('Fetch aborted');
 *     } else {
 *       console.error('Fetch error:', err);
 *     }
 *   });
 *
 * // To abort the fetch request
 * abortController.abort();
 */
export const constructAbortController = baseAbortControllerFactory;
