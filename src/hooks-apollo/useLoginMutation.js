import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const LOGIN = gql`
    mutation login ($input: UserCredentials!) {
       login (input: $input)
    }
`

export const useLoginMutation = () => {
  const [loginMutation, { data, loading, error }] = useMutation(LOGIN)

  return { loginMutation, dataLogin: data, loadingLogin: loading, errorLogin: error }
}
