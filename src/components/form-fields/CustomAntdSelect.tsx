import React from 'react';
import { Select } from 'antd';

// const options = [
//     {
//         value: 'none',
//         label: 'None',
//     }
// ]
const CustomAntdSelect = ({ options, onChange, style, placeholder =""}: any) => {
    return (
        <div
            style={{ width: "100%" }}
        >

            <Select
                showSearch
                placeholder={placeholder}
                style={style}
                onChange={onChange}
                optionFilterProp="label"
                filterSort={(optionA: any, optionB: any) =>
                    (optionA?.label ?? '')?.toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={options}
            />
        </div>
    )
};

export default CustomAntdSelect;