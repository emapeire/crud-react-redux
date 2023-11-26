export type UserId = string

export interface User {
  name: string
  email: string
  github: string
}

export interface UsersWithId extends User {
  id: UserId
}

export type ButtonActions = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}
