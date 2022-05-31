// import HomePage from '@containers/HomePage';
// import PeoplePage from '@containers/PeoplePage';
// import PersonPage from '@containers/PersonPage';
// import SearchPage from '@containers/SearchPage';
// import FavoritesPage from '@containers/FavoritesPage';
// import NotFoundPage from '@containers/NotFoundPage';

// import ErrorMessage from '@components/ErrorMessage';
// import { HomePage, PeoplePage } from '../pages';
// import { HomePage, PeoplePage } from '../pages';

import HomePage from '../pages/HomePage/HomePage'
import PeoplePage from '../pages/PeoplePage/PeoplePage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import PersonPage from '../pages/PersonPage/PersonPage';

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
    id: 'notfound',
    path: '*',
    element: <NotFoundPage />
  },
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