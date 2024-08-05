import { Button } from '@mui/material';
// import Link from 'next/link';
import React from 'react'
// under - maintainence
const UnderMaintainence = () => {
    return (
        <div style={{width:"100%",height:"100vh",justifyContent:"center",alignItems:"center"}} className='flex flex-col'>
            <p>Sorry Page is Under Maintainence</p>
            <br />
            <p>Click Here To Go Back To Dashboard</p>
            <br />
            {/* <Link href="/dashboard"> */}
            <Button variant='contained'>
                    Go Back
            </Button>
            {/* </Link> */}
        </div>
    )
}

export default UnderMaintainence;

