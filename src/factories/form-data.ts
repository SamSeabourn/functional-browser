const baseFormDataFactory = (
  ...args: ConstructorParameters<typeof FormData>
): InstanceType<typeof FormData> => new FormData(...args);

/**
 * Creates a new instance of FormData with optional initial data.
 *
 * This factory function allows you to create a FormData object, which can be used to
 * construct a set of key/value pairs representing form fields and their values, which
 * can then be easily sent using XMLHttpRequest or fetch.
 *
 * @param {Record<string, string | Blob | File>} [initialData] - An optional object containing initial key/value pairs to populate the FormData instance.
 * @returns {FormData} A new FormData instance populated with the provided initial data.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/FormData | MDN FormData}
 *
 * @example
 * // Create a FormData instance with initial data
 * const formData = createFormData({
 *   username: 'john_doe',
 *   profilePicture: new File(['content'], 'profile.png', { type: 'image/png' })
 * });
 *
 * // Append additional data
 * formData.append('email', 'john@example.com');
 */
export const createFormData = baseFormDataFactory;
/**
 * Creates a new instance of FormData with optional initial data.
 *
 * This factory function allows you to create a FormData object, which can be used to
 * construct a set of key/value pairs representing form fields and their values, which
 * can then be easily sent using XMLHttpRequest or fetch.
 *
 * @param {Record<string, string | Blob | File>} [initialData] - An optional object containing initial key/value pairs to populate the FormData instance.
 * @returns {FormData} A new FormData instance populated with the provided initial data.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/FormData | MDN FormData}
 *
 * @example
 * // Create a FormData instance with initial data
 * const formData = initFormData({
 *   username: 'john_doe',
 *   profilePicture: new File(['content'], 'profile.png', { type: 'image/png' })
 * });
 *
 * // Append additional data
 * formData.append('email', 'john@example.com');
 */
export const initFormData = baseFormDataFactory;
/**
 * Creates a new instance of FormData with optional initial data.
 *
 * This factory function allows you to create a FormData object, which can be used to
 * construct a set of key/value pairs representing form fields and their values, which
 * can then be easily sent using XMLHttpRequest or fetch.
 *
 * @param {Record<string, string | Blob | File>} [initialData] - An optional object containing initial key/value pairs to populate the FormData instance.
 * @returns {FormData} A new FormData instance populated with the provided initial data.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/FormData | MDN FormData}
 *
 * @example
 * // Create a FormData instance with initial data
 * const formData = spawnFormData({
 *   username: 'john_doe',
 *   profilePicture: new File(['content'], 'profile.png', { type: 'image/png' })
 * });
 *
 * // Append additional data
 * formData.append('email', 'john@example.com');
 */
export const spawnFormData = baseFormDataFactory;
/**
 * Creates a new instance of FormData with optional initial data.
 *
 * This factory function allows you to create a FormData object, which can be used to
 * construct a set of key/value pairs representing form fields and their values, which
 * can then be easily sent using XMLHttpRequest or fetch.
 *
 * @param {Record<string, string | Blob | File>} [initialData] - An optional object containing initial key/value pairs to populate the FormData instance.
 * @returns {FormData} A new FormData instance populated with the provided initial data.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/FormData | MDN FormData}
 *
 * @example
 * // Create a FormData instance with initial data
 * const formData = buildFormData({
 *   username: 'john_doe',
 *   profilePicture: new File(['content'], 'profile.png', { type: 'image/png' })
 * });
 *
 * // Append additional data
 * formData.append('email', 'john@example.com');
 */
export const buildFormData = baseFormDataFactory;
/**
 * Creates a new instance of FormData with optional initial data.
 *
 * This factory function allows you to create a FormData object, which can be used to
 * construct a set of key/value pairs representing form fields and their values, which
 * can then be easily sent using XMLHttpRequest or fetch.
 *
 * @param {Record<string, string | Blob | File>} [initialData] - An optional object containing initial key/value pairs to populate the FormData instance.
 * @returns {FormData} A new FormData instance populated with the provided initial data.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/FormData | MDN FormData}
 *
 * @example
 * // Create a FormData instance with initial data
 * const formData = makeFormData({
 *   username: 'john_doe',
 *   profilePicture: new File(['content'], 'profile.png', { type: 'image/png' })
 * });
 *
 * // Append additional data
 * formData.append('email', 'john@example.com');
 */
export const makeFormData = baseFormDataFactory;
/**
 * Creates a new instance of FormData with optional initial data.
 *
 * This factory function allows you to create a FormData object, which can be used to
 * construct a set of key/value pairs representing form fields and their values, which
 * can then be easily sent using XMLHttpRequest or fetch.
 *
 * @param {Record<string, string | Blob | File>} [initialData] - An optional object containing initial key/value pairs to populate the FormData instance.
 * @returns {FormData} A new FormData instance populated with the provided initial data.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/FormData | MDN FormData}
 *
 * @example
 * // Create a FormData instance with initial data
 * const formData = constructFormData({
 *   username: 'john_doe',
 *   profilePicture: new File(['content'], 'profile.png', { type: 'image/png' })
 * });
 *
 * // Append additional data
 * formData.append('email', 'john@example.com');
 */
export const constructFormData = baseFormDataFactory;
