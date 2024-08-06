'use client'
import ProtectedLayout from '@/components/protected-layout/ProtectedLayout'
import TableActionButton from '@/components/table-action-button/TableActionButton'
import { Delete, Edit } from '@mui/icons-material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useState } from 'react'


const headerClassName = "yogo-pos-table-header";
const commonButtonStyle = { fontSize: "30px", padding: "3px", borderRadius: "5px" };
const editButtonStyle = { color: "#02C9DB", border: "1px solid #02C9DB", ...commonButtonStyle };
const deleteButtonStyle = { color: "#ED4C78", border: "1px solid #ED4C78", ...commonButtonStyle };

const CustomersList = () => {
  const rowCounts = 10;
  const [pagination, setPagination] = useState({ page: 0, pageSize: 10 });
  const rows = [{
    id: 1,
  }];


  const actionButtons = (data: any) => [
    {
      icon: <Edit style={editButtonStyle} />,
      onClick: () => console.log(data)
    },
    {
      icon: <Delete style={deleteButtonStyle} />,
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
      field: "customerName",
      headerName: "Customer Name",
      sortable: false,
      headerClassName: headerClassName,
      flex: 1,
      // renderCell: (params: any) => {
      //   return (<div><button className='check-summary-button'>Check Summary</button></div>)
      // }
    },
    {
      field: "customerInfo",
      headerName: "Customer Info",
      sortable: false,
      headerClassName: headerClassName,
      flex: 1
    },

    {
      field: "totalOrders",
      headerName: "Total Orders",
      sortable: false,
      headerClassName: headerClassName,
      flex: 1,
      // renderCell: ({ row }: any) => {
      //   return (<div>{`${row.firstName} ${row.lastName}`}</div>)
      // }
    },
    {
      field: "totalOrderAmount",
      headerName: "totalOrderAmount",
      sortable: false,
      headerClassName: headerClassName,
      flex: 1,
    },
    {
      field: "availablePoints",
      headerName: "Available Points",
      sortable: false,
      headerClassName: headerClassName,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
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
            return (
              <TableActionButton
                key={index}
                onClick={item.onClick}
              >
                {item.icon}
              </TableActionButton>)
          })}
        </div>;
      },
    },
  ];
  return (
    <></>
    // <ProtectedLayout>
    //   <DataGrid
    //     rows={rows}
    //     columnHeaderHeight={35}
    //     autoHeight={true}
    //     rowHeight={45}
    //     columns={columns}
    //     disableRowSelectionOnClick
    //     rowCount={rowCounts}
    //     pagination
    //     paginationModel={pagination}
    //     paginationMode="server"
    //     onPaginationModelChange={setPagination}
    //   />
    // </ProtectedLayout>
  )
}

export default CustomersList