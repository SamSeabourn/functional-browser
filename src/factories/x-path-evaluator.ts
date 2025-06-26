const baseXPathEvaluatorFactory = (
  ...args: ConstructorParameters<typeof XPathEvaluator>
): InstanceType<typeof XPathEvaluator> => new XPathEvaluator(...args);

/**
 * Creates a new instance of XPathEvaluator.
 *
 * The XPathEvaluator interface allows the evaluation of XPath expressions
 * against a given context node. This factory function returns a new instance
 * of XPathEvaluator, which can be used to evaluate XPath expressions.
 *
 * @returns {XPathEvaluator} A new instance of XPathEvaluator.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XPathEvaluator | MDN XPathEvaluator}
 *
 * @example
 * const xpathEvaluator = createXPathEvaluator();
 * const result = xpathEvaluator.evaluate(
 *   '//book/title',
 *   document,
 *   null,
 *   XPathResult.ANY_TYPE,
 *   null
 * );
 */
export const createXPathEvaluator = baseXPathEvaluatorFactory;
/**
 * Creates a new instance of XPathEvaluator.
 *
 * The XPathEvaluator interface allows the evaluation of XPath expressions
 * against a given context node. This factory function returns a new instance
 * of XPathEvaluator, which can be used to evaluate XPath expressions.
 *
 * @returns {XPathEvaluator} A new instance of XPathEvaluator.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XPathEvaluator | MDN XPathEvaluator}
 *
 * @example
 * const xpathEvaluator = initXPathEvaluator();
 * const result = xpathEvaluator.evaluate(
 *   '//book/title',
 *   document,
 *   null,
 *   XPathResult.ANY_TYPE,
 *   null
 * );
 */
export const initXPathEvaluator = baseXPathEvaluatorFactory;
/**
 * Creates a new instance of XPathEvaluator.
 *
 * The XPathEvaluator interface allows the evaluation of XPath expressions
 * against a given context node. This factory function returns a new instance
 * of XPathEvaluator, which can be used to evaluate XPath expressions.
 *
 * @returns {XPathEvaluator} A new instance of XPathEvaluator.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XPathEvaluator | MDN XPathEvaluator}
 *
 * @example
 * const xpathEvaluator = spawnXPathEvaluator();
 * const result = xpathEvaluator.evaluate(
 *   '//book/title',
 *   document,
 *   null,
 *   XPathResult.ANY_TYPE,
 *   null
 * );
 */
export const spawnXPathEvaluator = baseXPathEvaluatorFactory;
/**
 * Creates a new instance of XPathEvaluator.
 *
 * The XPathEvaluator interface allows the evaluation of XPath expressions
 * against a given context node. This factory function returns a new instance
 * of XPathEvaluator, which can be used to evaluate XPath expressions.
 *
 * @returns {XPathEvaluator} A new instance of XPathEvaluator.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XPathEvaluator | MDN XPathEvaluator}
 *
 * @example
 * const xpathEvaluator = buildXPathEvaluator();
 * const result = xpathEvaluator.evaluate(
 *   '//book/title',
 *   document,
 *   null,
 *   XPathResult.ANY_TYPE,
 *   null
 * );
 */
export const buildXPathEvaluator = baseXPathEvaluatorFactory;
/**
 * Creates a new instance of XPathEvaluator.
 *
 * The XPathEvaluator interface allows the evaluation of XPath expressions
 * against a given context node. This factory function returns a new instance
 * of XPathEvaluator, which can be used to evaluate XPath expressions.
 *
 * @returns {XPathEvaluator} A new instance of XPathEvaluator.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XPathEvaluator | MDN XPathEvaluator}
 *
 * @example
 * const xpathEvaluator = makeXPathEvaluator();
 * const result = xpathEvaluator.evaluate(
 *   '//book/title',
 *   document,
 *   null,
 *   XPathResult.ANY_TYPE,
 *   null
 * );
 */
export const makeXPathEvaluator = baseXPathEvaluatorFactory;
/**
 * Creates a new instance of XPathEvaluator.
 *
 * The XPathEvaluator interface allows the evaluation of XPath expressions
 * against a given context node. This factory function returns a new instance
 * of XPathEvaluator, which can be used to evaluate XPath expressions.
 *
 * @returns {XPathEvaluator} A new instance of XPathEvaluator.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XPathEvaluator | MDN XPathEvaluator}
 *
 * @example
 * const xpathEvaluator = constructXPathEvaluator();
 * const result = xpathEvaluator.evaluate(
 *   '//book/title',
 *   document,
 *   null,
 *   XPathResult.ANY_TYPE,
 *   null
 * );
 */
export const constructXPathEvaluator = baseXPathEvaluatorFactory;
