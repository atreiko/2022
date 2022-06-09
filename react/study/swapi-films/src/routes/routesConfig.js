import HomePage from '../pages/HomePage/HomePage'
import PeoplePage from '../pages/PeoplePage/PeoplePage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import PersonPage from '../pages/PersonPage/PersonPage';
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage';

const routesConfig = [
  { 
    id: 'home',
    element: <HomePage />,
    index: true
  },
  {
    id: 'people',
    path: 'people',
    element: <PeoplePage />
  },
  {
    id: 'person',
    path: 'people/:id',
    element: <PersonPage />
  },
  {
    id: 'favorites',
    path: 'favorites',
    element: <FavoritesPage />
  },
  {
    id: 'not-found',
    path: '*',
    element: <NotFoundPage />
  },
  // {
  //   id: 'undefined',
  //   path: '*',
  //   element: <NotFoundPage />
  // }
  // {
  //     path: '/people/:id',
  //     element: <PersonPage />
  // },
  // {
  //     path: '/search',
  //     element: <SearchPage />
  // },
  // {
  //     path: '/favorites',
  //     element: <FavoritesPage />
  // },
  // {
  //     path: '/fail',
  //     element: <ErrorMessage />
  // },
  // {
  //     path: '/not-found',
  //     element: <NotFoundPage />
  // },
  // {
  //     path: '*',
  //     element: <NotFoundPage />
  // },
];

export default routesConfig;