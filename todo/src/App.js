import React from "react";

import Header from "./components/Header";
import Todoitems from "./components/Todoitems";
import Button from "./components/Button";
import CounterComponent from "./components/CounterComponent";
import "./style.css";

const App =()=>{
  return (
    <div className="todo-container">
      <CounterComponent/>
      <CounterComponent/>
      <CounterComponent/>     
      {/* <Header/>
      <Todoitems text="Eat"  complited={true}/>
      <Todoitems text="Code"/>
      <Todoitems text="Bath"/>
      <Todoitems text="DP-Graph"/>
      <Todoitems text="Sleep"/>
       */}
      <Button/>
    </div>
  )
}

export default App;