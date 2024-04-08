import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FromAddUser = () => {

    const [name, setName] = useState('')
    const [pointContact, setPointContac] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [role, setRole] = useState('')
    const [msg, setMsg] = useState('')

    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:3000/users', {
                name: name,
                pointContact: pointContact,
                phoneNumber: phoneNumber,
                email: email,
                password: password,
                confPassword: confPassword,
                role: role
            })
            navigate('/products')
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg)
            }
        }
    }

    return (
        <div>
            <h1 className='title'>Users</h1>
            <h2 className='subtitle'>Add New User</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={saveUser} className='box'>
                            <p className='has-text-centered'>{msg}</p>
                            <div className='field'>
                                <label className="label">Name</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className='input'
                                        value={name}
                                        onChange={(e)=> setName(e.target.value)}
                                        placeholder='Name'
                                    />
                                </div>
                            </div>
                            <div className='field'>
                                <label className="label">Point Contact</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className='input'
                                        value={pointContact}
                                        onChange={(e)=> setPointContac(e.target.value)}
                                        placeholder='Point contact'
                                    />
                                </div>
                            </div>
                            <div className='field'>
                                <label className="label">Phone Number</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className='input'
                                        value={phoneNumber}
                                        onChange={(e)=> setPhoneNumber(e.target.value)}
                                        placeholder='Phone number'
                                    />
                                </div>
                            </div>

                            <div className='field'>
                                <label className="label">Email</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className='input'
                                        value={email}
                                        onChange={(e)=> setEmail(e.target.value)}
                                        placeholder='Email'
                                    />
                                </div>
                            </div>
                            <div className='field'>
                                <label className="label">Password</label>
                                <div className="control">
                                    <input
                                        type="password"
                                        className='input'
                                        value={password}
                                        onChange={(e)=> setPassword(e.target.value)}
                                        placeholder='**********'
                                    />
                                </div>
                            </div>
                            <div className='field'>
                                <label className="label">Confirm Password</label>
                                <div className="control">
                                    <input
                                        type="password"
                                        className='input'
                                        value={confPassword}
                                        onChange={(e)=> setConfPassword(e.target.value)}
                                        placeholder='**********'
                                    />
                                </div>
                            </div>
                            <div className='field'>
                                <label className="label">Role</label>
                                <div className="control">
                                    <div className="select is-fullwidth">
                                        <select value={role} onCanPlay={(e)=> setRole(e.target.value)}>
                                            <option value='admin'>Admin</option>
                                            <option value='user'>User</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <div className="control">
                                    <button type='submit' className="button is-success">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FromAddUser
