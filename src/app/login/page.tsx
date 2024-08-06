'use client'

import Loader from "@/components/loader/Loader";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Login = dynamic(
    () => import('../../components/auth-comps/Login'),
    {
        loading: () => <Loader isLoading={true} />,
    }
)
const LoginPage = () => {
    const { accessToken } = useSelector((store: any) => store.login.data);
    const router = useRouter()
    useEffect(() => {
        if (accessToken) {
            router.push("/dashboard");
        }
    }, [])
    if (!accessToken) {
        return (
            <Login />
        )
    } else {
        return <Loader />
    }

    // old login
    // <div style={{ background: customTheme[ourTheme].primaryBg }} className='login-page'>
    //     <div className='login-top-bar'>
    //         <Image style={{ filter: customTheme[ourTheme].logoBrightness }} className='login-logo' src={YOCO_POS_LOGO} alt="logo" />
    //         <button style={{ color: customTheme[ourTheme].primaryText }}>Learn more</button>
    //     </div>
    //     <div className='login-body'>
    //         <div className='login-page-middle-section'>
    //             <h2 className='sign-in-heading' style={{ color: customTheme[ourTheme].primaryText }}>Sign in</h2>
    //             <p className='sign-in-subheading' style={{ color: customTheme[ourTheme].primaryText }}>New to Yogo? <Link href={"/sign-up"} className='sign-up-link'>Sign up</Link></p>
    //             <input placeholder='Email or phone number' style={{ color: "black" }} className='login-input-field' value={form.email} onChange={(e) => onFormChange("email", e.target.value)} />
    //             <input placeholder='Password' type={"password"} style={{ color: "black" }} className='login-input-field' value={form.password} onChange={(e) => onFormChange("password", e.target.value)} />

    //             {/* <Link href={"/dashboard"} className='login-continue-button'>Continue</Link> */}
    //             <Button onClick={handleLogin} variant='contained' className='login-continue-button'>Login</Button>
    //         </div>
    //     </div>
    //     <div className='login-page-footer'>
    //         <div className='language' style={{ color: customTheme[ourTheme].primaryText }}> English </div>

    //         <ThemeChangeButton
    //             ourTheme={ourTheme}
    //             setOurTheme={setOurTheme}
    //         />

    //     </div>
    // </div>
}

export default LoginPage
