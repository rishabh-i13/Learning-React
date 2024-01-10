import React ,{useEffect, useState} from 'react';

import './App.css';
import Mycomponent from './Mycomp';
import Timer from './Timer';
function App() {

  const [isVisible,setVisible]= useState(true);

  useEffect(()=>{
    console.log("App is mounting........");
  },[]);

  return (
    <div className="App">
      {/* {
        isVisible? <Mycomponent/> : <></>
      }
      <button onClick={()=>setVisible(!isVisible)}>Toggle</button> */}
      <Timer/>
    </div>
  );
}

export default App;
