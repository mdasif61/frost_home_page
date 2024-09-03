import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Layout/Main'
import Home from './components/Home/Home'
import Library from './components/sideBarComponents/Library'
import Categories from './components/sideBarComponents/Categories'
import Download from './components/sideBarComponents/Download'
import Community from './components/sideBarComponents/Community'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/library',
        element:<Library/>
      },
      {
        path:'/categories',
        element:<Categories/>
      },
      {
        path:'/download',
        element:<Download/>
      },
      {
        path:'/community',
        element:<Community/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
