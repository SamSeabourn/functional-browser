const baseXMLSerializerFactory = (
  ...args: ConstructorParameters<typeof XMLSerializer>
): InstanceType<typeof XMLSerializer> => new XMLSerializer(...args);

/**
 * Factory function to create an instance of XMLSerializer.
 *
 * The XMLSerializer interface provides the serializeToString() method to construct an XML string
 * representing a DOM tree. This is useful for converting a DOM tree back into a string format.
 *
 * @returns {XMLSerializer} A new instance of XMLSerializer.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLSerializer | MDN XMLSerializer}
 *
 * @example
 * const serializer = createXMLSerializer();
 * const xmlString = serializer.serializeToString(document);
 */
export const createXMLSerializer = baseXMLSerializerFactory;
/**
 * Factory function to create an instance of XMLSerializer.
 *
 * The XMLSerializer interface provides the serializeToString() method to construct an XML string
 * representing a DOM tree. This is useful for converting a DOM tree back into a string format.
 *
 * @returns {XMLSerializer} A new instance of XMLSerializer.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLSerializer | MDN XMLSerializer}
 *
 * @example
 * const serializer = initXMLSerializer();
 * const xmlString = serializer.serializeToString(document);
 */
export const initXMLSerializer = baseXMLSerializerFactory;
/**
 * Factory function to create an instance of XMLSerializer.
 *
 * The XMLSerializer interface provides the serializeToString() method to construct an XML string
 * representing a DOM tree. This is useful for converting a DOM tree back into a string format.
 *
 * @returns {XMLSerializer} A new instance of XMLSerializer.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLSerializer | MDN XMLSerializer}
 *
 * @example
 * const serializer = spawnXMLSerializer();
 * const xmlString = serializer.serializeToString(document);
 */
export const spawnXMLSerializer = baseXMLSerializerFactory;
/**
 * Factory function to create an instance of XMLSerializer.
 *
 * The XMLSerializer interface provides the serializeToString() method to construct an XML string
 * representing a DOM tree. This is useful for converting a DOM tree back into a string format.
 *
 * @returns {XMLSerializer} A new instance of XMLSerializer.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLSerializer | MDN XMLSerializer}
 *
 * @example
 * const serializer = buildXMLSerializer();
 * const xmlString = serializer.serializeToString(document);
 */
export const buildXMLSerializer = baseXMLSerializerFactory;
/**
 * Factory function to create an instance of XMLSerializer.
 *
 * The XMLSerializer interface provides the serializeToString() method to construct an XML string
 * representing a DOM tree. This is useful for converting a DOM tree back into a string format.
 *
 * @returns {XMLSerializer} A new instance of XMLSerializer.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLSerializer | MDN XMLSerializer}
 *
 * @example
 * const serializer = makeXMLSerializer();
 * const xmlString = serializer.serializeToString(document);
 */
export const makeXMLSerializer = baseXMLSerializerFactory;
/**
 * Factory function to create an instance of XMLSerializer.
 *
 * The XMLSerializer interface provides the serializeToString() method to construct an XML string
 * representing a DOM tree. This is useful for converting a DOM tree back into a string format.
 *
 * @returns {XMLSerializer} A new instance of XMLSerializer.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLSerializer | MDN XMLSerializer}
 *
 * @example
 * const serializer = constructXMLSerializer();
 * const xmlString = serializer.serializeToString(document);
 */
export const constructXMLSerializer = baseXMLSerializerFactory;
