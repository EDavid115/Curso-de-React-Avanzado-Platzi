import React from 'react'
import { useGetFavorites } from '../hooks-apollo/useGetFavs'
import { ListOfFavs } from '../components/ListOfFavs'
import { Layout } from '../components/Layout'

export const Favs = () => {
  const { data, loading, error } = useGetFavorites()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <Layout title='Tus favoritos' subtitle='Aquí salen tus favoritos'>
      <ListOfFavs favs={data.favs} />
    </Layout>
  )
}
