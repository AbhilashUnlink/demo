import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space } from 'antd';

const CustomAntdPassword = ({ placeholder = "", value, onChange = undefined,style }: any) => {

    return (
        <Space direction="vertical">
            <Input.Password
            style={style}
                value={value}
                placeholder={placeholder}
                onChange={onChange && onChange}
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
        </Space>
    );
};

export default CustomAntdPassword;