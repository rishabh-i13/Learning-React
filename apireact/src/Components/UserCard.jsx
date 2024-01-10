import React from "react";

const UserCard =(props)=>{
    // console.log(props.data)
    return (
        <div className="user-card">
            <img src="" alt="" className="user-image" />
            <h3>{props.data.name.first}</h3>
            <p>{props.data.phone}</p>
            <p>{props.data.dob.date}</p>
            <p>{props.data.location.country}</p>
            
        </div>
    )
}

export default UserCard;