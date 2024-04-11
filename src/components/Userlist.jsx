import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Userlist = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    })

    const getUsers = async () => {
        const response = await axios.get('http://localhost:3000/users');
        setUsers(response.data);
    }

    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:3000/products/${userId}`);
        getUsers();
    }

    return (
        <div>
            <h1 className='title has-text-black'>Users</h1>
            <h2 className='subtitle has-text-black'>List of users</h2>
            <Link to='/users/add' className='button is-primary mb-2'>Add new</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>pointContact</th>
                        <th>phoneNumber</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.uuid}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.pointContact}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <Link
                                    to={`/users/edit/${user.uuid}`}
                                    className='button is-small is-info'>
                                    Edit
                                </Link>
                                <button
                                    onClick={() => deleteUser(user.uuid)}
                                    className='button is-small is-info is-danger'>
                                    Delete
                                </button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Userlist