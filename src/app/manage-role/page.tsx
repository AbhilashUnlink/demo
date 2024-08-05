'use client'
import "./style.css";
import ProtectedLayoutThird from '@/components/protected-layout-third/ProtectedLayoutThird';
import CustomTabs from '@/components/custom-tabs/CustomTabs';
import dynamic from "next/dynamic";
import Loader from "@/components/loader/Loader";

const ManageEmployees = dynamic(
    () => import('../manage-employees/ManageEmployees'),
    {
        loading: () => <Loader isLoading={true} />,
    }
)
const ManageRole = dynamic(
    () => import('./ManageRole'),
    {
        loading: () => <Loader isLoading={true} />,
    }
)

const ManageRolePage = () => {
    return (
        <ProtectedLayoutThird
            navbar={<CustomTabs
                tabs={[{
                    label: "Manage Employees",
                    children: <ManageEmployees />
                },
                {
                    label: "Manage Role",
                    children: <ManageRole />
                }
                ]} />}
        >
            <ManageRole />
        </ProtectedLayoutThird>
    )

}

export default ManageRolePage;