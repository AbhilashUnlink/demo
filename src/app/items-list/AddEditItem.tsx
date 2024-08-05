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
const AddEditItem = ({ popup = false, rows, setRows, form, setForm, resetForm, onDrawerClose, selectedModules, setSelectedModules, selectAllChecked, setSelectAllChecked }: any) => {
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
            };
            setRows((prev: any) => [...prev, payload]);
            onDrawerClose();
            return;
        }
    }

    const onFormChange = (name: any, value: any) => {
        setForm({ ...form, [name]: value, })
    }

    // productName: "",
    //     sellingPrice: "",
    //         status: "1",
    //             category: "",
    //                 subCategory: "",
    //                     totalSale: "",
    //                         itemType: "Vegeterian",
    //                             stock: "Unlimited",

    return (

        <div className={`flex flex-col p-5 ${containerStyle}`}>
            <div className='flex flex-col gap-4 w-100'>
                <div className='flex flex-row gap-10'>
                    <div className='flex flex-col w-50 gap-1'>
                        <Typography variant='h6'>Enter Product Name</Typography>
                        <input style={style} className='add-edit-employee-input-field' placeholder='Enter Product Name' value={form.productName} onChange={(e: any) => onFormChange("productName", e.target.value)} />
                    </div>
                    <div className='flex flex-col w-50 gap-1'>
                        <Typography variant='h6'>Enter Selling Price</Typography>
                        <input style={style} className='add-edit-employee-input-field' placeholder=' Enter Selling Price' value={form.sellingPrice} onChange={(e: any) => onFormChange("sellingPrice", e.target.value)} />
                    </div>
                </div>
                {/*  */}
                <div className='flex flex-row gap-10'>
                    <div className='flex flex-col gap-1 w-50'>
                        <Typography variant='h6'>Item Category</Typography>
                        <select style={style} className='add-edit-employee-input-field' value={form.category} onChange={(e: any) => onFormChange("category", e.target.value)}>
                            <option value="Indian">
                                Indian
                            </option>
                            <option value="Continental">
                                Continental
                            </option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-1 w-50'>
                        <Typography variant='h6'>Sub Category</Typography>
                        <select style={style} className='add-edit-employee-input-field' value={form.subCategory} onChange={(e: any) => onFormChange("subCategory", e.target.value)}>
                            <option value="None">
                                None
                            </option>
                            <option value="North Indian">
                                North Indian
                            </option>
                            <option value="South Indian">
                                South Indian
                            </option>
                        </select>
                    </div>
                </div>
                {/*  */}
                <div className='flex flex-row gap-10'>
                    <div className='flex flex-col gap-1 w-50'>
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
                    <div className='flex flex-col gap-1 w-50'>
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

                <div className='flex flex-row gap-10'>
                    <div className='flex flex-col w-50 gap-1'>
                        <Typography variant='h6'>Total Sales</Typography>
                        <input style={style} className='add-edit-employee-input-field' placeholder='Total Sales' value={form.totalSale} onChange={(e: any) => onFormChange("totalSale", e.target.value)} />
                    </div>
                    <div className='flex flex-col gap-1 w-50'>
                        <Typography variant='h6'>Variation</Typography>
                        <select style={style} className='add-edit-employee-input-field' value={form.variation} onChange={(e: any) => onFormChange("variation", e.target.value)}>
                            <option value="Quater">
                                Quater
                            </option>
                            <option value="Half">
                                Half
                            </option>
                            <option value="Full">
                                Full
                            </option>
                        </select>
                    </div>
                </div>


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





export default AddEditItem