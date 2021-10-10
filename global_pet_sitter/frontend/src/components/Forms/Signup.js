import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from "react-hook-form";
import FormSuccess from './FormSuccess';


export default function Signup() {
  const {register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post('/api/register', data)
    .then(function (response) {
      const status = response.status
      if ( status == 200 ) {
        FormSuccess
      }
    })
  };

  return (
    <>
      <div className='form-container'>
        <span className='close-btn' onClick={event =>  window.location.href='/'}>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='../static/assets/dog-cat.svg' />
        </div>
              <div className='form-content-right'>
              <form onSubmit={handleSubmit(onSubmit)} className='form' noValidate>
                <h1>Sign Up And Join Global Pet Sitters!</h1>
                <div className='form-inputs'>
              <label className='form-label'>Name</label>
              <input
                className='form-input'
                type='text'
                name='name'
                placeholder='Enter your name'
                {...register('name')}
              />
              </div>
                <div className='form-inputs'>
                  <label className='form-label'>Username</label>
                  <input
                    className='form-input'
                    type='text'
                    name='username'
                    placeholder='Enter your username'
                    {...register('username')}
                  />
                </div>
                <div className='form-inputs'>
                  <label className='form-label'>Email</label>
                  <input
                    className='form-input'
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                    {...register('email')}
                  />
                </div>
                <div className='form-inputs'>
                  <label className='form-label'>Password</label>
                  <input
                    className='form-input'
                    type='password'
                    name='password'
                    placeholder='Enter your password'
                    {...register('password')}
                  />
                </div>
                <div className='form-inputs'>
                  <label className='form-label'>Confirm Password</label>
                  <input
                    className='form-input'
                    type='password'
                    name='password2'
                    placeholder='Confirm your password'
                    {...register('password_confirm')}
                  />
                </div>
                <button className='form-input-btn' type='submit'>
                  Sign up
                </button>
                <span className='form-input-login'>
                  Already have an account? <Link to='/login'>Login</Link>
                </span>
              </form>
            </div>
      </div>
    </>
  );
};