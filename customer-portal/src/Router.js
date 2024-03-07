// Router.js
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Page from './Page'
import Home from './Home'
import Payment from './payment'
import LoginPage from './LoginPage'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/dashboard',
    element: <Page />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: '/payment',
    element: <Page />,
    children: [
      {
        index: true,
        element: <Payment />
      }
    ]
  }
])

export default Router
