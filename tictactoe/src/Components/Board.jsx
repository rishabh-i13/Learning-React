import React, { useState } from "react";

import Square from "./Square";

const Board =()=>{

    const [state,setState]=useState(Array(9).fill(null));
    const [isXturn,setIsXturn]=useState(true);

    // console.log(state);

    const checkWinner=()=>{
        const winnnerLogic= [
            [3,4,5],
            [0,1,2],
            [6,7,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7],
            [2,5,8]
        ]

        for(let logic of winnnerLogic){
            const [a,b,c]=logic;
            if(state[a]!==null && state[a]===state[b] && state[a]===state[c]){
                return [true,state[a]];
            }
        }
        return [false,null];
    }

    const isWinner=checkWinner();

    const handleClick=(index)=>{ 
        if(state[index]!==null) return;
        const copyState=[...state];
        copyState[index]=isXturn?"X":"O";
        setState(copyState);
        setIsXturn(!isXturn);
    };

    const handleReset=()=>{
        setState(Array(9).fill(null));
        setIsXturn(true);
        isWinner[0]=false;
    }

    return (
        <div className="board-container">
           
            <div className="board-row" >
                <Square  onClick={handleClick} value={0} state={state} setState={setState}/>
                <Square  onClick={handleClick} value={1} state={state} setState={setState}/>
                <Square  onClick={handleClick} value={2} state={state} setState={setState}/>
            </div>
            <div className="board-row">
                <Square  onClick={handleClick} value={3} state={state} setState={setState}/>
                <Square  onClick={handleClick} value={4} state={state} setState={setState}/>
                <Square  onClick={handleClick} value={5} state={state} setState={setState}/>
            </div>
            <div className="board-row">
                <Square onClick={handleClick} value={6} state={state} setState={setState}/>
                <Square onClick={handleClick} value={7} state={state} setState={setState}/>
                <Square onClick={handleClick} value={8} state={state} setState={setState}/>
            </div>

            <div className="winnerbox">
                
            {
                isWinner[0]? <><h4> {isWinner[1]} Won</h4>
                <button onClick={handleReset}>Play Again</button></>
                 : <>
                 <h4>Player {isXturn? "X" : "O"} its your move</h4>
                 <h4>No one won till now</h4></>
            }
            </div>
            
        </div>
    )
}
export default Board;
