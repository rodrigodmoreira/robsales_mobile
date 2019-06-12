import * as React from 'react'
import { useState } from 'react'
import { Button } from 'react-native'
import styled from 'styled-components/native'
import api from '../@resources/api/api'

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const Panel = styled.View`
  align-items: center;
  justify-content: center;
  ${props => props.backgroundColor ? `background-color: ${props.backgroundColor}` : ''}
`

const Text = styled.Text`
  ${props => props.fontSize ? `font-size: ${props.fontSize}` : ''}
`

const Input = styled.TextInput`
`

const LoginContainer = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedin, setLoggedin] = useState(false)

  return (
    <Wrapper>
      <Panel>
        <Text fontSize='18px'>
          Login
        </Text>
        <Input value={username} onChangeText={(txt) => setUsername(txt)} />
        <Text fontSize='12px'>
          Senha
        </Text>
        <Input value={password} onChangeText={(txt) => setPassword(txt)}/>
        <Button title='Logar' onPress={async () => {
          const res = await api.post('login',{
            username: username,
            password: password
          })
          if (res.ok) setLoggedin(true)
        }} />
        {loggedin &&
          <Panel backgroundColor='green'>
            <Text>Logado</Text>
          </Panel>
        }
      </Panel>
    </Wrapper>
  )
}

export default LoginContainer
