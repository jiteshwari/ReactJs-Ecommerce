import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/actions/authActions';
import { Error } from '..';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Card = styled.div`
  width: 500px;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const StyledForm = styled.form`
  .form-group {
    margin-bottom: 20px;
    label {
      margin-bottom: 5px;
      color: #555;
    }
    .form-input {
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
      width: 100%;
    }
  }

  .button {
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #ff69b4;
    color: #fff;
    cursor: pointer;
  }
`;

const Register = () => {
  const { loading, userInfo, error, success } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) navigate('/login');
    // redirect authenticated user to profile screen
    if (userInfo) navigate('/user-profile');
  }, [navigate, userInfo, success]);

  const submitForm = (data) => {
    // check if passwords match
    if (data.password !== data.confirmPassword) {
      alert('Password mismatch');
      return;
    }
    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase();
    dispatch(registerUser(data));
  };

  return (
    <Container>
      <Card>
        <StyledForm onSubmit={handleSubmit(submitForm)}>
          {error && <Error>{error}</Error>}
          <div className='form-group'>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' className='form-input' {...register('firstName')} required />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' className='form-input' {...register('email')} required />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' className='form-input' {...register('password')} required />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Confirm Password</label>
            <input
              type='password'
              className='form-input'
              {...register('confirmPassword')}
              required
            />
          </div>
          <button type='submit' className='button' disabled={loading}>
            {loading ? <h1>spin</h1> : 'Register'}
          </button>
        </StyledForm>
      </Card>
    </Container>
  );
};

export default Register;
