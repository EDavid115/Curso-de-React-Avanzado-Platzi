import React from 'react'
import { Article, Img, ImgWrapper } from './styles'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

import { FavButton } from '../FavButton'
import { useToggleLikeMutation } from '../../hooks-apollo/useToggleLikeMutation'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, elementRef] = useNearScreen()

  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const { toggleLike } = useToggleLikeMutation(id)

  const handleFavClick = () => {
    !liked && toggleLike()
    setLiked(!liked)
  }
  
  return (
    <Article ref={elementRef}>
      {show && 
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <FavButton liked={liked} likes={likes} onClick={() => handleFavClick}/>
        </>
      }
    </Article>
  ) 
}