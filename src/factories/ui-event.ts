const baseUIEventFactory = (
  ...args: ConstructorParameters<typeof UIEvent>
): InstanceType<typeof UIEvent> => new UIEvent(...args);

/**
 * Factory function to create a UIEvent with specified type and options.
 *
 * @param {string} type - The type of the UIEvent (e.g., 'click', 'mouseover').
 * @param {UIEventInit} [eventInit] - Optional initialization options for the UIEvent.
 * @returns {UIEvent} The newly created UIEvent.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/UIEvent|UIEvent - MDN}
 *
 * @example
 * // Create a click UIEvent with default options
 * const clickEvent = createUIEvent('click');
 *
 * @example
 * // Create a UIEvent with custom options
 * const customEvent = baseUIEventFactory('mouseover', { view: window, detail: 1 });
 */
export const createUIEvent = baseUIEventFactory;
/**
 * Factory function to create a UIEvent with specified type and options.
 *
 * @param {string} type - The type of the UIEvent (e.g., 'click', 'mouseover').
 * @param {UIEventInit} [eventInit] - Optional initialization options for the UIEvent.
 * @returns {UIEvent} The newly created UIEvent.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/UIEvent|UIEvent - MDN}
 *
 * @example
 * // Create a click UIEvent with default options
 * const clickEvent = initUIEvent('click');
 *
 * @example
 * // Create a UIEvent with custom options
 * const customEvent = baseUIEventFactory('mouseover', { view: window, detail: 1 });
 */
export const initUIEvent = baseUIEventFactory;
/**
 * Factory function to create a UIEvent with specified type and options.
 *
 * @param {string} type - The type of the UIEvent (e.g., 'click', 'mouseover').
 * @param {UIEventInit} [eventInit] - Optional initialization options for the UIEvent.
 * @returns {UIEvent} The newly created UIEvent.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/UIEvent|UIEvent - MDN}
 *
 * @example
 * // Create a click UIEvent with default options
 * const clickEvent = spawnUIEvent('click');
 *
 * @example
 * // Create a UIEvent with custom options
 * const customEvent = baseUIEventFactory('mouseover', { view: window, detail: 1 });
 */
export const spawnUIEvent = baseUIEventFactory;
/**
 * Factory function to create a UIEvent with specified type and options.
 *
 * @param {string} type - The type of the UIEvent (e.g., 'click', 'mouseover').
 * @param {UIEventInit} [eventInit] - Optional initialization options for the UIEvent.
 * @returns {UIEvent} The newly created UIEvent.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/UIEvent|UIEvent - MDN}
 *
 * @example
 * // Create a click UIEvent with default options
 * const clickEvent = buildUIEvent('click');
 *
 * @example
 * // Create a UIEvent with custom options
 * const customEvent = baseUIEventFactory('mouseover', { view: window, detail: 1 });
 */
export const buildUIEvent = baseUIEventFactory;
/**
 * Factory function to create a UIEvent with specified type and options.
 *
 * @param {string} type - The type of the UIEvent (e.g., 'click', 'mouseover').
 * @param {UIEventInit} [eventInit] - Optional initialization options for the UIEvent.
 * @returns {UIEvent} The newly created UIEvent.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/UIEvent|UIEvent - MDN}
 *
 * @example
 * // Create a click UIEvent with default options
 * const clickEvent = makeUIEvent('click');
 *
 * @example
 * // Create a UIEvent with custom options
 * const customEvent = baseUIEventFactory('mouseover', { view: window, detail: 1 });
 */
export const makeUIEvent = baseUIEventFactory;
/**
 * Factory function to create a UIEvent with specified type and options.
 *
 * @param {string} type - The type of the UIEvent (e.g., 'click', 'mouseover').
 * @param {UIEventInit} [eventInit] - Optional initialization options for the UIEvent.
 * @returns {UIEvent} The newly created UIEvent.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/UIEvent|UIEvent - MDN}
 *
 * @example
 * // Create a click UIEvent with default options
 * const clickEvent = constructUIEvent('click');
 *
 * @example
 * // Create a UIEvent with custom options
 * const customEvent = baseUIEventFactory('mouseover', { view: window, detail: 1 });
 */
export const constructUIEvent = baseUIEventFactory;
