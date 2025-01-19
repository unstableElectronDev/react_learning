// src/App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Header from './Components/Header'; // Ensure correct import path
import Body from './Components/Body';
import CartOverview from './Components/CartOverview'; // Ensure correct import path
import CartDetails from './Components/CartDetails'; // Ensure correct import path
import Checkout from './Components/CartCheckout'; // Ensure correct import path

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// Define routes
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/cartOverview',
        element: <CartOverview />,
      },
      {
        path: '/cart/:id',
        element: <CartDetails />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
]);

// Render the app with CartProvider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <RouterProvider router={appRouter} />
  </CartProvider>
);
