const baseOffscreenCanvasFactory = (
  ...args: ConstructorParameters<typeof OffscreenCanvas>
): InstanceType<typeof OffscreenCanvas> => new OffscreenCanvas(...args);

/**
 * Creates and returns a new OffscreenCanvas instance with specified width and height.
 *
 * @function createOffscreenCanvas
 * @param {number} width - The width of the OffscreenCanvas.
 * @param {number} height - The height of the OffscreenCanvas.
 * @returns {OffscreenCanvas} A new OffscreenCanvas object.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas | MDN OffscreenCanvas}
 * @experimental
 *
 * @example
 * const offscreenCanvas = baseOffscreenCanvasFactory(800, 600);
 * console.log(offscreenCanvas.width); // 800
 * console.log(offscreenCanvas.height); // 600
 */
export const createOffscreenCanvas = baseOffscreenCanvasFactory;
/**
 * Creates and returns a new OffscreenCanvas instance with specified width and height.
 *
 * @function initOffscreenCanvas
 * @param {number} width - The width of the OffscreenCanvas.
 * @param {number} height - The height of the OffscreenCanvas.
 * @returns {OffscreenCanvas} A new OffscreenCanvas object.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas | MDN OffscreenCanvas}
 * @experimental
 *
 * @example
 * const offscreenCanvas = baseOffscreenCanvasFactory(800, 600);
 * console.log(offscreenCanvas.width); // 800
 * console.log(offscreenCanvas.height); // 600
 */
export const initOffscreenCanvas = baseOffscreenCanvasFactory;
/**
 * Creates and returns a new OffscreenCanvas instance with specified width and height.
 *
 * @function spawnOffscreenCanvas
 * @param {number} width - The width of the OffscreenCanvas.
 * @param {number} height - The height of the OffscreenCanvas.
 * @returns {OffscreenCanvas} A new OffscreenCanvas object.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas | MDN OffscreenCanvas}
 * @experimental
 *
 * @example
 * const offscreenCanvas = baseOffscreenCanvasFactory(800, 600);
 * console.log(offscreenCanvas.width); // 800
 * console.log(offscreenCanvas.height); // 600
 */
export const spawnOffscreenCanvas = baseOffscreenCanvasFactory;
/**
 * Creates and returns a new OffscreenCanvas instance with specified width and height.
 *
 * @function buildOffscreenCanvas
 * @param {number} width - The width of the OffscreenCanvas.
 * @param {number} height - The height of the OffscreenCanvas.
 * @returns {OffscreenCanvas} A new OffscreenCanvas object.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas | MDN OffscreenCanvas}
 * @experimental
 *
 * @example
 * const offscreenCanvas = baseOffscreenCanvasFactory(800, 600);
 * console.log(offscreenCanvas.width); // 800
 * console.log(offscreenCanvas.height); // 600
 */
export const buildOffscreenCanvas = baseOffscreenCanvasFactory;
/**
 * Creates and returns a new OffscreenCanvas instance with specified width and height.
 *
 * @function makeOffscreenCanvas
 * @param {number} width - The width of the OffscreenCanvas.
 * @param {number} height - The height of the OffscreenCanvas.
 * @returns {OffscreenCanvas} A new OffscreenCanvas object.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas | MDN OffscreenCanvas}
 * @experimental
 *
 * @example
 * const offscreenCanvas = baseOffscreenCanvasFactory(800, 600);
 * console.log(offscreenCanvas.width); // 800
 * console.log(offscreenCanvas.height); // 600
 */
export const makeOffscreenCanvas = baseOffscreenCanvasFactory;
/**
 * Creates and returns a new OffscreenCanvas instance with specified width and height.
 *
 * @function constructOffscreenCanvas
 * @param {number} width - The width of the OffscreenCanvas.
 * @param {number} height - The height of the OffscreenCanvas.
 * @returns {OffscreenCanvas} A new OffscreenCanvas object.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas | MDN OffscreenCanvas}
 * @experimental
 *
 * @example
 * const offscreenCanvas = baseOffscreenCanvasFactory(800, 600);
 * console.log(offscreenCanvas.width); // 800
 * console.log(offscreenCanvas.height); // 600
 */
export const constructOffscreenCanvas = baseOffscreenCanvasFactory;
