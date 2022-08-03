import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useFetching } from '../../hooks/useFetching'
import PostService from '../../services/api/postService'

import { 
  Page, 
  PageHead,
  PageContent,
  Report
} from '../../components'

import { Actions } from '../../components/UI'

import styles from './VotingPage.module.css'

const VotingPage = () => {
  const [cat, setCat] = useState('')
  const reactions = useSelector(state => state.reactions.reactions)

  const [fetchCat, catLoading, catError] = useFetching(async () => {
    const item = await PostService.searchCat()
    setCat(item[0])
  })

  useEffect(() => {
    fetchCat()
  }, [])

  if (catLoading) {
    return <h1>LOADING...</h1>
  }

  console.log(cat);

  return (
    <Page>
      <PageHead />
      <PageContent>
        <div className={styles.image}>
          <img src={cat.url} />
          <Actions cat={cat} setCat={setCat} />
        </div>
        <div className={styles.space} />
        {
          reactions &&
            reactions
              .map(({ id, label, date, removed }) => (
                  <Report key={Math.random()} id={id} date={date} label={label} removed={removed} />
              ))
              .reverse()
        }
        { catError && <h1>{catError}</h1> }
      </PageContent>
    </Page>
  )
}

export default VotingPage