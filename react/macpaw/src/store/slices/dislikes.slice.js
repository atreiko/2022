import { createSlice } from '@reduxjs/toolkit'

const dislikesSlice = createSlice({
  name: 'dislikes',
  initialState: {
    dislikes: [],
    removedDislikes: []
  },
  reducers: {

    addToDislikes(state, action) {
      console.log('dislikes action', action);
      state.dislikes.push({
        label: 'dislikes',
        date: `${new Date().getHours()}:${new Date().getMinutes() < 10 
          ? '0' + new Date().getMinutes() 
          : new Date().getMinutes()}`,
        ...action.payload
      })
    },
    
    removeFromDislikes(state, action) {
      state.dislikes = state.dislikes.filter(dislike => dislike.id !== action.payload)
      state.removedDislikes.push({
        label: action.type[0].toUpperCase() + action.type.slice(1, action.type.search('/')),
        date: `${new Date().getHours()}:${new Date().getMinutes() < 10 
          ? '0' + new Date().getMinutes() 
          : new Date().getMinutes()}`,
        ...action.payload
      })
    }
  }
})

export const { addToDislikes, removeFromDislikes } = dislikesSlice.actions
export default dislikesSlice.reducer