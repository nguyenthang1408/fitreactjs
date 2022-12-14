import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './GlobalStyles/GlobalStyles.scss';
import { StoreProvider } from './store';

import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <StoreProvider>
            <App />
        </StoreProvider>
    // </React.StrictMode>,
);
