import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './Components/NotFound';
import BrowseBook from './Components/BrowseBook';
import Home from './Components/Home';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/browsebook",
        element: <BrowseBook/>
      },
      {
        path:"/book/:genre",
        element: <BrowseBook/>
      }
    ],
    errorElement: <NotFound/>
  },
 
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {appRouter}/>
  </React.StrictMode>
)

