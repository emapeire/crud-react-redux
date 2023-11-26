import { createNewUser, deleteUserById } from '../store/users/slice'
import { type UserId, User } from '../types'
import { useAppDispatch } from './store'

export const useUserActions = () => {
  const dispatch = useAppDispatch()

  const createUser = ({ name, email, github }: User) => {
    dispatch(createNewUser({ name, email, github }))
  }

  const deleteUser = (id: UserId) => {
    dispatch(deleteUserById(id))
  }
  return { createUser, deleteUser }
}
