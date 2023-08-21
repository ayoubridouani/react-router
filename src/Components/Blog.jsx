import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Blog = () => {
  const navigator = useNavigate();
  const params = useParams();
  return (
    <>
        <h1>Blog #{params.id}</h1>
        <p>{params.slug}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore necessitatibus incidunt corporis tempore ipsam minima ut facilis quisquam, exercitationem eum!</p>
        <button className='btn btn-success p-2' onClick={() => navigator('/home')}> Return to Home</button>
    </>
  )
}

export default Blog