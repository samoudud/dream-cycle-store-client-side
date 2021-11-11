import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://infinite-everglades-57126.herokuapp.com/products?size=6')
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
        <Container sx={{ my: 2 }}>
            <Typography sx={{ color: '#1B3E41', mb: 2, fontWeight: 700 }} variant="h4">Discover <br /> our new arrivals </Typography>

            <Grid container spacing={2}>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }

            </Grid>
        </Container>
    );
};

export default Products;