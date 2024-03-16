import { ArrowCircleLeftSharp,  } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function Car() {
  const navigate = useNavigate();
  return (
    <div className=' text-center'>
     <h1>Car</h1>
     <Button color='danger' onClick={()=>navigate(-1)}>
      <ArrowCircleLeftSharp/>
     </Button>
     </div>
  )
}
