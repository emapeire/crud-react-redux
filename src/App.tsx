import './App.css'
import CreateNewUser from './components/CreateNewUser'
import ListOfUsers from './components/ListOfUsers'

export default function App() {
  return (
    <main>
      <ListOfUsers />
      <CreateNewUser />
    </main>
  )
}
