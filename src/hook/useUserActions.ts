import { deleteUserById } from '../store/users/slice'
import { UserId } from '../types'
import { useAppDispatch } from './store'

export const useUserActions = () => {
  const dispatch = useAppDispatch()
  const handleDeleteUser = (id: UserId) => {
    dispatch(deleteUserById(id))
  }
  return { deleteUser: handleDeleteUser }
}
