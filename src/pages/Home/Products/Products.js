import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useProduct from '../../../hooks/useProduct';
import Product from '../Product/Product';

const Products = () => {
    const { products, loading } = useProduct();

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