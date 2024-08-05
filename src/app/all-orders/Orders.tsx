import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { EmojiFoodBeverage, Fastfood, DeliveryDining, RamenDining } from '@mui/icons-material'

const Orders = ({ ordersCount, rows, columns, rowCounts, pagination, setPagination, showOrderCountCards = false }: any) => {

    const icons: any = {
        COMPLETED: <EmojiFoodBeverage />,
        CONFIRMED: <Fastfood />,
        DELIVERED: <DeliveryDining />,
        CANCELED: <RamenDining />,
    }
    return (
        <>
            <div className='flex gap-3 text-black' >
                <span>All Orders</span>
                <h6>{ordersCount.ALL}</h6>
            </div>
            {/* Date Range */}
            <div className='flex justify-between align-middle mt-5 mb-5'>
                <div className='flex flex-row gap-4 w-100'>
                    <div className='flex flex-col width-25'>
                        <label className='text-black'>Select Branch</label>
                        <select className='add-edit-employee-input-field' onChange={() => { }}>

                        </select>
                    </div>
                    <div className='flex flex-col width-25'>
                        <label className='text-black'>Start Date</label>
                        <input className='add-edit-employee-input-field' placeholder='' onChange={() => { }} />
                    </div>
                    <div className='flex flex-col width-25'>
                        <label className='text-black'>End Date</label>
                        <input className='add-edit-employee-input-field' placeholder='' onChange={() => { }} />
                    </div>

                    <div className='flex flex-col width-25'>
                        <label style={{ height: "1.5rem" }}></label>
                        <div className='flex flex-row justify-center align-middle gap-2'>
                            <button className='bg-gray-300 px-5 py-2 text-black'>Clear</button>
                            <button className='bg-green-900 px-5 py-2 text-white'>Show Data</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ORDER COUNTS */}
            {
                showOrderCountCards &&
                <div className='flex flex-row w-100 justify-between align-middle text-black gap-5 mb-5'>

                    {/* <div className='width-25' > */}

                    {
                        Object.entries(ordersCount)?.splice(1, 5)?.map((item: any, index: number) => {
                            const [key, value] = item;
                            return (<div key={index} className='width-25 flex h-20 gap-5 items-center justify-center bg-slate-300  rounded'>
                                <div>{icons[key]}</div>
                                <div>{key}</div>
                                <div>{value}</div>
                            </div>)
                        })
                    }
                    {/* </div> */}
                </div>
            }

            <div style={{ background: "white" }}>

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
            </div>
        </>

    )
}

export default Orders