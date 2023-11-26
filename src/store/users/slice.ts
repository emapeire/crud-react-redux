import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { type UserId, UsersWithId } from '../../types'
import { users } from '../../data/users'

const initialState: UsersWithId[] = users

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
