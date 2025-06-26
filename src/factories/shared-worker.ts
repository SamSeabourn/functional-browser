const baseSharedWorkerFactory = (
  ...args: ConstructorParameters<typeof SharedWorker>
): InstanceType<typeof SharedWorker> => new SharedWorker(...args);

/**
 * Creates a new instance of a SharedWorker with the given script URL and optional name.
 *
 * @function
 * @param {string} scriptURL - The URL of the script to run in the SharedWorker.
 * @param {string} [name] - An optional name to identify the SharedWorker.
 * @returns {SharedWorker} A new instance of SharedWorker.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker | MDN SharedWorker}
 *
 * @example
 * const worker = createSharedWorker('worker.js', 'myWorker');
 * worker.port.start();
 */
export const createSharedWorker = baseSharedWorkerFactory;
/**
 * Creates a new instance of a SharedWorker with the given script URL and optional name.
 *
 * @function
 * @param {string} scriptURL - The URL of the script to run in the SharedWorker.
 * @param {string} [name] - An optional name to identify the SharedWorker.
 * @returns {SharedWorker} A new instance of SharedWorker.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker | MDN SharedWorker}
 *
 * @example
 * const worker = initSharedWorker('worker.js', 'myWorker');
 * worker.port.start();
 */
export const initSharedWorker = baseSharedWorkerFactory;
/**
 * Creates a new instance of a SharedWorker with the given script URL and optional name.
 *
 * @function
 * @param {string} scriptURL - The URL of the script to run in the SharedWorker.
 * @param {string} [name] - An optional name to identify the SharedWorker.
 * @returns {SharedWorker} A new instance of SharedWorker.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker | MDN SharedWorker}
 *
 * @example
 * const worker = spawnSharedWorker('worker.js', 'myWorker');
 * worker.port.start();
 */
export const spawnSharedWorker = baseSharedWorkerFactory;
/**
 * Creates a new instance of a SharedWorker with the given script URL and optional name.
 *
 * @function
 * @param {string} scriptURL - The URL of the script to run in the SharedWorker.
 * @param {string} [name] - An optional name to identify the SharedWorker.
 * @returns {SharedWorker} A new instance of SharedWorker.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker | MDN SharedWorker}
 *
 * @example
 * const worker = buildSharedWorker('worker.js', 'myWorker');
 * worker.port.start();
 */
export const buildSharedWorker = baseSharedWorkerFactory;
/**
 * Creates a new instance of a SharedWorker with the given script URL and optional name.
 *
 * @function
 * @param {string} scriptURL - The URL of the script to run in the SharedWorker.
 * @param {string} [name] - An optional name to identify the SharedWorker.
 * @returns {SharedWorker} A new instance of SharedWorker.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker | MDN SharedWorker}
 *
 * @example
 * const worker = makeSharedWorker('worker.js', 'myWorker');
 * worker.port.start();
 */
export const makeSharedWorker = baseSharedWorkerFactory;
/**
 * Creates a new instance of a SharedWorker with the given script URL and optional name.
 *
 * @function
 * @param {string} scriptURL - The URL of the script to run in the SharedWorker.
 * @param {string} [name] - An optional name to identify the SharedWorker.
 * @returns {SharedWorker} A new instance of SharedWorker.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker | MDN SharedWorker}
 *
 * @example
 * const worker = constructSharedWorker('worker.js', 'myWorker');
 * worker.port.start();
 */
export const constructSharedWorker = baseSharedWorkerFactory;
