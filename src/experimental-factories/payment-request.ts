const basePaymentRequestFactory = (
  ...args: ConstructorParameters<typeof PaymentRequest>
): InstanceType<typeof PaymentRequest> => new PaymentRequest(...args);

/**
 * Creates a new instance of PaymentRequest with the specified options.
 *
 * @param {PaymentMethodData[]} methodData - An array of payment method objects.
 * @param {PaymentDetailsInit} details - An object containing the details of the payment.
 * @param {PaymentOptions} [options] - An optional object containing additional payment options.
 * @returns {PaymentRequest} A new PaymentRequest object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest | MDN PaymentRequest}
 *
 * @example
 * const methodData = [{
 *   supportedMethods: 'basic-card',
 *   data: {
 *     supportedNetworks: ['visa', 'mastercard']
 *   }
 * }];
 *
 * const details = {
 *   total: {
 *     label: 'Total',
 *     amount: { currency: 'USD', value: '55.00' }
 *   }
 * };
 *
 * const options = {
 *   requestPayerName: true,
 *   requestPayerEmail: true
 * };
 *
 * const paymentRequest = createPaymentRequest(methodData, details, options);
 *
 * @experimental
 */
export const createPaymentRequest = basePaymentRequestFactory;
/**
 * Creates a new instance of PaymentRequest with the specified options.
 *
 * @param {PaymentMethodData[]} methodData - An array of payment method objects.
 * @param {PaymentDetailsInit} details - An object containing the details of the payment.
 * @param {PaymentOptions} [options] - An optional object containing additional payment options.
 * @returns {PaymentRequest} A new PaymentRequest object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest | MDN PaymentRequest}
 *
 * @example
 * const methodData = [{
 *   supportedMethods: 'basic-card',
 *   data: {
 *     supportedNetworks: ['visa', 'mastercard']
 *   }
 * }];
 *
 * const details = {
 *   total: {
 *     label: 'Total',
 *     amount: { currency: 'USD', value: '55.00' }
 *   }
 * };
 *
 * const options = {
 *   requestPayerName: true,
 *   requestPayerEmail: true
 * };
 *
 * const paymentRequest = initPaymentRequest(methodData, details, options);
 *
 * @experimental
 */
export const initPaymentRequest = basePaymentRequestFactory;
/**
 * Creates a new instance of PaymentRequest with the specified options.
 *
 * @param {PaymentMethodData[]} methodData - An array of payment method objects.
 * @param {PaymentDetailsInit} details - An object containing the details of the payment.
 * @param {PaymentOptions} [options] - An optional object containing additional payment options.
 * @returns {PaymentRequest} A new PaymentRequest object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest | MDN PaymentRequest}
 *
 * @example
 * const methodData = [{
 *   supportedMethods: 'basic-card',
 *   data: {
 *     supportedNetworks: ['visa', 'mastercard']
 *   }
 * }];
 *
 * const details = {
 *   total: {
 *     label: 'Total',
 *     amount: { currency: 'USD', value: '55.00' }
 *   }
 * };
 *
 * const options = {
 *   requestPayerName: true,
 *   requestPayerEmail: true
 * };
 *
 * const paymentRequest = spawnPaymentRequest(methodData, details, options);
 *
 * @experimental
 */
export const spawnPaymentRequest = basePaymentRequestFactory;
/**
 * Creates a new instance of PaymentRequest with the specified options.
 *
 * @param {PaymentMethodData[]} methodData - An array of payment method objects.
 * @param {PaymentDetailsInit} details - An object containing the details of the payment.
 * @param {PaymentOptions} [options] - An optional object containing additional payment options.
 * @returns {PaymentRequest} A new PaymentRequest object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest | MDN PaymentRequest}
 *
 * @example
 * const methodData = [{
 *   supportedMethods: 'basic-card',
 *   data: {
 *     supportedNetworks: ['visa', 'mastercard']
 *   }
 * }];
 *
 * const details = {
 *   total: {
 *     label: 'Total',
 *     amount: { currency: 'USD', value: '55.00' }
 *   }
 * };
 *
 * const options = {
 *   requestPayerName: true,
 *   requestPayerEmail: true
 * };
 *
 * const paymentRequest = buildPaymentRequest(methodData, details, options);
 *
 * @experimental
 */
export const buildPaymentRequest = basePaymentRequestFactory;
/**
 * Creates a new instance of PaymentRequest with the specified options.
 *
 * @param {PaymentMethodData[]} methodData - An array of payment method objects.
 * @param {PaymentDetailsInit} details - An object containing the details of the payment.
 * @param {PaymentOptions} [options] - An optional object containing additional payment options.
 * @returns {PaymentRequest} A new PaymentRequest object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest | MDN PaymentRequest}
 *
 * @example
 * const methodData = [{
 *   supportedMethods: 'basic-card',
 *   data: {
 *     supportedNetworks: ['visa', 'mastercard']
 *   }
 * }];
 *
 * const details = {
 *   total: {
 *     label: 'Total',
 *     amount: { currency: 'USD', value: '55.00' }
 *   }
 * };
 *
 * const options = {
 *   requestPayerName: true,
 *   requestPayerEmail: true
 * };
 *
 * const paymentRequest = makePaymentRequest(methodData, details, options);
 *
 * @experimental
 */
export const makePaymentRequest = basePaymentRequestFactory;
/**
 * Creates a new instance of PaymentRequest with the specified options.
 *
 * @param {PaymentMethodData[]} methodData - An array of payment method objects.
 * @param {PaymentDetailsInit} details - An object containing the details of the payment.
 * @param {PaymentOptions} [options] - An optional object containing additional payment options.
 * @returns {PaymentRequest} A new PaymentRequest object.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest | MDN PaymentRequest}
 *
 * @example
 * const methodData = [{
 *   supportedMethods: 'basic-card',
 *   data: {
 *     supportedNetworks: ['visa', 'mastercard']
 *   }
 * }];
 *
 * const details = {
 *   total: {
 *     label: 'Total',
 *     amount: { currency: 'USD', value: '55.00' }
 *   }
 * };
 *
 * const options = {
 *   requestPayerName: true,
 *   requestPayerEmail: true
 * };
 *
 * const paymentRequest = constructPaymentRequest(methodData, details, options);
 *
 * @experimental
 */
export const constructPaymentRequest = basePaymentRequestFactory;
