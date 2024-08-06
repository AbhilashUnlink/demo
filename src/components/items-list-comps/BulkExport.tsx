'use client'
import { Divider, Typography } from '@mui/material';
import React, { useState } from 'react'


const BulkExport = ({ popup = false, onImportDrawerClose }: any) => {
    const style = popup ? { color: "black" } : {};
    const containerStyle = popup ? "text-white" : "";


    return (
        <div className={`flex flex-col p-5 ${containerStyle}`}>
       Code for Bulk Export 
        </div>

    );

};

export default BulkExport