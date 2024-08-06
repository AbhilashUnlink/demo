'use client'
import ProtectedLayout from '@/components/protected-layout/ProtectedLayout'
import React, { useState } from 'react'
import TableActionButton from '@/components/table-action-button/TableActionButton';
import { Preview, Print } from '@mui/icons-material';
import Link from 'next/link';
import CanceledOrders from '@/components/all-orders-comps/CanceledOrders';

const headerClassName = "yogo-pos-table-header";
const commonButtonStyle = { fontSize: "30px", padding: "3px", borderRadius: "5px" };
const viewButtonStyle = { color: "#02C9DB", border: "1px solid #02C9DB", ...commonButtonStyle };
const printButtonStyle = { color: "#108A00", border: "1px solid #108A00", ...commonButtonStyle };

const CanceledOrdersPage = () => {
    const actionButtons = (data: any) => [
        {
            icon: <Preview style={viewButtonStyle} />,
            // onClick: () => console.log(data)
        },
        {
            icon: <Print style={printButtonStyle} />,
            onClick: () => console.log(data.id)
        },
    ];
    const columns: any = [
        {
            field: "sl",
            headerName: "SL",
            sortable: false,
            headerClassName: headerClassName,
            flex: 1,
            maxWidth: 40
        },
        {
            field: "userName",
            headerName: "User Name",
            sortable: false,
            headerClassName: headerClassName,
            flex: 1,
            // renderCell: (params: any) => {
            //   return (<div><button className='check-summary-button'>Check Summary</button></div>)
            // }
        },
        {
            field: "orderId",
            headerName: "Order ID",
            sortable: false,
            headerClassName: headerClassName,
            flex: 1
        },

        {
            field: "orderDate",
            headerName: "Order Date",
            sortable: false,
            headerClassName: headerClassName,
            flex: 1,
            // renderCell: ({ row }: any) => {
            //   return (<div>{`${row.firstName} ${row.lastName}`}</div>)
            // }
        },
        {
            field: "orderType",
            headerName: "Order Type",
            sortable: false,
            headerClassName: headerClassName,
            flex: 1,
        },
        {
            field: "orderStatus",
            headerName: "Order Status",
            sortable: false,
            headerClassName: headerClassName,
            flex: 1,
        },
        {
            field: "totalAmount",
            headerName: "Total Amount",
            sortable: false,
            headerClassName: headerClassName,
            flex: 1
        },
        {
            field: "paymentStatus",
            headerName: "Payment Status",
            sortable: false,
            headerClassName: headerClassName,
            flex: 1
        },
        {
            field: "Action",
            headerName: "Action",
            sortable: false,
            headerClassName: headerClassName,
            flex: 1,
            renderCell: (params: any) => {
                return <div className='flex flex-row gap-5'>
                    {actionButtons(params.row)?.map((item: any, index: number) => {
                        return (<Link
                            // href={{
                            //   pathname: '/all-orders/[id]',
                            //   query: { slug: params.row.id },
                            // }}
                            href={

                                `/all-orders/${params.row.id}`
                            }
                            key={index}
                        >
                            <TableActionButton
                                onClick={item.onClick}
                            >
                                {item.icon}
                            </TableActionButton>
                        </Link>
                        )
                    })}
                </div>;
            },
        },
    ];
    const [ordersCount, setOrdersCount] = useState({
        ALL: "12",
        COMPLETED: "10",
        CONFIRMED: "1",
        DELIVERED: "10",
        CANCELED: "1",
    });
    return (
        // <ProtectedLayout title={"Canceled Orders"}>
        //     <CanceledOrders columns={columns} ordersCount={ordersCount} />
        // </ProtectedLayout>
        <></>
    )
}

export default CanceledOrdersPage