'use client'
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import "./style.css";
import { Typography } from '@mui/material';
import ToggleButton from '@/components/toggle-button/ToggleButton';
import { DataGrid } from '@mui/x-data-grid';
// import { LAYOUTS } from '@/constants/common';

const OrderDetails = () => {
    const headerClassName = "yogo-pos-table-header";
    // const commonButtonStyle = { fontSize: "30px", padding: "3px", borderRadius: "5px" };

    // const layout = localStorage.getItem("ourLayout") ? localStorage.getItem("ourLayout") : LAYOUTS.firstLayout;
    // don't delete it
    const { orderId } = useParams();

    const orderDetails = {
        items: 1,
        server: "Haveli",
        type: "Take Away"
    }


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
            field: "items",
            headerName: "Items",
            sortable: false,
            headerClassName: headerClassName,
            flex: 1
        },
        {
            field: "quantity",
            headerName: "Quantity",
            sortable: false,
            headerClassName: headerClassName,
            flex: 1
        },

        {
            field: "price",
            headerName: "Price",
            sortable: false,
            headerClassName: headerClassName,
            flex: 1,

        },
        {
            field: "discount",
            headerName: "Discount",
            sortable: false,
            headerClassName: headerClassName,
            flex: 1,
        },
        {
            field: "tax",
            headerName: "Tax",
            sortable: false,
            headerClassName: headerClassName,
            flex: 1,
        },
        {
            field: "totalPrice",
            headerName: "Total Price",
            sortable: false,
            headerClassName: headerClassName,
            flex: 1
        },
    ];


    const rowCounts = 10;
    const [pagination, setPagination] = useState({ page: 0, pageSize: 10 });
    const rows = [
        {
            id: 1,
            sl: 1,
            items: "Alphanso Milk Shake",
            quantity: "2",
            price: "$6.99",
            discount: "$0.00",
            tax: "$0.35",
            totalPrice: "$7.34",
        },
        {
            id: 2,
            sl: 2,
            items: "Alphanso Milk Shake",
            quantity: "2",
            price: "$6.99",
            discount: "$0.00",
            tax: "$0.35",
            totalPrice: "$7.34",
        },
        {
            id: 3,
            sl: 3,
            items: "Alphanso Milk Shake",
            quantity: "2",
            price: "$6.99",
            discount: "$0.00",
            tax: "$0.35",
            totalPrice: "$7.34",
        },
        {
            id: 4,
            sl: 4,
            items: "Alphanso Milk Shake",
            quantity: "2",
            price: "$6.99",
            discount: "$0.00",
            tax: "$0.35",
            totalPrice: "$7.34",
        },
    ];
    // if (layout === LAYOUTS.firstLayout) {
    return (<>
        {/* <ProtectedLayout> */}
        <div className='w-100 flex gap-5 h-min'>

            <div className='border-white width-80 h-min border flex flex-col'>
                {/* Action */}
                <div className='flex flex-start w-100 gap-5 p-3'>
                    <div>
                        Date  : 15 Apr 2024 10:19:20
                    </div>
                    <div>
                        |
                    </div>
                    <div>
                        Authorization Code : 152343
                    </div>
                </div>
                <div className='flex flex-col justify-between w-100 gap-2 p-3'>
                    <div className='flex gap-2'>
                        <button className='w-1/3 bg-slate-500 p-2 rounded'>Void</button>
                        <button className='w-1/3 bg-slate-500 p-2 rounded'>Refund</button>
                        <button className='w-1/3 bg-slate-500 p-2 rounded'>Print Check</button>
                    </div>
                    <div className='flex gap-2'>
                        <button className='w-1/3 bg-slate-500 p-2 rounded'>Print Items For Kitchen / Bar</button>
                        <button className='w-1/3 bg-slate-500 p-2 rounded'>Discount Items</button>
                        <button className='w-1/3 bg-slate-500 p-2 rounded'>Discount Check</button>
                    </div>
                </div>
                <hr />
                {/* Table */}
                <div className='h-min'>
                    <Typography variant='h6' className='p-2'>Order Details</Typography>
                    <div className='bg-white flex flex-col gap-3'>

                        <DataGrid
                            rows={rows}
                            columnHeaderHeight={35}
                            autoHeight={true}
                            rowHeight={45}
                            columns={columns}
                            disableRowSelectionOnClick
                            rowCount={rowCounts}
                            pagination
                            paginationModel={pagination}
                            paginationMode="server"
                            onPaginationModelChange={setPagination}
                        // loading={loading}
                        />
                        <div className='bg-slate-400 flex justify-end gap-10 py-2 pr-5'>
                            <div>
                                Packaging - $0.00
                            </div>
                            <div>
                                SubTotal - $0.00
                            </div>
                            <div>
                                GST - $0.00
                            </div>
                        </div>
                        <div className='bg-slate-400 flex justify-end gap-10 py-2 pr-5'>
                            Total - $29.00
                        </div>
                    </div>
                </div>
            </div>
            {/* order setup */}
            <div className='border-white width-20 h-80 border p-2'>
                <Typography variant='h6'>Order Setup</Typography>
                <div className='flex flex-col mt-5'>
                    <label>Change Order Status</label>
                    <select className=' mt-1 add-edit-employee-input-field text-black' onChange={() => { }} value={"Delivered"}>
                        <option value="">
                            Delivered
                        </option>
                        <option value="Pending">
                            Pending
                        </option>
                        <option value="Paid">
                            Paid
                        </option>
                    </select>
                    <div className='w-100 flex flex-row mt-2 justify-between items-center gap-5 '>
                        <div>
                            Status
                        </div>
                        <div className='flex items-center gap-3'>
                            <span>Paid</span> <ToggleButton defaultChecked={true} />
                        </div>
                    </div>
                    {/* Customer */}
                    <div className='add-edit-employee-input-field mt-5'>
                        Customer : Vedant
                    </div>
                    <div className='add-edit-employee-input-field mt-2' style={{ fontSize: "12px" }}>
                        Method : Master Card
                    </div>
                </div>

            </div>

        </div>
        {/* </ProtectedLayout> */}
    </>)
    // } else {
    //     return (
    //         <ProtectedLayoutSecond
    //             layout={layout}
    //             navbar={<div className='order-id-details-heading'>
    //                 <Typography variant='h6'>Details of Order Id :</Typography>
    //                 <Typography variant='h6'>{orderId}</Typography>
    //                 <Typography variant='h6' className='text-slate-400'>|</Typography>
    //                 <Typography variant='h6'>Items : {orderDetails.items} </Typography>
    //                 <Typography variant='h6' className='text-slate-400'>|</Typography>
    //                 <Typography variant='h6'>Server : {orderDetails.server}</Typography>
    //                 <Typography variant='h6' className='text-slate-400'>|</Typography>
    //                 <Typography variant='h6'>Type : {orderDetails.type}</Typography>
    //             </div>}
    //         >

    //             <div className='w-100 flex gap-5 h-min'>

    //                 <div className='border-white width-80 h-min border flex flex-col'>
    //                     {/* Action */}
    //                     <div className='flex flex-start w-100 gap-5 p-3'>
    //                         <div>
    //                             Date  : 15 Apr 2024 10:19:20
    //                         </div>
    //                         <div>
    //                             |
    //                         </div>
    //                         <div>
    //                             Authorization Code : 152343
    //                         </div>
    //                     </div>
    //                     <div className='flex flex-col justify-between w-100 gap-2 p-3'>
    //                         <div className='flex gap-2'>
    //                             <button className='w-1/3 bg-slate-500 p-2 rounded'>Void</button>
    //                             <button className='w-1/3 bg-slate-500 p-2 rounded'>Refund</button>
    //                             <button className='w-1/3 bg-slate-500 p-2 rounded'>Print Check</button>
    //                         </div>
    //                         <div className='flex gap-2'>
    //                             <button className='w-1/3 bg-slate-500 p-2 rounded'>Print Items For Kitchen / Bar</button>
    //                             <button className='w-1/3 bg-slate-500 p-2 rounded'>Discount Items</button>
    //                             <button className='w-1/3 bg-slate-500 p-2 rounded'>Discount Check</button>
    //                         </div>
    //                     </div>
    //                     <hr />
    //                     {/* Table */}
    //                     <div className='h-min'>
    //                         <Typography variant='h6' className='p-2'>Order Details</Typography>
    //                         <div className='bg-white flex flex-col gap-3'>

    //                             <DataGrid
    //                                 rows={rows}
    //                                 columnHeaderHeight={35}
    //                                 autoHeight={true}
    //                                 rowHeight={45}
    //                                 columns={columns}
    //                                 disableRowSelectionOnClick
    //                                 rowCount={rowCounts}
    //                                 pagination
    //                                 paginationModel={pagination}
    //                                 paginationMode="server"
    //                                 onPaginationModelChange={setPagination}
    //                             // loading={loading}
    //                             />
    //                             <div className='bg-slate-400 flex justify-end gap-10 py-2 pr-5'>
    //                                 <div>
    //                                     Packaging - $0.00
    //                                 </div>
    //                                 <div>
    //                                     SubTotal - $0.00
    //                                 </div>
    //                                 <div>
    //                                     GST - $0.00
    //                                 </div>
    //                             </div>
    //                             <div className='bg-slate-400 flex justify-end gap-10 py-2 pr-5'>
    //                                 Total - $29.00
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 {/* order setup */}
    //                 <div className='border-white width-20 h-80 border p-2'>
    //                     <Typography variant='h6'>Order Setup</Typography>
    //                     <div className='flex flex-col mt-5'>
    //                         <label>Change Order Status</label>
    //                         <select className=' mt-1 add-edit-employee-input-field text-black' onChange={() => { }} value={"Delivered"}>
    //                             <option value="">
    //                                 Delivered
    //                             </option>
    //                             <option value="Pending">
    //                                 Pending
    //                             </option>
    //                             <option value="Paid">
    //                                 Paid
    //                             </option>
    //                         </select>
    //                         <div className='w-100 flex flex-row mt-2 justify-between items-center gap-5 '>
    //                             <div>
    //                                 Status
    //                             </div>
    //                             <div className='flex items-center gap-3'>
    //                                 <span>Paid</span> <ToggleButton defaultChecked={true} />
    //                             </div>
    //                         </div>
    //                         {/* Customer */}
    //                         <div className='add-edit-employee-input-field mt-5'>
    //                             Customer : Vedant
    //                         </div>
    //                         <div className='add-edit-employee-input-field mt-2' style={{ fontSize: "12px" }}>
    //                             Method : Master Card
    //                         </div>
    //                     </div>

    //                 </div>

    //             </div>
    //         </ProtectedLayoutSecond>
    //     )
    // }
}

export default OrderDetails