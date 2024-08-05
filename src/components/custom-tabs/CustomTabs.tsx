'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function CustomTabs({ tabs }: any) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    console.log(value, "value")
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider',display:"flex"}}>
                <Tabs
                    TabIndicatorProps={{ style: { background: 'none' } }}
                    value={value} onChange={handleChange} aria-label="basic tabs example">
                    {
                        tabs.map((item: any, index: number) => {
                            return (
                                <Tab style={{ color: value === index ? "#1f2937" : "white", background: value === index ? "white" : "", margin: "10px 10px 10px 20px", border: "none", padding: "0px 15px" }} key={index} label={item.label} {...a11yProps(index)} />
                            )
                        })
                    }
                </Tabs>
            </Box>
            <Box sx={{margin:"10px",background:"white",padding:"10px"}}>
                {tabs[value].children}
            </Box>
        </Box>
    );
}
