import React from 'react'
import { Article, Img, ImgWrapper } from './styles'

import { useNearScreen } from '../../hooks/useNearScreen'

import { FavButton } from '../FavButton'
import { useToggleLikeMutation } from '../../hooks-apollo/useToggleLikeMutation'

import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, elementRef] = useNearScreen()

  const { toggleLike } = useToggleLikeMutation(id)

  const handleFavClick = () => {
    toggleLike()
  }

  return (
    <Article ref={elementRef}>
      {show &&
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <FavButton liked={liked} likes={likes} onClick={() => handleFavClick} />
        </>}
    </Article>
  )
}
