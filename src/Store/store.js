import {legacy_createStore as createStore , combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import { ProductsListReduser } from './Redusers/Products/productsReduser'


const initialState = {}
const Reduser = combineReducers({
    productList : ProductsListReduser
})

const middleware = [thunk]


export const store = createStore(Reduser, initialState, applyMiddleware(...middleware))