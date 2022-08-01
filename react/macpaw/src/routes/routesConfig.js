import { 
  HomePage, 
  VotingPage,
  BreedsPage, 
  GalleryPage,
  BreedPage,
  LikesPage,
  DislikesPage,
  FavouritesPage
} from '../pages'

export const routesConfig = [
  {
    id: 'home-page',
    element: <HomePage />,
    index: true
  },
  {
    id: 'voting-page',
    element: <VotingPage />,
    path: 'voting'
  },
  {
    id: 'breeds-page',
    element: <BreedsPage />,
    path: 'breeds',
  },
  {
    id: 'breed-page',
    element: <BreedPage />,
    path: 'breeds/:id',
  },
  {
    id: 'gallery-page',
    element: <GalleryPage />,
    path: 'gallery',
  },
  {
    id: 'likes-page',
    element: <LikesPage />,
    path: 'likes',
  },
  {
    id: 'dislikes-page',
    element: <DislikesPage />,
    path: 'dislikes',
  },
  {
    id: 'favourites-page',
    element: <FavouritesPage />,
    path: 'favourites',
  },
]