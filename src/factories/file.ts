const baseFileFactory = (...args: ConstructorParameters<typeof File>): InstanceType<typeof File> =>
  new File(...args);

/**
 * Creates a new File object with the specified name, content, and options.
 *
 * @param {string} name - The name of the file.
 * @param {BlobPart[]} content - The content of the file.
 * @param {FilePropertyBag} [options] - An optional object containing file properties.
 * @returns {File} A new File object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/File | File - MDN}
 *
 * @example
 * const file = createFile('example.txt', ['Hello, world!'], { type: 'text/plain' });
 * console.log(file.name); // 'example.txt'
 * console.log(file.type); // 'text/plain'
 */
export const createFile = baseFileFactory;
/**
 * Creates a new File object with the specified name, content, and options.
 *
 * @param {string} name - The name of the file.
 * @param {BlobPart[]} content - The content of the file.
 * @param {FilePropertyBag} [options] - An optional object containing file properties.
 * @returns {File} A new File object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/File | File - MDN}
 *
 * @example
 * const file = initFile('example.txt', ['Hello, world!'], { type: 'text/plain' });
 * console.log(file.name); // 'example.txt'
 * console.log(file.type); // 'text/plain'
 */
export const initFile = baseFileFactory;
/**
 * Creates a new File object with the specified name, content, and options.
 *
 * @param {string} name - The name of the file.
 * @param {BlobPart[]} content - The content of the file.
 * @param {FilePropertyBag} [options] - An optional object containing file properties.
 * @returns {File} A new File object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/File | File - MDN}
 *
 * @example
 * const file = spawnFile('example.txt', ['Hello, world!'], { type: 'text/plain' });
 * console.log(file.name); // 'example.txt'
 * console.log(file.type); // 'text/plain'
 */
export const spawnFile = baseFileFactory;
/**
 * Creates a new File object with the specified name, content, and options.
 *
 * @param {string} name - The name of the file.
 * @param {BlobPart[]} content - The content of the file.
 * @param {FilePropertyBag} [options] - An optional object containing file properties.
 * @returns {File} A new File object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/File | File - MDN}
 *
 * @example
 * const file = buildFile('example.txt', ['Hello, world!'], { type: 'text/plain' });
 * console.log(file.name); // 'example.txt'
 * console.log(file.type); // 'text/plain'
 */
export const buildFile = baseFileFactory;
/**
 * Creates a new File object with the specified name, content, and options.
 *
 * @param {string} name - The name of the file.
 * @param {BlobPart[]} content - The content of the file.
 * @param {FilePropertyBag} [options] - An optional object containing file properties.
 * @returns {File} A new File object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/File | File - MDN}
 *
 * @example
 * const file = makeFile('example.txt', ['Hello, world!'], { type: 'text/plain' });
 * console.log(file.name); // 'example.txt'
 * console.log(file.type); // 'text/plain'
 */
export const makeFile = baseFileFactory;
/**
 * Creates a new File object with the specified name, content, and options.
 *
 * @param {string} name - The name of the file.
 * @param {BlobPart[]} content - The content of the file.
 * @param {FilePropertyBag} [options] - An optional object containing file properties.
 * @returns {File} A new File object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/File | File - MDN}
 *
 * @example
 * const file = constructFile('example.txt', ['Hello, world!'], { type: 'text/plain' });
 * console.log(file.name); // 'example.txt'
 * console.log(file.type); // 'text/plain'
 */
export const constructFile = baseFileFactory;
