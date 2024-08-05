import React from 'react';
import "./style.css";

const CustomCheckbox = ({ checked, onChange }: any) => {
    return (
        <div className="checkbox-wrapper-42"><input checked={checked} onChange={onChange} id="cbx-42" type="checkbox" /><label className="cbx" htmlFor="cbx-42"></label><label className="lbl" htmlFor="cbx-42"></label></div>
    )
}

export default CustomCheckbox;