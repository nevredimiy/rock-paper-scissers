import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import ErrorPage from "./error-page";
import Rounds from './components/Rounds/Rounds';
import Root from './routes/root';
import Main from './components/Main/Main';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/:round",
        element: <Rounds />,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <RouterProvider router={router} />
    
  </React.StrictMode>,
)
