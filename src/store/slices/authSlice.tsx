import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  userInfo: '',
  token: ''
}

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    storeData: (state, action: PayloadAction<string> ) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.userInfo = action.payload 
    },
    storeToken: (state, action: PayloadAction<string>) => {
        state.token = action.payload
    }
    ,
    deleteData: (state) => {
        state.userInfo = ''
        state.token = ''
    },
  },
})

// Action creators are generated for each case reducer function
export const { storeData, deleteData } = userSlice.actions

export default userSlice.reducer