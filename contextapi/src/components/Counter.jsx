import React,{useContext} from "react";
import {CounterContext} from '../context/Counter'


const Counter =()=>{

    const CntContext=useContext(CounterContext);
    
    return(
        <div>
            <button onClick={()=>CntContext.setCount(CntContext.count +1)}>INC</button>
            <button onClick={()=>CntContext.setCount(CntContext.count -1)}>DEC</button>
        </div>
    )
}

export default Counter;