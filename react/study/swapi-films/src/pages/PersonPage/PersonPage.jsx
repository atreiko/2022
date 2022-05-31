import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { API_PERSON } from '../../constants/api';
import { getApiResource } from '../../utils/network';
import { withErrorApi } from '../../hoc-helper/withErrorApi';
import PropTypes from 'prop-types'

import styles from './PersonPage.module.css'

const PersonPage = ({ setErrorApi }) => {
  const [ personInfo, setPersonInfo ] = useState(null)
  const [ personName, setPersonName ] = useState(null) 
  const { id } = useParams()

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`) // https://swapi.py4e.com/api/people/5/
      console.log(res); // {name: 'Leia Organa', height: '150', mass: '49', hair_color: 'brown', skin_color: 'light', …}

      if (res) {
        setPersonInfo([
          { title: 'Height', data: res.height },
          { title: 'Birth year', data: res.birth_year },
          { title: 'Eye color', data: res.eye_color },
          { title: 'Gender', data: res.gender },
          { title: 'Hair color', data: res.hair_color },
          { title: 'Mass', data: res.mass },
        ])
        // res.films
        setPersonName(res.name)
        setErrorApi(false)
      } else {
        setErrorApi(true)
      }
    })()
  }, [])

  return (
    <div>
      <h2>{personName}</h2>
      {personInfo && (
        <ul>
          {personInfo.map(({title, data}) => (
            data && (
              <li key={title}>
                <span>{title}: {data}</span>
              </li>
            )
          ))}
        </ul>
      )}
    </div>

  )
}

PersonPage.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(PersonPage)