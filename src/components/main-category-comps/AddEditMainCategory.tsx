'use client'
import { updateObjectInArray } from '@/utils/helper';
import { Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

export const MODULES: any = {
    dashboard_management: "Dashboard Management",
    pos_management: "Pos Management",
    time_management: "Time Management",
    employees_time_management: "Employees Time Management",
    register_management: "Register Management",
    order_management: "Order Management",
    product_management: "Product Management",
    promotion_management: "Promotion Management",
    help_and_support_management: "Help and Support Management",
    report_and_analytics_management: "Report and Analytics Management",
    user_management: "User Management",
    table_management: "Table Management",
    system_management: "System Management",
    bar_management: "Bar Management"
}
const AddEditMainCategory = ({ popup = false, rows, setRows, form, setForm, resetForm, onDrawerClose, selectedModules, setSelectedModules, selectAllChecked, setSelectAllChecked }: any) => {
    const style = popup ? { color: "black" } : {};
    const containerStyle = popup ? "text-white" : "";
    useEffect(() => {
        if (form?.modules?.length > 0) {
            setSelectedModules(form?.modules);
        }
    }, []);

    const handleCancelClick = () => {
        onDrawerClose();
    }


    const [totalCount, setTotalCount] = useState(rows?.length || 0);

    const handleSaveAndAddMoreClick = () => {
        const newTotalCount = totalCount + 1;
        setTotalCount(newTotalCount);
        const payload = {
            ...form,
            id: newTotalCount,
            sl: newTotalCount
        };
        setRows((prev: any) => [...prev, payload]);
        resetForm();
        return;

    }
    const handleSaveAndExitClick = () => {
        if (form.id) {
            const newData = updateObjectInArray(rows, "id", form?.id, { ...form });
            setRows(newData)
            onDrawerClose();
            return;
        } else {
            const newTotalCount = totalCount + 1;
            setTotalCount(newTotalCount);
            const payload = {
                ...form,
                id: newTotalCount,
                sl: newTotalCount,
            };
            setRows((prev: any) => [...prev, payload]);
            onDrawerClose();
            return;
        }
    }

    const onFormChange = (name: any, value: any) => {
        setForm({ ...form, [name]: value, })
    }

    return (

        <div className={`flex flex-col p-5 ${containerStyle}`}>
            <div className='flex flex-col gap-4 w-100'>
                <div className='flex flex-col gap-2'>

                    <div className='flex flex-col w-100 gap-1'>
                        <Typography variant='h6'>Category Name</Typography>
                        <input style={style} className='add-edit-employee-input-field' placeholder='Category Name' value={form.name} onChange={(e: any) => onFormChange("name", e.target.value)} />
                    </div>
                    <div className='flex flex-col w-100 gap-1'>
                        <Typography variant='h6'>Priority</Typography>
                        <input style={style} className='add-edit-employee-input-field' placeholder='Priority' value={form.priority} onChange={(e: any) => onFormChange("priority", e.target.value)} />
                    </div>

                    <div className='flex flex-col gap-1 w-100'>
                        <Typography variant='h6'>Item Type</Typography>
                        <select style={style} className='add-edit-employee-input-field' value={form.itemType} onChange={(e: any) => onFormChange("itemType", e.target.value)}>
                            <option value="Vegeterian">
                                Vegeterian
                            </option>
                            <option value="NonVegeterian">
                                Non Vegeterian
                            </option>
                            <option value="Drinks">
                                Drinks
                            </option>
                        </select>
                    </div>
                    {/* status */}
                    <div className='flex flex-col gap-1 w-100'>
                        <Typography variant='h6'>Status</Typography>
                        <select style={style} className='add-edit-employee-input-field' value={form.status} onChange={(e: any) => onFormChange("status", e.target.value)}>
                            <option value="1">
                                True
                            </option>
                            <option value="0">
                                False
                            </option>
                        </select>
                    </div>
                </div>

                {/*  */}

                <div className='mt-5 mb-3'>
                    <Divider />
                </div>
                <div className='flex flex-row justify-center gap-5'>
                    {!form?.id &&
                        <button className='search-button' onClick={handleSaveAndAddMoreClick}>
                            Save & Add More
                        </button>}
                    <button className='search-button' onClick={handleSaveAndExitClick}>
                        Save & Exit
                    </button>
                    <button className='search-button whiteBg' onClick={handleCancelClick}>
                        Cancel
                    </button>


                </div>
            </div>
        </div>

    );

};

export default AddEditMainCategory