import React,{useState} from "react";

const CounterComponent = () => {

    const [count,setcount] = useState(10); // set count is used to change the value of count, useState is a hook that returns array of size 
    return (
        <div>
            <p>Count Component - {count}</p>
            {
                count%2===0? <p>Number is Even</p> : <p>Number is Odd</p>
            }
            <button onClick={()=> setcount(count+1)}>INC</button>
        </div>
    )
}

export default CounterComponent;
