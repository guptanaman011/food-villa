import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './components/Error';
import Contact from './components/contact';
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
