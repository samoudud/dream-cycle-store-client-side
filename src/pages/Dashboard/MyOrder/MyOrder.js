import { Button, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://infinite-everglades-57126.herokuapp.com/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(error => console.log(error.message))
            .finally(() => setLoading(false))
    }, []);

    const handleCancel = id => {
        const prompt = window.confirm("Are you sure?");
        if (prompt) {
            const url = `https://infinite-everglades-57126.herokuapp.com/myOrders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("Successfully deleted");
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
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
            <h2>Your Total Orders: {orders.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Picture</TableCell>
                            <TableCell align="center">Product</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow
                                key={order._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center"> <img src={order.img} width="100" alt=""></img> </TableCell>
                                <TableCell align="center">{order.productName}</TableCell>
                                <TableCell align="center">{order.email}</TableCell>
                                <TableCell align="center">{order.date}</TableCell>
                                <TableCell align="center">{order.status}</TableCell>
                                <TableCell align="center"><Button onClick={() => handleCancel(order._id)}>Cancel</Button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrder;