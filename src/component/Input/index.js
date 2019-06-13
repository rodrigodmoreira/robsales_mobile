import * as React from 'react'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  padding-vertical: 10;
`

const LowerDash = styled.View`
  border-bottom-width: .5;
`

const TextInput = styled.TextInput`
  padding-vertical: 0;
  border-bottom-width: 1;
`

const Input = props => {
  return (
    <Wrapper>
      <LowerDash>
        <TextInput value={props.value} onChangeText={props.onChangeText} />
      </LowerDash>
    </Wrapper>
  )
}

export default Input
