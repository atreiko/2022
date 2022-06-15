import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { withErrorApi } from '../../hoc-helper/withErrorApi'
import { getApiResource } from '../../utils/network'
import { API_SEARCH } from '../../constants/api'
import { getPeopleId } from '../../services/getPeopleData'
import { SearchPeople, UiInput } from '../../components'
import { debounce } from 'lodash'

import styles from './SearchPage.module.css'

const SearchPage = ({ setErrorApi }) => {
  const [ inputValue, setInputValue ] = useState('')
  const [ people, setPeople ] = useState([])

  useEffect(() => {
    getResponse('')
  }, [])
  
  const getResponse = async param => {
    const res = await getApiResource(API_SEARCH + param)

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url)

        return {
          id,
          name
        }
      })

      setPeople(peopleList)
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
  }

  const debouncedGetResponse = useCallback(debounce(value => getResponse(value), 300), [])

  const handleInputChange = value => {
    // const value = event.target.value
    setInputValue(value)
    debouncedGetResponse(value) 
  }

  return ( 
    <div className={styles.wrapper}>
      <h2>Search</h2>
      <UiInput 
        type='text' 
        value={inputValue}
        handleInputChange={handleInputChange}
        placeholder='Input character name'
      /> 
      <SearchPeople people={people} />
    </div>
  )
}

SearchPage.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(SearchPage)