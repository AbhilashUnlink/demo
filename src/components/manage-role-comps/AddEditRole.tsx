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
const AddEditRole = ({ popup = false, rows, setRows, form, setForm, resetForm, onDrawerClose, selectedModules, setSelectedModules, selectAllChecked, setSelectAllChecked }: any) => {
    const style = popup ? { color: "black" } : {};
    const containerStyle = popup ? "text-white" : "";
    useEffect(() => {
        if (form?.modules?.length > 0) {
            setSelectedModules(form?.modules);
        }
    }, []);
    const handleCheckboxChange = (itemName: any) => {
        if (selectedModules?.includes(itemName)) {
            setSelectedModules(selectedModules.filter((item: any) => item !== itemName));
        }
        else {
            setSelectedModules([...selectedModules, itemName]);
        }
    };
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
            sl: newTotalCount,
            createdAt: new Date(),
            modules: selectedModules,
            status: false
        };
        setRows((prev: any) => [...prev, payload]);
        resetForm();
        return;

    }
    const handleSaveAndExitClick = () => {
        if (form.id) {
            const newData = updateObjectInArray(rows, "id", form?.id, { ...form, modules: selectedModules });
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
                createdAt: new Date(),
                modules: selectedModules,
                status: false
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
                <div className='flex flex-row gap-10'>

                    <div className='flex flex-col w-50 gap-5'>
                        <Typography variant='h6'> Enter Role Name</Typography>
                        <input style={style} className='add-edit-employee-input-field' placeholder='Enter Role Name' value={form.roleName} onChange={(e: any) => onFormChange("roleName", e.target.value)} />
                    </div>
                    <div className='flex flex-col gap-5 w-50'>
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
                <div className='flex flex-col gap-5 mt-5'>
                    <div className='grid grid-cols-3 gap-4'>

                        <Typography variant='h6'>Module Permission</Typography>
                        <div className="flex flex-row justify-center align-middle gap-3">
                            <input style={style}
                                type="checkbox"
                                checked={selectAllChecked}
                                onChange={(e: any) => {
                                    setSelectAllChecked(e.target.checked)
                                    if (e.target.checked) {
                                        setSelectedModules(Object.keys(MODULES))
                                    } else {
                                        setSelectedModules([])
                                    }
                                }}
                            />
                            <p>
                                Select All
                            </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                        {Object.keys(MODULES).map((item: any, index: number) => (
                            <div className="flex flex-row gap-3" key={index}>
                                <input style={style}
                                    type="checkbox"
                                    checked={selectedModules.includes(item)}
                                    onChange={() => handleCheckboxChange(item)}
                                />
                                <label className="form-check-label ml-2" htmlFor={MODULES[item]}>
                                    {MODULES[item]}
                                </label>
                            </div>
                        ))}
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





export default AddEditRole