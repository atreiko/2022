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

В PersonPage есть два компонента, которые делают запросы.
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

---

## REDUX (Favorites)

`npm i react-redux @reduxjs/toolkit`

1. Импорт Provider, оборачиваем App
2. Импорт store, прокидываем в Provider
3. Создаем структуру файлов в src/store
4. Создаем FavoritesPage
```js
store
  actions
  constants
    favorites.constants.js
  reducers
    favoritesReducer.js
  index.js
```

```js
src/store/constants/favorites.constants.js

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'
```

_.omit(obj, [key1, key2]) - удаляет ключи, объекта, которые мы передаем в массив
```js
src/store/reducers/favoritesReducer.js

import { omit } from 'lodash'

const initialState = {
  favorites: {}
}

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return { ...state, favorites: { ...state.favorites, ...action.payload }}
    case REMOVE_FROM_FAVORITES:
      return { favorites: omit(state.favorites, [action.payload]) }
    default: return state
  }
}
```

```js
src/store/index.js

import { createStore } from 'redux'
import { favoritesReducer } from './reducers/favoritesReducer'

export const store = createStore(favoritesReducer)
```

Читаем данные из store и отображаем их
```js
src/pages/FavoritesPage/FavoritesPage.jsx

const FavoritesPage = () => {
  const favorites = useSelector(store => store.favorites)
```

PersonTitle будет получать фунционал добавления в Favorites и удаление.
В этом компоненте будут ф-ии обработчика событий add и remove.
Обработчики событий диспатчат actions. addPersonToFavorite принимает в себя payload в
виде объекта. 
```js
src/components/PersonTitle/PersonTitle.jsx

import { 
  addPersonToFavorite, 
  removePersonFromFavorite 
} from '../../store/actions/favorites.actions'

const PersonTitle = ({ personName, personId }) =>

const dispatch = useDispatch()

const add = () => {
  dispatch(addPersonToFavorite({
      [personId]: {
        name: personName
      } 
    }))
} 
const remove = () => {
  dispatch(removePersonFromFavorite(personId))
}

return (
  <>
    <button onClick={add} className={styles.btn}>Add to favorites</button>
    <button onClick={remove} className={styles.btn}>Remove from favorites</button>
  </>
)
```

---

### redux-devtools-extesion, applyMiddleware, thunk

```js
swapi-films/src/store/index.js

import { createStore, applyMiddleware } from 'redux'
import { favoritesReducer } from './reducers/favorites.reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export const store = createStore(
  favoritesReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
```

## Favotite Toggle на карточке 

1. Создаем useState(false)
2. Читаем состояние наших state.favorites
3. В useEffect указываем, если объект с таким свойством(id в нашем варианте) присутсвует в favorites,
  тогда true, иначе false
4. Прокидываем в PersonTitle -> personFavorite, setPersonFavorite
```js
swapi-films/src/pages/PersonPage/PersonPage.jsx

const PersonPage = ({ setErrorApi }) => {

const [ personFavorite, setPersonFavorite ] = useState(false)

const { id } = useParams()
const favorites = useSelector(state => state.favorites)

useEffect(() => {
  (async () => {
    const res = await getApiResource(`${API_PERSON}/${id}/`)
    
    favorites[id] ? setPersonFavorite(true) : setPersonFavorite(false)
..
  return (
    <>
      <PersonTitle
        personName={personName} 
        personId={personId} 
        personFavorite={personFavorite}
        setPersonFavorite={setPersonFavorite}
      /> 
    </>
  )
```

Реализация с кнопкой удаления и добавления
1. Приняли пропсы personFavorite, setPersonFavorite 
2. После диспатча меняем состояние personFavorite
3. Рендерим кнопки по условию
```js
swapi-films/src/components/PersonTitle/PersonTitle.jsx

const PersonTitle = ({ 
  personName, personId, personFavorite, setPersonFavorite 
}) => {

  const add = () => {
    dispatch(addPersonToFavorite({
      [personId]: {
        name: personName
      } 
    }))
    setPersonFavorite(true) // <---
  }

  const remove = () => {
    dispatch(removePersonFromFavorite(personId))
    setPersonFavorite(false) // <---
  }

{personFavorite 
  ? <button onClick={remove} className={styles.btn}>Remove from favorites</button>
  : <button onClick={add} className={styles.btn}>Add to favorites</button>
}
```
Реализация с одной кнопкой 
```js
swapi-films/src/components/PersonTitle/PersonTitle.jsx

const toggleFavoritePeople = () => {
  if (personFavorite) {
    dispatch(removePersonFromFavorite(personId))
    setPersonFavorite(false)
  } else {
    dispatch(addPersonToFavorite({
      [personId]: {
        name: personName
      } 
    }))
    setPersonFavorite(true)
  }
}
// Кнопка
return (
  <>
    <button className={styles.btn} onClick={toggleFavoritePeople}>
      {personFavorite ? 'Remove from favorites' : 'Add to favorites'}
    </button>
  </>
)
// ------------------------------------------------------------
// svg
return (
  <>
    {<FavoriteIcon fill={personFavorite} onClick={toggleFavoritePeople} />}
  </>
)
```
0
Компонент FavoriteIcon
```js
src/assets/FavoriteIcon.jsx
const FavoriteIcon = ({ fill, onClick }) => {

  return (
    <svg 
      version="1.1" 
      id="Layer_1" 
      x="0px" 
      y="0px"
      viewBox="0 0 482.207 482.207" 
      onClick={onClick}
      width="18px"
    >
      <path 
        d="M482.207,186.973l-159.699-33.705L241.104,11.803l-81.404,141.465L0,186.973l109.388,121.134L92.094,470.404l149.01-66.6l149.01,66.6l-17.294-162.296L482.207,186.973z M241.104,370.943l-113.654,50.798l13.191-123.788l-83.433-92.393l121.807-25.707l62.09-107.9l62.09,107.9L425,205.561l-83.433,92.393l13.191,123.788L241.104,370.943z"
        stroke="#000"
        fill={fill ? '#f00' : '#fff'}
      />
    </svg>
  )
}
```

---

## Отображение количества элементов на корзине

1. useState(0) -> отображаем count
2. Читаем состояние элементов в state
3. useEffect -> получаем количесво элементов
4. Трехзначное число не помещается в элемент, потому ставим "...", если больше двузначного числа
5. favorites добавляем в массив зависимостей
```js
swapi-films/src/components/Cart/Cart.jsx

const Cart = () => {
  const [ count, setCount ] = useState(0)
  const favorites = useSelector(state => state.favorites)

  useEffect(() => {
    const length = Object.keys(favorites).length
    length.toString().length > 2 ? setCount('...') : setCount(length)
  }, [favorites])

  return (
    <div className={styles.cart}>
      <Link
        to='/favorites'
      >
        <span className={styles.counter}>{count}</span>
        <CartIcon />
      </Link>
    </div>
  )
}
```

## Отображение элементов добавленных в favorites на странице FavoritePage

1. Читаем состояние favorites
2. people, setPeople
3. Для отображения элементов будет переиспользовать компонент PeopleList
```js
swapi-films/src/pages/FavoritePage/FavoritePage.jsx

const FavoritesPage = () => {
  const [ people, setPeople ] = useState([])

  const favorites = useSelector(state => state.favorites)

  useEffect(() => {
    const array = Object.entries(favorites) // ['3', {…}]
    
    if (array.length) {
      const result = array.map(item => {
        return {
          id: item[0],
          ...item[1]
          // name: item[1].name
        }
      })
      setPeople(result)
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <h2>Favorites Page</h2>
      {people.length 
        ? <PeopleList people={people} />
        : <h3>There are no items</h3>
      }
    </div>
  )
}
```

---

## localStorage

Ф-ции для работы с localStorage
```js
swapi-films/src/utils/localStorage.js

export const getLocalStorage = key => {
  const data = localStorage.getItem(key)

  if (data !== null) {
    return JSON.parse(data)
  }
  
  return {}
}

export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}
```

1. Подписываемся на localStorage
2. Импортируем нашу утилиту на добавление в localStorage
3. Называем наш ключ 'store'
4. Указываем reducer
```js
swapi-films/src/store/index.js

store.subscribe(() => {
  setLocalStorage('store', store.getState().favorites)
})
```

CHEK --> `Application / Local Storage / localhost:3000`

```js
swapi-films/src/store/reducers/favorites.reducer.js

const initialState = {
  favorites: getLocalStorage('store')
}
```

Добаленные в favorites елементы должны сохраняться в localStorage после перезагрузки страницы 

---

## Context / Change Theme

1. Пишем константы названий темы.
2. Создаем состояние
3. Ф-ция смены темы сеттит по имени
4. Создаем контекст для ThemeContext
5. ThemeContext.Provider получаем текущую тему и ф-цию изменения в value
```js
swapi-films/src/context/ThemeProvider.jsx

import React, { useState } from 'react'

export const THEME_DARK = 'dark';
export const THEME_LIGHT = 'light';
export const THEME_NEUTRAL = 'neutral';

export const ThemeContext = React.createContext()

const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(null)

  const change = name => {
    setTheme(name)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        change
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
```

```js
swapi-films/src/index.js

import ThemeProvider from './context/ThemeProvider';
 
return (
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
)
```

Переключатель тем
```js
swapi-films/src/components/ThemeSwitcher/ThemeSwitcher.jsx

import React, { useContext } from 'react'
import { ThemeContext, THEME_DARK, THEME_LIGHT, THEME_NEUTRAL } from '../../context/ThemeProvider'

const ThemeSwitcher = () => {
  const isTheme = useContext(ThemeContext)

  return (
    <div>
      {isTheme.theme}
      <button onClick={() => isTheme.change(THEME_DARK)}>Dark</button>
      <button onClick={() => isTheme.change(THEME_LIGHT)}>Light</button>
      <button onClick={() => isTheme.change(THEME_NEUTRAL)}>Neutral</button>
    </div>
  )
}
```

Ренднрим переключатель в HomePage
```js
swapi-films/src/pages/HomePage/HomePage.jsx

import { ThemeSwitcher } from '../../components'

const HomePage = () => {
  return (
    <div>
      <ThemeSwitcher />
    </div>
  )
}
```

---

Изменяем лого в Header при смене темы
1. Создаем состояние иконки
2. Получаем ThemeContext 
3. В useEffect сеттим иконку по ключам 'dark', 'light', 'neutral'. Отслеживаем изменения isTheme
4. Рендер
```js
swapi-films/src/componentes/Header/Header.jsx

import React, { useContext, useEffect, useState } from 'react'

import { ThemeContext, THEME_DARK, THEME_LIGHT, THEME_NEUTRAL } from '../../context/ThemeProvider'

import forDark from './img/01.svg'
import forLight from './img/02.svg'
import forNeutral from './img/03.svg'

const Header = () => {
  const [icon, setIcon] = useState()
  const isTheme = useContext(ThemeContext)

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_DARK: setIcon(forDark)
        break;
      case THEME_LIGHT: setIcon(forLight)
        break;
      case THEME_NEUTRAL: setIcon(forNeutral)
        break;
      default: setIcon(forDark)
    }
  }, [isTheme])

  return (
    <ul>
      <li>
        <NavLink to='/people/?page=1'>People</NavLink>
      </li>
      <li>
        <NavLink to='/'>
          <img src={icon} alt='icon' />
        </NavLink>
      </li>
    </ul>
  )
```

### Изменить CSS переменные

Элементы свойство которых будет --theme-default - будут изменяться в зависимости от выбранной темы.
Добавляем переменные c пометкой elem и вариантами dark, light, neutral, default
```css
swapi-films/src/index.css

:root {
  --theme-dark-elem:    gold;
  --theme-light-elem:   #0e0e0e;
  --theme-neutral-elem: #f00;
  --theme-default-elem: var(--theme-dark-elem);
}
```

Ф-ция находит элемент с переменной --theme-default-elem и изменяет вариант на текущий.
```js
swapi-films/src/services/changeCssVariables.js

const changeCssVariable = theme => {
  const root = document.querySelector(':root')

  root.style.setProperty('--theme-default-elem', `var(--theme-${theme}-elem)`)
}
```

Прокидывакм вариант темы в changeCssVariable. Где ф-ция change - является обработчиком событий при нажатии
```js
swapi-films/src/context/ThemeProvider/ThemeProvider.jsx

import { changeCssVariable } from '../services/changeCssVariables'

const ThemeProvider = ({ children, ...props }) => {

  const change = name => {
    setTheme(name)
    changeCssVariable(name)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        change
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  )
}
```

### Изменить background

Добавляем переменные c пометкой bg и вариантами dark, light, neutral, default
```css
swapi-films/src/index.css

:root {
  --theme-dark-bg:    #0e0e0e;
  --theme-light-bg:   #f9f5f5;
  --theme-neutral-bg: #c0c0c0;
  --theme-default-bg: var(--theme-dark-bg);
}
```

Ищем все --theme-default-bg и меняем на текущую тему
```js
swapi-films/src/services/changeCssVariables.js

export const changeCssVariable = theme => {
  const root = document.querySelector(':root')

  root.style.setProperty('--theme-default-elem', `var(--theme-${theme}-elem)`)
  root.style.setProperty('--theme-default-bg', `var(--theme-${theme}-bg)`) // <--
}
```

Для всех элементов на которые влияет смена темы будет дефолтное значение --theme-default
Для ряда схожих элементов мы будем записывать ключ -bg или -elem в нашем примере
Уникальные значения можно вынести в массив и пройтись циклом forEach. 
```js
export const changeCssVariable = theme => {
  const root = document.querySelector(':root')

  const cssVariables = ['elem', 'bg']

  cssVariables.forEach(element => {
    root.style.setProperty(
      `--theme-default-${element}`,
      `var(--theme-${theme}-${element})`
    )
  })
}
```

Добавляя новые элементы - 
записываем новые значения в массив. 
```js
const cssVariables = ['elem', 'bg', 'title'] 
// --theme-default-title
```

---

## Search

1. Создаем SearchPage, route, Link перехода на страницу.
2. Создаем состояние inputValue и people
3. Создаем ф-ю обработчик события handleInputChange
4. Из HOC получаем ф-ю setErrorApi
5. Получаем response поиска.
* API_SEARCH = https://swapi.py4e.com/api/people/?search=
* param - это value нашего input
6. Через map вытаскиваем нужные поля. getPeopleId(url) - получаем ID из url
7. Сеттим people
8. В компонент SearchPeople передаем people
```js
swapi-films/src/pages/SearchPage/SearchPage.jsx

const SearchPage = ({ setErrorApi }) => {
  const [ inputValue, setInputValue ] = useState('')
  const [ people, setPeople ] = useState([])

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

  const handleInputChange = event => {
    const value = event.target.value
    setInputValue(value)
    getResponse(value)
  }

  return ( 
    <div className={styles.wrapper}>
      <h2>Search</h2>
      <input 
        type='text' 
        value={inputValue}
        onChange={handleInputChange}
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
```

```js
swapi-films/src/components/SearchPeople/SearchPeople.jsx

const SearchPeople = ({ people }) => (
  <>
    {
      people.length
      ? (
        <ul className={styles.list}>
          {people.map(({ id, name}) => (
            <li className={styles.item} key={id}>
              <Link to={`/people/${id}`}>
                {name}
              </Link>
            </li>
          ))}
        </ul> 
      )
      : <h2>No results</h2>
    }
  </>
)

SearchPeople.propTypes = {
  people: PropTypes.array
}

export default SearchPeople
```

Когда заходим на SearchPage - мы сразу видем No results.
Чтоб сразу получать список всех - добавляем в getResponse('') в useEffect

```js
swapi-films/src/pages/SearchPage/SearchPage.jsx

  useEffect(() => {
    getResponse('')
  }, [])
```

### debounce (lodash), useCallback
debounce принимает ф-ю и время задержки.
```js
swapi-films/src/pages/SearchPage/SearchPage.jsx

import React, { useCallback } from 'react'
import { debounce } from 'lodash'

const debouncedGetResponse = useCallback(debounce(value => getResponse(value), 300), [])

const handleInputChange = event => {
  const value = event.target.value
  setInputValue(value)
  // getResponse(value) ! delete
  debouncedGetResponse(value)
}
```

---

### Декомпозиция UiInput

CancelIcon принимает в себя handleInputChange, что при нажатии позволит очищать инпут.
value манипулирует стилями. Когда true - CancelIcon видно.
```js
swapi-films/components/UI/UiInput/UiInput.jsx

const UiInput = ({
  type = 'text', 
  value, 
  handleInputChange, 
  placeholder, 
  classes
}) => {
  return (
    <div className={[styles.wrapper, classes].join(' ')}>
      <input 
        type={type} 
        value={value} 
        onChange={(e) => handleInputChange(e.target.value)} // <-- 
        placeholder={placeholder} 
      />
      <CancelIcon handleInputChange={handleInputChange} value={!!value} />
    </div>
  )
}
```

Теперь ф-ия принимает value
```js
swapi-films/src/pages/SearchPage/SearchPage.jsx

const handleInputChange = value => {
  // const value = event.target.value ! deleted
  setInputValue(value)
  getResponse(value)
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
```

```js
swapi-films/src/assets/CancelIcon.jsx

const CancelIcon = ({ value, handleInputChange }) => 

  const styles = {
    opacity: value ? '1' : '0'
  }

    return (
    <svg 
      onClick={() => handleInputChange('')}
      style={styles}
    >
      <g>
        <path fill='#7c7c7c' d="M1.63,97.99l36.55-36.55L1.63,24.89c-2.17-2.17-2.17-5.73,0-7.9L16.99,1.63c2.17-2.17,5.73-2.17,7.9,0 l36.55,36.55L97.99,1.63c2.17-2.17,5.73-2.17,7.9,0l15.36,15.36c2.17,2.17,2.17,5.73,0,7.9L84.7,61.44l36.55,36.55 c2.17,2.17,2.17,5.73,0,7.9l-15.36,15.36c-2.17,2.17-5.73,2.17-7.9,0L61.44,84.7l-36.55,36.55c-2.17,2.17-5.73,2.17-7.9,0 L1.63,105.89C-0.54,103.72-0.54,100.16,1.63,97.99L1.63,97.99z"/>
      </g>
    </svg>
  )
```

--- 

## Scrollbar

```css
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--theme-default-elem);
  border-radius: 3px;
}
```