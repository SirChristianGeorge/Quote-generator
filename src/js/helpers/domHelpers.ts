/**
 * Helper function to select an element with optional fallback and throw an error if not found.
 * @param {string} selector - The CSS selector for the element.
 * @param {string} errorMessage - The error message to throw if the selector does not match any element.
 * @returns {HTMLElement} - The selected element.
 */

export const selectElementOrFail = (
    selector: string,
    errorMessage: string = 'Item not found',
): HTMLElement => {
    const element = document.querySelector(selector) as HTMLElement;

    if (!element) {
        throw new Error(`${errorMessage} ${selector}`);
    }

    return element;
};
