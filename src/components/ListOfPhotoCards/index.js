import React from 'react'
import { PhotoCard } from '../PhotoCard'

import { useGetPhotos } from '../../hooks-apollo/useGetPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { data, loading, error } = useGetPhotos(categoryId)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return (
    <ul>
      {data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}
