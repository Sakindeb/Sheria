import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'


import Username from './components/Username'
import Register from './components/Register'
import Reset from './components/Reset'
import Recovery from './components/Recovery'
import Profile from './components/Profile'
import Password from './components/Password'
import PageNotFound from './components/PageNotFound'
import Home from './components/Home'
import ContactPage from './components/ContactPage'


const router = createBrowserRouter([
    {
    path: '/',
    element: < Home/>
    },
    {
        path: '/username',
        element: < Username/>
    },
    {
      path: '/contactpage',
      element: < ContactPage/>
    },
    {
      path: '/register',
      element: < Register/>
    },
    {
      path: '/password',
      element: < Password />
    },
    {
      path: '/recovery',
      element: < Recovery/>
    },
    {
      path: '/profile',
      element: < Profile/>
    },
    {
      path: '/reset',
      element: < Reset/>
    },
    {
      path: '*',
      element: < PageNotFound/>
    }
])
export default function App(){
    return(
        <main>
            <RouterProvider router={router}></RouterProvider>
        </main>
    )
}