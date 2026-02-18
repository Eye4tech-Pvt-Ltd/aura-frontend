import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userProfile'
export const store = configureStore({ reducer: { profile: userReducer } })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
