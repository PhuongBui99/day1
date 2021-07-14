
import './App.css';
import React, { useState } from 'react';

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel';


function App() {
  const [value, setValue] = React.useState();
  const [ht, setDisplay] = useState('none');
  const [radio, setRadio] = useState('./images/red.jpg');
  const handleChange = (event) => {
    setValue(event.target.value);
    setDisplay('block');
  };

  const handleClick = (event) => {
    setRadio(event.target.value);
    const images = document.querySelectorAll('label img');
    images.forEach((e) => {
        e.style.display = 'none';
    })
    const image = event.target.parentNode.querySelector('img');
    console.log(image.style.display='block');
  }

  return (
    <div className="App">
      {/* <div>
        <input type="radio" id="img1" />
        <label for="img1"><img src={red} /></label>
        <input type="radio" id="img2" />
        <label for="img2"><img src={white} /></label>
        <input type="radio" id="img3" />
        <label for="img3"><img src={alu} /></label>
      </div>
      
 */}
      <RadioGroup value={value} onChange={handleChange}>
        <FormControlLabel value="./images/red.jpg" control={<Radio />} label="Red motobike"/>
        <FormControlLabel value="./images/white.jpg" control={<Radio />} label="White motobike" />
        <FormControlLabel value="./images/alu.jpg" control={<Radio />} label="Dark motobike" />
      </RadioGroup>
      <img style={{display: ht}} src={value}/>
      <br />
      <br />

      <div className="radio">
        <label>
          <input type="radio" checked={radio === "./images/red.jpg"} value="./images/red.jpg"  onChange={handleClick}/>
          <img src={radio}/>
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" checked={radio === "./images/white.jpg"} value="./images/white.jpg" onChange={handleClick}/>
          <img src={radio}/>
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" checked={radio === "./images/alu.jpg"} value="./images/alu.jpg" onChange={handleClick}/>
          <img src={radio}/>
        </label>
      </div>


    </div>
  );
}

export default App;
