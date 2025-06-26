const baseNotificationFactory = (
  ...args: ConstructorParameters<typeof Notification>
): InstanceType<typeof Notification> => new Notification(...args);

/**
 * Creates a new Notification with the specified title and options.
 *
 * This factory function generates a Notification instance, allowing
 * for the display of system notifications to the user.
 *
 * @param {string} title - The title of the notification.
 * @param {NotificationOptions} [options] - Optional configuration options for the notification.
 * @returns {Notification} The created Notification instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Notification}
 *
 * @example
 * // Create a simple notification with a title and body text
 * const notification = createNotification('Hello World', {
 *   body: 'This is a notification body text.'
 * });
 */
export const createNotification = baseNotificationFactory;
/**
 * Creates a new Notification with the specified title and options.
 *
 * This factory function generates a Notification instance, allowing
 * for the display of system notifications to the user.
 *
 * @param {string} title - The title of the notification.
 * @param {NotificationOptions} [options] - Optional configuration options for the notification.
 * @returns {Notification} The created Notification instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Notification}
 *
 * @example
 * // Create a simple notification with a title and body text
 * const notification = initNotification('Hello World', {
 *   body: 'This is a notification body text.'
 * });
 */
export const initNotification = baseNotificationFactory;
/**
 * Creates a new Notification with the specified title and options.
 *
 * This factory function generates a Notification instance, allowing
 * for the display of system notifications to the user.
 *
 * @param {string} title - The title of the notification.
 * @param {NotificationOptions} [options] - Optional configuration options for the notification.
 * @returns {Notification} The created Notification instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Notification}
 *
 * @example
 * // Create a simple notification with a title and body text
 * const notification = spawnNotification('Hello World', {
 *   body: 'This is a notification body text.'
 * });
 */
export const spawnNotification = baseNotificationFactory;
/**
 * Creates a new Notification with the specified title and options.
 *
 * This factory function generates a Notification instance, allowing
 * for the display of system notifications to the user.
 *
 * @param {string} title - The title of the notification.
 * @param {NotificationOptions} [options] - Optional configuration options for the notification.
 * @returns {Notification} The created Notification instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Notification}
 *
 * @example
 * // Create a simple notification with a title and body text
 * const notification = buildNotification('Hello World', {
 *   body: 'This is a notification body text.'
 * });
 */
export const buildNotification = baseNotificationFactory;
/**
 * Creates a new Notification with the specified title and options.
 *
 * This factory function generates a Notification instance, allowing
 * for the display of system notifications to the user.
 *
 * @param {string} title - The title of the notification.
 * @param {NotificationOptions} [options] - Optional configuration options for the notification.
 * @returns {Notification} The created Notification instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Notification}
 *
 * @example
 * // Create a simple notification with a title and body text
 * const notification = makeNotification('Hello World', {
 *   body: 'This is a notification body text.'
 * });
 */
export const makeNotification = baseNotificationFactory;
/**
 * Creates a new Notification with the specified title and options.
 *
 * This factory function generates a Notification instance, allowing
 * for the display of system notifications to the user.
 *
 * @param {string} title - The title of the notification.
 * @param {NotificationOptions} [options] - Optional configuration options for the notification.
 * @returns {Notification} The created Notification instance.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Notification}
 *
 * @example
 * // Create a simple notification with a title and body text
 * const notification = constructNotification('Hello World', {
 *   body: 'This is a notification body text.'
 * });
 */
export const constructNotification = baseNotificationFactory;
