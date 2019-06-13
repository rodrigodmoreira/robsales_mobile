import * as React from 'react'

import styled from 'styled-components/native'
import { Button } from 'react-native'
import Input from '../component/Input'
import Panel from '../component/Panel'

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const Text = styled.Text`
  ${props => props.fontSize ? `font-size: ${props.fontSize};` : ''}
`

const LoginView = props => {
  return (
    <Wrapper>
      <Panel>
        <Text fontSize='12'>
          Login
        </Text>
        <Input value={props.username} onChangeText={(txt) => props.setUsername(txt)} />
        <Text fontSize='12'>
          Senha
        </Text>
        <Input value={props.password} onChangeText={(txt) => props.setPassword(txt)}/>
        <Button title='Logar' onPress={props.handleSubmit} />
        {props.loggedin &&
          <Panel backgroundColor='green'>
            <Text>Logado</Text>
          </Panel>
        }
      </Panel>
    </Wrapper>
  )
}

export default LoginView
