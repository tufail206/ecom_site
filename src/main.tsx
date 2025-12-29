import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { appRoute } from './routes/app_routes.tsx'


import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

const router = createBrowserRouter(createRoutesFromElements(appRoute))
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
