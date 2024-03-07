import { appElements } from './js/config/domElements';
import QuoteApp from './js/QuoteApp';

import 'normalize.css/normalize.css';
import '@fortawesome/fontawesome-free/css/v5-font-face.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './scss/main.scss';

new QuoteApp({ apiUrl: import.meta.env.VITE_API_URL, appElements });
