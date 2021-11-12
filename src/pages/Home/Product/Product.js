import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Rating } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Product = (props) => {
    const { name, price, rating, img, } = props.product
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, p: 1 }}>
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
                        <Typography variant="h6" color="red">
                            price: ${price}
                        </Typography>
                        <Rating name="read-only" value={parseFloat(rating)} readOnly />
                    </CardContent>
                </CardActionArea>
                <CardActions >
                    <NavLink style={{ margin: '0 auto' }}
                        to={{
                            pathname: "/purchase",
                            product: props.product,
                        }}>
                        <Button sx={{ mx: 'auto' }} variant='contained'>Buy Now</Button>
                    </NavLink>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;