import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {browerRouter} from 'react-routrer-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App/>
    </BrowserRouter>
)
