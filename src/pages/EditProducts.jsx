import React, {useEffect} from 'react'
import Layout from './Layout'
import ProductDeatils from '../components/ProductDetails';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/AuthSlice';

const EditProducts = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError } = useSelector((state => state.auth))

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            navigate('/')
        }
    }, [isError, navigate]);
    return (
        <Layout>
            <ProductDeatils />
        </Layout>
    )
}

export default EditProducts