const baseWorkerFactory = (
  ...args: ConstructorParameters<typeof Worker>
): InstanceType<typeof Worker> => new Worker(...args);

/**
 * Creates and returns a new instance of a web worker.
 *
 * This factory function is responsible for creating a new `Worker` instance,
 * which runs a script in a background thread, separate from the main execution thread.
 * This can be used to perform computationally expensive tasks without blocking the UI.
 *
 * @returns {Worker} A new `Worker` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Worker | Worker - MDN}
 *
 * @example
 * // Create a new worker using the factory
 * const worker = createWorker();
 *
 * // Use the worker to perform tasks
 * worker.postMessage('Hello, worker!');
 *
 * // Listen for messages from the worker
 * worker.onmessage = function(event) {
 *   console.log('Message from worker:', event.data);
 * };
 */
export const createWorker = baseWorkerFactory;
/**
 * Creates and returns a new instance of a web worker.
 *
 * This factory function is responsible for creating a new `Worker` instance,
 * which runs a script in a background thread, separate from the main execution thread.
 * This can be used to perform computationally expensive tasks without blocking the UI.
 *
 * @returns {Worker} A new `Worker` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Worker | Worker - MDN}
 *
 * @example
 * // Create a new worker using the factory
 * const worker = initWorker();
 *
 * // Use the worker to perform tasks
 * worker.postMessage('Hello, worker!');
 *
 * // Listen for messages from the worker
 * worker.onmessage = function(event) {
 *   console.log('Message from worker:', event.data);
 * };
 */
export const initWorker = baseWorkerFactory;
/**
 * Creates and returns a new instance of a web worker.
 *
 * This factory function is responsible for creating a new `Worker` instance,
 * which runs a script in a background thread, separate from the main execution thread.
 * This can be used to perform computationally expensive tasks without blocking the UI.
 *
 * @returns {Worker} A new `Worker` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Worker | Worker - MDN}
 *
 * @example
 * // Create a new worker using the factory
 * const worker = spawnWorker();
 *
 * // Use the worker to perform tasks
 * worker.postMessage('Hello, worker!');
 *
 * // Listen for messages from the worker
 * worker.onmessage = function(event) {
 *   console.log('Message from worker:', event.data);
 * };
 */
export const spawnWorker = baseWorkerFactory;
/**
 * Creates and returns a new instance of a web worker.
 *
 * This factory function is responsible for creating a new `Worker` instance,
 * which runs a script in a background thread, separate from the main execution thread.
 * This can be used to perform computationally expensive tasks without blocking the UI.
 *
 * @returns {Worker} A new `Worker` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Worker | Worker - MDN}
 *
 * @example
 * // Create a new worker using the factory
 * const worker = buildWorker();
 *
 * // Use the worker to perform tasks
 * worker.postMessage('Hello, worker!');
 *
 * // Listen for messages from the worker
 * worker.onmessage = function(event) {
 *   console.log('Message from worker:', event.data);
 * };
 */
export const buildWorker = baseWorkerFactory;
/**
 * Creates and returns a new instance of a web worker.
 *
 * This factory function is responsible for creating a new `Worker` instance,
 * which runs a script in a background thread, separate from the main execution thread.
 * This can be used to perform computationally expensive tasks without blocking the UI.
 *
 * @returns {Worker} A new `Worker` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Worker | Worker - MDN}
 *
 * @example
 * // Create a new worker using the factory
 * const worker = makeWorker();
 *
 * // Use the worker to perform tasks
 * worker.postMessage('Hello, worker!');
 *
 * // Listen for messages from the worker
 * worker.onmessage = function(event) {
 *   console.log('Message from worker:', event.data);
 * };
 */
export const makeWorker = baseWorkerFactory;
/**
 * Creates and returns a new instance of a web worker.
 *
 * This factory function is responsible for creating a new `Worker` instance,
 * which runs a script in a background thread, separate from the main execution thread.
 * This can be used to perform computationally expensive tasks without blocking the UI.
 *
 * @returns {Worker} A new `Worker` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Worker | Worker - MDN}
 *
 * @example
 * // Create a new worker using the factory
 * const worker = constructWorker();
 *
 * // Use the worker to perform tasks
 * worker.postMessage('Hello, worker!');
 *
 * // Listen for messages from the worker
 * worker.onmessage = function(event) {
 *   console.log('Message from worker:', event.data);
 * };
 */
export const constructWorker = baseWorkerFactory;
