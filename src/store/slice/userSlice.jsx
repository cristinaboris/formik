import { createSlice } from '@reduxjs/toolkit'




const initialState = {
  email: null,
  token: null, 
  id: null, 
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
     state.email = action.payload.email;
     state.token = action.payload.token;
     state.id = action.payload.id;
    },
     removeUser: ()=> {
        state.email = null;
        state.token = null;
        state.id = null;

     }
}})

// Action creators are generated for each case reducer function
export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer