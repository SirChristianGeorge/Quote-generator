/**
 * @file Tests for the Loader class.
 * @module LoaderTests
 */

import { describe, test, expect, beforeEach } from 'bun:test';

import Loader from '../../js/components/Loader';
import { loadingElements } from '../../js/config/domElements';

/**
 * Tests for the Loader class.
 *
 * @class
 * @memberof LoaderTests
 */
describe('Tests for the Loader', () => {
    let loaderElement: Loader;

    /**
     * Initializes a new instance of the Loader class before each test.
     *
     * @function
     * @name beforeEach
     * @memberof LoaderTests
     */

    beforeEach(() => {
        document.body.innerHTML = `<article class="card" id="js-card"><div class="loader hidden" id="js-loader"></div></article>`;

        loaderElement = new Loader(loadingElements);
    });

    /**
     * Verifies that the initial state has the loader hidden and the target element visible.
     *
     * @function
     * @name initial state should have loader hidden and target element visible
     * @memberof LoaderTests
     */
    test('initial state should have loader hidden and target element visible', () => {
        expect(loaderElement.getLoader.classList.contains('hidden')).toBe(true);
        expect(
            loaderElement.getElementAfterLoading.classList.contains('hidden'),
        ).toBe(false);
    });

    /**
     * Verifies that the loading method displays the loader and hides the target element.
     *
     * @function
     * @name loading method should display the loader and hide the target element
     * @memberof LoaderTests
     */
    test('loading method should display the loader and hide the target element', () => {
        loaderElement.loading();

        expect(loaderElement.getLoader.classList.contains('hidden')).toBe(
            false,
        );
        expect(
            loaderElement.getElementAfterLoading.classList.contains('hidden'),
        ).toBe(true);
    });

    /**
     * Verifies that the loadingEnd method hides the loader and displays the target element.
     *
     * @function
     * @name loadingEnd method should hide the loader and display the target element
     * @memberof LoaderTests
     */
    test('loadingEnd method should hide the loader and display the target element', () => {
        loaderElement.loadingEnd();

        expect(loaderElement.getLoader.classList.contains('hidden')).toBe(true);
        expect(
            loaderElement.getElementAfterLoading.classList.contains('hidden'),
        ).toBe(false);
    });

    /**
     * Verifies that the Loader throws an error on missing or invalid configuration.
     *
     * @function
     * @name throws error on missing or invalid configuration
     * @memberof LoaderTests
     */
    test('throws error on missing or invalid configuration', () => {
        expect(() => new Loader()).toThrow();
        expect(() => new Loader({})).toThrow();
    });

    /**
     * Verifies that the Loader handles asynchronous loading correctly.
     *
     * @function
     * @name handles asynchronous loading
     * @memberof LoaderTests
     */
    test('handles asynchronous loading', async () => {
        // Simulate an asynchronous operation
        const fakeAsyncDataLoad = async () => {
            return new Promise<void>((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 1000);
            });
        };

        loaderElement.loading();
        expect(loaderElement.getLoader.classList.contains('hidden')).toBe(
            false,
        );
        expect(
            loaderElement.getElementAfterLoading.classList.contains('hidden'),
        ).toBe(true);

        // Simulate the completion of the asynchronous operation
        await fakeAsyncDataLoad();

        setTimeout(() => {
            expect(loaderElement.getLoader.classList.contains('hidden')).toBe(
                true,
            );
            expect(
                loaderElement.getElementAfterLoading.classList.contains(
                    'hidden',
                ),
            ).toBe(false);
        }, 1000);
    });
});
