'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const BackToLogin = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("/login")
    }, []);
    return (
        <div></div>
    )
}

export default BackToLogin