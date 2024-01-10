import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import './App.css';

import { BrowserRouter, Route, Routes,useParams,NavLink } from "react-router-dom";
//useParams is used to get parameters type thing
// Navlink is used to that we can give a path to it

const Home = () => {

  const [posts,setPosts]=useState(null);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then((data)=>data.json()).then((data)=>setPosts(data));
    
  },[])

  return(
      <div className="post-container">
        {
          posts ? posts.map((e) => 
          <NavLink to={`/post/${e.id}`} style={{display:"block"}}><div className="post">{e.title}</div></NavLink>
          ) : <h1>Home page</h1>
        } 
      </div>
    )
};

const PostPage=()=>{

  const params=useParams();
  console.log(params)

  const [data,setData]=useState(null);

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`).
    then(data=>data.json()).then(data=>setData(data));
  })

  console.log(data);

  if(data===null) return <h3>Loading</h3>

  return(
    <div>
      <h1>{data.title}</h1>
      <h3>{data.body}</h3>
    </div>
  )
}

const About = () => {
  return <h2>About Page</h2>;
};

const Profile = () => {
  return <h2>profile page</h2>;
};

const Setting=()=>{
  return(
    <h2>Settings Page</h2>
  )
}

const SayUser=()=>{
  const params=useParams();
  console.log(params)
  return (
    <div>
      <h1>Your Name is {params.userId}</h1>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/post/:postId' element={<PostPage />}/>

        <Route path="/user/:userId" element={<SayUser/>}/>

        <Route path="account">
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
