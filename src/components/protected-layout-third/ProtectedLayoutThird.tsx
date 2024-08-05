'use client'
import React from 'react'
import ProtectedLayout from '../protected-layout/ProtectedLayout';
import ProtectedLayoutSecond from '../protected-layout-second/ProtectedLayoutSecond';
import { LAYOUTS } from '@/constants/common';
import { useSelector } from 'react-redux';
import BackToLogin from './BackToLogin';

const ProtectedLayoutThird = ({ title = "", children, navbar }: any) => {

  const [ourLayout, setOurLayout] = React.useState<any>(LAYOUTS.firstLayout);
  // React.useEffect(() => {
  //   if (localStorage.getItem("ourLayout")) {
  //     setOurLayout(localStorage.getItem("ourLayout"))
  //   }
  // }, [])


  // use this when done
  const accessToken = useSelector((state: any) => state.login.data.accessToken);
  // const accessToken = true;
  if (accessToken) {
    if (ourLayout === LAYOUTS.firstLayout) {
      return (<ProtectedLayout
        title={title}
      >
        {children}
      </ProtectedLayout>)
    } else {
      return (
        <ProtectedLayoutSecond
          navbar={navbar}
        >
        </ProtectedLayoutSecond>
      )
    }
  } else {
    return (<BackToLogin />)
  }
}

export default ProtectedLayoutThird;