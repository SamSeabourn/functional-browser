const baseCommentFactory = (
  ...args: ConstructorParameters<typeof Comment>
): InstanceType<typeof Comment> => new Comment(...args);

/**
 * Creates a new Comment node with the specified data.
 *
 * @function
 * @param {string} data - The data for the comment.
 * @returns {Comment} A new Comment node.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Comment | MDN Comment}
 *
 * @example
 * const comment = createComment('This is a comment');
 * console.log(comment.data); // Outputs: 'This is a comment'
 */
export const createComment = baseCommentFactory;
/**
 * Creates a new Comment node with the specified data.
 *
 * @function
 * @param {string} data - The data for the comment.
 * @returns {Comment} A new Comment node.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Comment | MDN Comment}
 *
 * @example
 * const comment = initComment('This is a comment');
 * console.log(comment.data); // Outputs: 'This is a comment'
 */
export const initComment = baseCommentFactory;
/**
 * Creates a new Comment node with the specified data.
 *
 * @function
 * @param {string} data - The data for the comment.
 * @returns {Comment} A new Comment node.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Comment | MDN Comment}
 *
 * @example
 * const comment = spawnComment('This is a comment');
 * console.log(comment.data); // Outputs: 'This is a comment'
 */
export const spawnComment = baseCommentFactory;
/**
 * Creates a new Comment node with the specified data.
 *
 * @function
 * @param {string} data - The data for the comment.
 * @returns {Comment} A new Comment node.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Comment | MDN Comment}
 *
 * @example
 * const comment = buildComment('This is a comment');
 * console.log(comment.data); // Outputs: 'This is a comment'
 */
export const buildComment = baseCommentFactory;
/**
 * Creates a new Comment node with the specified data.
 *
 * @function
 * @param {string} data - The data for the comment.
 * @returns {Comment} A new Comment node.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Comment | MDN Comment}
 *
 * @example
 * const comment = makeComment('This is a comment');
 * console.log(comment.data); // Outputs: 'This is a comment'
 */
export const makeComment = baseCommentFactory;
/**
 * Creates a new Comment node with the specified data.
 *
 * @function
 * @param {string} data - The data for the comment.
 * @returns {Comment} A new Comment node.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Comment | MDN Comment}
 *
 * @example
 * const comment = constructComment('This is a comment');
 * console.log(comment.data); // Outputs: 'This is a comment'
 */
export const constructComment = baseCommentFactory;
