const baseXRWebGLLayerFactory = (
  ...args: ConstructorParameters<typeof XRWebGLLayer>
): InstanceType<typeof XRWebGLLayer> => new XRWebGLLayer(...args);

/**
 * Creates and returns a new instance of an XRWebGLLayer.
 *
 * @function
 * @param {XRSession} session - The XR session for which the layer is created.
 * @param {WebGLRenderingContext | WebGL2RenderingContext} context - The WebGL rendering context.
 * @param {XRWebGLLayerInit} [layerInit] - Optional configuration object for the XRWebGLLayer.
 * @returns {XRWebGLLayer} A new XRWebGLLayer instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XRWebGLLayer}
 *
 * @example
 * // Example usage:
 * const xrSession = navigator.xr.requestSession('immersive-vr');
 * const glContext = canvas.getContext('webgl');
 * const xrWebGLLayer = createXRWebGLLayer(xrSession, glContext, { antialias: true });
 *
 * @experimental
 */
export const createXRWebGLLayer = baseXRWebGLLayerFactory;
/**
 * Creates and returns a new instance of an XRWebGLLayer.
 *
 * @function
 * @param {XRSession} session - The XR session for which the layer is created.
 * @param {WebGLRenderingContext | WebGL2RenderingContext} context - The WebGL rendering context.
 * @param {XRWebGLLayerInit} [layerInit] - Optional configuration object for the XRWebGLLayer.
 * @returns {XRWebGLLayer} A new XRWebGLLayer instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XRWebGLLayer}
 *
 * @example
 * // Example usage:
 * const xrSession = navigator.xr.requestSession('immersive-vr');
 * const glContext = canvas.getContext('webgl');
 * const xrWebGLLayer = initXRWebGLLayer(xrSession, glContext, { antialias: true });
 *
 * @experimental
 */
export const initXRWebGLLayer = baseXRWebGLLayerFactory;
/**
 * Creates and returns a new instance of an XRWebGLLayer.
 *
 * @function
 * @param {XRSession} session - The XR session for which the layer is created.
 * @param {WebGLRenderingContext | WebGL2RenderingContext} context - The WebGL rendering context.
 * @param {XRWebGLLayerInit} [layerInit] - Optional configuration object for the XRWebGLLayer.
 * @returns {XRWebGLLayer} A new XRWebGLLayer instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XRWebGLLayer}
 *
 * @example
 * // Example usage:
 * const xrSession = navigator.xr.requestSession('immersive-vr');
 * const glContext = canvas.getContext('webgl');
 * const xrWebGLLayer = spawnXRWebGLLayer(xrSession, glContext, { antialias: true });
 *
 * @experimental
 */
export const spawnXRWebGLLayer = baseXRWebGLLayerFactory;
/**
 * Creates and returns a new instance of an XRWebGLLayer.
 *
 * @function
 * @param {XRSession} session - The XR session for which the layer is created.
 * @param {WebGLRenderingContext | WebGL2RenderingContext} context - The WebGL rendering context.
 * @param {XRWebGLLayerInit} [layerInit] - Optional configuration object for the XRWebGLLayer.
 * @returns {XRWebGLLayer} A new XRWebGLLayer instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XRWebGLLayer}
 *
 * @example
 * // Example usage:
 * const xrSession = navigator.xr.requestSession('immersive-vr');
 * const glContext = canvas.getContext('webgl');
 * const xrWebGLLayer = buildXRWebGLLayer(xrSession, glContext, { antialias: true });
 *
 * @experimental
 */
export const buildXRWebGLLayer = baseXRWebGLLayerFactory;
/**
 * Creates and returns a new instance of an XRWebGLLayer.
 *
 * @function
 * @param {XRSession} session - The XR session for which the layer is created.
 * @param {WebGLRenderingContext | WebGL2RenderingContext} context - The WebGL rendering context.
 * @param {XRWebGLLayerInit} [layerInit] - Optional configuration object for the XRWebGLLayer.
 * @returns {XRWebGLLayer} A new XRWebGLLayer instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XRWebGLLayer}
 *
 * @example
 * // Example usage:
 * const xrSession = navigator.xr.requestSession('immersive-vr');
 * const glContext = canvas.getContext('webgl');
 * const xrWebGLLayer = makeXRWebGLLayer(xrSession, glContext, { antialias: true });
 *
 * @experimental
 */
export const makeXRWebGLLayer = baseXRWebGLLayerFactory;
/**
 * Creates and returns a new instance of an XRWebGLLayer.
 *
 * @function
 * @param {XRSession} session - The XR session for which the layer is created.
 * @param {WebGLRenderingContext | WebGL2RenderingContext} context - The WebGL rendering context.
 * @param {XRWebGLLayerInit} [layerInit] - Optional configuration object for the XRWebGLLayer.
 * @returns {XRWebGLLayer} A new XRWebGLLayer instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XRWebGLLayer}
 *
 * @example
 * // Example usage:
 * const xrSession = navigator.xr.requestSession('immersive-vr');
 * const glContext = canvas.getContext('webgl');
 * const xrWebGLLayer = constructXRWebGLLayer(xrSession, glContext, { antialias: true });
 *
 * @experimental
 */
export const constructXRWebGLLayer = baseXRWebGLLayerFactory;
