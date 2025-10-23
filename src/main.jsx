import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Products from './pages/Products.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import './styles.css'
import { CartProvider } from '../src/components/CartContext.jsx'

const router = createBrowserRouter([
	{ path: '/', element: <App /> },
	{ path: '/products', element: <Products /> },
	{ path: '/about', element: <About /> },
	{ path: '/contact', element: <Contact /> },
])

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CartProvider>
            <RouterProvider router={router} />
        </CartProvider>
    </React.StrictMode>
)


