import {createRoot} from 'react-dom/client'
import App from './App'

import './index.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import 'font-awesome/css/font-awesome.min.css'

import {BrowserRouter as Router} from 'react-router-dom'

const container = document.getElementById('root')

const root = createRoot(container)

root.render(<Router><App /></Router>)