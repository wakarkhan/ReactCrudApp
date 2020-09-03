import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const[users,setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    },[]);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/users")
        setUser(result.data.reverse());
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3001/users/${id}`,);
        loadUsers();
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Users</h1>
            </div>
            <table class="table border shadow">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index) => (
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="btn btn-info btn-sm" to={`/users/userdetail/${user.id}`}>View</Link>
                                    <Link className="btn btn-primary btn-sm mx-2" to={`/users/edituser/${user.id}`}>Edit</Link>
                                    <Link className="btn btn-danger btn-sm mx-1" onClick={() => deleteUser(user.id)}>Delete</Link>
                                </td>
                            </tr>
                        )
                    )}
                   
                </tbody>
                </table>
        </div>
    )
}

export default Home;