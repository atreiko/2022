import { createSlice } from '@reduxjs/toolkit'

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    favourites: [],
    removedFavourites: []
  },
  reducers: {

    addToFavourites(state, action) {
      console.log('favourites action', action);
      state.favourites.push({
        label: 'favourites',
        date: `${new Date().getHours()}:${new Date().getMinutes() < 10 
          ? '0' + new Date().getMinutes() 
          : new Date().getMinutes()}`,
        ...action.payload
      })
    },
    
    removeFromFavourites(state, action) {
      state.favourites = state.favourites.filter(favourite => favourite.id !== action.payload)
      state.removedFavourites.push({
        label: action.type[0].toUpperCase() + action.type.slice(1, action.type.search('/')),
        date: `${new Date().getHours()}:${new Date().getMinutes() < 10 
          ? '0' + new Date().getMinutes() 
          : new Date().getMinutes()}`,
        ...action.payload
      })
    }
  }
})

// console.log(favouritesSlice);

export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions
export default favouritesSlice.reducer