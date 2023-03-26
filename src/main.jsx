import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './routes/RootLayout';
import ProjectSection from './routes/ProjectSection';
import { Docs } from './routes/Docs';

import App from './routes/App';

import './index.css';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <App /> },
      { path: '/projects', element: <ProjectSection /> },
      { path: '/docs', element: <Docs /> },
      { path: '*', element: <App /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
