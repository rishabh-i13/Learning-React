import React,{useEffect,useState} from "react";

const Mycomponent =(props)=>{

    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log("My component is mounting...");

        return function () {
            console.log("Unmounting Done.....");
        }
    },[]);

    useEffect(()=>{
        console.log("Count is updating to",count);

        return function(){
            console.log("Returning Count ",count);
        }   
    },[count]);
    
    return(
        <div>
            <p>Count is {count}</p>
            <button onClick={()=>setCount(count+1)}>Update</button>
        </div>
    )
}

export default Mycomponent;