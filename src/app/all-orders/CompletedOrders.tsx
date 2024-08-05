'use client'
import React, { useState } from 'react'
import Orders from './Orders'

const CompletedOrders = ({ columns, ordersCount }: any) => {
    const rowCounts = 10;
    const [pagination, setPagination] = useState({ page: 0, pageSize: 10 });
    const rows = [
        {
            id: 1,
            sl: 1,
            userName: "Sagar",
            orderId: "HAVELI_I001",
            orderDate: "25 July 2024, 4:05 PM",
            orderType: "Delivery",
            orderStatus: "Success",
            totalAmount: "$300",
            paymentStatus: "Paid",
        },
        {
            id: 2,
            sl: 2,
            userName: "Sagar",
            orderId: "HAVELI_I001",
            orderDate: "25 July 2024, 4:05 PM",
            orderType: "Delivery",
            orderStatus: "Success",
            totalAmount: "$300",
            paymentStatus: "Paid",
        },
        {
            id: 3,
            sl: 3,
            userName: "Mridul",
            orderId: "HAVELI_I001",
            orderDate: "26 July 2024, 4:05 PM",
            orderType: "Delivery",
            orderStatus: "Success",
            totalAmount: "$300",
            paymentStatus: "Paid",
        },
    ];
    return (
        <>
            <Orders
                ordersCount={ordersCount}
                rows={rows}
                columns={columns}
                rowCounts={rowCounts}
                pagination={pagination}
                setPagination={setPagination}
            />
        </>
    )
}

export default CompletedOrders