import './App.css'

import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Blog from './Components/Blog'

function App() {
  return (
    <>
      <Navbar />
      <div className='container-fluid p-5'>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/blog/:id?/:slug?' element={<Blog />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App