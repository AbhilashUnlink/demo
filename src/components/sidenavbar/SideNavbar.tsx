"use client"
import React, { Fragment, useState } from 'react'
import {  ListItemText } from '@mui/material';
import CustomNestedList from '../custom-nested-list/CustomNestedList';
import { menuItemColorType, SideMenusList } from '@/constants/side-menus-list';
import { customTheme, fontSize, fontWeight } from '@/comp-constants/style.c';


const SideNavbar = ({ ourTheme = "themeOne" }: any) => {

  const [ordersCount, setOrdersCount] = useState({
    all: "12",
    confirmed: "1",
    completed: "10",
    canceled: "1",
  });
  const [tableOrdersCount, setTableOrdersCount] = useState({
    all: "14",
    confirmed: "2",
    completed: "10",
    canceled: "2",
  });


  return (
    <nav style={{ background: customTheme[ourTheme].primaryBg }}>
      {
        SideMenusList(ordersCount, tableOrdersCount, menuItemColorType.default)?.map((item: any, index: number) => {
          if (item?.heading) {
            return (
              <Fragment key={index}>
                {/* menu items section heading of all the sections like ORDER MANAGEMENT */}
                {/* <Divider style={{marginTop:"20px"}} /> */}
                {/* <ListItem> */}
                <ListItemText primaryTypographyProps={
                  {
                    fontWeight: fontWeight.sevenHundred,
                    fontSize: fontSize.twelve,
                    color: customTheme[ourTheme].menuHeadingTextmenuItemColor,
                    paddingLeft: "10px"

                  }
                } primary={item.heading} />
                {/* </ListItem> */}
              </Fragment>

            )
          } else {
            return (
              <CustomNestedList
                key={index}
                primaryText={item?.text}
                PrimaryIcon={item?.icon}
                SecondaryIcon={item?.icon2}
                subMenus={item?.subMenus || []}
                href={item?.href || ""}
                ourTheme={ourTheme}
                background={item.background}
                hoverBg={item.hoverBg}
              />
            )
          }
        })
      }
    </nav>
  );
};

export default SideNavbar;