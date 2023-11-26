import { Button, Card, TextInput, Title } from '@tremor/react'
import { useUserActions } from '../hook/useUserActions'

export default function CreateNewUser() {
  const { createUser } = useUserActions()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string

    createUser({ name, email, github })
  }

  return (
    <Card className='mt-4'>
      <Title className='mb-4 ml-2'>Create New User</Title>
      <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
        <TextInput placeholder='Name' name='name' />
        <TextInput placeholder='E-mail' name='email' />
        <TextInput placeholder='Github username' name='github' />
        <div>
          <Button type='submit' className='mt-2'>
            Create
          </Button>
        </div>
      </form>
    </Card>
  )
}
