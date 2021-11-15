import { Button, TableCell, TableRow } from '@mui/material';
import React, { useState } from 'react';

const TableData = ({ order, handleCancel }) => {

    const [status, setStatus] = useState(order.status);

    const handleApprove = id => {
        if (order.status === 'pending') {
            order.status = 'shipped';

            const url = `https://infinite-everglades-57126.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        setStatus(order.status);
                        alert('Updated successfully')
                    }
                })

        }
        else {
            alert('already approved');
        }
    }
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell align="center"> <img src={order.img} width="100" alt=""></img> </TableCell>
            <TableCell align="center">{order.productName}</TableCell>
            <TableCell align="center">{order.email}</TableCell>
            <TableCell align="center">{order.date}</TableCell>
            <TableCell align="center">{status}</TableCell>
            <TableCell align="center">
                <Button onClick={() => handleCancel(order._id)}>Cancel</Button>
                <Button onClick={() => handleApprove(order._id)}>Approve</Button>
            </TableCell>

        </TableRow>
    );
};

export default TableData;