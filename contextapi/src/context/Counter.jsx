import React,{createContext,useState} from "react";

export const CounterContext=createContext(null);

export const CounterProvider =(props)=>{

    const [count,setCount]=useState(230);
    return (
        <CounterContext.Provider value={{count,setCount,name:"rishabh"}}>
            {props.children}
        </CounterContext.Provider>
    )
}
