// Write your code here
import {useState} from 'react'
import {
  Bgcontainer,
  FormContainer,
  Title,
  Subtitle,
  InputText,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [inputValue, setPassword] = useState('')
  let valid

  const getInput = event => {
    setPassword(event.target.value)
  }

  if (inputValue.length < 8) {
    valid = true
  }

  return (
    <Bgcontainer>
      <FormContainer>
        <Title>Password Validator</Title>
        <Subtitle>Check how strong and secure is your password</Subtitle>
        <InputText type="password" onChange={getInput} value={inputValue} />
        {valid && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </FormContainer>
    </Bgcontainer>
  )
}

export default PasswordValidator
