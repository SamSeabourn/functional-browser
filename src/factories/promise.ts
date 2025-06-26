const basePromiseFactory = (
  ...args: ConstructorParameters<typeof Promise>
): InstanceType<typeof Promise> => new Promise(...args);

/**
 * A factory function that creates a new Promise with the provided executor function.
 *
 * @function
 * @name createPromise
 * @param {Function} executor - A function that is passed with the arguments `resolve` and `reject`.
 * The executor function is executed immediately by the Promise implementation, passing `resolve` and `reject`
 * functions (the executor is called before the Promise constructor even returns the created object).
 * @returns {Promise<any>} A new Promise object.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Promise | Promise - MDN}
 *
 * @example
 * // Example usage of basePromiseFactory
 * const myPromise = basePromiseFactory((resolve, reject) => {
 *   const success = true;
 *   if (success) {
 *     resolve('Promise resolved successfully!');
 *   } else {
 *     reject('Promise rejected.');
 *   }
 * });
 *
 * myPromise.then(response => {
 *   console.log(response);
 * }).catch(error => {
 *   console.error(error);
 * });
 */
export const createPromise = basePromiseFactory;
/**
 * A factory function that creates a new Promise with the provided executor function.
 *
 * @function
 * @name initPromise
 * @param {Function} executor - A function that is passed with the arguments `resolve` and `reject`.
 * The executor function is executed immediately by the Promise implementation, passing `resolve` and `reject`
 * functions (the executor is called before the Promise constructor even returns the created object).
 * @returns {Promise<any>} A new Promise object.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Promise | Promise - MDN}
 *
 * @example
 * // Example usage of basePromiseFactory
 * const myPromise = basePromiseFactory((resolve, reject) => {
 *   const success = true;
 *   if (success) {
 *     resolve('Promise resolved successfully!');
 *   } else {
 *     reject('Promise rejected.');
 *   }
 * });
 *
 * myPromise.then(response => {
 *   console.log(response);
 * }).catch(error => {
 *   console.error(error);
 * });
 */
export const initPromise = basePromiseFactory;
/**
 * A factory function that creates a new Promise with the provided executor function.
 *
 * @function
 * @name spawnPromise
 * @param {Function} executor - A function that is passed with the arguments `resolve` and `reject`.
 * The executor function is executed immediately by the Promise implementation, passing `resolve` and `reject`
 * functions (the executor is called before the Promise constructor even returns the created object).
 * @returns {Promise<any>} A new Promise object.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Promise | Promise - MDN}
 *
 * @example
 * // Example usage of basePromiseFactory
 * const myPromise = basePromiseFactory((resolve, reject) => {
 *   const success = true;
 *   if (success) {
 *     resolve('Promise resolved successfully!');
 *   } else {
 *     reject('Promise rejected.');
 *   }
 * });
 *
 * myPromise.then(response => {
 *   console.log(response);
 * }).catch(error => {
 *   console.error(error);
 * });
 */
export const spawnPromise = basePromiseFactory;
/**
 * A factory function that creates a new Promise with the provided executor function.
 *
 * @function
 * @name buildPromise
 * @param {Function} executor - A function that is passed with the arguments `resolve` and `reject`.
 * The executor function is executed immediately by the Promise implementation, passing `resolve` and `reject`
 * functions (the executor is called before the Promise constructor even returns the created object).
 * @returns {Promise<any>} A new Promise object.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Promise | Promise - MDN}
 *
 * @example
 * // Example usage of basePromiseFactory
 * const myPromise = basePromiseFactory((resolve, reject) => {
 *   const success = true;
 *   if (success) {
 *     resolve('Promise resolved successfully!');
 *   } else {
 *     reject('Promise rejected.');
 *   }
 * });
 *
 * myPromise.then(response => {
 *   console.log(response);
 * }).catch(error => {
 *   console.error(error);
 * });
 */
export const buildPromise = basePromiseFactory;
/**
 * A factory function that creates a new Promise with the provided executor function.
 *
 * @function
 * @name makePromise
 * @param {Function} executor - A function that is passed with the arguments `resolve` and `reject`.
 * The executor function is executed immediately by the Promise implementation, passing `resolve` and `reject`
 * functions (the executor is called before the Promise constructor even returns the created object).
 * @returns {Promise<any>} A new Promise object.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Promise | Promise - MDN}
 *
 * @example
 * // Example usage of basePromiseFactory
 * const myPromise = basePromiseFactory((resolve, reject) => {
 *   const success = true;
 *   if (success) {
 *     resolve('Promise resolved successfully!');
 *   } else {
 *     reject('Promise rejected.');
 *   }
 * });
 *
 * myPromise.then(response => {
 *   console.log(response);
 * }).catch(error => {
 *   console.error(error);
 * });
 */
export const makePromise = basePromiseFactory;
/**
 * A factory function that creates a new Promise with the provided executor function.
 *
 * @function
 * @name constructPromise
 * @param {Function} executor - A function that is passed with the arguments `resolve` and `reject`.
 * The executor function is executed immediately by the Promise implementation, passing `resolve` and `reject`
 * functions (the executor is called before the Promise constructor even returns the created object).
 * @returns {Promise<any>} A new Promise object.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Promise | Promise - MDN}
 *
 * @example
 * // Example usage of basePromiseFactory
 * const myPromise = basePromiseFactory((resolve, reject) => {
 *   const success = true;
 *   if (success) {
 *     resolve('Promise resolved successfully!');
 *   } else {
 *     reject('Promise rejected.');
 *   }
 * });
 *
 * myPromise.then(response => {
 *   console.log(response);
 * }).catch(error => {
 *   console.error(error);
 * });
 */
export const constructPromise = basePromiseFactory;
