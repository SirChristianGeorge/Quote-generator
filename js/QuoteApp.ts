import { loadingElements } from './config/domElements';

import ApiService from './services/apiService';
import Loader from './components/Loader';

import type Quote from './interfaces/Quote';
import type AppOptions from './interfaces/AppOptions';

import { handleNewQuote, handleTweetQuote } from './handlers/eventHandlers';
import { selectElementOrFail } from './helpers/domHelpers';

/**
 * QuoteApp class represents the main application logic.
 * @class
 */
class QuoteApp {
    /**
     * The URL of the external API.
     * @private
     * @type {string}
     */
    private apiUrl: string;

    /**
     * The API service instance.
     * @private
     * @type {ApiService}
     */
    private api: ApiService;

    /**
     * The loader instance to handle UI loading states.
     * @private
     * @type {Loader}
     */
    private loader: Loader;

    /**
     * An array of quotes from the external API.
     * @private
     * @type {Array<Quote>}
     */
    private apiQuotes: Quote[];

    /**
     * The HTML element where the quote text will be displayed.
     * @private
     * @type {HTMLElement}
     */
    private quoteText: HTMLElement;

    /**
     * The HTML element where the quote author will be displayed.
     * @private
     * @type {HTMLElement}
     */
    private quoteAuthor: HTMLElement;

    /**
     * The HTML button element to generate a new quote.
     * @private
     * @type {HTMLElement}
     */
    private quoteButton: HTMLElement;

    /**
     * The HTML button element to tweet the current quote.
     * @private
     * @type {HTMLElement}
     */
    private twitterQuoteButton: HTMLElement;

    /**
     * The function to handle new quote generation.
     * @private
     * @type {(quotes: Quote[], quoteText: HTMLElement, authorText: HTMLElement) => void}
     */
    private newQuote: (
        quotes: Quote[],
        quoteText: HTMLElement,
        authorText: HTMLElement,
    ) => void;

    /**
     * The function to handle tweeting the current quote.
     * @private
     * @type {(quoteText: HTMLElement, authorText: HTMLElement) => void}
     */
    private TweetQuote: (
        quoteText: HTMLElement,
        authorText: HTMLElement,
    ) => void;

    /**
     * Create a QuoteApp instance.
     * @constructor
     * @param {string} apiUrl - The URL of the external API.
     */
    constructor({ apiUrl, appElements }: AppOptions) {
        this.api = new ApiService(apiUrl);
        this.loader = new Loader(loadingElements);

        this.apiQuotes = [];
        this.quoteText = selectElementOrFail(appElements.quote);
        this.quoteAuthor = selectElementOrFail(appElements.author);
        this.quoteButton = selectElementOrFail(appElements.quoteButton);
        this.twitterQuoteButton = selectElementOrFail(
            appElements.twitterQuoteButton,
        );

        this.newQuote = handleNewQuote;
        this.TweetQuote = handleTweetQuote;

        this.init();
    }

    /**
     * Get the URL of the external API.
     * @returns {string} - The URL of the external API.
     */
    public get getApiUrl(): string {
        return this.apiUrl;
    }

    /**
     * Get the API service instance.
     * @returns {ApiService} - The API service instance.
     */
    public get getApi(): ApiService {
        return this.api;
    }

    /**
     * Get the loader instance to handle UI loading states.
     * @returns {Loader} - The loader instance.
     */
    public get getLoader(): Loader {
        return this.loader;
    }

    /**
     * Get an array of quotes from the external API.
     * @returns {Array<Quote>} - An array of quotes from the external API.
     */
    public get getApiQuotes(): Array<Quote> {
        return this.apiQuotes;
    }

    /**
     * Get the HTML element where the quote text will be displayed.
     * @returns {HTMLElement} - The HTML element for the quote text.
     */
    public get getQuoteText(): HTMLElement {
        return this.quoteText;
    }

    /**
     * Get the HTML element where the quote author will be displayed.
     * @returns {HTMLElement} - The HTML element for the quote author.
     */
    public get getQuoteAuthor(): HTMLElement {
        return this.quoteAuthor;
    }

    /**
     * Get the HTML button element to generate a new quote.
     * @returns {HTMLElement} - The HTML button element for generating a new quote.
     */
    public get getQuoteButton(): HTMLElement {
        return this.quoteButton;
    }

    /**
     * Get the HTML button element to tweet the current quote.
     * @returns {HTMLElement} - The HTML button element for tweeting the current quote.
     */
    public get getTwitterQuoteButton(): HTMLElement {
        return this.twitterQuoteButton;
    }

    /**
     * Get the function to handle new quote generation.
     * @returns {(quotes: Quote[], quoteText: HTMLElement, authorText: HTMLElement) => void} - The function to handle new quote generation.
     */
    public get getNewQuote(): (quotes: Quote[], quoteText: HTMLElement, authorText: HTMLElement) => void {
        return this.newQuote;
    }

    /**
     * Get the function to handle tweeting the current quote.
     * @returns {(quoteText: HTMLElement, authorText: HTMLElement) => void} - The function to handle tweeting the current quote.
     */
    public get getTweetQuote(): (quoteText: HTMLElement, authorText: HTMLElement) => void {
        return this.TweetQuote;
    }

    /**
     * Initialize the application.
     * @async
     * @private
     * @function
     * @returns {Promise<void>} - A promise that resolves when the application is initialized.
     */
    private async init(): Promise<void> {
        await this.updateQuotes();
        this.generateNewQuote();
        this.setupEventListeners();
    }

    /**
     * Update the list of quotes from the external API.
     * @async
     * @private
     * @function
     * @returns {Promise<void>} - A promise that resolves when the quotes are updated.
     */
    private async updateQuotes(): Promise<void> {
        this.loader.loading();
        try {
            const quotes = await this.api.fetchData();
            this.apiQuotes = quotes;
            this.loader.loadingEnd();
        } catch (error) {
            console.error('Error updating quotes:', error);
        }
    }

    /**
     * Generate a new quote and update the UI.
     * @private
     * @function
     * @returns {void}
     */
    private generateNewQuote(): void {
        this.loader.loading();
        this.newQuote(this.apiQuotes, this.quoteText, this.quoteAuthor);
        this.loader.loadingEnd();
    }

    /**
     * Tweets the current quote on Twitter.
     * @private
     * @function
     * @returns {void}
     */
    private tweetQuote(): void {
        this.TweetQuote(this.quoteText, this.quoteAuthor);
    }

    /**
     * Set up event listeners for the application.
     * @private
     * @function
     * @returns {void}
     */
    private setupEventListeners(): void {
        document.addEventListener('DOMContentLoaded', () =>
            this.generateNewQuote(),
        );
        this.quoteButton.addEventListener('click', () =>
            this.generateNewQuote(),
        );
        this.twitterQuoteButton.addEventListener('click', () =>
            this.tweetQuote(),
        );
    }
}

/**
 * @module QuoteApp
 */
export default QuoteApp;
