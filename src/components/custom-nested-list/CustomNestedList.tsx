import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import { Divider, ListItem } from '@mui/material';
import "./style.css";
import { customTheme } from '@/comp-constants/style.c';

const menuListItemHeight = "6vh";
const paddingMenuListItem = "2px";
const menuFontSize = "12px";
const menuFontWeight = "800";
const menuHoverColor = "black";

export default function CustomNestedList({ PrimaryIcon, SecondaryIcon, primaryText, subMenus, href, background = "yellow", hoverBg = "gray", ourTheme }: any) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    if (subMenus?.length > 0) {
        return (
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: customTheme[ourTheme].primaryBg, padding: paddingMenuListItem }}
                component="nav">
                <ListItemButton sx={{
                    background,
                    height: menuListItemHeight,
                    // border:`2px solid ${hoverBg}`,
                    ":hover": {
                        backgroundColor: hoverBg,
                        color: menuHoverColor
                    },
                    ":hover .MuiListItemIcon-root": {
                        backgroundColor: hoverBg,
                        color: "white"
                    }
                }} onClick={handleClick}>
                    <span className='menu-icons' style={{ marginRight: "10px" }}>
                        {PrimaryIcon}
                    </span>
                    <ListItemText
                        primaryTypographyProps={
                            {
                                fontSize: menuFontSize,
                                fontWeight: menuFontWeight
                            }
                        }
                        primary={primaryText} />
                    <span className='menu-icons'>
                        {
                            open ? <ExpandLess /> : <ExpandMore />
                        }
                    </span>

                </ListItemButton>
                <Divider />

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {
                            subMenus?.length > 0 && subMenus?.map((item: any, index: number) => {
                                return (
                                    <Link href={item.href} key={index}>
                                        <ListItemButton
                                            sx={{
                                                background: customTheme[ourTheme].primaryBg,
                                                color: customTheme[ourTheme].primaryText,
                                                height: menuListItemHeight,
                                                ":hover": {
                                                    backgroundColor: hoverBg,
                                                    color: "white",
                                                },
                                                ":hover .count": {
                                                    backgroundColor: hoverBg,
                                                    color: "white"
                                                }

                                            }}
                                        >
                                            <ListItemText
                                                primaryTypographyProps={
                                                    {
                                                        fontSize: menuFontSize,
                                                        fontWeight: menuFontWeight
                                                    }
                                                }
                                                primary={item.text} />
                                            {
                                                item?.count &&
                                                <div className='count' style={{ background: customTheme[ourTheme].secondaryBg, color: customTheme[ourTheme].secondaryText }}>
                                                    {item.count}
                                                </div>

                                            }

                                        </ListItemButton>
                                    </Link>
                                )
                            })
                        }
                    </List>
                </Collapse>

            </List>
        );
    } else {
        return (
            <>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: customTheme[ourTheme].primaryBg, padding: paddingMenuListItem }}
                    component="nav" disablePadding>
                    <Link href={href}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{
                                background,
                                height: menuListItemHeight,
                                gap: "2px",
                                ":hover": {
                                    backgroundColor: hoverBg,
                                    color: menuHoverColor
                                },
                                ":hover .MuiListItemIcon-root": {
                                    backgroundColor: hoverBg,
                                    color: "white"
                                }
                            }}>
                                <span className='menu-icons' style={{ marginRight: "10px" }}>
                                    {SecondaryIcon}
                                </span>
                                <ListItemText
                                    primaryTypographyProps={{
                                        fontSize: menuFontSize,
                                        fontWeight: menuFontWeight
                                    }}
                                    primary={primaryText} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List >
            </>

        )
    }
}
