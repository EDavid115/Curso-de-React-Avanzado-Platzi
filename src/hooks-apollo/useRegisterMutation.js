import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'


const REGISTER = gql`
	mutation signup ($input: UserCredentials!) {
		signup (input: $input)
	}
`

export const useRegisterMutation = () => {
  const [registerMutation, { data, loading, error }] = useMutation(REGISTER)

  return { registerMutation, data, loading, error }
}
