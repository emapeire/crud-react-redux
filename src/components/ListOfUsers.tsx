import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title
} from '@tremor/react'
import { useAppSelector } from '../hook/store'
import { useUserActions } from '../hook/useUserActions'
import EditButtonIcon from './EditButtonIcon'
import DeleteButtonIcon from './DeleteButtonIcon'

export default function ListOfUsers() {
  const users = useAppSelector((state) => state.users)
  const { deleteUser } = useUserActions()

  return (
    <Card>
      <section className='flex gap-4 mb-4 border border-slate-600 rounded-md max-w-fit px-4 py-3 ml-4 justify-center'>
        <Title>Users</Title>
        <Badge>{users.length}</Badge>
      </section>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Id</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>E-mail</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item) => (
            <TableRow key={item.id}>
              <TableCell className='font-semibold'>{item.id}</TableCell>
              <TableCell className='flex gap-4 items-center'>
                <img
                  src={`https://unavatar.io/github/${item.github}`}
                  alt={item.name}
                  width='32'
                  height='32'
                  className='rounded-md'
                />
                {item.name}
              </TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>
                <div className='flex gap-4'>
                  <EditButtonIcon onClick={() => {}} />
                  <DeleteButtonIcon onClick={() => deleteUser(item.id)} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
