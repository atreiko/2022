import { createSlice } from '@reduxjs/toolkit'

const likesSlice = createSlice({
  name: 'likes',
  initialState: {
    likes: [],
    removedLikes: []
  },
  reducers: {

    addToLikes(state, action) {
      console.log('likes action', action);
      state.likes.push({
        label: 'likes',
        date: `${new Date().getHours()}:${new Date().getMinutes() < 10 
          ? '0' + new Date().getMinutes() 
          : new Date().getMinutes()}`,
        ...action.payload
      })
    }, 
    
    removeFromLikes(state, action) {
      state.likes = state.likes.filter(like => like.id !== action.payload)
      state.removedLikes.push({
        label: action.type[0].toUpperCase() + action.type.slice(1, action.type.search('/')),
        date: `${new Date().getHours()}:${new Date().getMinutes() < 10 
          ? '0' + new Date().getMinutes() 
          : new Date().getMinutes()}`,
        ...action.payload
      })
    }
  }
})

export const { addToLikes, removeFromLikes } = likesSlice.actions
export default likesSlice.reducer