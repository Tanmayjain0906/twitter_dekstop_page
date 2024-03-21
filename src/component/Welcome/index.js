import React from 'react'
import { useParams } from 'react-router-dom'

function Welcome() {
    const {name} = useParams();
    console.log(name);
  return (
    <div className='container'>
        <h1>Welcome {name.toUpperCase()} !</h1>
    </div>
  )
}

export default Welcome