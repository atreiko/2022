import React from 'react'
import likeGreen from './images/like-green.svg'
import favPink from './images/fav-pink.svg'
import disYellow from './images/dis-yellow.svg'

import styles from './Report.module.css'

const Report = ({ id, label, date, removed }) => {
  return (
    <div className={styles.report}>
      <div>
        {date}
      </div>
      <p>Image ID: <span>{id}</span> was {removed ? 'removed from': 'added to'} {label}</p>
      <div>
        { !removed && label === 'likes' && <img src={likeGreen} alt='action' /> }
        { !removed && label === 'favourites' && <img src={favPink} alt='action' /> }
        { !removed && label === 'dislikes' && <img src={disYellow} alt='action' /> }
      </div>
    </div>
  )
}

export default Report