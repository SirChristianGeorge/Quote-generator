/**
 * Interface representing loading elements configuration.
 * @interface
 * @property {string} loader - The selector for the loader element.
 * @property {string} elementAfterLoading - The selector for the element displayed after loading.
 */
interface LoadingElements {
    loader: string;
    elementAfterLoading: string;
}

export default LoadingElements;
