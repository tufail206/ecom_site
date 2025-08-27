import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import { appRoute } from './routes/app_routes.tsx'


const router=createBrowserRouter(createRoutesFromElements(appRoute))
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
