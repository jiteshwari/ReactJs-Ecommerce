import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import AppRouter from './AppRouter'
import { useGetUserDetailsQuery } from '../services/auth/authService'

const ProtectedRoute = () => {
  const { userInfo, userToken } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  // automatically authenticate user if token is found
  // useEffect(() => {
  //   if (userToken) {
  //     dispatch(useGetUserDetailsQuery())
  //   }
  // }, [userToken, dispatch])

  // show unauthorized screen if no user is found in redux store
  if (!userInfo) {
    return (
      <div className='unauthorized'>
        <h1>Unauthorized :</h1>
        <span>
          <NavLink to='/login'>Login</NavLink> to gain access

        </span>
      </div>
    )
  }

  // returns child route elements
  return <AppRouter/>
}
export default ProtectedRoute;