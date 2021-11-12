import React, { useState, useEffect } from 'react';
import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import Review from '../Review/Review';

const Reviews = () => {
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.log(error.message))
            .finally(() => setLoading(false));
    }, [])

    if (loading) {
        return <><CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="inherit" /></>
    }

    return (
        <Container sx={{ my: 2 }}>
            <Typography sx={{ color: '#1B3E41', mt: 6, mb: 2, fontWeight: 700 }} variant="h4">Client <br /> Says About Us </Typography>

            <Grid container spacing={2}>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }

            </Grid>
        </Container>
    );
};

export default Reviews;