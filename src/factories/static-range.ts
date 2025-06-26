const baseStaticRangeFactory = (
  ...args: ConstructorParameters<typeof StaticRange>
): InstanceType<typeof StaticRange> => new StaticRange(...args);

/**
 * Creates a new StaticRange object with the specified start and end positions.
 *
 * A StaticRange represents a range of content within a document that does not change
 * even if the document's structure is modified. Unlike a live Range object, a StaticRange
 * does not automatically update its start and end positions when the document changes.
 *
 * @param {Node} startContainer - The Node within which the range starts.
 * @param {number} startOffset - The offset within the startContainer where the range starts.
 * @param {Node} endContainer - The Node within which the range ends.
 * @param {number} endOffset - The offset within the endContainer where the range ends.
 * @returns {StaticRange} A new StaticRange object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StaticRange | MDN StaticRange Documentation}
 *
 * @example
 * const startNode = document.getElementById('start');
 * const endNode = document.getElementById('end');
 * const staticRange = createStaticRange(startNode, 0, endNode, 5);
 */
export const createStaticRange = baseStaticRangeFactory;
/**
 * Creates a new StaticRange object with the specified start and end positions.
 *
 * A StaticRange represents a range of content within a document that does not change
 * even if the document's structure is modified. Unlike a live Range object, a StaticRange
 * does not automatically update its start and end positions when the document changes.
 *
 * @param {Node} startContainer - The Node within which the range starts.
 * @param {number} startOffset - The offset within the startContainer where the range starts.
 * @param {Node} endContainer - The Node within which the range ends.
 * @param {number} endOffset - The offset within the endContainer where the range ends.
 * @returns {StaticRange} A new StaticRange object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StaticRange | MDN StaticRange Documentation}
 *
 * @example
 * const startNode = document.getElementById('start');
 * const endNode = document.getElementById('end');
 * const staticRange = initStaticRange(startNode, 0, endNode, 5);
 */
export const initStaticRange = baseStaticRangeFactory;
/**
 * Creates a new StaticRange object with the specified start and end positions.
 *
 * A StaticRange represents a range of content within a document that does not change
 * even if the document's structure is modified. Unlike a live Range object, a StaticRange
 * does not automatically update its start and end positions when the document changes.
 *
 * @param {Node} startContainer - The Node within which the range starts.
 * @param {number} startOffset - The offset within the startContainer where the range starts.
 * @param {Node} endContainer - The Node within which the range ends.
 * @param {number} endOffset - The offset within the endContainer where the range ends.
 * @returns {StaticRange} A new StaticRange object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StaticRange | MDN StaticRange Documentation}
 *
 * @example
 * const startNode = document.getElementById('start');
 * const endNode = document.getElementById('end');
 * const staticRange = spawnStaticRange(startNode, 0, endNode, 5);
 */
export const spawnStaticRange = baseStaticRangeFactory;
/**
 * Creates a new StaticRange object with the specified start and end positions.
 *
 * A StaticRange represents a range of content within a document that does not change
 * even if the document's structure is modified. Unlike a live Range object, a StaticRange
 * does not automatically update its start and end positions when the document changes.
 *
 * @param {Node} startContainer - The Node within which the range starts.
 * @param {number} startOffset - The offset within the startContainer where the range starts.
 * @param {Node} endContainer - The Node within which the range ends.
 * @param {number} endOffset - The offset within the endContainer where the range ends.
 * @returns {StaticRange} A new StaticRange object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StaticRange | MDN StaticRange Documentation}
 *
 * @example
 * const startNode = document.getElementById('start');
 * const endNode = document.getElementById('end');
 * const staticRange = buildStaticRange(startNode, 0, endNode, 5);
 */
export const buildStaticRange = baseStaticRangeFactory;
/**
 * Creates a new StaticRange object with the specified start and end positions.
 *
 * A StaticRange represents a range of content within a document that does not change
 * even if the document's structure is modified. Unlike a live Range object, a StaticRange
 * does not automatically update its start and end positions when the document changes.
 *
 * @param {Node} startContainer - The Node within which the range starts.
 * @param {number} startOffset - The offset within the startContainer where the range starts.
 * @param {Node} endContainer - The Node within which the range ends.
 * @param {number} endOffset - The offset within the endContainer where the range ends.
 * @returns {StaticRange} A new StaticRange object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StaticRange | MDN StaticRange Documentation}
 *
 * @example
 * const startNode = document.getElementById('start');
 * const endNode = document.getElementById('end');
 * const staticRange = makeStaticRange(startNode, 0, endNode, 5);
 */
export const makeStaticRange = baseStaticRangeFactory;
/**
 * Creates a new StaticRange object with the specified start and end positions.
 *
 * A StaticRange represents a range of content within a document that does not change
 * even if the document's structure is modified. Unlike a live Range object, a StaticRange
 * does not automatically update its start and end positions when the document changes.
 *
 * @param {Node} startContainer - The Node within which the range starts.
 * @param {number} startOffset - The offset within the startContainer where the range starts.
 * @param {Node} endContainer - The Node within which the range ends.
 * @param {number} endOffset - The offset within the endContainer where the range ends.
 * @returns {StaticRange} A new StaticRange object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StaticRange | MDN StaticRange Documentation}
 *
 * @example
 * const startNode = document.getElementById('start');
 * const endNode = document.getElementById('end');
 * const staticRange = constructStaticRange(startNode, 0, endNode, 5);
 */
export const constructStaticRange = baseStaticRangeFactory;
