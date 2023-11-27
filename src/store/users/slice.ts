import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { type UserId, UsersWithId, User } from '../../types'
import { INITIAL_USERS as DEFAULT_STATE } from '../../data/users'

const initialState: UsersWithId[] = (() => {
  const persistedState = localStorage.getItem('__reduxState__')
  if (persistedState) {
    return JSON.parse(persistedState).users
  }
  return DEFAULT_STATE
})()

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    createNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID()
      return [...state, { ...action.payload, id }]
    },
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload
      return state.filter((user) => user.id !== id)
    },
    rollbackUser: (state, action: PayloadAction<UsersWithId>) => {
      const isUserAlreadyDefined = state.some(
        (user) => user.id === action.payload.id
      )
      if (!isUserAlreadyDefined) {
        return [...state, action.payload]
      }
    }
  }
})

export default usersSlice.reducer
export const { createNewUser, deleteUserById, rollbackUser } =
  usersSlice.actions
