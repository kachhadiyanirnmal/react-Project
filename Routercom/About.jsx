import { ArrowCircleLeftSharp, ArrowLeft, ArrowLeftSharp } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function About() {
  const navigate = useNavigate()  
  return (
    <div className='text-center'>
      <h1>About</h1>
      <Button className='align-items-center ' color='danger' onClick={()=>navigate(-1)}>
        <ArrowCircleLeftSharp />
      </Button>
    </div>
  )
}
