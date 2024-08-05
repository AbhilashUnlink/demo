'use client'
import {
    Restaurant, TableBar, BackupTable, TableChart, Apps, RiceBowl, SupervisorAccount,
    AssignmentInd, PieChart,
    Assessment, BubbleChart, MonetizationOn, AccessAlarm, FolderOpen, Settings, Print
} from '@mui/icons-material';

export const menuItemColorType = {
    default: "default",
    layoutSecond: "layoutSecond",
    old: "old"
}
const menuItemColor: any = {

    old: {
        yellow: "#D3D3D3",
        darkYellow: "#818589",
        blue: "#D3D3D3",
        darkBlue: "#818589",
        red: "#D3D3D3",
        darkRed: "#818589",
        green: "#D3D3D3",
        darkGreen: "#818589",
        pink: "#D3D3D3",
        darkPink: "#818589",
    },
    layoutSecond: {
        yellow: "black",
        darkYellow: "black",
        blue: "black",
        darkBlue: "black",
        red: "black",
        darkRed: "black",
        green: "black",
        darkGreen: "black",
        pink: "black",
        darkPink: "black",
    },
    default: {
        yellow: "#F8931C",
        darkYellow: "#F8931C",
        blue: "#6764D2",
        darkBlue: "#6764D2",
        red: "#D13438",
        darkRed: "#D13438",
        green: "#108A00",
        darkGreen: "#108A00",
        pink: "#EA285E",
        darkPink: "#EA285E",
    },
};

export const SideMenusList = (ordersCount: any, tableOrdersCount: any, type = menuItemColorType.default) => {
    return [
        // Product Management
        { heading: "PRODUCT MANAGEMENT", },
        {
            text: "Category Setup",
            icon: <Apps />,
            background: menuItemColor[type].red,
            hoverBg: menuItemColor[type].darkRed,
            href: "/main-categories",
            subMenus: [
                { text: "Main-Category", href: "/main-categories" },
                { text: "Sub-Category", href: "/sub-categories" }
            ]
        },
        {
            text: "Items",
            icon: <RiceBowl />,
            background: menuItemColor[type].red,
            hoverBg: menuItemColor[type].darkRed,
            href: "/items-list",
            subMenus: [
                // { text: "Item Attributes", href: "/under-maintainence" },
                // { text: "Item Addons", href: "/under-maintainence" },
                // { text: "Item Add", href: "/under-maintainence" },
                { text: "Item List", href: "/items-list" },
                // { text: "Bulk Import", href: "/under-maintainence" },
                // { text: "Bulk Export", href: "/under-maintainence" },
            ]
        },
        // user management
        { heading: "USER MANAGEMENT" },
        {
            text: "Employees",
            icon: <SupervisorAccount />,
            background: menuItemColor[type].yellow,
            hoverBg: menuItemColor[type].darkYellow,
            href: "/manage-employees",
            subMenus: [
                { text: "Role Setup", href: "/manage-role" },
                { text: "Manage", href: "/manage-employees" },
            ]
        },
        {
            text: "Customers",
            icon: <AssignmentInd />,
            background: menuItemColor[type].yellow,
            hoverBg: menuItemColor[type].darkYellow,
            subMenus: [
                { text: "List", href: "/customers-list" },
            ]
        },
        { heading: "POS" },
        {
            text: "POS",
            icon2: <PieChart />,
            href: "/under-maintainence",
            background: menuItemColor[type].green,
            hoverBg: menuItemColor[type].darkGreen,
        },
        { heading: "ORDER MANAGEMENT" },
        {
            text: "Orders",
            icon: <Restaurant />,
            background: menuItemColor[type].yellow,
            hoverBg: menuItemColor[type].darkYellow,
            href: "/all-orders",
            subMenus: [
                { text: "All", count: ordersCount.all, href: "/all-orders" },
                { text: "Confirmed", count: ordersCount.confirmed, href: "/confirmed-orders" },
                { text: "Completed", count: ordersCount.completed, href: "/completed-orders" },
                { text: "Canceled", count: ordersCount.canceled, href: "/canceled-orders" },

            ]
        },
        {
            text: "Table Orders",
            icon: <TableBar />,
            background: menuItemColor[type].yellow,
            hoverBg: menuItemColor[type].darkYellow,
            subMenus: [
                { text: "All", count: tableOrdersCount.all, href: "/table-all-orders" },
                { text: "Confirmed", count: tableOrdersCount.confirmed, href: "/table-confirmed-orders" },
                { text: "Completed", count: tableOrdersCount.completed, href: "/table-completed-orders" },
                { text: "Canceled", count: tableOrdersCount.canceled, href: "/table-canceled-orders" },
            ]
        },

        { heading: "TABLE MANAGEMENT" },
        {
            text: "Tables",
            icon: <BackupTable />,
            background: menuItemColor[type].blue,
            hoverBg: menuItemColor[type].darkBlue,
            subMenus: [
                { text: "List", href: "/table-all-orders" },
                { text: "Availability", href: "/under-maintainence" }
            ]
        },
        {
            text: "Bars",
            icon: <TableChart />,
            background: menuItemColor[type].blue,
            hoverBg: menuItemColor[type].darkBlue,
            subMenus: [
                { text: "List", href: "/table-all-orders" },
                { text: "Availability", href: "/under-maintainence" }
            ]
        },
    
        // {
        //   text: "Chef",
        //   icon: <InsertEmoticon />,
        //   background: menuItemColor[type].yellow,
        //   hoverBg: menuItemColor[type].darkYellow,
        //   subMenus: [
        //     { text: "Add New", href: "/under-maintainence" },
        //     { text: "List", href: "/under-maintainence" },
        //   ]
        // },
        // report and analytics
        {
            heading: "REPORT AND ANALYTICS"
        },
        {
            text: "Attendance Report",
            icon2: <PieChart />,
            href: "/under-maintainence",
            background: menuItemColor[type].blue,
            hoverBg: menuItemColor[type].darkBlue,
        },
        {
            text: "Earning Report",
            icon2: <PieChart />,
            href: "/under-maintainence",
            background: menuItemColor[type].blue,
            hoverBg: menuItemColor[type].darkBlue,
        },
        {
            text: "Order Report",
            icon2: <Assessment />,
            href: "/under-maintainence",
            background: menuItemColor[type].blue,
            hoverBg: menuItemColor[type].darkBlue,
        },
        {
            text: "Product Report",
            icon2: <BubbleChart />,
            href: "/under-maintainence",
            background: menuItemColor[type].blue,
            hoverBg: menuItemColor[type].darkBlue,
        },
        {
            text: "Sales Report",
            icon2: <MonetizationOn />,
            href: "/under-maintainence",
            background: menuItemColor[type].green,
            hoverBg: menuItemColor[type].darkGreen,
        },
        // time Management
        {
            heading: "TIME MANAGEMENT"
        },
        {
            text: "Clock In/Out",
            icon: <AccessAlarm />,
            background: menuItemColor[type].blue,
            hoverBg: menuItemColor[type].darkBlue,
            subMenus: [
                { text: "Clock In / Out", href: "/under-maintainence" },
                { text: "Clock History", href: "/under-maintainence" },
                { text: "Employee List", href: "/under-maintainence" },
            ]
        },
        {
            text: "Register Open/Close",
            icon: <FolderOpen />,
            background: menuItemColor[type].blue,
            hoverBg: menuItemColor[type].darkBlue,
            subMenus: [
                { text: "Open / Close", href: "/under-maintainence" },
                { text: "List", href: "/under-maintainence" },
            ]
        },
        // System Management
        {
            heading: "SYSTEM MANAGEMENT"
        },
        {
            text: "System Management",
            icon: <Settings />,
            background: menuItemColor[type].pink,
            hoverBg: menuItemColor[type].darkPink,
            subMenus: [
                { text: "Create Station", href: "/under-maintainence" },
                { text: "List", href: "/under-maintainence" },
            ]
        },
        {
            text: "Printers",
            icon: <Print />,
            background: menuItemColor[type].pink,
            hoverBg: menuItemColor[type].darkPink,
            subMenus: [
                { text: "Create Station", href: "/under-maintainence" },
                { text: "List", href: "/under-maintainence" },
            ]
        },

    ];
}