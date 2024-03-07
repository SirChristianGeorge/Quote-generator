import { selectElementOrFail } from '../helpers/domHelpers';

/**
 * Loader class handles UI loading states with a loading spinner.
 * @class
 */
class Loader {
    /**
     * @member {HTMLElement}
     */
    private loader: HTMLElement;
    /**
     * @member {HTMLElement}
     */
    private elementAfterLoading: HTMLElement;
    /**
     * @member {string}
     */
    private cssClass: string;

    /**
     * Create a Loader instance.
     * @constructor
     */
    constructor({
        loader,
        elementAfterLoading,
    }: {
        loader: string;
        elementAfterLoading: string;
    }) {
        this.loader = selectElementOrFail(loader);
        this.elementAfterLoading = selectElementOrFail(elementAfterLoading);
        this.cssClass = 'hidden';
    }

    /**
     * Getter method to retrieve the loader element.
     *
     * @public
     * @returns {HTMLElement} The loader element.
     */
    public get getLoader(): HTMLElement {
        return this.loader;
    }

    /**
     * Getter method to retrieve the element after loading.
     *
     * @public
     * @returns {HTMLElement} The element after loading.
     */
    public get getElementAfterLoading(): HTMLElement {
        return this.elementAfterLoading;
    }

    /**
     * Display the loading spinner and hide the target element.
     * @public
     * @function
     * @returns {void}
     */
    public loading(): void {
        this.loader.classList.remove(this.cssClass);
        this.elementAfterLoading.classList.add(this.cssClass);
    }

    /**
     * Hide the loading spinner and display the target element.
     * @public
     * @function
     * @returns {void}
     */
    public loadingEnd(): void {
        this.loader.classList.add(this.cssClass);
        this.elementAfterLoading.classList.remove(this.cssClass);
    }
}

export default Loader;
