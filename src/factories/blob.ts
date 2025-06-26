const baseBlobFactory = (...args: ConstructorParameters<typeof Blob>): InstanceType<typeof Blob> =>
  new Blob(...args);

/**
 * Creates a new Blob object from the provided parts and options.
 *
 * @function
 * @name createBlob
 * @param {Array<BlobPart>} parts - An array of BlobPart objects to include in the Blob.
 * @param {BlobPropertyBag} [options] - An optional BlobPropertyBag object that specifies the properties of the Blob.
 * @returns {Blob} A new Blob object containing the specified parts and options.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Blob | MDN Blob}
 *
 * @example
 * const parts = ['Hello, world!'];
 * const options = { type: 'text/plain' };
 * const blob = baseBlobFactory(parts, options);
 * console.log(blob); // Blob { size: 13, type: "text/plain" }
 */
export const createBlob = baseBlobFactory;
/**
 * Creates a new Blob object from the provided parts and options.
 *
 * @function
 * @name initBlob
 * @param {Array<BlobPart>} parts - An array of BlobPart objects to include in the Blob.
 * @param {BlobPropertyBag} [options] - An optional BlobPropertyBag object that specifies the properties of the Blob.
 * @returns {Blob} A new Blob object containing the specified parts and options.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Blob | MDN Blob}
 *
 * @example
 * const parts = ['Hello, world!'];
 * const options = { type: 'text/plain' };
 * const blob = baseBlobFactory(parts, options);
 * console.log(blob); // Blob { size: 13, type: "text/plain" }
 */
export const initBlob = baseBlobFactory;
/**
 * Creates a new Blob object from the provided parts and options.
 *
 * @function
 * @name spawnBlob
 * @param {Array<BlobPart>} parts - An array of BlobPart objects to include in the Blob.
 * @param {BlobPropertyBag} [options] - An optional BlobPropertyBag object that specifies the properties of the Blob.
 * @returns {Blob} A new Blob object containing the specified parts and options.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Blob | MDN Blob}
 *
 * @example
 * const parts = ['Hello, world!'];
 * const options = { type: 'text/plain' };
 * const blob = baseBlobFactory(parts, options);
 * console.log(blob); // Blob { size: 13, type: "text/plain" }
 */
export const spawnBlob = baseBlobFactory;
/**
 * Creates a new Blob object from the provided parts and options.
 *
 * @function
 * @name buildBlob
 * @param {Array<BlobPart>} parts - An array of BlobPart objects to include in the Blob.
 * @param {BlobPropertyBag} [options] - An optional BlobPropertyBag object that specifies the properties of the Blob.
 * @returns {Blob} A new Blob object containing the specified parts and options.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Blob | MDN Blob}
 *
 * @example
 * const parts = ['Hello, world!'];
 * const options = { type: 'text/plain' };
 * const blob = baseBlobFactory(parts, options);
 * console.log(blob); // Blob { size: 13, type: "text/plain" }
 */
export const buildBlob = baseBlobFactory;
/**
 * Creates a new Blob object from the provided parts and options.
 *
 * @function
 * @name makeBlob
 * @param {Array<BlobPart>} parts - An array of BlobPart objects to include in the Blob.
 * @param {BlobPropertyBag} [options] - An optional BlobPropertyBag object that specifies the properties of the Blob.
 * @returns {Blob} A new Blob object containing the specified parts and options.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Blob | MDN Blob}
 *
 * @example
 * const parts = ['Hello, world!'];
 * const options = { type: 'text/plain' };
 * const blob = baseBlobFactory(parts, options);
 * console.log(blob); // Blob { size: 13, type: "text/plain" }
 */
export const makeBlob = baseBlobFactory;
/**
 * Creates a new Blob object from the provided parts and options.
 *
 * @function
 * @name constructBlob
 * @param {Array<BlobPart>} parts - An array of BlobPart objects to include in the Blob.
 * @param {BlobPropertyBag} [options] - An optional BlobPropertyBag object that specifies the properties of the Blob.
 * @returns {Blob} A new Blob object containing the specified parts and options.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Blob | MDN Blob}
 *
 * @example
 * const parts = ['Hello, world!'];
 * const options = { type: 'text/plain' };
 * const blob = baseBlobFactory(parts, options);
 * console.log(blob); // Blob { size: 13, type: "text/plain" }
 */
export const constructBlob = baseBlobFactory;
