import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../constants/favorites.constants';

export const addPersonToFavorite = person => ({
  type: ADD_TO_FAVORITES,
  payload: person
})

export const removePersonFromFavorite = personId => ({
  type: REMOVE_FROM_FAVORITES,
  payload: personId
})