import React, { useEffect, useState } from 'react'
import { Category } from '../Category'

import { Item, List } from './styles'
import { categories as mockCategories } from '../../../api/db.json'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    try {
      const fetchCategories = async () => {
        const res = await window.fetch('https://petgram-server-edcp.vercel.app/categories')
        const data = await res.json()
        setCategories(data)
      }
      fetchCategories()
    } catch (err) {
      console.log('fetchCategories Error: ', err)
      setCategories([])
    }
  }, [])

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll())

    return () => {
      document.removeEventListener('scroll', onScroll())
    }
  })

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
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