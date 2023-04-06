import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Components/Shop/shop';
import Home from './Components/Layout/Home';
import Oders from './Components/Oders/Oders';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import cartProductsLoader from './cartProdructLoader/cartProdructLoader';
import Chekeout from './Components/Chekeout/Chekeout';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element: <Shop></Shop>,
      },
      {
        path: 'orders',
        element: <Oders></Oders>,
        loader: cartProductsLoader
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>,
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'checkout',
        element: <Chekeout></Chekeout>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
