import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { 
  Mosaic, 
  Page, 
  PageContent, 
  PageHead 
} from '../../components'

import { removeFromLikes } from '../../store/slices/likes.slice'
import { addToReactions } from '../../store/slices/reactions.slice'

import styles from './LikesPage.module.css'

const LikesPage = () => {
  const likes = useSelector(state => state.likes.likes)
  const removed = useSelector(state => state.likes.removedLikes)
  const dispatch = useDispatch()

  const [azToogle, setAzToggle] = useState(1)
  const [query, setQuery] = useState('')

  const removeLikeAction = id => {

  }  

// console.log(likes);
  return (
    <Page>
      <PageHead setQuery={setQuery} />
      <PageContent>
        <Mosaic breeds={likes} query={query} azToogle={azToogle}  />
      </PageContent>
    </Page>
  )
}

export default LikesPage