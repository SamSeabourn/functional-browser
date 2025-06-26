const basePointerEventFactory = (
  ...args: ConstructorParameters<typeof PointerEvent>
): InstanceType<typeof PointerEvent> => new PointerEvent(...args);

/**
 * Creates a new PointerEvent with the specified type and options.
 *
 * @param {string} type - The type of the pointer event (e.g., 'pointerdown', 'pointermove').
 * @param {PointerEventInit} [options={}] - An optional object containing event properties.
 * @returns {PointerEvent} A new PointerEvent object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent | PointerEvent - MDN}
 *
 * @example
 * const pointerEvent = createPointerEvent('pointerdown', {
 *   bubbles: true,
 *   cancelable: true,
 *   pointerId: 1,
 *   width: 10,
 *   height: 10,
 *   pressure: 0.5,
 *   tangentialPressure: 0,
 *   tiltX: 0,
 *   tiltY: 0,
 *   twist: 0,
 *   pointerType: 'pen',
 *   isPrimary: true
 * });
 */
export const createPointerEvent = basePointerEventFactory;
/**
 * Creates a new PointerEvent with the specified type and options.
 *
 * @param {string} type - The type of the pointer event (e.g., 'pointerdown', 'pointermove').
 * @param {PointerEventInit} [options={}] - An optional object containing event properties.
 * @returns {PointerEvent} A new PointerEvent object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent | PointerEvent - MDN}
 *
 * @example
 * const pointerEvent = initPointerEvent('pointerdown', {
 *   bubbles: true,
 *   cancelable: true,
 *   pointerId: 1,
 *   width: 10,
 *   height: 10,
 *   pressure: 0.5,
 *   tangentialPressure: 0,
 *   tiltX: 0,
 *   tiltY: 0,
 *   twist: 0,
 *   pointerType: 'pen',
 *   isPrimary: true
 * });
 */
export const initPointerEvent = basePointerEventFactory;
/**
 * Creates a new PointerEvent with the specified type and options.
 *
 * @param {string} type - The type of the pointer event (e.g., 'pointerdown', 'pointermove').
 * @param {PointerEventInit} [options={}] - An optional object containing event properties.
 * @returns {PointerEvent} A new PointerEvent object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent | PointerEvent - MDN}
 *
 * @example
 * const pointerEvent = spawnPointerEvent('pointerdown', {
 *   bubbles: true,
 *   cancelable: true,
 *   pointerId: 1,
 *   width: 10,
 *   height: 10,
 *   pressure: 0.5,
 *   tangentialPressure: 0,
 *   tiltX: 0,
 *   tiltY: 0,
 *   twist: 0,
 *   pointerType: 'pen',
 *   isPrimary: true
 * });
 */
export const spawnPointerEvent = basePointerEventFactory;
/**
 * Creates a new PointerEvent with the specified type and options.
 *
 * @param {string} type - The type of the pointer event (e.g., 'pointerdown', 'pointermove').
 * @param {PointerEventInit} [options={}] - An optional object containing event properties.
 * @returns {PointerEvent} A new PointerEvent object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent | PointerEvent - MDN}
 *
 * @example
 * const pointerEvent = buildPointerEvent('pointerdown', {
 *   bubbles: true,
 *   cancelable: true,
 *   pointerId: 1,
 *   width: 10,
 *   height: 10,
 *   pressure: 0.5,
 *   tangentialPressure: 0,
 *   tiltX: 0,
 *   tiltY: 0,
 *   twist: 0,
 *   pointerType: 'pen',
 *   isPrimary: true
 * });
 */
export const buildPointerEvent = basePointerEventFactory;
/**
 * Creates a new PointerEvent with the specified type and options.
 *
 * @param {string} type - The type of the pointer event (e.g., 'pointerdown', 'pointermove').
 * @param {PointerEventInit} [options={}] - An optional object containing event properties.
 * @returns {PointerEvent} A new PointerEvent object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent | PointerEvent - MDN}
 *
 * @example
 * const pointerEvent = makePointerEvent('pointerdown', {
 *   bubbles: true,
 *   cancelable: true,
 *   pointerId: 1,
 *   width: 10,
 *   height: 10,
 *   pressure: 0.5,
 *   tangentialPressure: 0,
 *   tiltX: 0,
 *   tiltY: 0,
 *   twist: 0,
 *   pointerType: 'pen',
 *   isPrimary: true
 * });
 */
export const makePointerEvent = basePointerEventFactory;
/**
 * Creates a new PointerEvent with the specified type and options.
 *
 * @param {string} type - The type of the pointer event (e.g., 'pointerdown', 'pointermove').
 * @param {PointerEventInit} [options={}] - An optional object containing event properties.
 * @returns {PointerEvent} A new PointerEvent object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent | PointerEvent - MDN}
 *
 * @example
 * const pointerEvent = constructPointerEvent('pointerdown', {
 *   bubbles: true,
 *   cancelable: true,
 *   pointerId: 1,
 *   width: 10,
 *   height: 10,
 *   pressure: 0.5,
 *   tangentialPressure: 0,
 *   tiltX: 0,
 *   tiltY: 0,
 *   twist: 0,
 *   pointerType: 'pen',
 *   isPrimary: true
 * });
 */
export const constructPointerEvent = basePointerEventFactory;
