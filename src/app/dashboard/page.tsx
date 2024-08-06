'use client'
import CustomTable from '@/components/custom-table/CustomTable';
import ProtectedLayout from '@/components/protected-layout/ProtectedLayout';
import React, { useEffect, useState } from 'react';
import ProtectedLayoutSecond from '@/components/protected-layout-second/ProtectedLayoutSecond';
import { LAYOUTS } from '@/constants/common';
import CustomTabs from '@/components/custom-tabs/CustomTabs';
// import Dashboard from './Dashboard';
import dynamic from 'next/dynamic';
import Loader from '@/components/loader/Loader';
// import Dashboard from '@/components/dashboard-comps/Dashboard';
const ProtectedLayoutThird = dynamic(
    () => import('@/components/protected-layout-third/ProtectedLayoutThird'),
    {
        loading: () => <Loader isLoading={true} />,
    }
)
const Dashboard = dynamic(
    () => import('@/components/dashboard-comps/Dashboard'),
    {
        loading: () => <Loader isLoading={true} />,
    }
)


const DashboardPage = () => {
    const [layout, setLayout] = useState<any>(LAYOUTS.firstLayout)
    // useEffect(() => {
    //     if (localStorage.getItem("ourLayout")) {
    //         setLayout(localStorage.getItem("ourLayout"));
    //     }
    // }, [])

    return (<ProtectedLayoutThird
        navbar={<CustomTabs
            tabs={[{
                label: "Dashboard",
                children: <Dashboard />
            }
            ]} />}
    >
        <Dashboard />
    </ProtectedLayoutThird>)

    // if (layout === LAYOUTS.firstLayout) {

    //     return (
    //         <ProtectedLayout>
    //             <CustomTable />
    //         </ProtectedLayout>
    //     )
    // } else {
    //     return (
    //         <ProtectedLayoutSecond>
    //             <CustomTable />
    //         </ProtectedLayoutSecond>
    //     )
    // }
}

export default DashboardPage;