import React from 'react'
import CustomTabs from '@/components/custom-tabs/CustomTabs'
import Loader from '@/components/loader/Loader'
import ProtectedLayoutThird from '@/components/protected-layout-third/ProtectedLayoutThird'
import dynamic from 'next/dynamic'

const OrderDetails = dynamic(
    () => import('@/components/single-order/OrderDetails'),
    {
        ssr: false,
        loading: () => <Loader isLoading={true} />,
    }
)

const OrderDetailsPage = () => {
    return (
        <ProtectedLayoutThird
            navbar={< CustomTabs
                tabs={
                    [{
                        label: "Items List",
                        children: <OrderDetails />
                    }
                    ]} />}
        >
            <OrderDetails />
        </ProtectedLayoutThird >
    )
}

export default OrderDetailsPage


