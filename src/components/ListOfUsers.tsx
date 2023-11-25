import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow
} from '@tremor/react'

const users: {
  id: string
  name: string
  email: string
  github: string
  actions: string
}[] = [
  {
    id: '1',
    name: 'Peter Doe',
    email: 'peter@doe.com',
    github: 'peterdoe',
    actions: 'edit'
  },
  {
    id: '2',
    name: 'Lena Whitehouse',
    email: 'lena@whitehouse.com',
    github: 'lenawhitehouse',
    actions: 'delete'
  },
  {
    id: '3',
    name: 'Phil Less',
    email: 'phil@less.com',
    github: 'philless',
    actions: 'edit'
  },
  {
    id: '4',
    name: 'John Camper',
    email: 'john@camper.com',
    github: 'johncamper',
    actions: 'edit'
  },
  {
    id: '5',
    name: 'Max Balmoore',
    email: 'max@balmoore.com',
    github: 'maxbalmoore',
    actions: 'edit'
  },
  {
    id: '6',
    name: 'Peter Moore',
    email: 'peter@moore.com',
    github: 'petermoore',
    actions: 'edit'
  },
  {
    id: '7',
    name: 'Joe Sachs',
    email: 'joe@sachs.com',
    github: 'joesachs',
    actions: 'delete'
  }
]

export default function ListOfUsers() {
  return (
    <Card>
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
              <TableCell>{item.id}</TableCell>
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
              <TableCell>{item.actions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
