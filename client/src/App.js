import React, { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import Layout from './layouts/Layout'
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from './services/auth'
import Login from './screens/Login'
import Register from './screens/Register'
import HomeScreen from './screens/HomeScreen'
import GameContainer from './containers/GameContainer'
import './App.css'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
      setCurrentUser(userData)
    }
    handleVerify()
  }, [])

  const loginSubmit = async (loginData) => {
    const userData = await loginUser(loginData)
    setCurrentUser(userData)
    history.push('/mygames')
  }

  const registerSubmit = async (registerData) => {
    const userData = await registerUser(registerData)
    setCurrentUser(userData)
    history.push('/mygames')
  }

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    removeToken()
    setCurrentUser(null)
    history.push('/')
  }

  console.log(currentUser)

  return (
    <div className='App'>
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path='/login'>
            <Login loginSubmit={loginSubmit} />
          </Route>
          <Route path='/register'>
            <Register registerSubmit={registerSubmit} />
          </Route>
          <Route path='/'>
            <GameContainer currentUser={currentUser} />
          </Route>
        </Switch>
      </Layout>
    </div>
  )
}

export default App
