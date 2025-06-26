const baseImageFactory = (
  ...args: ConstructorParameters<typeof Image>
): InstanceType<typeof Image> => new Image(...args);

/**
 * Creates a new HTMLImageElement with the specified source URL and optional width and height.
 *
 * @param {string} src - The source URL of the image.
 * @param {number} [width] - The optional width of the image.
 * @param {number} [height] - The optional height of the image.
 * @returns {HTMLImageElement} The created image element.
 *
 * @example
 * const image = createImage('https://example.com/image.jpg', 200, 100);
 * document.body.appendChild(image);
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Image | MDN Image}
 */
export const createImage = baseImageFactory;
/**
 * Creates a new HTMLImageElement with the specified source URL and optional width and height.
 *
 * @param {string} src - The source URL of the image.
 * @param {number} [width] - The optional width of the image.
 * @param {number} [height] - The optional height of the image.
 * @returns {HTMLImageElement} The created image element.
 *
 * @example
 * const image = initImage('https://example.com/image.jpg', 200, 100);
 * document.body.appendChild(image);
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Image | MDN Image}
 */
export const initImage = baseImageFactory;
/**
 * Creates a new HTMLImageElement with the specified source URL and optional width and height.
 *
 * @param {string} src - The source URL of the image.
 * @param {number} [width] - The optional width of the image.
 * @param {number} [height] - The optional height of the image.
 * @returns {HTMLImageElement} The created image element.
 *
 * @example
 * const image = spawnImage('https://example.com/image.jpg', 200, 100);
 * document.body.appendChild(image);
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Image | MDN Image}
 */
export const spawnImage = baseImageFactory;
/**
 * Creates a new HTMLImageElement with the specified source URL and optional width and height.
 *
 * @param {string} src - The source URL of the image.
 * @param {number} [width] - The optional width of the image.
 * @param {number} [height] - The optional height of the image.
 * @returns {HTMLImageElement} The created image element.
 *
 * @example
 * const image = buildImage('https://example.com/image.jpg', 200, 100);
 * document.body.appendChild(image);
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Image | MDN Image}
 */
export const buildImage = baseImageFactory;
/**
 * Creates a new HTMLImageElement with the specified source URL and optional width and height.
 *
 * @param {string} src - The source URL of the image.
 * @param {number} [width] - The optional width of the image.
 * @param {number} [height] - The optional height of the image.
 * @returns {HTMLImageElement} The created image element.
 *
 * @example
 * const image = makeImage('https://example.com/image.jpg', 200, 100);
 * document.body.appendChild(image);
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Image | MDN Image}
 */
export const makeImage = baseImageFactory;
/**
 * Creates a new HTMLImageElement with the specified source URL and optional width and height.
 *
 * @param {string} src - The source URL of the image.
 * @param {number} [width] - The optional width of the image.
 * @param {number} [height] - The optional height of the image.
 * @returns {HTMLImageElement} The created image element.
 *
 * @example
 * const image = constructImage('https://example.com/image.jpg', 200, 100);
 * document.body.appendChild(image);
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Image | MDN Image}
 */
export const constructImage = baseImageFactory;
