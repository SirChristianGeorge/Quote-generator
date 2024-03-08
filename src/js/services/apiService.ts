import Quote from '../interfaces/Quote';

/**
 * ApiService class handles communication with an external API.
 * @class
 */

class ApiService {
    /**
     * The URL of the external API.
     * @private
     * @type {string}
     */

    private apiUrl: string;

    /**
     * Create an ApiService instance.
     * @constructor
     * @param {string} apiUrl - The URL of the external API.
     */
    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    /**
     * Fetch data from the external API.
     * @async
     * @function
     * @returns {Promise<Array>} - A promise that resolves to an array of quotes.
     * @throws {Error} - Throws an error if the API call is not successful.
     */
    fetchData = async (): Promise<Quote[]> => {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error('API error');
            }
            return response.json();
        } catch (error) {
            console.error('API call error:', error);
            throw error;
        }
    };
}

export default ApiService;
