import { Alert, AlertTitle, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const AddProduct = () => {
    const [productData, setReview] = useState({});
    const [isAdded, setIsAdded] = useState(false);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...productData };
        newReview[field] = value;
        setReview(newReview);
    }

    const handleAddProductSubmit = e => {
        setIsAdded(false);
        fetch('https://infinite-everglades-57126.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successful review added successfully');
                    setIsAdded(true);
                }
            })

        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item sx={{ mt: 8, mx: 'auto' }} xs={12} md={6}>
                    <Paper sx={{ py: 5 }} elevation={5}>
                        <Typography variant="h6" gutterBottom>
                            Add A New Product
                        </Typography>
                        <form onSubmit={handleAddProductSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }} label="Product Name"
                                type='text'
                                name='name'
                                onBlur={handleOnBlur}
                                variant="outlined"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }} label="Price"
                                type='number'
                                name='price'
                                onBlur={handleOnBlur}
                                variant="outlined"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }} label="Product Info"
                                type='text'
                                name='info'
                                onBlur={handleOnBlur}
                                variant="outlined"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }} label="Rating"
                                type='number'
                                name='rating'
                                onBlur={handleOnBlur}
                                variant="outlined"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }} label="Image link"
                                type='text'
                                name='img'
                                onBlur={handleOnBlur}
                                variant="outlined"
                            />

                            <Button
                                sx={{ width: '75%', m: 1, p: 1 }} variant='contained'
                                type='submit'
                            >Add</Button>


                        </form>
                        {
                            isAdded && <Alert severity="success">
                                <AlertTitle>Success</AlertTitle>
                                The Product is Added — <strong>check it out!</strong>
                            </Alert>
                        }

                    </Paper>
                </Grid>

            </Grid>
        </Container>
    )
};

export default AddProduct;