import { ArrowCircleLeftSharp } from '@mui/icons-material';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function Bike() {
  const navigate = useNavigate();
  return (
    <div className='text-center'>
     <h1>Bike</h1>
     <h5>Sport</h5>
     <h5>Cruise</h5>
     <h5>Normal</h5>
     <h5>Choppar</h5>
     <Button className='' color='danger' onClick={()=>navigate(-1)}>
      <ArrowCircleLeftSharp/>
     </Button>
     </div>
  )
}
