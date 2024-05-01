import { useMemo, useState } from 'react';
import './App.css';



function App() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(100);

  const BMI=useMemo(()=>{
    let heightCalculate=height/100;

    return(weight/(heightCalculate*heightCalculate)).toFixed(1)
  },[weight,height])
  return (
    <div className="main" >
      <div className='box'>
        <h1>BMI Calculator</h1>
        <div>
          <p>Weight:{weight} kg</p>
          <input type="range" onClick={(e) => setWeight(e.target.value)} name="weight" id="weight" max="200" />
        </div>
        <div>
          <p>Height:{height} cm</p>
          <input type="range" onClick={(e) => setHeight(e.target.value)} name="Height" id="Height" max="200" />
        </div>
        <h1>Your BMI is:{BMI}</h1>
      </div>
    </div>
  );
}

export default App;
