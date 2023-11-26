import { Button, Card, TextInput, Title } from '@tremor/react'

export default function CreateNewUser() {
  return (
    <Card className='mt-4'>
      <Title className='mb-4 ml-2'>Create New User</Title>
      <form className=''>
        <TextInput placeholder='Name' />
        <TextInput placeholder='E-mail' />
        <TextInput placeholder='Github username' />
        <div>
          <Button type='submit' className='mt-4'>
            Create
          </Button>
        </div>
      </form>
    </Card>
  )
}
