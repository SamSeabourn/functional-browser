const baseDocumentFactory = (
  ...args: ConstructorParameters<typeof Document>
): InstanceType<typeof Document> => new Document(...args);

/**
 * Creates a base document object.
 *
 * This factory function generates a base document object with predefined properties and methods.
 *
 * @returns {Document} A new Document object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Document | MDN Document}
 *
 * @example
 * const document = createDocument();
 * console.log(document.title); // Outputs the title of the document
 */
export const createDocument = baseDocumentFactory;
/**
 * Creates a base document object.
 *
 * This factory function generates a base document object with predefined properties and methods.
 *
 * @returns {Document} A new Document object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Document | MDN Document}
 *
 * @example
 * const document = initDocument();
 * console.log(document.title); // Outputs the title of the document
 */
export const initDocument = baseDocumentFactory;
/**
 * Creates a base document object.
 *
 * This factory function generates a base document object with predefined properties and methods.
 *
 * @returns {Document} A new Document object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Document | MDN Document}
 *
 * @example
 * const document = spawnDocument();
 * console.log(document.title); // Outputs the title of the document
 */
export const spawnDocument = baseDocumentFactory;
/**
 * Creates a base document object.
 *
 * This factory function generates a base document object with predefined properties and methods.
 *
 * @returns {Document} A new Document object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Document | MDN Document}
 *
 * @example
 * const document = buildDocument();
 * console.log(document.title); // Outputs the title of the document
 */
export const buildDocument = baseDocumentFactory;
/**
 * Creates a base document object.
 *
 * This factory function generates a base document object with predefined properties and methods.
 *
 * @returns {Document} A new Document object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Document | MDN Document}
 *
 * @example
 * const document = makeDocument();
 * console.log(document.title); // Outputs the title of the document
 */
export const makeDocument = baseDocumentFactory;
/**
 * Creates a base document object.
 *
 * This factory function generates a base document object with predefined properties and methods.
 *
 * @returns {Document} A new Document object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Document | MDN Document}
 *
 * @example
 * const document = constructDocument();
 * console.log(document.title); // Outputs the title of the document
 */
export const constructDocument = baseDocumentFactory;
