

'use client'
import TableActionButton from '@/components/table-action-button/TableActionButton';
import { Delete, Edit } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import "./style.css";
import CustomDrawer, { DRAWER_TYPE } from '@/components/custom-drawer/CustomDrawer';
import AddEditMainCategory from './AddEditMainCategory';
import { format } from "date-fns";

const headerClassName = "yogo-pos-table-header";
const commonButtonStyle = { fontSize: "30px", padding: "3px", borderRadius: "5px" };
const editButtonStyle = { color: "#02C9DB", border: "1px solid #02C9DB", ...commonButtonStyle };
const deleteButtonStyle = { color: "#ED4C78", border: "1px solid #ED4C78", ...commonButtonStyle };
const popup = true;

const MainCategories = () => {
  const rowCounts = 10;
  const [pagination, setPagination] = useState({ page: 0, pageSize: 10 });

  const [form, setForm] = useState<any>({
    name: "",
    status: "1",
    priority: "10",
    itemType:"Vegeterian"
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
      field: "name",
      headerName: "Name",
      sortable: false,
      headerClassName: headerClassName,
      flex: 1,
      maxWidth: 400
    },
    {
      field: "itemType",
      headerName: "Type",
      sortable: false,
      headerClassName: headerClassName,
      flex: 1,
      maxWidth: 400
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      headerClassName: headerClassName,
      flex: 1,
      // renderCell: ({ row }: any) => {
      //   const data = row?.modules?.map((item: any) => {
      //     return MODULES[item]
      //   });
      //   return (<div>{data.join(", ")}</div>)
      // },
      minWidth: 200
    },
    {
      field: "priority",
      headerName: "Priority",
      sortable: false,
      headerClassName: headerClassName,
      flex: 1,
      minWidth: 200,
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
    id:"1",
    sl:"1",
    name:"APPETIZERS",
    status:1,
    priority:"10",
    itemType:"Vegeterian"
  }]

  const [rows, setRows] = useState<any>(staticData);

  const [filterValue, setFilterValue] = useState("");

  const handleSearch = (val: any) => {
    const filteredRows = rows?.filter((item: any) => item.roleName.toLowerCase()?.includes(val.toLowerCase()))
    setRows(filteredRows)
  }
  const handleExportClick = () => {

  }


  const [drawer, setDrawer] = useState<any>({});
  const [selectedModules, setSelectedModules] = useState<any>([]);
  const [selectAllChecked, setSelectAllChecked] = useState<any>(false);

  const resetForm = () => {
    setForm({
      name: "",
      status: "1",
      priority: "10",
      itemType: "Vegeterian"
    });
    setSelectedModules([]);
    setSelectAllChecked(false);
  }
  const onDrawerClose = () => {
    setDrawer({});
    resetForm()
  }


  const onAddRoleButtonClick = () => {
    setDrawer({ open: true, title: "Add New Role Form", type: DRAWER_TYPE.ADD_EDIT_ROLE })
    resetForm();

  }
  const onEditRoleClick = (data: any) => {
    setDrawer({ open: true, title: "Edit Role Form", type: DRAWER_TYPE.ADD_EDIT_ROLE })
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
  return (
    <>
      <CustomDrawer popup={popup} drawer={drawer} setDrawer={setDrawer} onClose={onDrawerClose}>
        <AddEditMainCategory
          popup={popup}
          rows={rows}
          setRows={setRows}
          form={form}
          setForm={setForm}
          resetForm={resetForm}
          onDrawerClose={onDrawerClose}
          selectedModules={selectedModules}
          setSelectedModules={setSelectedModules}
          selectAllChecked={selectAllChecked}
          setSelectAllChecked={setSelectAllChecked}
        />
      </CustomDrawer>
      <div className='flex flex-row justify-between align-middle mt-3 mb-3'>

        <TableActionButton
          onClick={onAddRoleButtonClick}
          title={"Add New Store"}
          placement={"right"}
          className="add-btn"
        >
          Add Category
        </TableActionButton>
        <div className='flex gap-5'>
          <div className='employee-search-box'>
            <input placeholder='Search by Category Name ' value={filterValue} onChange={(e: any) => setFilterValue(e.target.value)} />
            <button className='search-button' onClick={() => handleSearch(filterValue)}>
              Search
            </button>
          </div>
          <button className='export-button' onClick={handleExportClick}>
            Export
          </button>

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


export default MainCategories;
