import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { MdOutlineDescription } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProduct();
    })

    const getProduct = async () => {
        const response = await axios.get('http://localhost:3000/products');
        setProducts(response.data);
    }

    const deleteProduct = async (productId) => {
        await axios.delete(`http://localhost:3000/products/${productId}`);
        getProduct();
    }

    return (
        <div>
            <h1 className='title has-text-black'>Products</h1>
            <h2 className='subtitle has-text-black'>List of products</h2>
            <Link to='/products/add' className='button is-primary mb-2'>Add new</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>client</th>
                        <th>date</th>
                        <th>subtotal</th>
                        <th>discount %</th>
                        <th>total</th>
                        <th>Created by</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.uuid}>
                            <td>{index + 1}</td>
                            <td>{product.client}</td>
                            <td>{product.date}</td>
                            <td>{product.subtotal}</td>
                            <td>{product.discount}</td>
                            <td>{product.total}</td>
                            <td>{product.user.name}</td>
                            <td>
                                <button>
                                <Link
                                    to={`/products/edit/${product.uuid}`}
                                    className='button is-bg is-info'>
                                        <MdOutlineDescription />
                                </Link>
                                </button>
                                
                                <button
                                    onClick={() => deleteProduct(product.uuid)}
                                    className='button is-bg is-info is-danger'>
                                    <FaRegTrashAlt />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList