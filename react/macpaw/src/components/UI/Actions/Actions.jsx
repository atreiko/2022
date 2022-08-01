import React from 'react'
import { useDispatch } from 'react-redux'

import likeWhite from '../Button/images/like-white.svg'
import faviriteWhite from '../Button/images/favorite-white.svg'
import dislikeWhite from '../Button/images/dislike-white.svg'

import PostService from '../../../services/api/postService'
import { addToLikes } from '../../../store/slices/likes.slice'
import { addToFavourites } from '../../../store/slices/favourites.slice'
import { addToDislikes } from '../../../store/slices/dislikes.slice'
import { addToReactions } from '../../../store/slices/reactions.slice'

import styles from './Actions.module.css'

const Actions = ({ cat, setCat }) => {
  const dispatch = useDispatch()

  const like = async () => {
    dispatch(addToLikes(cat))
    dispatch(addToReactions({ label: 'likes', ...cat }))
    const getRandomCat = await PostService.searchCat()
    setCat(getRandomCat[0])
  }

  const favorite = async () => {
    dispatch(addToFavourites(cat))
    dispatch(addToReactions({ label: 'favourites', ...cat }))
    const getRandomCat = await PostService.searchCat()
    setCat(getRandomCat[0])
  }

  const dislike = async () => {
    dispatch(addToDislikes(cat))
    dispatch(addToReactions({ label: 'dislikes', ...cat }))
    const getRandomCat = await PostService.searchCat()
    setCat(getRandomCat[0])
  }

  return (
    <div className={styles.actions}>
      <button onClick={like}>
        <img src={likeWhite} alt='like' />
      </button>
      <button onClick={favorite}>
        <img src={faviriteWhite} alt='favourite' />
      </button>
      <button onClick={dislike}>
        <img src={dislikeWhite} alt='dislike' />
      </button>
    </div>
  )
}

export default Actions