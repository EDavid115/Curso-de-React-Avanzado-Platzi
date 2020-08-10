import React from 'react'
import { PhotoCard } from '../PhotoCard'

import { useGetSinglePhoto } from '../../hooks-apollo/useGetSinglePhoto'

export const PhotoCardWithQuery = ({ id }) => {
  const { data, loading, error } = useGetSinglePhoto(id)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  const { photo = {} } = data
  return <PhotoCard {...photo} />
}