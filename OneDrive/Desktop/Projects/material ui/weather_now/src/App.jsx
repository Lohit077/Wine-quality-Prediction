import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormPropsTextFields from './FormPropsTextFields.jsx';
import ImgMediaCard from './ImgMediaCard.jsx';
import Weatherinfo from './weatherinfo.jsx';
function App() {
 

  return (
    <>
    <div className='weather'>
      <h1 className='header'>WEATHER NOW</h1>
          <Weatherinfo/>
      {/* <FormPropsTextFields/>
       <br /><br />
       <ImgMediaCard></ImgMediaCard> */}
    </div>
    </>
  )
}

export default App
