const baseTransformStreamFactory = (
  ...args: ConstructorParameters<typeof TransformStream>
): InstanceType<typeof TransformStream> => new TransformStream(...args);

/**
 * Creates a new TransformStream with the specified transformation logic.
 *
 * @param {Transformer} transformer - An object implementing the transformation logic.
 * @param {QueuingStrategy} [writableStrategy] - An optional queuing strategy to use for the writable side.
 * @param {QueuingStrategy} [readableStrategy] - An optional queuing strategy to use for the readable side.
 * @returns {TransformStream} A new TransformStream instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TransformStream | TransformStream - MDN}
 *
 * @example
 * const transformer = {
 *   transform(chunk, controller) {
 *     controller.enqueue(chunk.toUpperCase());
 *   }
 * };
 * const transformStream = createTransformStream(transformer);
 * const readable = new ReadableStream({
 *   start(controller) {
 *     controller.enqueue('hello');
 *     controller.close();
 *   }
 * });
 * const writable = new WritableStream({
 *   write(chunk) {
 *     console.log(chunk); // Outputs: 'HELLO'
 *   }
 * });
 * readable.pipeThrough(transformStream).pipeTo(writable);
 */
export const createTransformStream = baseTransformStreamFactory;
/**
 * Creates a new TransformStream with the specified transformation logic.
 *
 * @param {Transformer} transformer - An object implementing the transformation logic.
 * @param {QueuingStrategy} [writableStrategy] - An optional queuing strategy to use for the writable side.
 * @param {QueuingStrategy} [readableStrategy] - An optional queuing strategy to use for the readable side.
 * @returns {TransformStream} A new TransformStream instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TransformStream | TransformStream - MDN}
 *
 * @example
 * const transformer = {
 *   transform(chunk, controller) {
 *     controller.enqueue(chunk.toUpperCase());
 *   }
 * };
 * const transformStream = initTransformStream(transformer);
 * const readable = new ReadableStream({
 *   start(controller) {
 *     controller.enqueue('hello');
 *     controller.close();
 *   }
 * });
 * const writable = new WritableStream({
 *   write(chunk) {
 *     console.log(chunk); // Outputs: 'HELLO'
 *   }
 * });
 * readable.pipeThrough(transformStream).pipeTo(writable);
 */
export const initTransformStream = baseTransformStreamFactory;
/**
 * Creates a new TransformStream with the specified transformation logic.
 *
 * @param {Transformer} transformer - An object implementing the transformation logic.
 * @param {QueuingStrategy} [writableStrategy] - An optional queuing strategy to use for the writable side.
 * @param {QueuingStrategy} [readableStrategy] - An optional queuing strategy to use for the readable side.
 * @returns {TransformStream} A new TransformStream instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TransformStream | TransformStream - MDN}
 *
 * @example
 * const transformer = {
 *   transform(chunk, controller) {
 *     controller.enqueue(chunk.toUpperCase());
 *   }
 * };
 * const transformStream = spawnTransformStream(transformer);
 * const readable = new ReadableStream({
 *   start(controller) {
 *     controller.enqueue('hello');
 *     controller.close();
 *   }
 * });
 * const writable = new WritableStream({
 *   write(chunk) {
 *     console.log(chunk); // Outputs: 'HELLO'
 *   }
 * });
 * readable.pipeThrough(transformStream).pipeTo(writable);
 */
export const spawnTransformStream = baseTransformStreamFactory;
/**
 * Creates a new TransformStream with the specified transformation logic.
 *
 * @param {Transformer} transformer - An object implementing the transformation logic.
 * @param {QueuingStrategy} [writableStrategy] - An optional queuing strategy to use for the writable side.
 * @param {QueuingStrategy} [readableStrategy] - An optional queuing strategy to use for the readable side.
 * @returns {TransformStream} A new TransformStream instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TransformStream | TransformStream - MDN}
 *
 * @example
 * const transformer = {
 *   transform(chunk, controller) {
 *     controller.enqueue(chunk.toUpperCase());
 *   }
 * };
 * const transformStream = buildTransformStream(transformer);
 * const readable = new ReadableStream({
 *   start(controller) {
 *     controller.enqueue('hello');
 *     controller.close();
 *   }
 * });
 * const writable = new WritableStream({
 *   write(chunk) {
 *     console.log(chunk); // Outputs: 'HELLO'
 *   }
 * });
 * readable.pipeThrough(transformStream).pipeTo(writable);
 */
export const buildTransformStream = baseTransformStreamFactory;
/**
 * Creates a new TransformStream with the specified transformation logic.
 *
 * @param {Transformer} transformer - An object implementing the transformation logic.
 * @param {QueuingStrategy} [writableStrategy] - An optional queuing strategy to use for the writable side.
 * @param {QueuingStrategy} [readableStrategy] - An optional queuing strategy to use for the readable side.
 * @returns {TransformStream} A new TransformStream instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TransformStream | TransformStream - MDN}
 *
 * @example
 * const transformer = {
 *   transform(chunk, controller) {
 *     controller.enqueue(chunk.toUpperCase());
 *   }
 * };
 * const transformStream = makeTransformStream(transformer);
 * const readable = new ReadableStream({
 *   start(controller) {
 *     controller.enqueue('hello');
 *     controller.close();
 *   }
 * });
 * const writable = new WritableStream({
 *   write(chunk) {
 *     console.log(chunk); // Outputs: 'HELLO'
 *   }
 * });
 * readable.pipeThrough(transformStream).pipeTo(writable);
 */
export const makeTransformStream = baseTransformStreamFactory;
/**
 * Creates a new TransformStream with the specified transformation logic.
 *
 * @param {Transformer} transformer - An object implementing the transformation logic.
 * @param {QueuingStrategy} [writableStrategy] - An optional queuing strategy to use for the writable side.
 * @param {QueuingStrategy} [readableStrategy] - An optional queuing strategy to use for the readable side.
 * @returns {TransformStream} A new TransformStream instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TransformStream | TransformStream - MDN}
 *
 * @example
 * const transformer = {
 *   transform(chunk, controller) {
 *     controller.enqueue(chunk.toUpperCase());
 *   }
 * };
 * const transformStream = constructTransformStream(transformer);
 * const readable = new ReadableStream({
 *   start(controller) {
 *     controller.enqueue('hello');
 *     controller.close();
 *   }
 * });
 * const writable = new WritableStream({
 *   write(chunk) {
 *     console.log(chunk); // Outputs: 'HELLO'
 *   }
 * });
 * readable.pipeThrough(transformStream).pipeTo(writable);
 */
export const constructTransformStream = baseTransformStreamFactory;
