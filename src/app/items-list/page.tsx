'use client'
import dynamic from "next/dynamic";
import Loader from "@/components/loader/Loader";
const CustomTabs = dynamic(
    () => import('@/components/custom-tabs/CustomTabs'),
    {
        ssr: false,
        loading: () => <Loader isLoading={true} />,
    }
)
const ProtectedLayoutThird = dynamic(
    () => import('@/components/protected-layout-third/ProtectedLayoutThird'),
    {
        ssr: false,
        loading: () => <Loader isLoading={true} />,
    }
)
const ItemsList = dynamic(
    () => import('@/components/items-list-comps/ItemsList'),
    {
        ssr: false,
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