import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '@container/'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)