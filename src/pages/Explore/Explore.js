import { CircularProgress, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';
import Navigation from '../Shared/Navigation/Navigation';

const Explore = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://infinite-everglades-57126.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
            .catch(error => console.log(error.message))
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <><CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="inherit" /></>
    }
    return (
        <div>
            <Navigation></Navigation>
            <Container sx={{ my: 2 }}>
                <Grid container spacing={2}>
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }

                </Grid>
            </Container>
        </div>
    );
};

export default Explore;