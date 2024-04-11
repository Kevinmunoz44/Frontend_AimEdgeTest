import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getProductById = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getProductById();
    }, [id])

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className='title has-text-black'>Product Details</h1>
            <div className='box'>
                <div><strong>Quantity:</strong> {product.quantity}</div>
                <div><strong>Product Name:</strong> {product.productName}</div>
            </div>
            <Link to='/products' className='button is-primary'>Back to Products</Link>
        </div>
    )
}

export default ProductDetails;
