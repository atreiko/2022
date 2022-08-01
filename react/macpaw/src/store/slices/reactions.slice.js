import { createSlice } from '@reduxjs/toolkit'

const reactionsSlice = createSlice({
  name: 'reactions',
  initialState: {
    reactions: [],
    removedReactions: []
  },
  reducers: {

    addToReactions(state, action) {
      console.log('reactions action', action);
      state.reactions.push({
        date: `${new Date().getHours()}:${new Date().getMinutes() < 10 
          ? '0' + new Date().getMinutes() 
          : new Date().getMinutes()}`,
        ...action.payload
      })
    }, 
    
    removeFromReactions(state, action) {
      state.reactions = state.reactions.filter(reaction => reaction.id !== action.payload.id)
      state.removedReactions.push({
        label: action.type.slice(0, action.type.search('/')),
        date: `${new Date().getHours()}:${new Date().getMinutes() < 10 
          ? '0' + new Date().getMinutes() 
          : new Date().getMinutes()}`,
        ...action.payload
      })
    }
  }
})

export const { addToReactions, removeFromReactions } = reactionsSlice.actions
export default reactionsSlice.reducer