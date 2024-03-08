import type AppElements from '../interfaces/AppElements';
import type LoadingElements from '../interfaces/LoadingElements';

/**
 * @typedef {Object} LoadingElements
 * @property {string} loader - The selector for the loader element.
 * @property {string} elementAfterLoading - The selector for the element displayed after loading.
 */

/**
 * @typedef {Object} AppElements
 * @property {string} quote - The selector for the quote element.
 * @property {string} author - The selector for the author element.
 * @property {string} quoteButton - The selector for the quote button element.
 * @property {string} twitterQuoteButton - The selector for the Twitter quote button element.
 */

/**
 * Loading elements configuration.
 * @type {LoadingElements}
 */
export const loadingElements: LoadingElements = {
    loader: '#js-loader',
    elementAfterLoading: '#js-card',
};

/**
 * Application elements configuration.
 * @type {AppElements}
 */
export const appElements: AppElements = {
    quote: '#js-quote',
    author: '#js-author',
    quoteButton: '#js-quote-button',
    twitterQuoteButton: '#js-twitter',
};
