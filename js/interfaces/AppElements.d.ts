/**
 * @file Defines the application interfaces and options.
 * @module interface
 */

/**
 * Represents the HTML elements used by the application.
 * @interface
 * @property {string} quote - The selector for the quote element.
 * @property {string} author - The selector for the author element.
 * @property {string} quoteButton - The selector for the quote button element.
 * @property {string} twitterQuoteButton - The selector for the Twitter quote button element.
 */

interface AppElements {
    quote: string;
    author: string;
    quoteButton: string;
    twitterQuoteButton: string;
}

export default AppElements;
