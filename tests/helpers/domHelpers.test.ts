import { describe, test, expect, beforeEach } from 'bun:test';
import { selectElementOrFail } from '../../js/helpers/domHelpers';

describe('Tests for selectElementOrFail', () => {
    beforeEach(() => {
        // Set up any necessary DOM elements or configurations.
    });

    /**
     * Verifies that selectElementOrFail returns the selected element.
     *
     * @function
     * @name returns the selected element
     */
    test('returns the selected element', () => {
        document.body.innerHTML = '<div id="testElement"></div>';

        const selectedElement = selectElementOrFail('#testElement');

        expect(selectedElement instanceof HTMLElement).toBe(true);
        expect(selectedElement.id).toBe('testElement');
    });

    /**
     * Verifies that selectElementOrFail throws an error when the element is not found.
     *
     * @function
     * @name throws an error when the element is not found
     */
    test('throws an error when the element is not found', () => {
        // Ensure the element with the specified selector is not present.

        expect(() => selectElementOrFail('#nonExistentElement')).toThrowError(
            'Item not found #nonExistentElement',
        );
    });
});
