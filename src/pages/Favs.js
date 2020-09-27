import React from 'react'
import { useGetFavorites } from '../hooks-apollo/useGetFavs'
import { ListOfFavs } from '../components/ListOfFavs'

export const Favs = () => {
  const { data, loading, error } = useGetFavorites()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return <ListOfFavs favs={data.favs} />
}
