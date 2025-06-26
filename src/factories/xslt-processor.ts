const baseXSLTProcessorFactory = (
  ...args: ConstructorParameters<typeof XSLTProcessor>
): InstanceType<typeof XSLTProcessor> => new XSLTProcessor(...args);

/**
 * Creates and returns a new instance of an XSLTProcessor.
 *
 * @returns {XSLTProcessor} A new instance of XSLTProcessor.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XSLTProcessor | MDN XSLTProcessor}
 *
 * @example
 * const xsltProcessor = createXSLTProcessor();
 * // Use the xsltProcessor instance to transform XML documents
 */
export const createXSLTProcessor = baseXSLTProcessorFactory;
/**
 * Creates and returns a new instance of an XSLTProcessor.
 *
 * @returns {XSLTProcessor} A new instance of XSLTProcessor.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XSLTProcessor | MDN XSLTProcessor}
 *
 * @example
 * const xsltProcessor = initXSLTProcessor();
 * // Use the xsltProcessor instance to transform XML documents
 */
export const initXSLTProcessor = baseXSLTProcessorFactory;
/**
 * Creates and returns a new instance of an XSLTProcessor.
 *
 * @returns {XSLTProcessor} A new instance of XSLTProcessor.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XSLTProcessor | MDN XSLTProcessor}
 *
 * @example
 * const xsltProcessor = spawnXSLTProcessor();
 * // Use the xsltProcessor instance to transform XML documents
 */
export const spawnXSLTProcessor = baseXSLTProcessorFactory;
/**
 * Creates and returns a new instance of an XSLTProcessor.
 *
 * @returns {XSLTProcessor} A new instance of XSLTProcessor.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XSLTProcessor | MDN XSLTProcessor}
 *
 * @example
 * const xsltProcessor = buildXSLTProcessor();
 * // Use the xsltProcessor instance to transform XML documents
 */
export const buildXSLTProcessor = baseXSLTProcessorFactory;
/**
 * Creates and returns a new instance of an XSLTProcessor.
 *
 * @returns {XSLTProcessor} A new instance of XSLTProcessor.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XSLTProcessor | MDN XSLTProcessor}
 *
 * @example
 * const xsltProcessor = makeXSLTProcessor();
 * // Use the xsltProcessor instance to transform XML documents
 */
export const makeXSLTProcessor = baseXSLTProcessorFactory;
/**
 * Creates and returns a new instance of an XSLTProcessor.
 *
 * @returns {XSLTProcessor} A new instance of XSLTProcessor.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XSLTProcessor | MDN XSLTProcessor}
 *
 * @example
 * const xsltProcessor = constructXSLTProcessor();
 * // Use the xsltProcessor instance to transform XML documents
 */
export const constructXSLTProcessor = baseXSLTProcessorFactory;
