import React, { useState, useEffect, Suspense } from 'react'
import { useParams } from 'react-router-dom';
import { API_PERSON } from '../../constants/api';
import { getApiResource } from '../../utils/network';
import { withErrorApi } from '../../hoc-helper/withErrorApi';
import PropTypes from 'prop-types'
import { PersonInfo, PersonLinkBack, UiLoading } from '../../components';

import styles from './PersonPage.module.css'

const PersonFilms = React.lazy(() => import('../../components/PersonFilms/PersonFilms'))

const PersonPage = ({ setErrorApi }) => {
  const [ personInfo, setPersonInfo ] = useState(null)
  const [ personName, setPersonName ] = useState(null) 
  const [ personFilms, setPersonFilms ] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`) // https://swapi.py4e.com/api/people/5/

      if (res) {
        setPersonInfo([
          { title: 'Height', data: res.height },
          { title: 'Birth year', data: res.birth_year },
          { title: 'Eye color', data: res.eye_color },
          { title: 'Gender', data: res.gender },
          { title: 'Hair color', data: res.hair_color },
          { title: 'Mass', data: res.mass },
        ])

        setPersonName(res.name)
        res.films.length && setPersonFilms(res.films)
        setErrorApi(false)
      } else {
        setErrorApi(true)
      } 
    })()
  }, [])

  return (
    <>
      <PersonLinkBack />
      <UiLoading />
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{personName}</h2>
        <div className={styles.info}>
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<UiLoading />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>

  )
}

PersonPage.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(PersonPage)