'use client'
import CustomTabs from '@/components/custom-tabs/CustomTabs';
import dynamic from "next/dynamic";
import Loader from "@/components/loader/Loader";

const ProtectedLayoutThird = dynamic(
    () => import('@/components/protected-layout-third/ProtectedLayoutThird'),
    {
        loading: () => <Loader isLoading={true} />,
    }
)
const ManageEmployees = dynamic(
    () => import('../../components/manage-employees-comps/ManageEmployees'),
    {
        loading: () => <Loader isLoading={true} />,
    }
)
const ManageRole = dynamic(
    () => import('@/components/manage-role-comps/ManageRole'),
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