import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/actions/authActions';
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
  display: flex;
  flex-direction: column;

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

const Login = () => {
  const { loading, userInfo, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
    dispatch(userLogin(data));
  };

  return (
    <Container>
      <Card>
        <StyledForm onSubmit={handleSubmit(submitForm)}>
          {error && <Error>{error}</Error>}
          <div className='form-group'>
            <label htmlFor='userName'>Email</label>
            <input type='test' className='form-input' {...register('userName')} required />
          </div>
          <div className='form-group'>
            <label htmlFor='userPassword'>Password</label>
            <input type='password' className='form-input' {...register('userPassword')} required />
          </div>
          <button type='submit' className='button' disabled={loading}>
            {loading ? <h6>Loading...</h6> : 'Login'}
          </button>
        </StyledForm>
      </Card>
    </Container>
  );
};

export default Login;
