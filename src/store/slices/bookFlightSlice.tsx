
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
   flightInfo: '',
}

export const userSlice = createSlice({
  name: 'flightData',
  initialState,
  reducers: {
    storeFlightData: (state, action: PayloadAction<string> ) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log('incoming flight data : ',action.payload)
      state.flightInfo = action.payload 
    },
    deleteFlightData: (state) => {
        state.flightInfo = ''
    },
  },
})

// Action creators are generated for each case reducer function
export const { storeFlightData, deleteFlightData } = userSlice.actions

export default userSlice.reducer