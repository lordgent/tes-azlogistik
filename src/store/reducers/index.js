import {combineReducers} from 'redux'
import addProductReducer from './addProductReducer'
import getProductReducer from './getProductReducer'
import deleteProductReducer from './deleteProductReducers'
import findProductReducer from './findProductReducer'
import editProductReducer from './editProductReducer'
import searchProductReducer from './searchProductReducer'


export default combineReducers({
addProductReducer,
getProductReducer,
deleteProductReducer,
findProductReducer,
editProductReducer,
searchProductReducer
})