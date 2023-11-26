import { createSlice } from '@reduxjs/toolkit'
import { UsersWithId } from '../../types'
import { users } from '../../data/users'

const initialState: UsersWithId[] = users

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer
