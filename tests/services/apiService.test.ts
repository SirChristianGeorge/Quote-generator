/**
 * @file Tests for the ApiService class.
 * @module ApiServiceTests
 */

import { describe, test, expect, beforeEach, jest } from 'bun:test';

import ApiService from '../../js/services/apiService';
import Quote from '../../js/interfaces/Quote';

/**
 * Tests for the ApiService class.
 *
 * @class
 * @memberof ApiServiceTests
 */
describe('ApiService', () => {
    /**
     * Reset the fetch mock before each test.
     *
     * @function
     * @name beforeEach
     * @memberof ApiServiceTests
     */
    beforeEach(() => {
        // Reset fetch mock
        globalThis.fetch = jest.fn();
    });

    /**
     * Verifies that fetchData resolves with data on a successful API call.
     *
     * @function
     * @name fetchData resolves with data on successful API call
     * @memberof ApiServiceTests
     */
    test('fetchData resolves with data on successful API call', async () => {
        const apiUrl: string = 'https://example.com/api';
        const apiService: ApiService = new ApiService(apiUrl);

        const mockData: Quote[] = [
            { text: 'Quote 1', author: 'Author 1', tag: 'general' },
        ];

        // Mock the fetch function to return a resolved Promise with the desired data
        globalThis.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: () => Promise.resolve(mockData),
        });

        const result = await apiService.fetchData();

        expect(result).toEqual(mockData);
        expect(globalThis.fetch).toHaveBeenCalledWith(apiUrl);
    });

    /**
     * Verifies that fetchData rejects with an error on an unsuccessful API call.
     *
     * @function
     * @name fetchData rejects with an error on unsuccessful API call
     * @memberof ApiServiceTests
     */
    test('fetchData rejects with an error on unsuccessful API call', async () => {
        const apiUrl = 'https://example.com/api';
        const apiService = new ApiService(apiUrl);

        // Mock the fetch function to return a rejected Promise with an error message
        globalThis.fetch = jest
            .fn()
            .mockRejectedValue({ message: 'API error' });

        await expect(apiService.fetchData()).rejects.toThrow('API error');
        expect(globalThis.fetch).toHaveBeenCalledWith(apiUrl);
    });
});
