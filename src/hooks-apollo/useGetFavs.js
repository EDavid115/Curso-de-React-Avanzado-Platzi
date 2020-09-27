import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`
export const useGetFavorites = () => {
  const { data, loading, error } = useQuery(GET_FAVS, {
    fetchPolicy: 'cache-and-network'
  })
  return { data, loading, error }
}
