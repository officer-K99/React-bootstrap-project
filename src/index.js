import {createRoot} from 'react-dom/client'
import App from './App'

import { Provider } from 'react-redux'
import { store } from './Store/store'

import './index.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import 'font-awesome/css/font-awesome.min.css'


const container = document.getElementById('root')

const root = createRoot(container)

root.render(<Provider store={store}><App /></Provider>)