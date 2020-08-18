import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './styles'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email, password })
  }

  return <>
    <Form onSubmit={handleSubmit}>
      <Title>{title}</Title>
      <Input disabled={disabled} placeholder='Email' type='email' {...email} />
      <Input disabled={disabled} placeholder='Password' type='password' {...password} />
      <Button disabled={disabled}>{title}</Button>
    </Form>
    {error && <Error>{error}</Error>}
  </>
}