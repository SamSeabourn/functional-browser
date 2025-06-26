const baseFileReaderFactory = (
  ...args: ConstructorParameters<typeof FileReader>
): InstanceType<typeof FileReader> => new FileReader(...args);

/**
 * Factory function to create a new instance of a FileReader.
 *
 * The FileReader object lets web applications asynchronously read the contents
 * of files (or raw data buffers) stored on the user's computer, using File or Blob objects
 * to specify the file or data to read.
 *
 * @returns {FileReader} A new instance of FileReader.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/FileReader|FileReader - MDN}
 *
 * @example
 * const fileReader = createFileReader();
 * fileReader.onload = function(event) {
 *   console.log(event.target.result);
 * };
 *
 * const fileInput = document.querySelector('input[type="file"]');
 * fileInput.addEventListener('change', function(event) {
 *   const file = event.target.files[0];
 *   fileReader.readAsText(file);
 * });
 */
export const createFileReader = baseFileReaderFactory;
/**
 * Factory function to create a new instance of a FileReader.
 *
 * The FileReader object lets web applications asynchronously read the contents
 * of files (or raw data buffers) stored on the user's computer, using File or Blob objects
 * to specify the file or data to read.
 *
 * @returns {FileReader} A new instance of FileReader.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/FileReader|FileReader - MDN}
 *
 * @example
 * const fileReader = initFileReader();
 * fileReader.onload = function(event) {
 *   console.log(event.target.result);
 * };
 *
 * const fileInput = document.querySelector('input[type="file"]');
 * fileInput.addEventListener('change', function(event) {
 *   const file = event.target.files[0];
 *   fileReader.readAsText(file);
 * });
 */
export const initFileReader = baseFileReaderFactory;
/**
 * Factory function to create a new instance of a FileReader.
 *
 * The FileReader object lets web applications asynchronously read the contents
 * of files (or raw data buffers) stored on the user's computer, using File or Blob objects
 * to specify the file or data to read.
 *
 * @returns {FileReader} A new instance of FileReader.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/FileReader|FileReader - MDN}
 *
 * @example
 * const fileReader = spawnFileReader();
 * fileReader.onload = function(event) {
 *   console.log(event.target.result);
 * };
 *
 * const fileInput = document.querySelector('input[type="file"]');
 * fileInput.addEventListener('change', function(event) {
 *   const file = event.target.files[0];
 *   fileReader.readAsText(file);
 * });
 */
export const spawnFileReader = baseFileReaderFactory;
/**
 * Factory function to create a new instance of a FileReader.
 *
 * The FileReader object lets web applications asynchronously read the contents
 * of files (or raw data buffers) stored on the user's computer, using File or Blob objects
 * to specify the file or data to read.
 *
 * @returns {FileReader} A new instance of FileReader.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/FileReader|FileReader - MDN}
 *
 * @example
 * const fileReader = buildFileReader();
 * fileReader.onload = function(event) {
 *   console.log(event.target.result);
 * };
 *
 * const fileInput = document.querySelector('input[type="file"]');
 * fileInput.addEventListener('change', function(event) {
 *   const file = event.target.files[0];
 *   fileReader.readAsText(file);
 * });
 */
export const buildFileReader = baseFileReaderFactory;
/**
 * Factory function to create a new instance of a FileReader.
 *
 * The FileReader object lets web applications asynchronously read the contents
 * of files (or raw data buffers) stored on the user's computer, using File or Blob objects
 * to specify the file or data to read.
 *
 * @returns {FileReader} A new instance of FileReader.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/FileReader|FileReader - MDN}
 *
 * @example
 * const fileReader = makeFileReader();
 * fileReader.onload = function(event) {
 *   console.log(event.target.result);
 * };
 *
 * const fileInput = document.querySelector('input[type="file"]');
 * fileInput.addEventListener('change', function(event) {
 *   const file = event.target.files[0];
 *   fileReader.readAsText(file);
 * });
 */
export const makeFileReader = baseFileReaderFactory;
/**
 * Factory function to create a new instance of a FileReader.
 *
 * The FileReader object lets web applications asynchronously read the contents
 * of files (or raw data buffers) stored on the user's computer, using File or Blob objects
 * to specify the file or data to read.
 *
 * @returns {FileReader} A new instance of FileReader.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/FileReader|FileReader - MDN}
 *
 * @example
 * const fileReader = constructFileReader();
 * fileReader.onload = function(event) {
 *   console.log(event.target.result);
 * };
 *
 * const fileInput = document.querySelector('input[type="file"]');
 * fileInput.addEventListener('change', function(event) {
 *   const file = event.target.files[0];
 *   fileReader.readAsText(file);
 * });
 */
export const constructFileReader = baseFileReaderFactory;
