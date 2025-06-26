const baseOptionFactory = (
  ...args: ConstructorParameters<typeof Option>
): InstanceType<typeof Option> => new Option(...args);

/**
 * Creates a new HTML Option element with the specified text and value.
 *
 * @param {string} text - The text content of the option element.
 * @param {string} value - The value attribute of the option element.
 * @returns {HTMLOptionElement} The newly created option element.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Option | MDN Option}
 *
 * @example
 * const option = createOption('Option Text', 'optionValue');
 * document.querySelector('select').appendChild(option);
 */
export const createOption = baseOptionFactory;
/**
 * Creates a new HTML Option element with the specified text and value.
 *
 * @param {string} text - The text content of the option element.
 * @param {string} value - The value attribute of the option element.
 * @returns {HTMLOptionElement} The newly created option element.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Option | MDN Option}
 *
 * @example
 * const option = initOption('Option Text', 'optionValue');
 * document.querySelector('select').appendChild(option);
 */
export const initOption = baseOptionFactory;
/**
 * Creates a new HTML Option element with the specified text and value.
 *
 * @param {string} text - The text content of the option element.
 * @param {string} value - The value attribute of the option element.
 * @returns {HTMLOptionElement} The newly created option element.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Option | MDN Option}
 *
 * @example
 * const option = spawnOption('Option Text', 'optionValue');
 * document.querySelector('select').appendChild(option);
 */
export const spawnOption = baseOptionFactory;
/**
 * Creates a new HTML Option element with the specified text and value.
 *
 * @param {string} text - The text content of the option element.
 * @param {string} value - The value attribute of the option element.
 * @returns {HTMLOptionElement} The newly created option element.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Option | MDN Option}
 *
 * @example
 * const option = buildOption('Option Text', 'optionValue');
 * document.querySelector('select').appendChild(option);
 */
export const buildOption = baseOptionFactory;
/**
 * Creates a new HTML Option element with the specified text and value.
 *
 * @param {string} text - The text content of the option element.
 * @param {string} value - The value attribute of the option element.
 * @returns {HTMLOptionElement} The newly created option element.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Option | MDN Option}
 *
 * @example
 * const option = makeOption('Option Text', 'optionValue');
 * document.querySelector('select').appendChild(option);
 */
export const makeOption = baseOptionFactory;
/**
 * Creates a new HTML Option element with the specified text and value.
 *
 * @param {string} text - The text content of the option element.
 * @param {string} value - The value attribute of the option element.
 * @returns {HTMLOptionElement} The newly created option element.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Option | MDN Option}
 *
 * @example
 * const option = constructOption('Option Text', 'optionValue');
 * document.querySelector('select').appendChild(option);
 */
export const constructOption = baseOptionFactory;
