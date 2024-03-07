import { describe, test, expect, jest } from 'bun:test';
import {
    handleNewQuote,
    handleTweetQuote,
} from '../../js/handlers/eventHandlers';
import Quote from '../../js/interfaces/Quote';

/**
 * @file Tests for the handlers.
 * @module HandlersTests
 */

/**
 * Tests for the handleNewQuote function.
 */
describe('handleNewQuote', () => {
    /**
     * Updates UI with a new quote.
     * @test
     */
    test('updates UI with a new quote', () => {
        // Mock data
        const mockQuotes: Quote[] = [
            { text: 'Mock Quote Text', author: 'Mock Author', tag: 'general' },
        ];

        // Set up the HTML structure
        document.body.innerHTML = '<div class="container"></div>';

        // Mock HTML elements
        const quoteTextMock: HTMLElement = document.createElement('div');
        const authorTextMock: HTMLElement = document.createElement('div');

        // Call the function
        handleNewQuote(mockQuotes, quoteTextMock, authorTextMock);

        // Assertion
        expect(quoteTextMock.textContent).toBe('Mock Quote Text');
        expect(authorTextMock.textContent).toBe('Mock Author');
    });
});

/**
 * Tests for the handleTweetQuote function.
 */
describe('handleTweetQuote', () => {
    /**
     * Opens Twitter window with correct URL.
     * @test
     */
    test('opens Twitter window with correct URL', () => {
        // Mock HTML elements
        const quoteTextMock: HTMLElement = document.createElement('div');
        const authorTextMock: HTMLElement = document.createElement('div');

        // Set text content to simulate quote and author
        quoteTextMock.textContent = 'Mock Quote Text';
        authorTextMock.textContent = 'Mock Author';

        // Spy on window.open to check if it is called with the correct URL
        const windowOpenSpy = jest.spyOn(window as object, 'open');

        // Call the function
        handleTweetQuote(quoteTextMock, authorTextMock);

        // Assertion
        expect(windowOpenSpy).toHaveBeenCalledWith(
            'https://twitter.com/intent/tweet?text=Mock Quote Text - Mock Author',
            '_blank',
        );
    });
});
