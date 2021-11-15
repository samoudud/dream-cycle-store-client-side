import { Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Paper, Rating, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Purchase = () => {
    const history = useHistory();
    const location = useLocation();
    const { name, price, rating, img, info } = location?.product;
    const { user } = useAuth();
    const date = new Date();
    const initialInfo = {
        userName: user?.displayName,
        email: user?.email,
        productName: name,
        price: price,
        img: img,
        status: 'pending',
        date: date.toDateString()
    }
    const [orderInfo, setOrderInfo] = useState(initialInfo);



    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderInfo = { ...orderInfo };
        newOrderInfo[field] = value;
        setOrderInfo(newOrderInfo);
        console.log(newOrderInfo)
    }

    const handleSubmit = e => {
        // send data to the database
        fetch('https://infinite-everglades-57126.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successful');
                    history.push('explore');
                }
            })
        e.preventDefault();
    }

    return (
        <>
            <Navigation></Navigation>
            <Container style={{ marginBottom: '100px' }}>
                <Grid container spacing={4}>
                    <Grid item sx={{ mt: 8, mx: 'auto' }} xs={12} md={6}>
                        <Card sx={{ maxWidth: 345, p: 1, mx: 'auto' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={img}
                                    alt={name}
                                    item
                                    sx={{ py: 2 }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {name}
                                    </Typography>
                                    <Typography variant="body">{info}
                                    </Typography>
                                    <Typography variant="h6" color="red">
                                        price: ${price}
                                    </Typography>
                                    <Rating name="read-only" value={parseFloat(rating)} readOnly />
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Grid>
                    <Grid item sx={{ mt: 8, mx: 'auto' }} xs={12} md={6}>
                        <Paper sx={{ py: 5 }} elevation={3}>
                            <Typography variant="h6" gutterBottom>
                                Order Info
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    name='userName'
                                    defaultValue={user.displayName}
                                    onBlur={handleOnBlur} variant="outlined"
                                />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    name='email'
                                    defaultValue={user.email}
                                    onBlur={handleOnBlur} variant="outlined"
                                />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    label="Phone Number"
                                    name='phone'
                                    onBlur={handleOnBlur} variant="outlined"
                                />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    label="Address"
                                    name='address'
                                    onBlur={handleOnBlur} variant="outlined"
                                />

                                <Button
                                    sx={{ width: '75%', m: 1, p: 1 }} variant='contained'
                                    type='submit'
                                >Place Order</Button>


                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Purchase;