import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Rating, Typography } from '@mui/material';
const Review = ({ review }) => {
    const { name, comment, rating } = review
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2 }} elevation={5}>
                <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {comment}
                </Typography>
                <Typography>
                    <Rating name="read-only" value={parseFloat(rating)} readOnly />
                </Typography>
            </Paper>
        </Grid>
    );
};

export default Review;