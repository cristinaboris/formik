import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFormik , Formik, Form, Field} from 'formik'
import {sighupValidation} from './signupValidation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import { store } from './store'
import { Provider } from 'react-redux'
import './firebase'


function App() {


  return (
  <div>
      <Provider store={store}>
<BrowserRouter>
<Routes>
<Route path='/' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/home' element={<Home/>}/>
</Routes>
</BrowserRouter>
</Provider>
  </div>
  )
}

export default App
