'use client'
import { Divider, Typography } from '@mui/material';
import React, { useState } from 'react'


const BulkImport = ({ popup = false, onImportDrawerClose }: any) => {
    const style = popup ? { color: "black" } : {};
    const containerStyle = popup ? "text-white" : "";


    return (
        <div className={`flex flex-col p-5 ${containerStyle}`}>
            Code for Bulk Import
        </div>
    );
};
export default BulkImport