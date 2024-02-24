import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './HomePage';
import Game from './Game';
import SearchMovie from './SearchMovie';
import NotFoundPage from './NotFoundPage';
import BlogArticle from './BlogArticle';

const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />,
  errorElement: <NotFoundPage />
},
{
  path: '/game',
  element: <Game />
},
{
  path: '/searchMovie',
  element: <SearchMovie />
},
{
  path: '/blog',
  element: <BlogArticle />
}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
