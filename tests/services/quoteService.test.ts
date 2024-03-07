/**
 * @file Tests for the QuoteService class.
 * @module QuoteServiceTests
 */

import { describe, test, expect } from 'bun:test';
import QuoteService from '../../js/services/quoteService';
import Quote from '../../js/interfaces/Quote';

/**
 * Tests for the QuoteService class.
 *
 * @class
 * @memberof QuoteServiceTests
 */
describe('QuoteService', () => {
    /**
     * Verifies that getRandomQuote returns a quote from the provided array.
     *
     * @function
     * @name getRandomQuote returns a quote from the provided array
     * @memberof QuoteServiceTests
     */
    test('getRandomQuote returns a quote from the provided array', () => {
        // Arrange
        const quotes: Quote[] = [
            { text: 'Quote 1', author: 'Author 1', tag: 'general' },
            { text: 'Quote 2', author: 'Author 2', tag: 'inspirational' },
            { text: 'Quote 3', author: 'Author 3', tag: 'motivational' },
        ];

        // Act
        const result = QuoteService.getRandomQuote(quotes);

        // Assert
        expect(quotes).toContain(result);
    });

    /**
     * Verifies that getRandomQuote returns undefined for an empty array.
     *
     * @function
     * @name getRandomQuote returns undefined for an empty array
     * @memberof QuoteServiceTests
     */
    test('getRandomQuote returns undefined for an empty array', () => {
        // Arrange
        const quotes: Quote[] = [];

        // Act
        const result = QuoteService.getRandomQuote(quotes);

        // Assert
        expect(result).toBeUndefined();
    });

    /**
     * Verifies that getRandomQuote returns the only quote for a single-element array.
     *
     * @function
     * @name getRandomQuote returns the only quote for a single-element array
     * @memberof QuoteServiceTests
     */
    test('getRandomQuote returns the only quote for a single-element array', () => {
        // Arrange
        const quotes: Quote[] = [
            { text: 'Quote 1', author: 'Author 1', tag: 'general' },
        ];

        // Act
        const result = QuoteService.getRandomQuote(quotes);

        // Assert
        expect(result).toEqual(quotes[0]);
    });
});
