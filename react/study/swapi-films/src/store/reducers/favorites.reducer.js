import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../constants/favorites.constants'
import { omit } from 'lodash'
import { getLocalStorage } from '../../utils/localStorage'

const initialState = {
  favorites: getLocalStorage('store')
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