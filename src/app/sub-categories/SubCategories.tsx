

'use client'
import TableActionButton from '@/components/table-action-button/TableActionButton';
import { Delete, Edit } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import "./style.css";
import CustomDrawer, { DRAWER_TYPE } from '@/components/custom-drawer/CustomDrawer';
import AddEditSubCategory from './AddEditSubCategory';
import ToggleButton from '@/components/toggle-button/ToggleButton';

const headerClassName = "yogo-pos-table-header";
const commonButtonStyle = { fontSize: "30px", padding: "3px", borderRadius: "5px" };
const editButtonStyle = { color: "#02C9DB", border: "1px solid #02C9DB", ...commonButtonStyle };
const deleteButtonStyle = { color: "#ED4C78", border: "1px solid #ED4C78", ...commonButtonStyle };
const popup = true;

const SubCategories = () => {
  const rowCounts = 10;
  const [pagination, setPagination] = useState({ page: 0, pageSize: 10 });

  const [form, setForm] = useState<any>({
    mainCategory: "APPETIZERS",
    subCategory: "",
    status: "1"
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
      field: "mainCategory",
      headerName: "Main Category",
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
      minWidth: 200
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
    sl: "1",
    mainCategory: "SPIRITS",
    subCategory: "SINGLE MALT",
    status: "1"

  }];
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
      mainCategory: "APPETIZERS",
      subCategory: "",
      status: "1"
    });
    setSelectedModules([]);
    setSelectAllChecked(false);
  }
  const onDrawerClose = () => {
    setDrawer({});
    resetForm()
  }


  const onAddRoleButtonClick = () => {
    setDrawer({ open: true, title: "Add Sub Category", type: DRAWER_TYPE.ADD_EDIT_ROLE })
    resetForm();

  }
  const onEditRoleClick = (data: any) => {
    setDrawer({ open: true, title: "Edit Sub Category", type: DRAWER_TYPE.ADD_EDIT_ROLE })
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
        <AddEditSubCategory
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

        <div className='flex gap-2'>
          <TableActionButton
            onClick={onAddRoleButtonClick}
            title={"Add Sub Category"}
            placement={"right"}
            className="add-btn"
          >
            Add Sub Category
          </TableActionButton>

        </div>
        <div className='flex gap-5'>
          <div className='employee-search-box'>
            <input placeholder='Search by Sub Category ' value={filterValue} onChange={(e: any) => setFilterValue(e.target.value)} />
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


export default SubCategories;
