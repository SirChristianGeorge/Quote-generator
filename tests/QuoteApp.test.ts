/**
 * @fileoverview Tests for the QuoteApp class.
 */

import { describe, test, expect, beforeEach, jest } from 'bun:test';
import QuoteApp from '../js/QuoteApp';
import { appElements } from '../js/config/domElements';

/**
 * Test suite for the QuoteApp class.
 */
describe('QuoteApp', () => {
  /**
   * The QuoteApp instance for testing.
   * @type {QuoteApp}
   */
  let quoteApp: QuoteApp;

  /**
   * Set up the testing environment before each test.
   */
  beforeEach(() => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([{ text: 'Example quote', author: 'Example author' }]),
    });

    document.body.innerHTML = `
    <article class="card" id="js-card">
      <div id="js-quote"></div>
      <div id="js-author"></div>
      <button id="js-quote-button"></button>
      <button id="js-twitter"></button>
    </article>
    <div id="js-loader"></div>
    `;

    const apiUrl = 'https://example.com/api';
    quoteApp = new QuoteApp({ apiUrl, appElements });
  });

  /**
   * Test case for checking if QuoteApp initializes correctly.
   */
  test('should initialize correctly', () => {
    expect(quoteApp).toBeDefined();
  });
});