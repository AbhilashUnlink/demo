import Image from 'next/image';
import React from 'react';
import Leaf from "../../assets/leaf.png";
import { LayersClearOutlined, LayersOutlined } from '@mui/icons-material';
import "./style.css";
import { LAYOUTS } from '@/constants/common';
import { customThemeType } from '@/comp-constants/style.c';

const LayoutChangeButton = ({ ourLayout, setOurLayout }: any) => {
    const toggleLayout = () => {
        if (ourLayout === LAYOUTS.firstLayout) {
            setOurLayout(LAYOUTS.secondLayout);
            localStorage.setItem("ourLayout", LAYOUTS.secondLayout);
            window.location.reload();
        } else {
            setOurLayout(customThemeType.themeOne);
            localStorage.setItem("ourLayout", LAYOUTS.firstLayout);
            window.location.reload();

        }
    }
    const hideForNow = true;
    if (hideForNow) {
        return <></>
    } else {
        return (
            <button className='layoutButton' onClick={toggleLayout}>
                {
                    ourLayout === LAYOUTS.firstLayout ? <LayersOutlined /> : <LayersClearOutlined />
                }

            </button>
        )
    }
}

export default LayoutChangeButton