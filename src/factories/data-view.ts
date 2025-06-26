const baseDataViewFactory = (
  ...args: ConstructorParameters<typeof DataView>
): InstanceType<typeof DataView> => new DataView(...args);

/**
 * Creates a new DataView instance for the given ArrayBuffer.
 *
 * @function
 * @name createDataView
 * @param {ArrayBuffer} buffer - The buffer to create a DataView for.
 * @param {number} [byteOffset=0] - The offset, in bytes, to the first byte in the specified buffer for the new DataView.
 * @param {number} [byteLength=buffer.byteLength] - The number of elements in the byte array. Defaults to the length of the buffer.
 * @returns {DataView} A new DataView object representing the specified buffer.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DataView|DataView - MDN}
 *
 * @example
 * const buffer = new ArrayBuffer(16);
 * const dataView = baseDataViewFactory(buffer, 0, 16);
 * console.log(dataView.getInt8(0)); // Logs the first byte of the buffer
 */
export const createDataView = baseDataViewFactory;
/**
 * Creates a new DataView instance for the given ArrayBuffer.
 *
 * @function
 * @name initDataView
 * @param {ArrayBuffer} buffer - The buffer to create a DataView for.
 * @param {number} [byteOffset=0] - The offset, in bytes, to the first byte in the specified buffer for the new DataView.
 * @param {number} [byteLength=buffer.byteLength] - The number of elements in the byte array. Defaults to the length of the buffer.
 * @returns {DataView} A new DataView object representing the specified buffer.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DataView|DataView - MDN}
 *
 * @example
 * const buffer = new ArrayBuffer(16);
 * const dataView = baseDataViewFactory(buffer, 0, 16);
 * console.log(dataView.getInt8(0)); // Logs the first byte of the buffer
 */
export const initDataView = baseDataViewFactory;
/**
 * Creates a new DataView instance for the given ArrayBuffer.
 *
 * @function
 * @name spawnDataView
 * @param {ArrayBuffer} buffer - The buffer to create a DataView for.
 * @param {number} [byteOffset=0] - The offset, in bytes, to the first byte in the specified buffer for the new DataView.
 * @param {number} [byteLength=buffer.byteLength] - The number of elements in the byte array. Defaults to the length of the buffer.
 * @returns {DataView} A new DataView object representing the specified buffer.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DataView|DataView - MDN}
 *
 * @example
 * const buffer = new ArrayBuffer(16);
 * const dataView = baseDataViewFactory(buffer, 0, 16);
 * console.log(dataView.getInt8(0)); // Logs the first byte of the buffer
 */
export const spawnDataView = baseDataViewFactory;
/**
 * Creates a new DataView instance for the given ArrayBuffer.
 *
 * @function
 * @name buildDataView
 * @param {ArrayBuffer} buffer - The buffer to create a DataView for.
 * @param {number} [byteOffset=0] - The offset, in bytes, to the first byte in the specified buffer for the new DataView.
 * @param {number} [byteLength=buffer.byteLength] - The number of elements in the byte array. Defaults to the length of the buffer.
 * @returns {DataView} A new DataView object representing the specified buffer.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DataView|DataView - MDN}
 *
 * @example
 * const buffer = new ArrayBuffer(16);
 * const dataView = baseDataViewFactory(buffer, 0, 16);
 * console.log(dataView.getInt8(0)); // Logs the first byte of the buffer
 */
export const buildDataView = baseDataViewFactory;
/**
 * Creates a new DataView instance for the given ArrayBuffer.
 *
 * @function
 * @name makeDataView
 * @param {ArrayBuffer} buffer - The buffer to create a DataView for.
 * @param {number} [byteOffset=0] - The offset, in bytes, to the first byte in the specified buffer for the new DataView.
 * @param {number} [byteLength=buffer.byteLength] - The number of elements in the byte array. Defaults to the length of the buffer.
 * @returns {DataView} A new DataView object representing the specified buffer.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DataView|DataView - MDN}
 *
 * @example
 * const buffer = new ArrayBuffer(16);
 * const dataView = baseDataViewFactory(buffer, 0, 16);
 * console.log(dataView.getInt8(0)); // Logs the first byte of the buffer
 */
export const makeDataView = baseDataViewFactory;
/**
 * Creates a new DataView instance for the given ArrayBuffer.
 *
 * @function
 * @name constructDataView
 * @param {ArrayBuffer} buffer - The buffer to create a DataView for.
 * @param {number} [byteOffset=0] - The offset, in bytes, to the first byte in the specified buffer for the new DataView.
 * @param {number} [byteLength=buffer.byteLength] - The number of elements in the byte array. Defaults to the length of the buffer.
 * @returns {DataView} A new DataView object representing the specified buffer.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DataView|DataView - MDN}
 *
 * @example
 * const buffer = new ArrayBuffer(16);
 * const dataView = baseDataViewFactory(buffer, 0, 16);
 * console.log(dataView.getInt8(0)); // Logs the first byte of the buffer
 */
export const constructDataView = baseDataViewFactory;
