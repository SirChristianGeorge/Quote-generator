import type AppElements from './AppElements';

/**
 * @file Defines the application interfaces and options.
 * @module interface
 */

/**
 * Represents the options for initializing the QuoteApp.
 * @interface
 * @property {string} apiUrl - The URL of the external API.
 * @property {AppElements} elements - The HTML elements used by the application.
 */
interface AppOptions {
    apiUrl: string;
    appElements: AppElements;
}

export default AppOptions;
