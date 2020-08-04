import React, { useEffect, useState } from 'react'
import { Category } from '../Category'

import { Item, List } from './styles'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    try {
      setLoading(true)
      const fetchCategories = async () => {
        const res = await window.fetch('https://petgram-server-edcp.vercel.app/categories')
        const data = await res.json()
        setCategories(data)
        setLoading(false)
      }
      fetchCategories()
    } catch (err) {
      console.log('fetchCategories Error: ', err)
      setCategories([])
      setLoading(false)
    }
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading ? <Item key='loading'><Category /></Item> :
        categories.map(category => <Item key={category.id}><Category {...category}/></Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}