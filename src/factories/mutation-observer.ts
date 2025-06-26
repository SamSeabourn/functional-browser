const baseMutationObserverFactory = (
  ...args: ConstructorParameters<typeof MutationObserver>
): InstanceType<typeof MutationObserver> => new MutationObserver(...args);

/**
 * Factory function to create a new MutationObserver instance with specified callback and options.
 *
 * The MutationObserver interface provides the ability to watch for changes being made to the DOM tree.
 * It is designed as a replacement for the older Mutation Events feature which was part of the DOM3 Events specification.
 *
 * @param {MutationCallback} callback - A function which will be called on each DOM mutation.
 * @param {MutationObserverInit} options - An object specifying which DOM mutations should be reported.
 * @returns {MutationObserver} A new MutationObserver instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver | MDN MutationObserver}
 *
 * @example
 * const observer = createMutationObserver((mutationsList, observer) => {
 *   for (const mutation of mutationsList) {
 *     if (mutation.type === 'childList') {
 *       console.log('A child node has been added or removed.');
 *     } else if (mutation.type === 'attributes') {
 *       console.log('The ' + mutation.attributeName + ' attribute was modified.');
 *     }
 *   }
 * }, { attributes: true, childList: true, subtree: true });
 *
 * // Start observing the target node for configured mutations
 * observer.observe(document.getElementById('targetNode'), { attributes: true, childList: true, subtree: true });
 */
export const createMutationObserver = baseMutationObserverFactory;
/**
 * Factory function to create a new MutationObserver instance with specified callback and options.
 *
 * The MutationObserver interface provides the ability to watch for changes being made to the DOM tree.
 * It is designed as a replacement for the older Mutation Events feature which was part of the DOM3 Events specification.
 *
 * @param {MutationCallback} callback - A function which will be called on each DOM mutation.
 * @param {MutationObserverInit} options - An object specifying which DOM mutations should be reported.
 * @returns {MutationObserver} A new MutationObserver instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver | MDN MutationObserver}
 *
 * @example
 * const observer = initMutationObserver((mutationsList, observer) => {
 *   for (const mutation of mutationsList) {
 *     if (mutation.type === 'childList') {
 *       console.log('A child node has been added or removed.');
 *     } else if (mutation.type === 'attributes') {
 *       console.log('The ' + mutation.attributeName + ' attribute was modified.');
 *     }
 *   }
 * }, { attributes: true, childList: true, subtree: true });
 *
 * // Start observing the target node for configured mutations
 * observer.observe(document.getElementById('targetNode'), { attributes: true, childList: true, subtree: true });
 */
export const initMutationObserver = baseMutationObserverFactory;
/**
 * Factory function to create a new MutationObserver instance with specified callback and options.
 *
 * The MutationObserver interface provides the ability to watch for changes being made to the DOM tree.
 * It is designed as a replacement for the older Mutation Events feature which was part of the DOM3 Events specification.
 *
 * @param {MutationCallback} callback - A function which will be called on each DOM mutation.
 * @param {MutationObserverInit} options - An object specifying which DOM mutations should be reported.
 * @returns {MutationObserver} A new MutationObserver instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver | MDN MutationObserver}
 *
 * @example
 * const observer = spawnMutationObserver((mutationsList, observer) => {
 *   for (const mutation of mutationsList) {
 *     if (mutation.type === 'childList') {
 *       console.log('A child node has been added or removed.');
 *     } else if (mutation.type === 'attributes') {
 *       console.log('The ' + mutation.attributeName + ' attribute was modified.');
 *     }
 *   }
 * }, { attributes: true, childList: true, subtree: true });
 *
 * // Start observing the target node for configured mutations
 * observer.observe(document.getElementById('targetNode'), { attributes: true, childList: true, subtree: true });
 */
export const spawnMutationObserver = baseMutationObserverFactory;
/**
 * Factory function to create a new MutationObserver instance with specified callback and options.
 *
 * The MutationObserver interface provides the ability to watch for changes being made to the DOM tree.
 * It is designed as a replacement for the older Mutation Events feature which was part of the DOM3 Events specification.
 *
 * @param {MutationCallback} callback - A function which will be called on each DOM mutation.
 * @param {MutationObserverInit} options - An object specifying which DOM mutations should be reported.
 * @returns {MutationObserver} A new MutationObserver instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver | MDN MutationObserver}
 *
 * @example
 * const observer = buildMutationObserver((mutationsList, observer) => {
 *   for (const mutation of mutationsList) {
 *     if (mutation.type === 'childList') {
 *       console.log('A child node has been added or removed.');
 *     } else if (mutation.type === 'attributes') {
 *       console.log('The ' + mutation.attributeName + ' attribute was modified.');
 *     }
 *   }
 * }, { attributes: true, childList: true, subtree: true });
 *
 * // Start observing the target node for configured mutations
 * observer.observe(document.getElementById('targetNode'), { attributes: true, childList: true, subtree: true });
 */
export const buildMutationObserver = baseMutationObserverFactory;
/**
 * Factory function to create a new MutationObserver instance with specified callback and options.
 *
 * The MutationObserver interface provides the ability to watch for changes being made to the DOM tree.
 * It is designed as a replacement for the older Mutation Events feature which was part of the DOM3 Events specification.
 *
 * @param {MutationCallback} callback - A function which will be called on each DOM mutation.
 * @param {MutationObserverInit} options - An object specifying which DOM mutations should be reported.
 * @returns {MutationObserver} A new MutationObserver instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver | MDN MutationObserver}
 *
 * @example
 * const observer = makeMutationObserver((mutationsList, observer) => {
 *   for (const mutation of mutationsList) {
 *     if (mutation.type === 'childList') {
 *       console.log('A child node has been added or removed.');
 *     } else if (mutation.type === 'attributes') {
 *       console.log('The ' + mutation.attributeName + ' attribute was modified.');
 *     }
 *   }
 * }, { attributes: true, childList: true, subtree: true });
 *
 * // Start observing the target node for configured mutations
 * observer.observe(document.getElementById('targetNode'), { attributes: true, childList: true, subtree: true });
 */
export const makeMutationObserver = baseMutationObserverFactory;
/**
 * Factory function to create a new MutationObserver instance with specified callback and options.
 *
 * The MutationObserver interface provides the ability to watch for changes being made to the DOM tree.
 * It is designed as a replacement for the older Mutation Events feature which was part of the DOM3 Events specification.
 *
 * @param {MutationCallback} callback - A function which will be called on each DOM mutation.
 * @param {MutationObserverInit} options - An object specifying which DOM mutations should be reported.
 * @returns {MutationObserver} A new MutationObserver instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver | MDN MutationObserver}
 *
 * @example
 * const observer = constructMutationObserver((mutationsList, observer) => {
 *   for (const mutation of mutationsList) {
 *     if (mutation.type === 'childList') {
 *       console.log('A child node has been added or removed.');
 *     } else if (mutation.type === 'attributes') {
 *       console.log('The ' + mutation.attributeName + ' attribute was modified.');
 *     }
 *   }
 * }, { attributes: true, childList: true, subtree: true });
 *
 * // Start observing the target node for configured mutations
 * observer.observe(document.getElementById('targetNode'), { attributes: true, childList: true, subtree: true });
 */
export const constructMutationObserver = baseMutationObserverFactory;
