import './App.css'
import UserContextProvider from './assets/Contexts/UserContextProvider'
import Login from './assets/Login/Login'
import Profile from './assets/Profile/Profile'

function App() {

  return (
    <UserContextProvider>
    {/* <h1>Login page</h1> */}
    <Login/>
    <Profile />
    </UserContextProvider>
  )
}

export default App
