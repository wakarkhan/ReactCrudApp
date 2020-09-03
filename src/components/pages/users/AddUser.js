import React,{useState} from "react";
import Axios from "axios";
import { useHistory, Link } from "react-router-dom";

const AddUser = () => {
    let history = useHistory();
    const [user,setUser] = useState({
         name:"",
         username:"",
         email:""
    });

    const onInputChange = e =>{
        setUser({...user,[e.target.name]: e.target.value})
    }

    const onSubmit = async e  => {
        e.preventDefault();
        await Axios.post("http://localhost:3001/users",user);
        history.push("/");
         
    };

    return (
        <div className="container">
            <h1>CREATE USER</h1>
            <form onSubmit={e => onSubmit(e) } >
            <div className="form-group">
                <input className="form-control" type="text" id="name" name="name" placeholder="Enter name..." value={user.name} onChange={e => onInputChange(e)} />
            </div>
            <div className="form-group">
                <input className="form-control" type="text" id="username" name="username" placeholder="Enter username..."  value={user.username} onChange={e => onInputChange(e)} />
            </div>
            <div className="form-group">
                <input className="form-control" type="text" id="email" name="email" placeholder="Enter email..."  value={user.email} onChange={e => onInputChange(e)}/>
            </div>
            <div className="form-group">
                <input className="btn btn-primary" type="submit" value="Save"></input>

                <Link className="btn btn-secondary mx-2" type="button" value="Cancel" to="/">Cancel</Link>
            </div>
            </form>
        </div>
    )
}

export default AddUser