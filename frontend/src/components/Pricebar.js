import React from 'react'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


export default function Pricebar() {

     // Our States
  const [value, setValue] =  React.useState([1000,10000]);
  
  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };
    return (
<div>
    <div className='bg-light text-center m-4'
       style={{
      margin: 'auto',
      padding:'21px',
      display: 'block',
      width: 'fit-content'
    }}>
      <h3 className='text-dark '>PRICE</h3>
      <Typography id="range-slider" gutterBottom>
        Select Price Range:
      </Typography>
      <Slider
      className='w-100'
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
      />
      Your range of Price is between {value[0]} /- and {value[1]} /-
    </div>
        </div>
    )
}
