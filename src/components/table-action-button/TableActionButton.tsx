import React from 'react';
import "./style.css";

const TableActionButton = ({ children, onClick, className = "" }: any) => {
    return (
        <div className="">
                <div className='view-action'>
                    <button
                        className={"action-btn"}
                        onClick={onClick}
                    >
                        <div className={className}>
                            {children}
                        </div>
                    </button>
                </div>
        </div>
    )
}

export default TableActionButton