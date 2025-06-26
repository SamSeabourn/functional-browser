const baseDOMParserFactory = (
  ...args: ConstructorParameters<typeof DOMParser>
): InstanceType<typeof DOMParser> => new DOMParser(...args);

/**
 * Factory function to create a new instance of DOMParser.
 *
 * The DOMParser interface provides the ability to parse XML or HTML source code
 * from a string into a DOM Document.
 *
 * @returns {DOMParser} A new instance of DOMParser.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMParser | MDN: DOMParser}
 *
 * @example
 * const parser = createDOMParser();
 * const doc = parser.parseFromString('<!DOCTYPE html><title>Example</title>', 'text/html');
 * console.log(doc.title); // Output: "Example"
 */
export const createDOMParser = baseDOMParserFactory;
/**
 * Factory function to create a new instance of DOMParser.
 *
 * The DOMParser interface provides the ability to parse XML or HTML source code
 * from a string into a DOM Document.
 *
 * @returns {DOMParser} A new instance of DOMParser.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMParser | MDN: DOMParser}
 *
 * @example
 * const parser = initDOMParser();
 * const doc = parser.parseFromString('<!DOCTYPE html><title>Example</title>', 'text/html');
 * console.log(doc.title); // Output: "Example"
 */
export const initDOMParser = baseDOMParserFactory;
/**
 * Factory function to create a new instance of DOMParser.
 *
 * The DOMParser interface provides the ability to parse XML or HTML source code
 * from a string into a DOM Document.
 *
 * @returns {DOMParser} A new instance of DOMParser.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMParser | MDN: DOMParser}
 *
 * @example
 * const parser = spawnDOMParser();
 * const doc = parser.parseFromString('<!DOCTYPE html><title>Example</title>', 'text/html');
 * console.log(doc.title); // Output: "Example"
 */
export const spawnDOMParser = baseDOMParserFactory;
/**
 * Factory function to create a new instance of DOMParser.
 *
 * The DOMParser interface provides the ability to parse XML or HTML source code
 * from a string into a DOM Document.
 *
 * @returns {DOMParser} A new instance of DOMParser.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMParser | MDN: DOMParser}
 *
 * @example
 * const parser = buildDOMParser();
 * const doc = parser.parseFromString('<!DOCTYPE html><title>Example</title>', 'text/html');
 * console.log(doc.title); // Output: "Example"
 */
export const buildDOMParser = baseDOMParserFactory;
/**
 * Factory function to create a new instance of DOMParser.
 *
 * The DOMParser interface provides the ability to parse XML or HTML source code
 * from a string into a DOM Document.
 *
 * @returns {DOMParser} A new instance of DOMParser.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMParser | MDN: DOMParser}
 *
 * @example
 * const parser = makeDOMParser();
 * const doc = parser.parseFromString('<!DOCTYPE html><title>Example</title>', 'text/html');
 * console.log(doc.title); // Output: "Example"
 */
export const makeDOMParser = baseDOMParserFactory;
/**
 * Factory function to create a new instance of DOMParser.
 *
 * The DOMParser interface provides the ability to parse XML or HTML source code
 * from a string into a DOM Document.
 *
 * @returns {DOMParser} A new instance of DOMParser.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMParser | MDN: DOMParser}
 *
 * @example
 * const parser = constructDOMParser();
 * const doc = parser.parseFromString('<!DOCTYPE html><title>Example</title>', 'text/html');
 * console.log(doc.title); // Output: "Example"
 */
export const constructDOMParser = baseDOMParserFactory;
