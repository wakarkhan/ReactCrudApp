import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

const UserDetail = () => {

    const {id} = useParams();
    useEffect(() => {
        loadUserData();
    },[])

    const [user,setUser] = useState({
        name:"",
        username:"",
        email:""
   });

    const loadUserData = async () => {
        const result = await Axios.get(`http://localhost:3001/users/${id}`);
        setUser(result.data);
    }


    return (
        <div className="container">
            <div className="py-4">
                <h1>User Detail</h1>
                <hr />
                <p><b>Name: </b> {user.name}</p>
                <p><b>Username: </b> {user.username}</p>
                <p><b>Email: </b> {user.email}</p>
            </div>
        </div>
    )
}

export default UserDetail