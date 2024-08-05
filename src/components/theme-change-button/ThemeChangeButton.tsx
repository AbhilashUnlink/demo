import { customTheme, customThemeType } from '@/app/constants/style.c';
import Image from 'next/image';
import React from 'react';
import Leaf from "../../assets/leaf.png";

const ThemeChangeButton = ({ ourTheme, setOurTheme }: any) => {

    const toggleTheme = () => {
        if (ourTheme === customThemeType.themeOne) {
            setOurTheme(customThemeType.themeTwo);
            localStorage.setItem("ourTheme", customThemeType.themeTwo);
        } else {
            setOurTheme(customThemeType.themeOne);
            localStorage.setItem("ourTheme", customThemeType.themeOne);
        }
    }
    return (
        <button style={{
            color: customTheme[ourTheme].primaryText,
            height: "25px",
            width: "25px",
            borderRadius: "50%",
            padding: "5px",
            background: customTheme[ourTheme].secondaryBg
        }} onClick={toggleTheme}>
            <Image src={Leaf} alt={"change-theme-button"} />
        </button>
    )
}

export default ThemeChangeButton