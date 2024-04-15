import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddBook from './pages/AddBook'
import AddReview from './pages/AddReview'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import ReadBooks from './pages/ReadBooks'
import ReadReview from './pages/ReadReview'
import Root from './pages/Root'
import Subscribe from './pages/Subscribe'

const router=createBrowserRouter([
{  path: '/',
  element: <Root />,
  children:[
    {path:'/',element:<ReadBooks></ReadBooks>},
    {path:"/AddReview", element:<AddReview></AddReview>},
    {path:"/ReadReview/:id", element:<ReadReview></ReadReview>},
    {path:"/addBook", element:<AddBook></AddBook>},
    {path:"/login",element:<Login></Login>},
    {path:"/signup",element:<Subscribe></Subscribe>}

  ],
  errorElement:<ErrorPage />
}
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
