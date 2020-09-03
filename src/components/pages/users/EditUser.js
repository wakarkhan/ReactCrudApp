import React,{useState, useEffect} from "react";
import Axios from "axios";
import { useHistory,useParams, Link } from "react-router-dom";

const EditUser = () => {
    let history = useHistory();
    const {id} = useParams();
    const [user,setUser] = useState({
         name:"",
         username:"",
         email:""
    });

    const onInputChange = e =>{
        setUser({...user,[e.target.name]: e.target.value})
    }

    useEffect(() => {
        loadUser()
    },[]);

    const onSubmit = async e  => {
        e.preventDefault();
        await Axios.put(`http://localhost:3001/users/${id}`,user);
        history.push("/");
    };

    const loadUser = async () => {
        const result = await Axios.get(`http://localhost:3001/users/${id}`);
        setUser(result.data);
    }

    return (
        <div className="container">
            <h1>EDIT USER</h1>
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
                <input className="btn btn-primary" type="submit" value="Update"></input>

                <Link className="btn btn-secondary mx-2" type="button" value="Cancel" to="/">Cancel</Link>
            </div>
            </form>
        </div>
    )
}

export default EditUser