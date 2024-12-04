import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/router.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer
      position="top-left"
      autoClose={2000}
    ></ToastContainer>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
