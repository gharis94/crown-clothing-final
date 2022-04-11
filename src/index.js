import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { CategoriesProvider } from './context/CategoriesContext';
import { CartProvider } from './context/CartContext';

//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<BrowserRouter>
    <UserProvider>
        <CategoriesProvider>
            <CartProvider>
                <App/>
            </CartProvider>
        </CategoriesProvider>
    </UserProvider>
</BrowserRouter>);

// If 
