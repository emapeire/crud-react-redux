import './App.css'
import CreateNewUser from './components/CreateNewUser'
import ListOfUsers from './components/ListOfUsers'
import { Toaster } from 'sonner'

export default function App() {
  return (
    <main>
      <ListOfUsers />
      <CreateNewUser />
      <Toaster richColors />
    </main>
  )
}
