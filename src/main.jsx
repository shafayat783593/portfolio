import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './HomeLayout.jsx'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />


  </StrictMode>,
)

