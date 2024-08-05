'use client'
import ProtectedLayoutThird from "@/components/protected-layout-third/ProtectedLayoutThird";
import dynamic from "next/dynamic";
import Loader from "@/components/loader/Loader";
const CustomTabs = dynamic(
    () => import('@/components/custom-tabs/CustomTabs'),
    {
        loading: () => <Loader isLoading={true} />,
    }
)
const ItemsList = dynamic(
    () => import('./ItemsList'),
    {
        loading: () => <Loader isLoading={true} />,
    }
)

const ItemsListPage = () => {

    return (
        <ProtectedLayoutThird
            navbar={<CustomTabs
                tabs={[{
                    label: "Items List",
                    children: <ItemsList />
                }
                ]} />}
        >
            <ItemsList />
        </ProtectedLayoutThird>
    )
}


export default ItemsListPage;