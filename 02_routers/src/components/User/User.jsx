import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <div className='text-center m-4'>User: {userid}</div>
  )
}

export default User