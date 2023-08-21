import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigator = useNavigate();
  return (
    <>
        <h1>Contact</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore necessitatibus incidunt corporis tempore ipsam minima ut facilis quisquam, exercitationem eum!</p>
        <button className='btn btn-success p-2' onClick={() => navigator('/home')}> Return to Home</button>
    </>
  )
}

export default Contact