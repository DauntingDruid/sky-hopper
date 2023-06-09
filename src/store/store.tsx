import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import flightReducer from './slices/bookFlightSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    flight: flightReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch