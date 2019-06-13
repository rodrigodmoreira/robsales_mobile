import * as React from 'react'
import { useState } from 'react'
import api from '../@resources/api/api'

import LoginView from '../views/LoginView'

const LoginContainer = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedin, setLoggedin] = useState(false)

  const handleSubmit = async () => {
    const res = await api.post('login',{
      username: username,
      password: password
    })
    if (res.ok) setLoggedin(true)
  }

  return (
    <LoginView
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      loggedin={loggedin}
      handleSubmit={handleSubmit}
    />
  )
}

export default LoginContainer
