import { useEffect, useState } from 'react';
import { Divider, Drawer, IconButton, Typography, useTheme } from '@mui/material';
import { ChevronRight, ChevronLeft } from '@mui/icons-material';
import { styled } from '@mui/material';
import CustomPopup from '../custom-popup/CustomPopup';

export const DRAWER_TYPE = {
    CHILDREN: "CHILDREN",
    ADD_EDIT_ROLE: "ADD_EDIT_ROLE",
    BULK_IMPORT: "BULK_IMPORT",
    BULK_EXPORT: "BULK_EXPORT",
}
export const DRAWER_WIDTH = {
    DEFAULT: "0",
    CHILDREN: "50%",
    ADD_EDIT_ROLE: "75%",
    BULK_IMPORT: "45%",
    BULK_EXPORT: "45%",
}
export default function CustomDrawer({ drawer, setDrawer, children, onClose, popup = false, popupStyle = false }: any) {
    const theme = useTheme();
    const [drawerWidth, setDrawerWidth] = useState<any>(DRAWER_WIDTH.DEFAULT);
    useEffect(() => {
        switch (drawer.type) {
            case DRAWER_TYPE.CHILDREN:
                setDrawerWidth(drawer.width);
                break;
            case DRAWER_TYPE.ADD_EDIT_ROLE:
                setDrawerWidth(DRAWER_WIDTH.ADD_EDIT_ROLE);
                break;
            case DRAWER_TYPE.BULK_IMPORT:
                setDrawerWidth(DRAWER_WIDTH.BULK_IMPORT);
                break;
            case DRAWER_TYPE.BULK_EXPORT:
                setDrawerWidth(DRAWER_WIDTH.BULK_EXPORT);
                break;
            default:
                setDrawerWidth(DRAWER_WIDTH);
        }
    }, [drawer]);

    const handleDrawerClose = (drawer: any) => {
        switch (drawer.type) {
            case DRAWER_TYPE.CHILDREN:
                onClose();
                break;
            default:
                setDrawer([]);
        }
    };
    const style = {
        position: "absolute",
        top: "2vh",
        //   height: "60vh",
        width: "60%",
        left: "20%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#000",
        // boxShadow:" rgba(9, 30, 66, 0.25) 0px 4px 8px - 2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
        // boxShadow: "rgba(0, 0, 0, 0.95) 0px 5px 15px",
        // boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px - 12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px - 3px 5px",
        borderRadius: "1rem",
        border: "1px solid white",
        padding: "1rem 2.5rem",
        color: popup ? "white" : "black",
    }
    if (popup) {
        return <CustomPopup
            style={popupStyle ? popupStyle : style}
            title={drawer?.title}
            open={drawer.open || false}
            onClose={() => handleDrawerClose(drawer)}
        >
            {[DRAWER_TYPE.CHILDREN, DRAWER_TYPE.ADD_EDIT_ROLE, DRAWER_TYPE.BULK_IMPORT, DRAWER_TYPE.BULK_EXPORT]?.includes(drawer.type) && children}
        </CustomPopup>
    } else {

        return (
            <Drawer
                className={`drawer-wrapper ${drawer.className}`}
                style={{ position: 'relative' }}
                open={drawer.open || false}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant="temporary"
                onClose={() => handleDrawerClose(drawer)}
                anchor="right"
            >
                <DrawerHeader className='drawer-header'>
                    <IconButton onClick={() => handleDrawerClose(drawer)}>
                        {theme.direction === 'rtl' ? <ChevronLeft /> : <ChevronRight />}
                    </IconButton>
                    <Typography variant='h5'>
                        {drawer?.title}
                    </Typography>
                </DrawerHeader>
                <Divider />
                {[DRAWER_TYPE.CHILDREN, DRAWER_TYPE.ADD_EDIT_ROLE, DRAWER_TYPE.BULK_IMPORT, DRAWER_TYPE.BULK_EXPORT]?.includes(drawer.type) && children}
            </Drawer>
        );
    }
}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));
