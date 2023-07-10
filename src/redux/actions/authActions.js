import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = 'https://react-http-8ffd5-default-rtdb.firebaseio.com/orderDetails.json';

// authActions.js
const myURL = 'http://localhost:9091'
export const userLogin = createAsyncThunk(
  'auth/login',
  async (loginData, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
    
      console.log(loginData);

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        `${myURL}/authenticate`,
        loginData,
        config
      )
      console.log(data);
      // store user's token in local storage
      localStorage.setItem('userToken', data.jwtToken)
      return data
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)


export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ firstName, email, password }, { rejectWithValue }) => {
    try {
        console.log(firstName);
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      await axios.post(
        `${backendURL}`,
        { firstName, email, password },
        config
      )
    } catch (error) {
    // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)