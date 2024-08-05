'use client'
import CustomTabs from '@/components/custom-tabs/CustomTabs'
import ProtectedLayoutSecond from '@/components/protected-layout-second/ProtectedLayoutSecond'
import TableActionButton from '@/components/table-action-button/TableActionButton'
import { Preview, Print } from '@mui/icons-material'
import React, { useEffect, useState } from 'react';
import AllOrders from './AllOrders'
import CompletedOrders from './CompletedOrders'
import DeliveredOrders from './DeliveredOrders'
import CanceledOrders from './CanceledOrders'
import Link from 'next/link'
import ProtectedLayout from '@/components/protected-layout/ProtectedLayout'
import { LAYOUTS } from '@/constants/common'



const AllOrdersPage = () => {
  const headerClassName = "yogo-pos-table-header";
  const commonButtonStyle = { fontSize: "30px", padding: "3px", borderRadius: "5px" };
  const viewButtonStyle = { color: "#02C9DB", border: "1px solid #02C9DB", ...commonButtonStyle };
  const printButtonStyle = { color: "#108A00", border: "1px solid #108A00", ...commonButtonStyle };
  const [layout, setLayout] = useState<any>(LAYOUTS.firstLayout)
  // useEffect(() => {
  //   if (localStorage.getItem("ourLayout")) {
  //     setLayout(localStorage.getItem("ourLayout"));
  //   }
  // }, [])



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


  if (layout === LAYOUTS.firstLayout) {
    return (
      <>
        <ProtectedLayout title={"All Orders"}>
          <div style={{ marginTop: "2rem" }}>
            <AllOrders columns={columns} ordersCount={ordersCount} />
          </div>
        </ProtectedLayout>
      </>
    )
  }
  else {
    return (
      <ProtectedLayoutSecond
        navbar={<CustomTabs
          tabs={[{
            label: "All Orders",
            children: <AllOrders columns={columns} ordersCount={ordersCount} />
          },
          {
            label: "Delivered", children: <DeliveredOrders columns={columns} ordersCount={ordersCount} />
          },
          {
            label: "Completed", children: <CompletedOrders columns={columns} ordersCount={ordersCount} />
          },
          {
            label: "Canceled", children: <CanceledOrders columns={columns} ordersCount={ordersCount} />
          }
          ]} />}
      >

      </ProtectedLayoutSecond>
    )
  }
}

export default AllOrdersPage;


// <div className='flex gap-3' style={{ color: "black" }}>
//   <span>All Orders</span>
//   <h6>{ordersCount.ALL}</h6>
// </div>
// {/* Date Range */}
// <div className='flex justify-between align-middle mt-5 mb-5' style={{ color: "black" }}>
//   <div className='flex flex-row gap-4 w-100'>
//     <div className='flex flex-col width-25'>
//       <label>Select Branch</label>
//       <select className='add-edit-employee-input-field' onChange={() => { }}>

//       </select>
//     </div>
//     <div className='flex flex-col width-25'>
//       <label>Start Date</label>
//       <input className='add-edit-employee-input-field' placeholder='' onChange={() => { }} />
//     </div>
//     <div className='flex flex-col width-25'>
//       <label>End Date</label>
//       <input className='add-edit-employee-input-field' placeholder='' onChange={() => { }} />
//     </div>

//     <div className='flex flex-col width-25'>
//       <label style={{ height: "1.5rem" }}></label>
//       <div className='flex flex-row justify-center align-middle gap-2'>
//         <button className='bg-gray-300 px-5 py-2 text-black'>Clear</button>
//         <button className='bg-green-900 px-5 py-2 text-white'>Show Data</button>
//       </div>
//     </div>
//   </div>
// </div>
// {/* ORDER COUNTS */}
// <div className='flex flex-row w-100 justify-between align-middle text-black gap-5 mb-5'>

//   {/* <div className='width-25' style={{ color: "black" }}> */}

//   {
//     Object.entries(ordersCount)?.splice(1, 5)?.map((item: any, index: number) => {
//       const [key, value] = item;
//       return (<div key={index} className='width-25 flex h-20 gap-5 items-center justify-center bg-slate-300  rounded'>
//         <div>{icons[key]}</div>
//         <div>{key}</div>
//         <div>{value}</div>
//       </div>)
//     })
//   }
//   {/* </div> */}
// </div>
// <DataGrid
//   rows={rows}
//   columnHeaderHeight={35}
//   autoHeight={true}
//   rowHeight={45}
//   columns={columns}
//   disableRowSelectionOnClick
//   rowCount={rowCounts}
//   pagination
//   paginationModel={pagination}
//   paginationMode="server"
//   onPaginationModelChange={setPagination}
// // loading={loading}
// />