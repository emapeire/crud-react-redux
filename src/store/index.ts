import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './users/slice'
import { persistanceLocalStorageAction } from '../middleware/actions'

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: [persistanceLocalStorageAction]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
