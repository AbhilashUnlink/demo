"use client"
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SideNavbar from '../sidenavbar/SideNavbar';
import YOGO_POS_LOGO from "../../assets/yogo-pos-logo.png";
import Image from 'next/image';
import "./style.css";
import ThemeChangeButton from '../theme-change-button/ThemeChangeButton';
import LayoutChangeButton from '../layout-change-button/LayoutChangeButton';
import { LAYOUTS } from '@/constants/common';
import { useDispatch } from 'react-redux';
import { setLogout } from '@/features/login-redux/login.r';
import { customTheme, customThemeType } from '@/comp-constants/style.c';

const drawerWidth = 260;
const appBarHeight = "72px";
const appBarPaddingTop = "10px";

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    background: "white",
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}




export default function ProtectedLayout({ title = "", children }: any) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [ourTheme, setOurTheme] = React.useState<any>(customThemeType.themeOne);

    // React.useEffect(() => {
    //     if (localStorage.getItem("ourTheme")) {
    //         setOurTheme(localStorage.getItem("ourTheme"))
    //     }
    // }, [])

    const [ourLayout, setOurLayout] = React.useState<any>(LAYOUTS.firstLayout);
    // React.useEffect(() => {
    //     if (localStorage.getItem("ourLayout")) {
    //         setOurLayout(localStorage.getItem("ourLayout"))
    //     }
    // }, [])
    // const [ourLayout, setOurLayout] = React.useState(localStorage.getItem("ourLayout") ? localStorage.getItem("ourLayout") : LAYOUTS.firstLayout);

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        background: customTheme[ourTheme].logoBg,
        position: "sticky",
        top: 0,
        zIndex: 1
    }));

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })<AppBarProps>(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        background: customTheme[ourTheme].primaryBg,
        height: appBarHeight,
        paddingTop: appBarPaddingTop,
        ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <div className='tool-bar'>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon style={{ color: customTheme[ourTheme].secondaryBg }} />
                    </IconButton>
                    <div className='app-bar'>
                        <Typography style={{ color: customTheme[ourTheme].primaryText, fontSize: "16px" }} variant="h6" noWrap component="div">
                            {title || "YOGO POS DASHBOARD"}
                        </Typography>

                        <div className='flex gap-5 items-center ' >
                            <ThemeChangeButton
                                ourTheme={ourTheme}
                                setOurTheme={setOurTheme}
                            />
                            <button onClick={() => dispatch(setLogout())} className=' bg-gray-500  px-5 py-1 rounded '>Logout</button>
                        </div>

                    </div>
                </div>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        background: customTheme[ourTheme].menuHeadingBg
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <div style={{ background: customTheme[ourTheme].primaryBg }} className='drawer-header'>
                    <div onClick={handleDrawerClose}>
                        <Image style={{ filter: customTheme[ourTheme].logoBrightness }} src={YOGO_POS_LOGO} alt="YOGO-POS-LOGO" />
                    </div>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon style={{ color: customTheme[ourTheme].primaryText }} /> : <ChevronRightIcon style={{ color: "white" }} />}
                    </IconButton>
                </div>
                <Divider />
                <SideNavbar ourTheme={ourTheme} />
            </Drawer>
            <Main open={open} style={{ width: open ? `calc(100% - ${drawerWidth}px)` : "100%", height: "95vh", background: "white", marginTop: "7vh", overflow: "hidden" }}>
                {children}
                <LayoutChangeButton
                    ourLayout={ourLayout}
                    setOurLayout={setOurLayout}
                />
            </Main>
        </Box>
    );
}