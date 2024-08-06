'use client'
import TableActionButton from '@/components/table-action-button/TableActionButton';
import { Delete, Edit } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import "./style.css";
import CustomDrawer, { DRAWER_TYPE } from '@/components/custom-drawer/CustomDrawer';
import AddEditItem from './AddEditItem';
import ToggleButton from '@/components/toggle-button/ToggleButton';
import BulkImport from './BulkImport';
import BulkExport from './BulkExport';
import { colors } from '@mui/material';

const headerClassName = "yogo-pos-table-header";
const commonButtonStyle = { fontSize: "30px", padding: "3px", borderRadius: "5px" };
const editButtonStyle = { color: "#02C9DB", border: "1px solid #02C9DB", ...commonButtonStyle };
const deleteButtonStyle = { color: "#ED4C78", border: "1px solid #ED4C78", ...commonButtonStyle };
const popup = true;

const ItemsList = () => {
  const rowCounts = 10;
  const [pagination, setPagination] = useState({ page: 0, pageSize: 10 });

  const [form, setForm] = useState<any>({
    productName: "",
    sellingPrice: "",
    totalSale: "",
    status: "1",
    category: "Indian",
    subCategory: "North Indian",
    itemType: "Vegeterian",
    stock: "Unlimited",
    variation: "Quater"
  });


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
      field: "productName",
      headerName: "Product Name",
      sortable: false,
      headerClassName: headerClassName,
      flex: 1,
      maxWidth: 200
    },
    {
      field: "category",
      headerName: "Category",
      sortable: false,
      headerClassName: headerClassName,
      flex: 1,
      maxWidth: 200
    },
    {
      field: "subCategory",
      headerName: "Sub Category",
      sortable: false,
      headerClassName: headerClassName,
      flex: 1,
      maxWidth: 200
    },
    {
      field: "itemType",
      headerName: "Item Type",
      sortable: false,
      headerClassName: headerClassName,
      flex: 1,
      maxWidth: 200
    },
    {
      field: "variation",
      headerName: "Variation",
      sortable: false,
      headerClassName: headerClassName,
      flex: 1,
      maxWidth: 200
    },
    {
      field: "sellingPrice",
      headerName: "Selling Price",
      sortable: false,
      headerClassName: headerClassName,
      flex: 1,
      // renderCell: ({ row }: any) => {
      //   const data = row?.modules?.map((item: any) => {
      //     return MODULES[item]
      //   });
      //   return (<div>{data.join(", ")}</div>)
      // },
      minWidth: 100
    },
    {
      field: "totalSale",
      headerName: "Total Sale",
      sortable: false,
      headerClassName: headerClassName,
      flex: 1,
      minWidth: 100,
    },
    {
      field: "stock",
      headerName: "Stock",
      sortable: false,
      headerClassName: headerClassName,
      flex: 1,
      minWidth: 100,
    },

    {
      field: "status",
      headerName: "Status",
      sortable: false,
      headerClassName: headerClassName,
      flex: 1,
      maxWidth: 150,
      renderCell: ({ row }: any) => {
        return (<ToggleButton disabled={true} defaultChecked={row.status === "1" ? true : false} />)
      }
    },
    {
      field: "Action",
      headerName: "Action",
      sortable: false,
      headerClassName: headerClassName,
      flex: 1,
      renderCell: (params: any) => {
        return <div className='flex flex-row gap-5'>
          {actionButtons(params.row)?.map((item, index) => {
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

  const staticData = [{
    id: "1",
    sl: 1,
    productName: "Dal Makhni",
    sellingPrice: "$20.00",
    totalSale: "$3000.00",
    category: "Indian",
    subCategory: "North Indian",
    itemType: "Vegeterian",
    stock: "Unlimited",
    status: "1",
    variation: "Quater"
  }]

  const [rows, setRows] = useState<any>(staticData);

  const [filterValue, setFilterValue] = useState("");

  const handleSearch = (val: any) => {
    const filteredRows = rows?.filter((item: any) => item.roleName.toLowerCase()?.includes(val.toLowerCase()))
    setRows(filteredRows)
  }
  // const handleExportClick = () => {

  // }


  const [drawer, setDrawer] = useState<any>({ open: false });
  const [importDrawer, setImportDrawer] = useState<any>({ open: false });
  const [exportDrawer, setExportDrawer] = useState<any>({ open: false });

  const onImportDrawerClose = () => {
    setImportDrawer({ open: false });
  }
  const onExportDrawerClose = () => {
    setExportDrawer({ open: false });
  }
  const resetForm = () => {
    setForm({
      productName: "",
      sellingPrice: "",
      totalSale: "",
      status: "1",
      category: "Indian",
      subCategory: "North Indian",
      itemType: "Vegeterian",
      stock: "Unlimited",
      variation: "Quater"
    });
  }
  const onDrawerClose = () => {
    setDrawer({});
    resetForm()
  }


  const onAddItemButtonClick = () => {
    setDrawer({ open: true, title: "Add Product", type: DRAWER_TYPE.ADD_EDIT_ROLE })
    resetForm();
  }
  const onBulkImportButtonClick = () => {
    setImportDrawer({ open: true, title: "Bulk Import", type: DRAWER_TYPE.BULK_IMPORT })
  }
  const onBulkExportButtonClick = () => {
    setExportDrawer({ open: true, title: "Bulk Export", type: DRAWER_TYPE.BULK_EXPORT })
  }
  const onEditRoleClick = (data: any) => {
    setDrawer({ open: true, title: "Edit Product", type: DRAWER_TYPE.ADD_EDIT_ROLE })
    setForm(data);
  }

  const handleConfirmDelete = (id: any) => {
    const temp = rows;
    const newRows = temp?.filter((item: any) => item.id !== id);
    setRows(newRows);
    // handleCloseDeletePopup();
  };
  const actionButtons = (data: any) => [
    {
      icon: <Edit style={editButtonStyle} />,
      onClick: () => onEditRoleClick(data)
    },
    {
      icon: <Delete style={deleteButtonStyle} />,
      onClick: () => handleConfirmDelete(data.id)
    },
  ];
  const popupStyle = {
    position: "absolute",
    //   height: "60vh",
    width: "99%",
    left: ".5%",
    // transform: "translate(-50%, -50%)",
    backgroundColor: "#000",
    // boxShadow:" rgba(9, 30, 66, 0.25) 0px 4px 8px - 2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
    // boxShadow: "rgba(0, 0, 0, 0.95) 0px 5px 15px",
    // boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px - 12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px - 3px 5px",
    borderRadius: "5px",
    border: "1px solid white",
    padding: "1rem",
    height: "98vh",
    top: "1vh",
    background: "white",
    color: "black",
    overflow: "hidden",
    overflowY: "scroll"
  }
  return (
    <>
      <CustomDrawer popup={popup} drawer={drawer} setDrawer={setDrawer} onClose={onDrawerClose}
        popupStyle={popupStyle}
      >
        <AddEditItem
        // popup={popup}
        // rows={rows}
        // setRows={setRows}
        // form={form}
        // setForm={setForm}
        // resetForm={resetForm}
        // onDrawerClose={onDrawerClose}
        />
      </CustomDrawer>
      <CustomDrawer popup={popup} drawer={importDrawer} setDrawer={setImportDrawer} onClose={onImportDrawerClose}>
        <BulkImport
          openImportDrawer={importDrawer.open || false}
          onImportDrawerClose={onImportDrawerClose}
        />
      </CustomDrawer>

      <CustomDrawer popup={popup} drawer={exportDrawer} setDrawer={setExportDrawer} onClose={onExportDrawerClose}>
        <BulkExport
          openImportDrawer={exportDrawer.open || false}
          onImportDrawerClose={onExportDrawerClose}
        />
      </CustomDrawer>

      <div className='flex flex-row justify-between align-middle mt-3 mb-3'>

        <div className='flex gap-2'>
          <TableActionButton
            onClick={onAddItemButtonClick}
            title={"Add New Product"}
            placement={"right"}
            className="add-btn"
          >
            Add New Product
          </TableActionButton>
          {/* <TableActionButton
            onClick={onBulkImportButtonClick}
            title={"Bulk Import"}
            placement={"right"}
            className="add-btn"
          >
            Bulk Import
          </TableActionButton>
          <TableActionButton
            onClick={onBulkExportButtonClick}
            title={"Bulk Export"}
            placement={"right"}
            className="add-btn"
          >
            Bulk Export
          </TableActionButton> */}
        </div>
        <div className='flex gap-5'>
          <div className='employee-search-box'>
            <input placeholder='Search by Role Name ' value={filterValue} onChange={(e: any) => setFilterValue(e.target.value)} />
            <button className='search-button' onClick={() => handleSearch(filterValue)}>
              Search
            </button>
          </div>
          {/* <button className='export-button' onClick={handleExportClick}>
            Export
          </button> */}

        </div>
      </div>
      <div className='employee-table-container'>
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


export default ItemsList;
