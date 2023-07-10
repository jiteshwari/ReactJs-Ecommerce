// authSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { registerUser,userLogin } from '../actions/authActions'

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
}

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      // ...logout reducer
      localStorage.removeItem('userToken') // deletes token from storage
      state.loading = false
      state.userInfo = null
      state.userToken = null
      state.error = null
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload
    },
  },
  extraReducers: {
     // login user
     [userLogin.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [userLogin.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.userInfo = payload
        state.userToken = payload.userToken
      },
      [userLogin.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
      },
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // registration successful
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export const { logout, setCredentials } = authSlice.actions
export default authSlice.reducer