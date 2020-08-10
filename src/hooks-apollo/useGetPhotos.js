import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const getPhotos = gql`
  query getPhotos ($categoryId: ID) {
    photos (categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
export const useGetPhotos = categoryId => {
  const { data, loading, error } = useQuery(getPhotos, {
    variables: {
      categoryId: categoryId
    }
  })
  return { data, loading, error }
}

