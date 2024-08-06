// 'use client'
// import { updateObjectInArray } from '@/utils/helper';
// import { Divider, Typography } from '@mui/material';
// import React, { useEffect, useState } from 'react'

// const CATEGORIES_LIST = [
//     "APPETIZERS",
//     "APPETIZERS",
//     "TANDOORI",
//     "TANDOORI",
//     "HAVELI CHAAT CORNER",
//     "INDO-CHINESE",
//     "INDO-CHINESE",
//     "MAIN COURSE",
//     "MAIN COURSE",
//     "LAMB / GOAT",
//     "SEAFOOD",
//     "BIRYANI",
//     "RICE",
//     "BREADS",
//     "SIDE ORDERS",
//     "SALAD",
//     "WINE: ROSE",
//     "SPECIAL SHOOTERS",
//     "SPIRITS",
//     "WINE: WHITE",
//     "WINE: RED",
//     "COCKTAIL",
//     "SPIRIT FREE DRINKS",
//     "SHAKES",
//     "CRAFTBEER",
//     "BOTTLED BEER",
//     "DESSERTS",
//     "CIDER",
//     "COOLERS",
//     "POP",
//     "7 DAYS LUNCH"
// ];

// const SPIRITS = [
//     "VODKA",
//     "GIN",
//     "RUM",
//     "MEZCAL & TEQUILA",
//     "HERBAL",
//     "IRISH",
//     "RYE",
//     "SCOTCH",
//     "BRANDY",
//     "SINGLE MALT"
// ]
// const POP = [
//     "SHAKE'S",
//     "CHAI SHAI",
//     "POP"
// ]

// const AddEditItem = ({ popup = false, rows, setRows, form, setForm, resetForm, onDrawerClose, selectedModules, setSelectedModules, selectAllChecked, setSelectAllChecked }: any) => {
//     const style = popup ? { color: "black" } : {};
//     const containerStyle = popup ? "text-white" : "";
//     useEffect(() => {
//         if (form?.modules?.length > 0) {
//             setSelectedModules(form?.modules);
//         }
//     }, []);
//     const handleCheckboxChange = (itemName: any) => {
//         if (selectedModules?.includes(itemName)) {
//             setSelectedModules(selectedModules.filter((item: any) => item !== itemName));
//         }
//         else {
//             setSelectedModules([...selectedModules, itemName]);
//         }
//     };
//     const handleCancelClick = () => {
//         onDrawerClose();
//     }


//     const [totalCount, setTotalCount] = useState(rows?.length || 0);

//     const handleSaveAndAddMoreClick = () => {
//         const newTotalCount = totalCount + 1;
//         setTotalCount(newTotalCount);
//         const payload = {
//             ...form,
//             id: newTotalCount,
//             sl: newTotalCount,
//         };
//         setRows((prev: any) => [...prev, payload]);
//         resetForm();
//         return;

//     }
//     const handleSaveAndExitClick = () => {
//         if (form.id) {
//             const newData = updateObjectInArray(rows, "id", form?.id, { ...form, modules: selectedModules });
//             setRows(newData)
//             onDrawerClose();
//             return;
//         } else {
//             const newTotalCount = totalCount + 1;
//             setTotalCount(newTotalCount);
//             const payload = {
//                 ...form,
//                 id: newTotalCount,
//                 sl: newTotalCount,
//             };
//             setRows((prev: any) => [...prev, payload]);
//             onDrawerClose();
//             return;
//         }
//     }

//     const onFormChange = (name: any, value: any) => {
//         setForm({ ...form, [name]: value, })
//     }


//     return (

//         <div className={`flex flex-col p-5 ${containerStyle}`}>
//             <div className='flex flex-col gap-4 w-100'>
//                 <div className='flex flex-row gap-10'>
//                     <div className='flex flex-col w-50 gap-1'>
//                         <Typography variant='h6'>Enter Product Name</Typography>
//                         <input style={style} className='add-edit-employee-input-field' placeholder='Enter Product Name' value={form.productName} onChange={(e: any) => onFormChange("productName", e.target.value)} />
//                     </div>
//                     <div className='flex flex-col w-50 gap-1'>
//                         <Typography variant='h6'>Enter Selling Price</Typography>
//                         <input style={style} className='add-edit-employee-input-field' placeholder=' Enter Selling Price' value={form.sellingPrice} onChange={(e: any) => onFormChange("sellingPrice", e.target.value)} />
//                     </div>
//                 </div>
//                 {/*  */}
//                 <div className='flex flex-row gap-10'>
//                     <div className='flex flex-col gap-1 w-50'>
//                         <Typography variant='h6'>Item Category</Typography>
//                         <select style={style} className='add-edit-employee-input-field' value={form.category} onChange={(e: any) => onFormChange("category", e.target.value)}>
//                             <option value="Indian">
//                                 Indian
//                             </option>
//                             <option value="Continental">
//                                 Continental
//                             </option>
//                         </select>
//                     </div>
//                     <div className='flex flex-col gap-1 w-50'>
//                         <Typography variant='h6'>Sub Category</Typography>
//                         <select style={style} className='add-edit-employee-input-field' value={form.subCategory} onChange={(e: any) => onFormChange("subCategory", e.target.value)}>
//                             <option value="None">
//                                 None
//                             </option>
//                             <option value="North Indian">
//                                 North Indian
//                             </option>
//                             <option value="South Indian">
//                                 South Indian
//                             </option>
//                         </select>
//                     </div>
//                 </div>
//                 {/*  */}
//                 <div className='flex flex-row gap-10'>
//                     <div className='flex flex-col gap-1 w-50'>
//                         <Typography variant='h6'>Item Type</Typography>
//                         <select style={style} className='add-edit-employee-input-field' value={form.itemType} onChange={(e: any) => onFormChange("itemType", e.target.value)}>
//                             <option value="Vegeterian">
//                                 Vegeterian
//                             </option>
//                             <option value="NonVegeterian">
//                                 Non Vegeterian
//                             </option>
//                             <option value="Drinks">
//                                 Drinks
//                             </option>
//                         </select>
//                     </div>
//                     <div className='flex flex-col gap-1 w-50'>
//                         <Typography variant='h6'>Status</Typography>
//                         <select style={style} className='add-edit-employee-input-field' value={form.status} onChange={(e: any) => onFormChange("status", e.target.value)}>
//                             <option value="1">
//                                 True
//                             </option>
//                             <option value="0">
//                                 False
//                             </option>
//                         </select>
//                     </div>
//                 </div>

//                 <div className='flex flex-row gap-10'>
//                     <div className='flex flex-col w-50 gap-1'>
//                         <Typography variant='h6'>Total Sales</Typography>
//                         <input style={style} className='add-edit-employee-input-field' placeholder='Total Sales' value={form.totalSale} onChange={(e: any) => onFormChange("totalSale", e.target.value)} />
//                     </div>
//                     <div className='flex flex-col gap-1 w-50'>
//                         <Typography variant='h6'>Variation</Typography>
//                         <select style={style} className='add-edit-employee-input-field' value={form.variation} onChange={(e: any) => onFormChange("variation", e.target.value)}>
//                             <option value="Quater">
//                                 Quater
//                             </option>
//                             <option value="Half">
//                                 Half
//                             </option>
//                             <option value="Full">
//                                 Full
//                             </option>
//                         </select>
//                     </div>
//                 </div>


//                 <div className='mt-5 mb-3'>
//                     <Divider />
//                 </div>
//                 <div className='flex flex-row justify-center gap-5'>
//                     {!form?.id &&
//                         <button className='search-button' onClick={handleSaveAndAddMoreClick}>
//                             Save & Add More
//                         </button>}
//                     <button className='search-button' onClick={handleSaveAndExitClick}>
//                         Save & Exit
//                     </button>
//                     <button className='search-button whiteBg' onClick={handleCancelClick}>
//                         Cancel
//                     </button>


//                 </div>
//             </div>
//         </div>

//     );

// };





// export default AddEditItem
import React, { useState } from 'react';
// import { FaTv } from 'react-icons/fa';
import './style.css'; // Importing the CSS file
import { Delete, TvOff } from '@mui/icons-material';

const AddEditItem = () => {
    const [sections, setSections] = useState([{ id: Date.now() }]);
    const [selectionType, setSelectionType] = useState('multiple');

    const handleAddNewSection = () => {
        setSections([...sections, { id: Date.now() }]);
    };

    const handleSelectionTypeChange = (event: any) => {
        setSelectionType(event.target.value);
    };

    const handleOptionChange = (sectionId: any, index: any, event: any) => {
        const newSections = sections.map((section: any) =>
            section.id === sectionId
                ? {
                    ...section,
                    options: section.options.map((option: any, i: any) =>
                        i === index ? { ...option, [event.target.name]: event.target.value } : option
                    ),
                }
                : section
        );
        setSections(newSections);
    };

    const handleAddNewOption = (sectionId: any) => {
        const newSections = sections.map((section: any) =>
            section.id === sectionId
                ? {
                    ...section,
                    options: [...(section.options || []), { name: '', price: '' }],
                }
                : section
        );
        setSections(newSections);
    };

    const handleDeleteOption = (sectionId: any, index: any) => {
        const newSections = sections.map((section: any) =>
            section.id === sectionId
                ? {
                    ...section,
                    options: section.options.filter((_: any, i: any) => i !== index),
                }
                : section
        );
        setSections(newSections);
    };

    const handleDeleteSection = (sectionId: any) => {
        setSections(sections.filter((section) => section.id !== sectionId));
    };

    return (
        <div className="variation-container">
            <h1 className="heading">
                ProductVariations
                <TvOff />
                {/* <FaTv /> */}
            </h1>
            <hr className="divider" />
            <div className="form-container">
                {sections.map((section: any) => (
                    <div key={section.id} className="section">
                        <div className='flex justify-between '>

                            <strong>Add New</strong>
                            <div className="form-actions">
                                <button
                                    type="button"
                                    onClick={() => handleDeleteSection(section.id)}
                                    className="delete-section"
                                >
                                    <Delete style={{ color: "white" }} />
                                </button>
                            </div>
                        </div>
                        <form>
                            <div className='flex gap-5'>
                                <div className="form-group flex flex-col">
                                    {/* <div className='flex-col'> */}
                                    <label>
                                        Name:
                                    </label>
                                    <input type="text" name="name" />
                                    {/* </div> */}
                                </div>
                                <div className="form-group flex flex-col">
                                    {/* <div className='flex-col'> */}
                                    {/* <label> */}
                                    Selection Type:
                                    <div className='flex gap-5'>
                                        <label>
                                            <input
                                                style={{ outline: "none" }}
                                                type="radio"
                                                value="single"
                                                checked={selectionType === 'single'}
                                                onChange={handleSelectionTypeChange}
                                            />
                                            Single
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                style={{ outline: "none" }}
                                                value="multiple"
                                                checked={selectionType === 'multiple'}
                                                onChange={handleSelectionTypeChange}
                                            />
                                            Multiple
                                        </label>
                                        {/* </div> */}
                                        {/* </label> */}

                                    </div>
                                </div>
                                {selectionType === 'multiple' && (
                                    <>
                                        <div className="form-group flex flex-col">
                                            <label>
                                                Min:
                                            </label>
                                            <input type="number" name="min" />
                                        </div>
                                        <div className="form-group flex flex-col">
                                            <label>
                                                Max:
                                            </label>
                                            <input type="number" name="max" />
                                        </div>
                                    </>
                                )}
                                <div className="form-group mt-5 flex gap-2 items-center ">
                                    <input
                                        style={{ outline: "none" }}
                                        type="checkbox" name="required" />
                                    <label>
                                        Required
                                    </label>
                                </div>
                            </div>
                            <div className="options">
                                {section.options && section.options.map((option: any, index: any) => (
                                    <div key={index} className="option flex gap-5">
                                        <div className='form-group flex flex-col'>
                                            <label>
                                                Option Name:
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={option.name}
                                                onChange={(e) => handleOptionChange(section.id, index, e)}
                                            />
                                        </div>

                                        <div className="form-group flex flex-col">
                                            <label>

                                                Additional Price:
                                            </label>
                                            <input
                                                type="text"
                                                name="price"
                                                value={option.price}
                                                onChange={(e) => handleOptionChange(section.id, index, e)}
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteOption(section.id, index)}
                                        // className="delete-option"
                                        // style={{ height: "4rem", width: "4rem",background:"red"}}
                                        >
                                            <Delete style={{ color: "red" }} />
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => handleAddNewOption(section.id)}
                                    className="add-option"
                                >
                                    Add New Option
                                </button>
                            </div>

                        </form>
                    </div>
                ))}
                <button type="button" onClick={handleAddNewSection} className="add-new-variation">
                    Add New Variation
                </button>
            </div>
        </div>
    );
};

export default AddEditItem;
