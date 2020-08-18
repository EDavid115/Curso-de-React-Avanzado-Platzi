import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks-apollo/useRegisterMutation'
import { useLoginMutation } from '../hooks-apollo/useLoginMutation'

export const NotRegisteredUser = () => {
  const { registerMutation, loading, error } = useRegisterMutation()
  const { loginMutation, loadingLogin, errorLogin } = useLoginMutation()

  const registerTitle = `Registra${loading ? 'ndose' : 'rse'}`
  const errorMsg = error && 'El usuario ya existe o hay algún problema.'

  const loginTitle = `Inicia${loadingLogin ? 'ndo sesión' : 'r sesión'}`
  const errorMsgLogin = errorLogin && 'Usuario o contraseña incorrecta.'

  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {

          const onSubmitRegister = ({ email, password }) => {
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
          }

          const onSubmitLogin = ({ email, password }) => {
            const input = {
              email: email.value,
              password: password.value
            }
            const variables = { input }

            loginMutation({ variables })
              .then((res) => {
                console.log('res', res)
                activateAuth()
              })
              .catch((err) => {
                console.log('err', err)
              })
          }

          return <>
            <UserForm title={registerTitle} onSubmit={onSubmitRegister} error={errorMsg} disabled={loading} />
            <UserForm title={loginTitle} onSubmit={onSubmitLogin} error={errorMsgLogin} disabled={loadingLogin} />
          </>
        }
      }
    </Context.Consumer>
  )
}