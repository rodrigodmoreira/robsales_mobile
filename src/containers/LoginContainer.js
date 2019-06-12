import * as React from 'react'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
`

const Text = styled.Text`
  ${props => props.fontSize ? `font-size: ${props.fontSize}` : ''}
`

const LoginContainer = props => {
  return (
    <Wrapper>
      <Text fontSize='18px'>
        Login
      </Text>
      <Text fontSize='12px'>
        Container para login
      </Text>
    </Wrapper>
  )
}

export default LoginContainer
