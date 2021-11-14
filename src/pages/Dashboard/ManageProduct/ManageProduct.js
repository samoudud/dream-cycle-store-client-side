import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Rating, CircularProgress } from '@mui/material';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://infinite-everglades-57126.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
            .catch(error => console.log(error.message))
            .finally(() => setLoading(false))
    }, [])

    const removeProduct = id => {
        const prompt = window.confirm("Are you sure?");
        if (prompt) {
            const url = `https://infinite-everglades-57126.herokuapp.com/products/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data.deletedCount)
                    if (data.deletedCount) {
                        alert("Successfully deleted");
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                })
        }
    }

    if (loading) {
        return <><CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="inherit" /></>
    }
    return (
        <div>
            <h2>Manage All Products</h2>

            <Grid container spacing={2}>
                {
                    products.map(product =>
                        <Grid key={product._id} item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 345, p: 1 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={product.img}
                                        alt={product.name}
                                        item
                                        sx={{ py: 2 }}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.name}
                                        </Typography>
                                        <Typography variant="h6" color="red">
                                            price: ${product.price}
                                        </Typography>
                                        <Rating name="read-only" value={parseFloat(product.rating)} readOnly />
                                    </CardContent>
                                </CardActionArea>
                                <CardActions >

                                    <Button onClick={() => removeProduct(product._id)} sx={{ mx: 'auto' }} variant='contained' color="error">Delete Product</Button>
                                </CardActions>
                            </Card>
                        </Grid>)
                }

            </Grid>
        </div>
    );
};

export default ManageProduct;