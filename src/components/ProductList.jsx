import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

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
            <h1 className='title'>Products</h1>
            <h2 className='subtitle'>List of products</h2>
            <Link to='/products/add' className='button is-primary mb-2'>Add new</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Created by</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.uuid}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.user.name}</td>
                            <td>
                                <Link
                                    to={`/products/edit/${product.uuid}`}
                                    className='button is-small is-info'>
                                    Edit
                                </Link>
                                <button
                                    onClick={() => deleteProduct(product.uuid)}
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

export default ProductList