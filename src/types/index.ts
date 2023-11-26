export interface User {
  name: string
  email: string
  github: string
}

export interface UsersWithId extends User {
  id: string
}
