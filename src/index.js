import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main';
import Specific from './components/Specific';

const root = ReactDOM.createRoot(document.getElementById('root'));
const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/rest/:id",
    element: <Specific />
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={appRoutes} />
  </React.StrictMode>
);
reportWebVitals();
