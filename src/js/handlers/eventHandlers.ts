import QuoteService from '../services/quoteService';
import type Quote from '../interfaces/Quote';

/**
 * Handles new quote generation and updates the UI.
 * @function
 * @async
 * @param {Quote[]} quotes - An array of quotes.
 * @param {HTMLElement} quoteText - The HTML element where the quote text will be displayed.
 * @param {HTMLElement} authorText - The HTML element where the quote author will be displayed.
 * @returns {Promise<void>} - A promise that resolves when the UI is updated.
 */

export const handleNewQuote = (
    quotes: Quote[],
    quoteText: HTMLElement,
    authorText: HTMLElement,
): void => {
    /**
     * Gets a random quote from the provided array.
     * @function
     * @async
     * @param {Quote[]} quotes - An array of quotes.
     * @returns {void}
     */
    const quote = QuoteService.getRandomQuote(quotes);
    quoteText.textContent = quote.text;
    authorText.textContent = quote.author;
};

/**
 * Handles sharing the current quote on Twitter.
 * @function
 * @param {HTMLElement} quoteText - The HTML element containing the quote text.
 * @param {HTMLElement} authorText - The HTML element containing the quote author.
 * @returns {void}
 */
export const handleTweetQuote = (
    quoteText: HTMLElement,
    authorText: HTMLElement,
): void => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
    window.open(twitterUrl, '_blank');
};
