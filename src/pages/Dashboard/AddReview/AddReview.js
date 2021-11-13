import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth();
    const history = useHistory();
    const [value, setValue] = React.useState(0);
    const [review, setReview] = useState({ rating: value, name: user?.displayName });
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);
    }

    const onRatingClick = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);
        console.log(review)
    }

    const handleReviewSubmit = e => {
        fetch('https://infinite-everglades-57126.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        }
        )
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successful review added successfully');
                    history.push('/')
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
                            Please Submit Your Feedback
                        </Typography>
                        <form onSubmit={handleReviewSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                defaultValue={user?.displayName}
                                name='name'
                                onBlur={handleOnBlur} variant="outlined"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }} label="Your comment"
                                type='text'
                                name='comment'
                                onBlur={handleOnBlur}
                                variant="outlined"

                            />
                            <Rating
                                sx={{ m: 1 }}
                                name="rating"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                onClick={onRatingClick}
                            />

                            <Button
                                sx={{ width: '75%', m: 1, p: 1 }} variant='contained'
                                type='submit'
                            >Submit</Button>


                        </form>

                    </Paper>
                </Grid>

            </Grid>
        </Container>
    )
};

export default AddReview;