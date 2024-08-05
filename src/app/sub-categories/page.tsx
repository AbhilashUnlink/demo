'use client'

import ProtectedLayoutThird from "@/components/protected-layout-third/ProtectedLayoutThird";
import CustomTabs from "@/components/custom-tabs/CustomTabs";
import dynamic from "next/dynamic";
import Loader from "@/components/loader/Loader";

const SubCategories = dynamic(
    () => import('./SubCategories'),
    {
        loading: () => <Loader isLoading={true} />,
    }
)
const MainCategories = dynamic(
    () => import('../main-categories/MainCategories'),
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