const baseRangeFactory = (
  ...args: ConstructorParameters<typeof Range>
): InstanceType<typeof Range> => new Range(...args);

/**
 * Creates a new Range object with the specified start and end positions.
 *
 * @function
 * @name createRange
 * @param {Node} startNode - The node where the range starts.
 * @param {number} startOffset - The offset within the start node where the range starts.
 * @param {Node} endNode - The node where the range ends.
 * @param {number} endOffset - The offset within the end node where the range ends.
 * @returns {Range} A new Range object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Range | MDN Range Documentation}
 *
 * @example
 * const startNode = document.getElementById('start');
 * const endNode = document.getElementById('end');
 * const range = baseRangeFactory(startNode, 0, endNode, 1);
 * console.log(range);
 */
export const createRange = baseRangeFactory;
/**
 * Creates a new Range object with the specified start and end positions.
 *
 * @function
 * @name initRange
 * @param {Node} startNode - The node where the range starts.
 * @param {number} startOffset - The offset within the start node where the range starts.
 * @param {Node} endNode - The node where the range ends.
 * @param {number} endOffset - The offset within the end node where the range ends.
 * @returns {Range} A new Range object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Range | MDN Range Documentation}
 *
 * @example
 * const startNode = document.getElementById('start');
 * const endNode = document.getElementById('end');
 * const range = baseRangeFactory(startNode, 0, endNode, 1);
 * console.log(range);
 */
export const initRange = baseRangeFactory;
/**
 * Creates a new Range object with the specified start and end positions.
 *
 * @function
 * @name spawnRange
 * @param {Node} startNode - The node where the range starts.
 * @param {number} startOffset - The offset within the start node where the range starts.
 * @param {Node} endNode - The node where the range ends.
 * @param {number} endOffset - The offset within the end node where the range ends.
 * @returns {Range} A new Range object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Range | MDN Range Documentation}
 *
 * @example
 * const startNode = document.getElementById('start');
 * const endNode = document.getElementById('end');
 * const range = baseRangeFactory(startNode, 0, endNode, 1);
 * console.log(range);
 */
export const spawnRange = baseRangeFactory;
/**
 * Creates a new Range object with the specified start and end positions.
 *
 * @function
 * @name buildRange
 * @param {Node} startNode - The node where the range starts.
 * @param {number} startOffset - The offset within the start node where the range starts.
 * @param {Node} endNode - The node where the range ends.
 * @param {number} endOffset - The offset within the end node where the range ends.
 * @returns {Range} A new Range object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Range | MDN Range Documentation}
 *
 * @example
 * const startNode = document.getElementById('start');
 * const endNode = document.getElementById('end');
 * const range = baseRangeFactory(startNode, 0, endNode, 1);
 * console.log(range);
 */
export const buildRange = baseRangeFactory;
/**
 * Creates a new Range object with the specified start and end positions.
 *
 * @function
 * @name makeRange
 * @param {Node} startNode - The node where the range starts.
 * @param {number} startOffset - The offset within the start node where the range starts.
 * @param {Node} endNode - The node where the range ends.
 * @param {number} endOffset - The offset within the end node where the range ends.
 * @returns {Range} A new Range object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Range | MDN Range Documentation}
 *
 * @example
 * const startNode = document.getElementById('start');
 * const endNode = document.getElementById('end');
 * const range = baseRangeFactory(startNode, 0, endNode, 1);
 * console.log(range);
 */
export const makeRange = baseRangeFactory;
/**
 * Creates a new Range object with the specified start and end positions.
 *
 * @function
 * @name constructRange
 * @param {Node} startNode - The node where the range starts.
 * @param {number} startOffset - The offset within the start node where the range starts.
 * @param {Node} endNode - The node where the range ends.
 * @param {number} endOffset - The offset within the end node where the range ends.
 * @returns {Range} A new Range object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Range | MDN Range Documentation}
 *
 * @example
 * const startNode = document.getElementById('start');
 * const endNode = document.getElementById('end');
 * const range = baseRangeFactory(startNode, 0, endNode, 1);
 * console.log(range);
 */
export const constructRange = baseRangeFactory;
