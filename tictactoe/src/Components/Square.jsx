import React,{useState} from "react";

const Square =(props)=>{

    return(
        <div 
        style={{border:"3px solid black",height:"100px",width:"100px",display:"flex",justifyContent:"center",alignItems:"center"}}
        className="square" onClick={()=>props.onClick(props.value)}>
            <h4>{props.state[props.value]}</h4>
        </div>
    )
}

export default Square;