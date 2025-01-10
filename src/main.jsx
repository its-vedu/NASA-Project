import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Solar from './component/solar.jsx'
import Earth from './component/earthbyme.jsx'
import Jupiter from './component/jupiter.jsx'
import Mars from './component/mars.jsx'
import Mercury from './component/mercury.jsx'
import Neptune from './component/neptune.jsx'
import Urenus from './component/urenus.jsx'
import Venus from './component/venus.jsx'






const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Solar />} />
      <Route path='earth' element={<Earth />} />
      <Route path='jupiter' element={<Jupiter />} />
      <Route path='mars' element={<Mars />} />
      <Route path='mercury' element={<Mercury />} />
      <Route path='neptune' element={<Neptune />} />
      <Route path='urenus' element={<Urenus />} />
      <Route path='venus' element={<Venus />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)