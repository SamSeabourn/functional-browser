const baseStorageEventFactory = (
  ...args: ConstructorParameters<typeof StorageEvent>
): InstanceType<typeof StorageEvent> => new StorageEvent(...args);

/**
 * Factory function to create a new `StorageEvent` instance.
 *
 * A `StorageEvent` is dispatched to a window when a storage area changes.
 * This function allows for the creation of such events programmatically.
 *
 * @param {string} type - The name of the event. It is case-sensitive.
 * @param {Object} [eventInitDict] - Optional. An object that, in addition to the properties defined in the `StorageEvent` interface, can contain the following properties:
 * @param {string} [eventInitDict.key] - Represents the key changed in the storage area.
 * @param {string} [eventInitDict.oldValue] - Represents the previous value of the key.
 * @param {string} [eventInitDict.newValue] - Represents the new value of the key.
 * @param {string} [eventInitDict.url] - Represents the URL of the document whose key changed.
 * @param {Storage} [eventInitDict.storageArea] - Represents the `Storage` object that was affected.
 * @returns {StorageEvent} A new `StorageEvent` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent | MDN StorageEvent}
 *
 * @example
 * const storageEvent = createStorageEvent('storage', {
 *   key: 'username',
 *   oldValue: 'oldUser',
 *   newValue: 'newUser',
 *   url: 'https://example.com',
 *   storageArea: localStorage
 * });
 */
export const createStorageEvent = baseStorageEventFactory;
/**
 * Factory function to create a new `StorageEvent` instance.
 *
 * A `StorageEvent` is dispatched to a window when a storage area changes.
 * This function allows for the creation of such events programmatically.
 *
 * @param {string} type - The name of the event. It is case-sensitive.
 * @param {Object} [eventInitDict] - Optional. An object that, in addition to the properties defined in the `StorageEvent` interface, can contain the following properties:
 * @param {string} [eventInitDict.key] - Represents the key changed in the storage area.
 * @param {string} [eventInitDict.oldValue] - Represents the previous value of the key.
 * @param {string} [eventInitDict.newValue] - Represents the new value of the key.
 * @param {string} [eventInitDict.url] - Represents the URL of the document whose key changed.
 * @param {Storage} [eventInitDict.storageArea] - Represents the `Storage` object that was affected.
 * @returns {StorageEvent} A new `StorageEvent` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent | MDN StorageEvent}
 *
 * @example
 * const storageEvent = initStorageEvent('storage', {
 *   key: 'username',
 *   oldValue: 'oldUser',
 *   newValue: 'newUser',
 *   url: 'https://example.com',
 *   storageArea: localStorage
 * });
 */
export const initStorageEvent = baseStorageEventFactory;
/**
 * Factory function to create a new `StorageEvent` instance.
 *
 * A `StorageEvent` is dispatched to a window when a storage area changes.
 * This function allows for the creation of such events programmatically.
 *
 * @param {string} type - The name of the event. It is case-sensitive.
 * @param {Object} [eventInitDict] - Optional. An object that, in addition to the properties defined in the `StorageEvent` interface, can contain the following properties:
 * @param {string} [eventInitDict.key] - Represents the key changed in the storage area.
 * @param {string} [eventInitDict.oldValue] - Represents the previous value of the key.
 * @param {string} [eventInitDict.newValue] - Represents the new value of the key.
 * @param {string} [eventInitDict.url] - Represents the URL of the document whose key changed.
 * @param {Storage} [eventInitDict.storageArea] - Represents the `Storage` object that was affected.
 * @returns {StorageEvent} A new `StorageEvent` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent | MDN StorageEvent}
 *
 * @example
 * const storageEvent = spawnStorageEvent('storage', {
 *   key: 'username',
 *   oldValue: 'oldUser',
 *   newValue: 'newUser',
 *   url: 'https://example.com',
 *   storageArea: localStorage
 * });
 */
export const spawnStorageEvent = baseStorageEventFactory;
/**
 * Factory function to create a new `StorageEvent` instance.
 *
 * A `StorageEvent` is dispatched to a window when a storage area changes.
 * This function allows for the creation of such events programmatically.
 *
 * @param {string} type - The name of the event. It is case-sensitive.
 * @param {Object} [eventInitDict] - Optional. An object that, in addition to the properties defined in the `StorageEvent` interface, can contain the following properties:
 * @param {string} [eventInitDict.key] - Represents the key changed in the storage area.
 * @param {string} [eventInitDict.oldValue] - Represents the previous value of the key.
 * @param {string} [eventInitDict.newValue] - Represents the new value of the key.
 * @param {string} [eventInitDict.url] - Represents the URL of the document whose key changed.
 * @param {Storage} [eventInitDict.storageArea] - Represents the `Storage` object that was affected.
 * @returns {StorageEvent} A new `StorageEvent` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent | MDN StorageEvent}
 *
 * @example
 * const storageEvent = buildStorageEvent('storage', {
 *   key: 'username',
 *   oldValue: 'oldUser',
 *   newValue: 'newUser',
 *   url: 'https://example.com',
 *   storageArea: localStorage
 * });
 */
export const buildStorageEvent = baseStorageEventFactory;
/**
 * Factory function to create a new `StorageEvent` instance.
 *
 * A `StorageEvent` is dispatched to a window when a storage area changes.
 * This function allows for the creation of such events programmatically.
 *
 * @param {string} type - The name of the event. It is case-sensitive.
 * @param {Object} [eventInitDict] - Optional. An object that, in addition to the properties defined in the `StorageEvent` interface, can contain the following properties:
 * @param {string} [eventInitDict.key] - Represents the key changed in the storage area.
 * @param {string} [eventInitDict.oldValue] - Represents the previous value of the key.
 * @param {string} [eventInitDict.newValue] - Represents the new value of the key.
 * @param {string} [eventInitDict.url] - Represents the URL of the document whose key changed.
 * @param {Storage} [eventInitDict.storageArea] - Represents the `Storage` object that was affected.
 * @returns {StorageEvent} A new `StorageEvent` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent | MDN StorageEvent}
 *
 * @example
 * const storageEvent = makeStorageEvent('storage', {
 *   key: 'username',
 *   oldValue: 'oldUser',
 *   newValue: 'newUser',
 *   url: 'https://example.com',
 *   storageArea: localStorage
 * });
 */
export const makeStorageEvent = baseStorageEventFactory;
/**
 * Factory function to create a new `StorageEvent` instance.
 *
 * A `StorageEvent` is dispatched to a window when a storage area changes.
 * This function allows for the creation of such events programmatically.
 *
 * @param {string} type - The name of the event. It is case-sensitive.
 * @param {Object} [eventInitDict] - Optional. An object that, in addition to the properties defined in the `StorageEvent` interface, can contain the following properties:
 * @param {string} [eventInitDict.key] - Represents the key changed in the storage area.
 * @param {string} [eventInitDict.oldValue] - Represents the previous value of the key.
 * @param {string} [eventInitDict.newValue] - Represents the new value of the key.
 * @param {string} [eventInitDict.url] - Represents the URL of the document whose key changed.
 * @param {Storage} [eventInitDict.storageArea] - Represents the `Storage` object that was affected.
 * @returns {StorageEvent} A new `StorageEvent` instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent | MDN StorageEvent}
 *
 * @example
 * const storageEvent = constructStorageEvent('storage', {
 *   key: 'username',
 *   oldValue: 'oldUser',
 *   newValue: 'newUser',
 *   url: 'https://example.com',
 *   storageArea: localStorage
 * });
 */
export const constructStorageEvent = baseStorageEventFactory;
