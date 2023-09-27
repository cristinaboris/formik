import React, { useEffect } from 'react'
import { useFormik , Formik, Form, Field,withFormik} from 'formik'
import {sighupValidation} from '../signupValidation'
import { BrowserRouter, Link, Router, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/slice/userSlice'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { match} from '../assets/match'
import { useNavigate } from 'react-router-dom';


const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
const Login = () => {
const dispatch = useDispatch()
const navigate = useNavigate()

const handleLOGIN = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(console.log)
    .catch(console.error)
}

    const {values, handleBlur, errors, handleChange, handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema: sighupValidation,
        onSubmit: (values) => {
          console.log(values)
        }, 
        handleSubmit: ({values, match}) => {
            console.log()
          if (values.name === match.name && values.email === match.email && values.password === match.password){
          return  navigate('/register') 
          } else {
            console.log('error')
          }
        }
      })

  return (
    <div>
      <Formik
initialValues={initialValues}
validationSchema={sighupValidation}
>
    <Form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <br/>
      <input type="text" name='name' 
      onBlur={handleBlur}
      onChange={handleChange}
      value={values.name}
      />

      <br/>
      {errors.name && <small>{errors.name}</small>}
      <br/>


<label htmlFor="email">Email</label>
      <br/>
      <input type="email" name='email' 
      onBlur={handleBlur}
      onChange={handleChange}
      value={values.email}
      />


<br/>
      {errors.email && <small>{errors.email}</small>}
      <br/>
      <label htmlFor="password">Password</label>
      <br/>
      <input type="password" name='password' 
      onBlur={handleBlur}
      onChange={handleChange}
      value={values.password}
      />

<br/>
      {errors.password && <small>{errors.password}</small>}
      <br/>

      <label htmlFor="confirmPassword">Conform Password</label>
      <br/>
      <input type="password" name='confirmPassword' 
      onBlur={handleBlur}
      onChange={handleChange}
      value={values.confirmPassword}
      />
<br/>
      {errors.confirmPassword && <small>{errors.confirmPassword}</small>}
      <br/>
      <button type="submit">Submit</button>
    </Form>
    </Formik>


    <Link to='/register'>Register</Link>
    </div>
  )
}

export default Login
