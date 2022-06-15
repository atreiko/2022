import React, { useEffect, useState } from 'react'

import { getApiResource } from '../../utils/network'
import { API_PEOPLE } from '../../constants/api'
import { getPeopleId, getPeoplePageId } from '../../services/getPeopleData'
import { PeopleList, PeopleNavigation } from '../../components'
import { withErrorApi } from '../../hoc-helper/withErrorApi'
import { useQueryParams } from '../../hooks/useQueryParams'
import PropTypes from 'prop-types'

import styles from './PeoplePage.module.css'

const PeoplePage = ({ setErrorApi }) => {
  const [ people, setPeople ] = useState(null)
  const [ prevPage, setPrevPage ] = useState(null)
  const [ nextPage, setNextPage ] = useState(null)
  const [ currentPage, setCurrentPage ] = useState(1)

  const query = useQueryParams()
  const queryPage = query.get('page') 

  useEffect(() => {
    getResource(API_PEOPLE + queryPage)
  }, [queryPage])

  const getResource = async url => {
    const res = await getApiResource(url)

    if (res) {
      const peopleList = res.results.map(({ name, url}) => {
        const id = getPeopleId(url)
  
        return {
          id,
          name,
          url
        }
      })

      setPeople(peopleList)
      setPrevPage(res.previous)
      setNextPage(res.next)
      setCurrentPage(getPeoplePageId(url))
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
  }

  return (
    <div>
      <PeopleNavigation 
        getResource={getResource}
        nextPage={nextPage}
        prevPage={prevPage}
        currentPage={currentPage}
      />
      {people && <PeopleList people={people} />}
    </div>
  )
}

PeoplePage.propTypes = {
	setErrorApi: PropTypes.func,
}

export default withErrorApi(PeoplePage)