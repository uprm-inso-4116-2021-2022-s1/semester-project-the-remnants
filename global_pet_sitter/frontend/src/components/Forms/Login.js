import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from "react-hook-form";
import FormSuccess from './FormSuccess';
import './Form.css';



export default function Login() {

  const {register, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post('/api/login', data)
    .then(function (response) {
      const status = response.status
      if ( status == 200 ) {
        window.location = "/"
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
          <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <h1>Global Pet Sitter</h1>
            <div className='form-inputs'>
              <label className='form-label'>Username</label>
              <input
                className='form-input'
                type='text'
                name='username'
                placeholder='Enter your username'
                {...register('username')}
              />
              {/* {errors.username && <p>{errors.username}</p>} */}
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
              {/* {errors.password && <p>{errors.password}</p>} */}
            </div>
            <button className='form-input-btn' type='submit'>
              Log In
            </button>
            <span className='form-input-login'>
              Dont have an account? <Link to='/signup'>Sign Up</Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};