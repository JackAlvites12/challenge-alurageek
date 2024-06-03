import React from 'react'
import ReactDOM from 'react-dom/client'
import { GeekApp } from './GeekApp.jsx'
import './styles.css'
import { ProductProvider } from './context/ProductProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <GeekApp />
    </ProductProvider>
  </React.StrictMode>,
)
