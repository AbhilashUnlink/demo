'use client'
import dynamic from "next/dynamic";
import Loader from "@/components/loader/Loader";
// import Loader from '@/components/loader/Loader';
const ProtectedLayoutThird = dynamic(
    () => import('@/components/protected-layout-third/ProtectedLayoutThird'),
    {
        ssr: false,
        loading: () => <Loader isLoading={true} />,
    }
)
const CustomTabs = dynamic(
    () => import('@/components/custom-tabs/CustomTabs'),
    {
        ssr: false,
        loading: () => <Loader isLoading={true} />,
    }
)
const ManageEmployees = dynamic(
    () => import('@/components/manage-employees-comps/ManageEmployees'),
    {
        ssr: false,
        loading: () => <Loader isLoading={true} />,
    }
)
const ManageRole = dynamic(
    () => import('@/components/manage-role-comps/ManageRole'),
    {
        ssr: false,
        loading: () => <Loader isLoading={true} />,
    }
)


const commonButtonStyle = { fontSize: "30px", padding: "3px", borderRadius: "5px" };

const EmployeesPage = () => {

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
            <ManageEmployees />
        </ProtectedLayoutThird>
    )
}

export default EmployeesPage;