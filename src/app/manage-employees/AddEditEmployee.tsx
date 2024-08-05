import React, { useState } from 'react';
import "./style.css";
import { Divider, Typography } from '@mui/material';
import { updateObjectInArray } from '@/utils/helper';

const AddEditEmployee = ({ popup = false, rows, setRows, form, setForm, resetForm, onDrawerClose }: any) => {
    const [totalCount, setTotalCount] = useState(rows?.length || 0);

    const onFormChange = (name: any, value: any) => {
        setForm({ ...form, [name]: value })
    }


    const handleSubmitAndAddMore = () => {
        const newTotalCount = totalCount + 1;
        setTotalCount(newTotalCount);
        const payload = {
            ...form,
            id: newTotalCount,
            sl: newTotalCount,
            authPin: 1000 + newTotalCount,
            loginPin: 1000 + newTotalCount,
            status: "1"
        };
        setRows((prev: any) => [...prev, payload]);
        // onDrawerClose();
        resetForm();
        return;

    }
    const handleSubmitAndExit = () => {
        if (form.id) {
            const newData = updateObjectInArray(rows, "id", form?.id, form);
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
                authPin: 1000 + newTotalCount,
                loginPin: 1000 + newTotalCount,
                status: "1"
            };
            setRows((prev: any) => [...prev, payload]);
            onDrawerClose();
            return;
        }
    }
    const handleCancelClick = () => {
        // resetForm();
        onDrawerClose();
    }
    const style = popup ? { color: "black" } : {};
    return (
        <div className='flex flex-col gap-3 m-5'>
            <Typography variant='h6'>General Information</Typography>
            <div className='flex flex-row gap-4 w-100'>
                <div className='flex flex-col w-50'>
                    <label>First Name</label>
                    <input style={style} className='add-edit-employee-input-field' placeholder='First Name' value={form.firstName} onChange={(e: any) => onFormChange("firstName", e.target.value)} />
                </div>
                <div className='flex flex-col w-50'>
                    <label>Last Name</label>
                    <input style={style} className='add-edit-employee-input-field' placeholder='Last Name' value={form.lastName} onChange={(e: any) => onFormChange("lastName", e.target.value)} />
                </div>
            </div>
            <div className='flex flex-row gap-4 w-100'>
                <div className='flex flex-col w-50'>
                    <label>Phone Number</label>
                    <input style={style} className='add-edit-employee-input-field' placeholder='Ex: +88017******' value={form.contact} onChange={(e: any) => onFormChange("contact", e.target.value)} />
                </div>
                <div className='flex flex-col w-50'>
                    <label>Role</label>
                    <select style ={style} className='add-edit-employee-input-field' onChange={(e) => onFormChange("role", e.target.value)} value={form.role}>
                        <option value="">
                            -- Select Role --
                        </option>
                        <option value="subAdmin">
                            Sub Admin
                        </option>
                        <option value="manager">
                            Manager
                        </option>
                        <option value="user">
                            User
                        </option>
                    </select>
                </div>
            </div>
            <Typography variant='h6'>Account Information</Typography>
            <div className='flex flex-col w-100'>
                <label>Email</label>
                <input style={style} type='email' className='add-edit-employee-input-field' placeholder='Email' value={form.email} onChange={(e: any) => onFormChange("email", e.target.value)} />
            </div>
            {
                form.loginPin &&
                form.authPin &&
                <div className='flex flex-row gap-4 w-100'>
                    <div className='flex flex-col w-50'>
                        <label>Login Pin</label>
                        <input style={style} disabled={true} className='add-edit-employee-input-field' placeholder='' value={form.loginPin} onChange={() => { }} />
                    </div>
                    <div className='flex flex-col w-50'>
                        <label>Auth Pin</label>
                        <input style={style} disabled={true} className='add-edit-employee-input-field' placeholder='' value={form.authPin} onChange={() => { }} />
                    </div>
                </div>
            }
            {/* <div className='flex flex-row gap-4 w-100'>
                <div className='flex flex-col w-50'>
                    <label>Password</label>
                    <input style={style} className='add-edit-employee-input-field' placeholder='Password' value={form.password} onChange={(e: any) => onFormChange("password", e.target.value)} />
                </div>
                <div className='flex flex-col w-50'>
                    <label>Confirm Password</label>
                    <input style={style} className='add-edit-employee-input-field' placeholder='Confirm Password' value={form.confirmPassword} onChange={(e: any) => onFormChange("confirmPassword", e.target.value)} />
                </div>
            </div> */}
            <div className='mt-5 mb-3'>
                <Divider />
            </div>
            <div className='flex flex-row justify-center gap-5'>
                {!form?.id &&
                    <button className='search-button' onClick={handleSubmitAndAddMore}>
                        Save & Add More
                    </button>}
                <button className='search-button whiteBg' onClick={handleSubmitAndExit}>
                    Save & Exit
                </button>
                <button className='search-button whiteBg' onClick={handleCancelClick}>
                    Cancel
                </button>


            </div>
        </div>
    )
}

export default AddEditEmployee