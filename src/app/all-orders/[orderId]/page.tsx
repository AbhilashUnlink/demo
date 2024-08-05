import CustomTabs from '@/components/custom-tabs/CustomTabs'
import ProtectedLayoutThird from '@/components/protected-layout-third/ProtectedLayoutThird'
import React from 'react'
import OrderDetails from './OrderDetails'

const OrderDetailsPage = () => {
    return (
        < ProtectedLayoutThird
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


