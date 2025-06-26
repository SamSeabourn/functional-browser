const baseInputEventFactory = (
  ...args: ConstructorParameters<typeof InputEvent>
): InstanceType<typeof InputEvent> => new InputEvent(...args);

/**
 * Factory function to create a new `InputEvent` with specified type and options.
 *
 * @param {string} type - The type of the input event (e.g., "input", "change").
 * @param {InputEventInit} [eventInitDict] - An optional object that provides additional event properties.
 * @returns {InputEvent} A new `InputEvent` instance.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/InputEvent
 *
 * @example
 * // Create a new 'input' event with default options
 * const inputEvent = createInputEvent('input');
 *
 * // Create a new 'change' event with additional properties
 * const changeEvent = baseInputEventFactory('change', { data: 'example', isComposing: false });
 */
export const createInputEvent = baseInputEventFactory;
/**
 * Factory function to create a new `InputEvent` with specified type and options.
 *
 * @param {string} type - The type of the input event (e.g., "input", "change").
 * @param {InputEventInit} [eventInitDict] - An optional object that provides additional event properties.
 * @returns {InputEvent} A new `InputEvent` instance.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/InputEvent
 *
 * @example
 * // Create a new 'input' event with default options
 * const inputEvent = initInputEvent('input');
 *
 * // Create a new 'change' event with additional properties
 * const changeEvent = baseInputEventFactory('change', { data: 'example', isComposing: false });
 */
export const initInputEvent = baseInputEventFactory;
/**
 * Factory function to create a new `InputEvent` with specified type and options.
 *
 * @param {string} type - The type of the input event (e.g., "input", "change").
 * @param {InputEventInit} [eventInitDict] - An optional object that provides additional event properties.
 * @returns {InputEvent} A new `InputEvent` instance.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/InputEvent
 *
 * @example
 * // Create a new 'input' event with default options
 * const inputEvent = spawnInputEvent('input');
 *
 * // Create a new 'change' event with additional properties
 * const changeEvent = baseInputEventFactory('change', { data: 'example', isComposing: false });
 */
export const spawnInputEvent = baseInputEventFactory;
/**
 * Factory function to create a new `InputEvent` with specified type and options.
 *
 * @param {string} type - The type of the input event (e.g., "input", "change").
 * @param {InputEventInit} [eventInitDict] - An optional object that provides additional event properties.
 * @returns {InputEvent} A new `InputEvent` instance.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/InputEvent
 *
 * @example
 * // Create a new 'input' event with default options
 * const inputEvent = buildInputEvent('input');
 *
 * // Create a new 'change' event with additional properties
 * const changeEvent = baseInputEventFactory('change', { data: 'example', isComposing: false });
 */
export const buildInputEvent = baseInputEventFactory;
/**
 * Factory function to create a new `InputEvent` with specified type and options.
 *
 * @param {string} type - The type of the input event (e.g., "input", "change").
 * @param {InputEventInit} [eventInitDict] - An optional object that provides additional event properties.
 * @returns {InputEvent} A new `InputEvent` instance.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/InputEvent
 *
 * @example
 * // Create a new 'input' event with default options
 * const inputEvent = makeInputEvent('input');
 *
 * // Create a new 'change' event with additional properties
 * const changeEvent = baseInputEventFactory('change', { data: 'example', isComposing: false });
 */
export const makeInputEvent = baseInputEventFactory;
/**
 * Factory function to create a new `InputEvent` with specified type and options.
 *
 * @param {string} type - The type of the input event (e.g., "input", "change").
 * @param {InputEventInit} [eventInitDict] - An optional object that provides additional event properties.
 * @returns {InputEvent} A new `InputEvent` instance.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/InputEvent
 *
 * @example
 * // Create a new 'input' event with default options
 * const inputEvent = constructInputEvent('input');
 *
 * // Create a new 'change' event with additional properties
 * const changeEvent = baseInputEventFactory('change', { data: 'example', isComposing: false });
 */
export const constructInputEvent = baseInputEventFactory;
