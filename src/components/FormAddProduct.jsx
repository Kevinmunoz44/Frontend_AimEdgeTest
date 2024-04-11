import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FormAddProduct = () => {

    const [client, setClient] = useState('')
    const [date, setDate] = useState('')
    const [quantity, setQuantity] = useState('')
    const [productName, setProductName] = useState('')
    const [subtotal, setSubtotal] = useState('')
    const [discount, setDiscount] = useState('')
    const [total, setTotal] = useState('')
    const [msg, setMsg] = useState('')

    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:3000/products' ,{
                client: client,
                date: date,
                quantity: quantity,
                productName: productName,
                subtotal: subtotal,
                discount: discount,
                total: total
            })
            navigate('/products')
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }

    return (
        <div>
            <h1 className='title has-text-black'>Products</h1>
            <h2 className='subtitle has-text-black'>Add New Products</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={saveProduct} className='box'>
                            <p className='has-text-centered'>{msg}</p>
                            <div className='field'>
                                <label className="label">Client</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        value={client}
                                        onChange={(e) => setClient(e.target.value)}
                                        className='input'
                                        placeholder='Client'
                                    />
                                </div>
                            </div>
                            <div className='field'>
                                <label className="label">Date</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        className='input'
                                        placeholder='   Date'
                                    />
                                </div>
                            </div>
                            <div className='field'>
                                <label className="label">Quantity</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        className='input'
                                        placeholder='Quantity'
                                    />
                                </div>
                            </div>
                            <div className='field'>
                                <label className="label">Product Name</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        value={productName}
                                        onChange={(e) => setProductName(e.target.value)}
                                        className='input'
                                        placeholder='Product Name'
                                    />
                                </div>
                            </div>
                            <div className='field'>
                                <label className="label">Subtotal</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        value={subtotal}
                                        onChange={(e) => setSubtotal(e.target.value)}
                                        className='input'
                                        placeholder='Subtotal'
                                    />
                                </div>
                            </div>
                            <div className='field'>
                                <label className="label">Discount</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        value={discount}
                                        onChange={(e) => setDiscount(e.target.value)}
                                        className='input'
                                        placeholder='Discount'
                                    />
                                </div>
                            </div>
                            <div className='field'>
                                <label className="label">Total</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className='input'
                                        value={total}
                                        onChange={(e) => setTotal(e.target.value)}
                                        placeholder='Total'
                                    />
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

export default FormAddProduct