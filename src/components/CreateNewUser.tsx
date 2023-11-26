import { Badge, Button, Card, TextInput, Title } from '@tremor/react'
import { useUserActions } from '../hook/useUserActions'
import { useState } from 'react'
import { userSchema } from '../users/schema'

export default function CreateNewUser() {
  const { createUser } = useUserActions()
  const [result, setResult] = useState<null | 'success' | 'error'>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setResult(null)

    const form = event.currentTarget
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string

    // zod schema validation
    const validation = userSchema.safeParse({ name, email, github })

    if (!validation.success) {
      setResult('error')
      return
    }

    createUser({ name, email, github })
    setResult('success')
    form.reset()
  }

  return (
    <Card className='mt-4'>
      <Title className='mb-4 ml-2'>Create New User</Title>
      <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <TextInput placeholder='Name' name='name' />
        <TextInput placeholder='E-mail' name='email' />
        <TextInput placeholder='Github username' name='github' />
        <div>
          <Button type='submit' className='mt-2'>
            Create
          </Button>
          <span>
            {result === 'success' && (
              <Badge className='ml-4 py-[9px] px-4 rounded-lg' color='green'>
                Success ✅
              </Badge>
            )}
            {result === 'error' && (
              <Badge className='ml-4 py-[9px] px-4 rounded-lg' color='red'>
                Error ❌
              </Badge>
            )}
          </span>
        </div>
      </form>
    </Card>
  )
}
