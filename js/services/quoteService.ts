import Quote from '../interfaces/Quote';

/**
 * QuoteService class provides utility methods for working with quotes.
 * @class
 */

class QuoteService {
    /**
     * Get a random quote from the provided array of quotes.
     * @static
     * @function
     * @param {Quote[]} quotes - An array of quotes.
     * @returns {Quote} - A random quote object.
     */
    static getRandomQuote(quotes: Quote[]): Quote {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }
}

export default QuoteService;
