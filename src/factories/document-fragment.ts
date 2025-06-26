const baseDocumentFragmentFactory = (
  ...args: ConstructorParameters<typeof DocumentFragment>
): InstanceType<typeof DocumentFragment> => new DocumentFragment(...args);

/**
 * Creates a new DocumentFragment.
 *
 * A DocumentFragment is a minimal document object that has no parent. It is used as a lightweight version of Document
 * that stores a segment of a document structure comprised of nodes just like a standard document. The key difference is
 * that because the document fragment isn't part of the active document tree structure, changes made to the fragment
 * don't affect the document, cause reflow, or incur any performance impact that can occur when changes are made.
 *
 * @returns {DocumentFragment} A new DocumentFragment instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment | MDN DocumentFragment}
 *
 * @example
 * const fragment = createDocumentFragment();
 * const newElement = document.createElement('div');
 * newElement.textContent = 'Hello, World!';
 * fragment.appendChild(newElement);
 * document.body.appendChild(fragment);
 */
export const createDocumentFragment = baseDocumentFragmentFactory;
/**
 * Creates a new DocumentFragment.
 *
 * A DocumentFragment is a minimal document object that has no parent. It is used as a lightweight version of Document
 * that stores a segment of a document structure comprised of nodes just like a standard document. The key difference is
 * that because the document fragment isn't part of the active document tree structure, changes made to the fragment
 * don't affect the document, cause reflow, or incur any performance impact that can occur when changes are made.
 *
 * @returns {DocumentFragment} A new DocumentFragment instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment | MDN DocumentFragment}
 *
 * @example
 * const fragment = initDocumentFragment();
 * const newElement = document.createElement('div');
 * newElement.textContent = 'Hello, World!';
 * fragment.appendChild(newElement);
 * document.body.appendChild(fragment);
 */
export const initDocumentFragment = baseDocumentFragmentFactory;
/**
 * Creates a new DocumentFragment.
 *
 * A DocumentFragment is a minimal document object that has no parent. It is used as a lightweight version of Document
 * that stores a segment of a document structure comprised of nodes just like a standard document. The key difference is
 * that because the document fragment isn't part of the active document tree structure, changes made to the fragment
 * don't affect the document, cause reflow, or incur any performance impact that can occur when changes are made.
 *
 * @returns {DocumentFragment} A new DocumentFragment instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment | MDN DocumentFragment}
 *
 * @example
 * const fragment = spawnDocumentFragment();
 * const newElement = document.createElement('div');
 * newElement.textContent = 'Hello, World!';
 * fragment.appendChild(newElement);
 * document.body.appendChild(fragment);
 */
export const spawnDocumentFragment = baseDocumentFragmentFactory;
/**
 * Creates a new DocumentFragment.
 *
 * A DocumentFragment is a minimal document object that has no parent. It is used as a lightweight version of Document
 * that stores a segment of a document structure comprised of nodes just like a standard document. The key difference is
 * that because the document fragment isn't part of the active document tree structure, changes made to the fragment
 * don't affect the document, cause reflow, or incur any performance impact that can occur when changes are made.
 *
 * @returns {DocumentFragment} A new DocumentFragment instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment | MDN DocumentFragment}
 *
 * @example
 * const fragment = buildDocumentFragment();
 * const newElement = document.createElement('div');
 * newElement.textContent = 'Hello, World!';
 * fragment.appendChild(newElement);
 * document.body.appendChild(fragment);
 */
export const buildDocumentFragment = baseDocumentFragmentFactory;
/**
 * Creates a new DocumentFragment.
 *
 * A DocumentFragment is a minimal document object that has no parent. It is used as a lightweight version of Document
 * that stores a segment of a document structure comprised of nodes just like a standard document. The key difference is
 * that because the document fragment isn't part of the active document tree structure, changes made to the fragment
 * don't affect the document, cause reflow, or incur any performance impact that can occur when changes are made.
 *
 * @returns {DocumentFragment} A new DocumentFragment instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment | MDN DocumentFragment}
 *
 * @example
 * const fragment = makeDocumentFragment();
 * const newElement = document.createElement('div');
 * newElement.textContent = 'Hello, World!';
 * fragment.appendChild(newElement);
 * document.body.appendChild(fragment);
 */
export const makeDocumentFragment = baseDocumentFragmentFactory;
/**
 * Creates a new DocumentFragment.
 *
 * A DocumentFragment is a minimal document object that has no parent. It is used as a lightweight version of Document
 * that stores a segment of a document structure comprised of nodes just like a standard document. The key difference is
 * that because the document fragment isn't part of the active document tree structure, changes made to the fragment
 * don't affect the document, cause reflow, or incur any performance impact that can occur when changes are made.
 *
 * @returns {DocumentFragment} A new DocumentFragment instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment | MDN DocumentFragment}
 *
 * @example
 * const fragment = constructDocumentFragment();
 * const newElement = document.createElement('div');
 * newElement.textContent = 'Hello, World!';
 * fragment.appendChild(newElement);
 * document.body.appendChild(fragment);
 */
export const constructDocumentFragment = baseDocumentFragmentFactory;
