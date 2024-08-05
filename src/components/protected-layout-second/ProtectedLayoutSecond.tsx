'use client'
import { menuItemColorType, SideMenusList } from '@/constants/side-menus-list';
import Link from 'next/link';
import React, { useState } from 'react'
import LOGO from "../../assets/yogo-pos-logo.png"
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LayoutChangeButton from '../layout-change-button/LayoutChangeButton';
import { LAYOUTS } from '@/constants/common';

const ProtectedLayoutSecond = ({ children, navbar }: any) => {
  const [ordersCount, setOrdersCount] = useState({
    all: "12",
    confirmed: "1",
    completed: "10",
    canceled: "1",
  });
  const [tableOrdersCount, setTableOrdersCount] = useState({
    all: "14",
    confirmed: "2",
    completed: "10",
    canceled: "2",
  });

  const pathname = usePathname();
  const [ourLayout, setOurLayout] = React.useState<any>(LAYOUTS.firstLayout);
  // React.useEffect(() => {
  //   if (localStorage.getItem("ourLayout")) {
  //     setOurLayout(localStorage.getItem("ourLayout"))
  //   }
  // }, [])

  return (
    <div className='flex flex-row w-100 h-100 bg-black'>
      <div className='flex flex-col border-r width-20'>
        <div className='w-100 height-10 flex justify-center align-middle'>
          <Image src={LOGO} alt="YOGO-LOGO" width={250} />
        </div>
        <hr />

        <div className='flex mt-2 flex-col px-5 py-2 height-90 gap-5 overflow-x-hidden overflow-y-scroll'>
          {
            SideMenusList(ordersCount, tableOrdersCount, menuItemColorType.layoutSecond)?.map((item: any, index: number) => {
              if (item.text) {
                if (item.href) {

                  return (
                    <Link href={item.href} key={index} className={pathname === item.href ? "flex text-gray-800 gap-3 bg-white px-5 py-2 cursor-pointer" : 'flex gap-3 bg-gray-800 text-white px-5 py-2 cursor-pointer hover:bg-white hover:text-gray-800 '}>
                      <span>
                        {item.icon || item.icon2}
                      </span>
                      <span>
                        {item.text.split(" ")[0]}
                      </span>
                    </Link>
                  );

                  // this will be remved once this is finalized as we'll have the links for all the tabs here

                } else {
                  return (
                    <div key={index} className='flex gap-3 bg-gray-800 text-white px-5 py-2 cursor-pointer hover:bg-white hover:text-gray-800 '>
                      <span>
                        {item.icon || item.icon2}
                      </span>
                      <span>
                        {item.text.split(" ")[0]}
                      </span>

                    </div>

                  )
                }
              }
            }
            )
          }
        </div>
      </div>
      <div className='width-80'>
        <LayoutChangeButton
          ourLayout={ourLayout}
          setOurLayout={setOurLayout}
        />

        <div className='w-100 height-10 flex justify-center align-middle'>
          {navbar}
        </div>
        <hr />
        <div className='mt-2 ml-2'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default ProtectedLayoutSecond