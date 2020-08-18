import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks-apollo/useRegisterMutation'

export const NotRegisteredUser = () => {
  const { registerMutation, loading, error } = useRegisterMutation()
  const registerTitle = `Registra${loading ? 'ndose' : 'rse'}`
  const errorMsg = error && 'El usuario ya existe o hay algún problema.'

  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {

          const onSubmit = ({ email, password }) => {
            const input = {
              email: email.value,
              password: password.value
            }
            const variables = { input }

            registerMutation({ variables })
              .then((res) => {
                console.log('res', res)
                activateAuth()
              })
              .catch((err) => {
                console.log('err', err)
              })
            // activateAuth()
          }

          return <>
            <UserForm title={registerTitle} onSubmit={onSubmit} error={errorMsg} disabled={loading} />
            <UserForm title='Iniciar Sesión' onSubmit={activateAuth} />
          </>
        }
      }
    </Context.Consumer>
  )
}