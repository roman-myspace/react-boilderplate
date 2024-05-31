import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.scss'
import Router from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
