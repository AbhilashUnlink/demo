'use client'
import React, { useState } from 'react'
import Orders from './Orders'

const AllOrders = ({ columns, ordersCount }: any) => {
    const rowCounts = 10;
    const [pagination, setPagination] = useState({ page: 0, pageSize: 10 });
    const rows = [{
        id: 1,
        sl: 1,
        userName: "Abhilash",
        orderId: "HAVELI_I001",
        orderDate: "24 July 2024, 4:05 PM",
        orderType: "Delivery",
        orderStatus: "Success",
        totalAmount: "$300",
        paymentStatus: "Paid",
    }];
    return (
        <>
            <Orders
                ordersCount={ordersCount}
                rows={rows}
                columns={columns}
                rowCounts={rowCounts}
                pagination={pagination}
                setPagination={setPagination}
                showOrderCountCards={true}
            />
        </>
    )
}

export default AllOrders