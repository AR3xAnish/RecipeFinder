import {configureStore} from '@reduxjs/toolkit'
import dataReducer from './dataSlice'

const store = configureStore({
    reducer:{
        foodData: dataReducer
    }
})
export default store