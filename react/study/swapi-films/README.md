# Star Wars API
API: `https://swapi.py4e.com/`

---

Универсальная ф-ция для работы с запросами
```js
swapi-films/src/utils

export const getApiResource = async url => {
  try {
    const res = await fetch(url)

    if (!res.ok) {
      console.error('Could not fetch.', res.status);
      return false
    }

    return await res.json()

  } catch (error) {
    console.error('Could not fetch.', error.message);
    return false
  }
}
// example:
(async () => {
  const res = await getApiResource(HTTPS + ROOT + PEOPLE)
  console.log(res);
})()
```

---

Сервис, который отдает ID из url --> https://swapi.py4e.com/api/people/1/
> В category - прокидываем константу PEOPLE("people")
`.replace(HTTPS + ROOT + category, '')` - результат: "/1/" 
`.replace(/\//g, '')` - результат: 1
* Создаем ф-цию проверки протокола 
```js
swapi-films/src/services/getPeopleData.js

import { HTTP, HTTPS, ROOT, PEOPLE } from '../constants/api'

const checkProtocol = url => {
  if (url.indexOf(HTTPS) !== -1) {
    return HTTPS
  }
  return HTTP
}

const getId = (url, category) => {
  const protocol = checkProtocol(url)

  const id = url
    .replace(protocol + ROOT + category, '')   //: /1/
    .replace(/\//g, '')                     //: 1
  return id
}

export const getPeopleId = url => getId(url, PEOPLE)
```

---

1. Ипортируем: 
* утилиту для работы с запросами
* константу API_PEOPLE = 'https://swapi.py4e.com/api/people/?page='
* ф-цию, которая получаем ID по категории people
2. Пишем ф-цию на получение данных из API. Используем утилиту, которая получает url
3. Достаем нужные поля через диструктурицазию
4. Из url получаем ID объекта с помощью getPeopleId
5. Возвращаем { id, name, url }, заносим результат в состояние
6. Если people === true - рендерим список
```js
swapi-films/src/pages/PeoplePage/PeoplePage.jsx

import { getApiResource } from '../../utils/network'
import { API_PEOPLE } from '../../constants/api'
import { getPeopleId } from '../../services/getPeopleData'

  useEffect(() => {
    getResource(API_PEOPLE)
  }, [])

  const getResource = async url => {
    const res = await getApiResource(url)

    const peopleList = res.results.map(({ name, url}) => {
      const id = getPeopleId(url)
      
      return {
        id,
        name,
        url
      }
    })
    setPeople(peopleList)
  }

  return (
    <div>
      {people && (
        <ul>
          {
            people.map(({ id, name, url }) => (
              <li key={id}>
                <a href='#'>
                  <p>{name}</p>
                </a>
              </li>
            ))
          }
        </ul>
      )}
    </div>
  )
```

---

Делаем декомпозицию PeopleList
```js
swapi-films/src/pages/PeoplePage/PeoplePage.jsx

  return (
    <div>
      { people && <PeopleList people={people} /> }
    </div>
  )
```

---

## Higher Order Component для отлова ошибок
* HOC - компонент, который принимает пропсом компонент, возвращая преобразует его в другой компонент
* View - это компонент, который мы хотим отобразить, если ошибки нету, иначе вернет компонент Error
```js
swapi-films/src/hoc-helper/withErrorApi.jsx

import { useState } from 'react'

export const withErrorApi = View => {

  return props => {
    const [errorApi, setErrorApi] = useState(false)
    
    return (
      <>
        {errorApi
          ? <h2>Error</h2>
          : <View 
              setErrorApi={setErrorApi}
              {...props}
            />
        }
      </>
    )
  }
} 
```

1. Импортируем HOC
2. Деструктурируем пропс setErrorApi
3. На экспорте прокидывакм компонент PeoplePage в withErrorApi
4. Проверяем условие при получение response
5. Пользуемся ф-ей setErrorApi в нашем коде из withErrorApi
```js
swapi-films/src/pages/PeoplePage/PeoplePage.jsx

import { withErrorApi } from '../../hoc-helper/withErrorApi'

const PeoplePage = ({ setErrorApi }) => {

  const getResource = async url => {
    const res = await getApiResource(url)

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url)
  
        return {
          id,
          name,
          url
        }
      })

      setPeople(peopleList)
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
  }
}
export default withErrorApi(PeoplePage)
```

1. Импортируем Error Message
2. Ренднрим компонент, если ошибка есть
```js
swapi-films/src/hoc-helper/withErrorApi.jsx

import { ErrorMessage } from '../components'

  return (
    <>
      {errorApi
        ? <ErrorMessage />
        : <View 
            setErrorApi={setErrorApi}
            {...props}
          />
      }
    </>
  )
```

---

## Prop-Types

`npm i prop-types`

1. Импорт
2. people - должен быть массив
```js
swapi-films/src/components/PeopleList/PeopleList.jsx

import PropTypes from 'prop-types'

const PeopleList = ({ people }) => {...

PeopleList.propTypes = {
  people: PropTypes.array
}
```

## Custom hook - useQueryParams

```js
swapi-films/src/hooks/useQueryParams.js

import { useLocation } from 'react-router-dom'

export const useQueryParams = () => {
  return new URLSearchParams(useLocation().search)
}
```

```js
swapi-films/src/components/Header/Header.jsx

<NavLink to='/people/?page=1'>People</NavLink>
```

## Pagination 

1. Наш response имеет next и previous. Берем из response и сеттим prevPage, nextPage.
2. Получаем номер сраницы запроса из useQueryParams() и добавляем к пути API_PEOPLE + queryPage для получения данных.
3. setCurrentPage - принимает в себя ф-ю, которая отдает id страницы people от url.
4. Рендерим навигацию и передаем нужные аргументы.
```js
swapi-films/src/pages/PeoplePage/PeoplePage.jsx

console.log(res) // --> 
  count: 87
  next: "https://swapi.py4e.com/api/people/?page=2"
  previous: null
  results: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

import { useQueryParams } from '../../hooks/useQueryParams'
import { getPeoplePageId } from '../../services/getPeopleData'

const [ prevPage, setPrevPage ] = useState(null)
const [ nextPage, setNextPage ] = useState(null)
const [ currentPage, setCurrentPage ] = useState(1)

const query = useQueryParams()        // URLSearchParams {}
const queryPage = query.get('page')   // 1

useEffect(() => {
  getResource(API_PEOPLE + queryPage) // https://swapi.py4e.com/api/people/?page=
}, [])                       
  
  // fetching...
if (res) {..
  setPrevPage(res.previous)
  setNextPage(res.next)
  setCurrentPage(getPeoplePageId(url))
} else..

console.log(queryPage);// 1
console.log(prevPage); // null
console.log(nextPage); // https://swapi.py4e.com/api/people/?page=2

return (
  <PeopleNavigation 
    getResource={getResource}
    nextPage={nextPage}
    prevPage={prevPage}
    currentPage={currentPage}
  />
)
```

1. Событие handleChange делает запрос url следующей и предыдущей страницы с помощью ф-ии getResource.
2. Link переключает страницы.
3. Несуществующие страницы возвращают null. Если false - дизейблим кнопку.
4. Стили на <button className='btn'> disabled: `.btn:disabled {...}`
```js
swapi-films/src/components/PeopleNavigation/PeopleNavigation.jsx

const PeopleNavigation = ({ 
  getResource, nextPage, prevPage, currentPage  
}) =>
const handleChangePrev = () => getResource(prevPage)
const handleChangeNext = () => getResource(nextPage)

  return (
    <div >
      <Link to={`/people/?page=${currentPage - 1}`}>
        <button 
          onClick={handleChangePrev} 
          disabled={!prevPage}
        >
          Prev
        </button>
      </Link>
      <Link 
        to={`/people/?page=${currentPage + 1}`}>
        <button 
          onClick={handleChangeNext} 
          disabled={!nextPage}
        >
          Next
        </button>
      </Link>
    </div>
  )
```

1. Выносим кнопку в отдельный компонент и принимаем пропсы.
2. classes - для того, чтоб добавить дополнительные стили или перетереть старые. Расположить последним. 
* UI/index.css - переменные для темы
```js
swapi-films/src/components/UI/UiButton.jsx

const UiButton = ({ text, disabled, onClick, theme='dark', classes }) => 
  return (
    <button 
      className={[styles.btn, styles[theme], classes].join(' ')} 
      onClick={onClick} 
      disabled={disabled}
    > 
      {text}
    </button>
  )
```

Передаем кнопкам пропсы.
className={styles.test} <- дополнительные стили(classes)
```js
swapi-films/src/components/PeopleNavigation/PeopleNavigation.jsx

  <>
    <Link to={`/people/?page=${currentPage - 1}`} className={styles.link}>
      <UiButton 
        text='Previous'
        onClick={handleChangePrev} 
        disabled={!prevPage}
      />
    </Link>
    <Link 
      to={`/people/?page=${currentPage + 1}`} className={styles.link}>
      <UiButton 
        text='Next'
        onClick={handleChangeNext} 
        disabled={!nextPage}
      />
    </Link>
  </>
```

## PersonPage

Переход на страницу /people/id (PersonPage)
```js
swapi-films/src/components/PeopleList/PeopleList.jsx

<Link to={`/people/${id}`}>
  <p>{name}</p>
</Link>
```

Добавояем роут
```js
swapi-films/src/components/routes/routesConfig.js

import PersonPage from '../pages/PersonPage/PersonPage';

{
  id: 'person',
  path: 'people/:id',
  element: <PersonPage />
},
```

1. HOC оборачивает PersonPage.
2. Пропсом получаем setErrorApi.
3. В useEffect получаем response по роуту https://swapi.py4e.com/api/people/ID/ .
4. Если response=true сеттим массив объектов с нужными данными и отдельно имя(заголовок).
5. Иначе рендерим компонент ошибки.
6. При рендере делаем проверку на data, так как объект может не содержать нужных нам полей.
```js
swapi-films/src/pages/PersonPage/PersonPage.jsx

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

export default withErrorApi(PersonPage)
```

Декомпозиция PersonInfo
```js
swapi-films/src/pages/PersonPage/PersonPage.jsx

{personInfo && <PersonInfo personInfo={personInfo} />}
```

---

## Go Back button (person link back)

```js
swapi-films/src/components/PersonLinkBack/PersonLinkBack.jsx

import { useNavigate } from 'react-router-dom'

const PersonLinkBack = () => {
  const navigate = useNavigate()

  const handleGoBack = e => {
    e.preventDefault()
    navigate(-1)
  }

  return (
    <div>
      <Link 
        to='#' 
        onClick={handleGoBack}
      >
        <img src={goBack} alt='goBack' />
        <span>Go Back</span>
      </Link>
    </div>
  )
}
```

---

## Promise.all() 

1. res.films - содержит массив из url с фильмами. На каждый из которых нужно сделать запрос:
`['https://swapi.py4e.com/api/films/5/', 'https://swapi.py4e.com/api/films/6/']`
2. Сеттим данные, прокидываем в PersonFilms
```js
swapi-films/src/pages/PersonPage/PersonPage.jsx

const [ personFilms, setPersonFilms ] = useState(null)

if (res) {..
  res.films.length && setPersonFilms(res.films)
} else ..

return (
  <>
    {personFilms && <PersonFilms personFilms={personFilms} />}
  </>
)
```

Ф-ция принимает в себя массив с урлами.
Возвращает результат запроса к каждому. 
```js
swapi-films/src/utils/network.js

export const makeConcurrentRequest = async url => {
  const res = await Promise.all(url.map(res => {
    return fetch(res).then(res => res.json())
  }))
return res
}
```

Создаем state для названий
Получаем результат запроса на каждый url
```js
swapi-films/src/components/PersonFilms/PersonFilms.jsx

const PersonFilms = ({ personFilms }) => {
  const [ filmsName, setFilmsName ] = useState([])

  useEffect(() => {
    (async () => {
      const response = await makeConcurrentRequest(personFilms)
      setFilmsName(response)
    })()
  }, [])

  return (
    <div>
      <ul>
        {filmsName.map(({ title, episode_id}) => (
          <li key={episode_id}>
            <span>Episode {episode_id}</span>
            <span> : </span>
            <span>{title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
```

--- 

## React.lazy(), Suspense (Ленивая загрузка)
На PersonPage есть два компонента, которые делают запросы.
Фильмы - менее приоритетная информация и мы ее подгружаем после загрузки основного контента PersonInfo
1. Удаляем классический импорт
2. Добавляем lazy импорт
3. Импортим Suspense 
4. fallback принимает в себя компонент загрузки
```js
swapi-films/src/pages/PersonPage/PersonPage.jsx

import React, { Suspense } from 'react'
//! delete import { PersonFilms } from '../../components';
const PersonFilms = React.lazy(() => import('../../components/PersonFilms/PersonFilms'))

return (
  <>
    {personFilms && (
      <Suspense fallback={<UiLoading />}>
        <PersonFilms personFilms={personFilms} />
      </Suspense>
    )}
  </>
)
```