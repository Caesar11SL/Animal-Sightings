import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducers/auth'

export default configureStore({
  reducer: {
    user: userReducer
  },
})