'use client'

import CustomTabs from "@/components/custom-tabs/CustomTabs";
import dynamic from "next/dynamic";
import Loader from "@/components/loader/Loader";

const ProtectedLayoutThird = dynamic(
    () => import('@/components/protected-layout-third/ProtectedLayoutThird'),
    {
        loading: () => <Loader isLoading={true} />,
    }
)
const SubCategories = dynamic(
    () => import('@/components/sub-category-comps/SubCategories'),
    {
        loading: () => <Loader isLoading={true} />,
    }
)
const MainCategories = dynamic(
    () => import('@/components/main-category-comps/MainCategories'),
    {
        loading: () => <Loader isLoading={true} />,
    }
)

const MainCategoriesPage = () => {

    return (
        <ProtectedLayoutThird
            navbar={<CustomTabs
                tabs={[{
                    label: "Main-Categories",
                    children: <MainCategories />
                },
                {
                    label: "Sub-Categories",
                    children: <SubCategories />
                }
                ]} />}
        >
            <SubCategories />
        </ProtectedLayoutThird>
    )
}


export default MainCategoriesPage;