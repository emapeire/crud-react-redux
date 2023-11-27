import { Middleware } from '@reduxjs/toolkit'
import { toast } from 'sonner'
import { UsersWithId } from '../types'
import { rollbackUser } from '../store/users/slice'
import { API_URL } from '../constants'

export const persistanceLocalStorageAction: Middleware =
  (store) => (next) => (action) => {
    next(action)
    localStorage.setItem('__reduxState__', JSON.stringify(store.getState()))
  }

export const syncWithDataBaseAction: Middleware =
  (store) => (next) => (action) => {
    const { type, payload } = action
    const previouseState = store.getState()

    next(action)

    if (type === 'users/deleteUserById') {
      const userToBeDeleted = previouseState.users.find(
        (user: UsersWithId) => user.id === payload
      )

      fetch(`${API_URL}/${payload}`, {
        method: 'DELETE'
      })
        .then((res) => {
          if (res.ok) {
            toast.success('User deleted successfully')
          }
        })
        .catch(() => {
          toast.error('Error deleting user')
          if (userToBeDeleted) {
            store.dispatch(rollbackUser(userToBeDeleted))
          }
        })
    }

    if (type === 'users/createNewUser') {
      fetch(`${API_URL}`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then((res) => {
          if (res.ok) {
            toast.success('User created successfully')
          }
        })
        .catch((error) => {
          console.error(error)
          toast.error('Error creating user')
        })
    }
  }
