import React, {useState, useEffect } from 'react';

import PostCards from './Components/PostCards';
import UserCard from './Components/UserCard';


import { getRandomUser } from './api';
import { getPosts } from './api';

import './App.css';

function App() {

  const [data,setData]=useState(null);

  const [userData,setUserData]=useState(null);

  useEffect(()=>{
    getPosts().then((posts)=>setData(posts));
  },[]);

  useEffect(()=>{
    getRandomUser().then((user)=>setUserData(user.results[0]));  
  },[]);

  const refresh =()=>{
    getRandomUser().then((user)=>setUserData(user.results[0]));
  }

  return (
    <div className="App">
      {userData &&  <UserCard data={userData}/>}
      <button onClick={()=>refresh()}>Refresh</button>

      {
        data? data.map((e)=><PostCards title={e.title} body={e.body}/>) : <p>No Data available</p>
      }
    </div>
  );
}

export default App;
