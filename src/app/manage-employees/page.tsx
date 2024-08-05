'use client'
import "./style.css";
import ProtectedLayoutThird from '@/components/protected-layout-third/ProtectedLayoutThird';
import dynamic from "next/dynamic";
import Loader from "@/components/loader/Loader";
// import Loader from '@/components/loader/Loader';
const CustomTabs = dynamic(
    () => import('@/components/custom-tabs/CustomTabs'),
    {
        loading: () => <Loader isLoading={true} />,
    }
)
const ManageEmployees = dynamic(
    () => import('./ManageEmployees'),
    {
        loading: () => <Loader isLoading={true} />,
    }
)
const ManageRole = dynamic(
    () => import('../manage-role/ManageRole'),
    {
        loading: () => <Loader isLoading={true} />,
    }
)


const commonButtonStyle = { fontSize: "30px", padding: "3px", borderRadius: "5px" };

const EmployeesPage = () => {

    return (

        <ProtectedLayoutThird
            navbar={<CustomTabs
                tabs={[{
                    label: "Manage Employees",
                    children: <ManageEmployees />
                },
                {
                    label: "Manage Role",
                    children: <ManageRole />
                }
                ]} />}
        >
            <ManageEmployees />
        </ProtectedLayoutThird>
    )
    // if (showMenus) {

    //     return (
    //         <ProtectedLayout>
    //             <CustomDrawer popup={popup} drawer={drawer} setDrawer={setDrawer} onClose={onDrawerClose}>
    //                 <AddEditEmployee popup={popup} rows={rows} setRows={setRows} form={form} setForm={setForm} resetForm={resetForm} onDrawerClose={onDrawerClose} />
    //             </CustomDrawer>
    //             <div className='flex flex-row justify-between align-middle mt-3 mb-3'>

    //                 <TableActionButton
    //                     onClick={onAddStoreClick}
    //                     title={"Add New Store"}
    //                     placement={"right"}
    //                     className="add-btn"
    //                 >
    //                     Add Employee
    //                 </TableActionButton>
    //                 <div className='flex gap-5'>
    //                     <div className='employee-search-box'>
    //                         <input placeholder='Search by name, email ' value={filterValue} onChange={(e: any) => setFilterValue(e.target.value)} />
    //                         <button className='search-button' onClick={handleSearch}>
    //                             Search
    //                         </button>
    //                     </div>
    //                     <button className='export-button' onClick={handleExportClick}>
    //                         Export
    //                     </button>

    //                 </div>
    //             </div>
    //             <div className='employee-table-container'>

    //                 <DataGrid
    //                     rows={rows}
    //                     columnHeaderHeight={35}
    //                     autoHeight={true}
    //                     rowHeight={45}
    //                     columns={columns}
    //                     disableRowSelectionOnClick
    //                     rowCount={rowCounts}
    //                     pagination
    //                     paginationModel={pagination}
    //                     paginationMode="server"
    //                     onPaginationModelChange={setPagination}
    //                 // loading={loading}
    //                 />
    //             </div>
    //         </ProtectedLayout>
    //     )
    // } else {
    //     return (
    //         <div>
    //             {/* <Loader isLoading={true} /> */}
    //             <CustomDrawer popup={popup} drawer={drawer} setDrawer={setDrawer} onClose={onDrawerClose}>
    //                 <AddEditEmployee popup={popup} rows={rows} setRows={setRows} form={form} setForm={setForm} resetForm={resetForm} onDrawerClose={onDrawerClose} />
    //             </CustomDrawer>
    //             <div className='flex flex-row justify-between align-middle mt-3 mb-3'>

    //                 <TableActionButton
    //                     onClick={onAddStoreClick}
    //                     title={"Add New Store"}
    //                     placement={"right"}
    //                     className="add-btn"
    //                 >
    //                     Add Employee
    //                 </TableActionButton>
    //                 <div className='flex gap-5'>
    //                     <div className='employee-search-box'>
    //                         <input placeholder='Search by name, email ' value={filterValue} onChange={(e: any) => setFilterValue(e.target.value)} />
    //                         <button className='search-button' onClick={handleSearch}>
    //                             Search
    //                         </button>
    //                     </div>
    //                     <button className='export-button' onClick={handleExportClick}>
    //                         Export
    //                     </button>

    //                 </div>
    //             </div>
    //             <div className='employee-table-container'>

    //                 <DataGrid
    //                     rows={rows}
    //                     columnHeaderHeight={35}
    //                     autoHeight={true}
    //                     rowHeight={45}
    //                     columns={columns}
    //                     disableRowSelectionOnClick
    //                     rowCount={rowCounts}
    //                     pagination
    //                     paginationModel={pagination}
    //                     paginationMode="server"
    //                     onPaginationModelChange={setPagination}
    //                 // loading={loading}
    //                 />
    //             </div>
    //         </div>
    //     )
    // }
}

export default EmployeesPage;