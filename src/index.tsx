import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '@container/'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './stylesheet/globalstyle.scss'
import './stylesheet/global.css'

createRoot(document.getElementById('root') as HTMLElement).render(<App />)