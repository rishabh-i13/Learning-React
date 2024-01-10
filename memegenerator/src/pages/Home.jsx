import React, { useEffect,useState } from "react";
import MemeCard from '../components/Card';
import {getAllMemes} from '../api/memes'

const HomePage=()=>{

    const [data,setData]=useState(null);

    useEffect(()=>{
        getAllMemes().then((e)=>setData(e.data.memes));
    },[]);
    return(
        <div  className="row">
            {
                data?data.map((el)=><MemeCard img={el.url} title={el.name}/>):null
            }
        </div>
    );
}

export default HomePage;