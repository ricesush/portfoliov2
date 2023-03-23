import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './routes/RootLayout';
import App from './App';
import ProjectSection from './components/ProjectSection';
import { Docs } from './components/Learnjs';

import './index.css';
import './App.css';

import { useState, createContext } from 'react';

export const ContentContext = createContext();

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <App /> },
      { path: '/projects', element: <ProjectSection /> },
      { path: '/docs', element: <Docs /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
