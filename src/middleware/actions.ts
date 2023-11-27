import { Middleware } from '@reduxjs/toolkit'
import { toast } from 'sonner'

export const persistanceLocalStorageAction: Middleware =
  (store) => (next) => (action) => {
    next(action)
    localStorage.setItem('__reduxState__', JSON.stringify(store.getState()))
  }

export const syncWithDataBaseAction: Middleware =
  (store) => (next) => (action) => {
    const { type, payload } = action

    next(action)

    if (type === 'users/deleteUserById') {
      fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
        method: 'DELETE'
      })
        .then((res) => {
          if (res.ok) {
            toast.success('User deleted successfully')
          }
        })
        .catch((error) => {
          console.error(error)
          toast.error('Error deleting user')
        })
    }

    if (type === 'users/createNewUser') {
      fetch('https://jsonplaceholder.typicode.com/users', {
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
