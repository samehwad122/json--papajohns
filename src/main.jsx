import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'swiper/css/bundle';

import { LanguageProvider } from './components/context/LangContext.jsx';
import { ApiContextProvider } from './components/context/apiContext.jsx';

createRoot(document.getElementById('root')).render(
    <ApiContextProvider>
    <LanguageProvider>
        <App />
    </LanguageProvider>
    </ApiContextProvider>
)
