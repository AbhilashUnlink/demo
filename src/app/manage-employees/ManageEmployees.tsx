

'use client'
import ProtectedLayout from '@/components/protected-layout/ProtectedLayout';
import TableActionButton from '@/components/table-action-button/TableActionButton';
import { Delete, Edit } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import "./style.css";
import CustomDrawer, { DRAWER_TYPE, DRAWER_WIDTH } from '@/components/custom-drawer/CustomDrawer';
import AddEditEmployee from './AddEditEmployee';
import ToggleButton from '@/components/toggle-button/ToggleButton';
// import Loader from '@/components/loader/Loader';

const commonButtonStyle = { fontSize: "30px", padding: "3px", borderRadius: "5px" };
const editButtonStyle = { color: "#02C9DB", border: "1px solid #02C9DB", ...commonButtonStyle };
const deleteButtonStyle = { color: "#ED4C78", border: "1px solid #ED4C78", ...commonButtonStyle };

const popup = true;

const ManageEmployees = () => {

    const rowCounts = 10;
    const [pagination, setPagination] = useState({ page: 0, pageSize: 10 });

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        contact: "",
        role: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const headerClassName = "yogo-pos-table-header";

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
            field: "checkSummary",
            headerName: "Check Summary",
            sortable: false,
            headerClassName: headerClassName,
            flex: 1,
            renderCell: (params: any) => {
                return (<div><button className='check-summary-button'>Check Summary</button></div>)
            }
        },
        {
            field: "cashOut",
            headerName: "Cash Out",
            sortable: false,
            headerClassName: headerClassName,
            flex: 1,
            renderCell: (params: any) => {
                return (<div><button className='check-out-button'>Cash Out</button></div>)
            }
        },

        {
            field: "name",
            headerName: "Name",
            sortable: false,
            headerClassName: headerClassName,
            flex: 1,
            renderCell: ({ row }: any) => {
                return (<div>{`${row.firstName} ${row.lastName}`}</div>)
            }
        },
        {
            field: "contact",
            headerName: "Contact",
            sortable: false,
            headerClassName: headerClassName,
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            sortable: false,
            headerClassName: headerClassName,
            flex: 1,
        },
        {
            field: "role",
            headerName: "Role",
            sortable: false,
            headerClassName: headerClassName,
            flex: 1
        },
        {
            field: "loginPin",
            headerName: "Login Pin",
            sortable: false,
            headerClassName: headerClassName,
            flex: 1,
            maxWidth: 80,
        },
        {
            field: "authPin",
            headerName: "Auth Pin",
            sortable: false,
            headerClassName: headerClassName,
            flex: 1,
            maxWidth: 100,

        },
        {
            field: "status",
            headerName: "Status",
            sortable: false,
            headerClassName: headerClassName,
            flex: 1,
            maxWidth: 80,
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

    const [rows, setRows] = useState([]);

    const [filterValue, setFilterValue] = useState("");

    const handleSearch = () => {

    }
    const handleExportClick = () => {

    }


    const [drawer, setDrawer] = useState<any>({});
    const resetForm = () => {
        setForm({
            firstName: "",
            lastName: "",
            contact: "",
            role: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
    }
    const onDrawerClose = () => {
        setDrawer({});
        resetForm()
    }


    const onAddStoreClick = () => {
        setDrawer({ open: true, width: DRAWER_WIDTH.CHILDREN, title: "Add Employee", type: DRAWER_TYPE.CHILDREN })
        resetForm();

    }
    const onEditStoreClick = (data: any) => {
        setDrawer({ open: true, width: DRAWER_WIDTH.CHILDREN, title: "Edit Employee", type: DRAWER_TYPE.CHILDREN })
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
            onClick: () => onEditStoreClick(data)
        },
        {
            icon: <Delete style={deleteButtonStyle} />,
            onClick: () => handleConfirmDelete(data.id)
        },
    ];

        return (
            <div>
                {/* <Loader isLoading={true} /> */}
                <CustomDrawer popup={popup} drawer={drawer} setDrawer={setDrawer} onClose={onDrawerClose}>
                    <AddEditEmployee popup={popup} rows={rows} setRows={setRows} form={form} setForm={setForm} resetForm={resetForm} onDrawerClose={onDrawerClose} />
                </CustomDrawer>
                <div className='flex flex-row justify-between align-middle mt-3 mb-3'>

                    <TableActionButton
                        onClick={onAddStoreClick}
                        title={"Add New Store"}
                        placement={"right"}
                        className="add-btn"
                    >
                        Add Employee
                    </TableActionButton>
                    <div className='flex gap-5'>
                        <div className='employee-search-box'>
                            <input placeholder='Search by name, email ' value={filterValue} onChange={(e: any) => setFilterValue(e.target.value)} />
                            <button className='search-button' onClick={handleSearch}>
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
            </div>
        )
    // }
}

export default ManageEmployees