import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { type UserId, UsersWithId } from '../../types'
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
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload
      return state.filter((user) => user.id !== id)
    }
  }
})

export default usersSlice.reducer
export const { deleteUserById } = usersSlice.actions
