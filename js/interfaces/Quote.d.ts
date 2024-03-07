/**
 * @file This file contains various interfaces and types used in the application.
 * @module interface
 */

/**
 * Represents a quote with text and author information.
 * @interface Quote
 * @property {string} text - The text of the quote.
 * @property {string} author - The author of the quote.
 * @property {string} tag - The tag of the quote.
 */

interface Quote {
    text: string;
    author: string;
    tag: string;
}

export default Quote;
