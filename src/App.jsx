import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Registration/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
