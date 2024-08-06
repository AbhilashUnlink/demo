'use client'
import Loader from "@/components/loader/Loader";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Signup = dynamic(
    () => import('../../components/auth-comps/Signup'),
    {
        loading: () => <Loader isLoading={true} />,
    }
)
const SignUpPage = () => {
    const { accessToken } = useSelector((store: any) => store.login.data);
    const router = useRouter()
    useEffect(() => {
        if (accessToken) {
            router.push("/dashboard");
        }
    }, [])
    if (!accessToken) {
        return (
            <Signup />
        )
    } else {
        return <Loader />
    }

    // old signup
    // <>
    //     <Loader isLoading={loader} />
    //     <div style={{ background: customTheme[ourTheme].primaryBg }} className='sign-up-page'>
    //         <div className='sign-up-top-bar'>
    //             <Image style={{ filter: customTheme[ourTheme].logoBrightness }} className='sign-up-logo' src={YOCO_POS_LOGO} alt="logo" />
    //             {/* <button style={{ color: customTheme[ourTheme].primaryText }}>Learn more</button> */}
    //         </div>
    //         <Divider style={{ background: customTheme[ourTheme].secondaryBg }} />
    //         <div className='login-body'>
    //             <div className='sign-up-page-middle-section'>
    //                 <h2 className='sign-up-heading' style={{ color: customTheme[ourTheme].primaryText }}>Create your account.</h2>
    //                 <div className='sign-up-subheading-div'>
    //                     <p className='sign-up-subheading' style={{ color: customTheme[ourTheme].primaryText }}>Signing up for YOGO POS is easy.</p>
    //                     {/* <p className='sign-up-subheading' style={{ color: customTheme[ourTheme].primaryText }}>Transparent Pricing & No Contracts</p> */}
    //                 </div>
    //                 <div className='flex flex-col gap-5 mt-5'>
    //                     <input placeholder='Enter your email' style={{ color: "black" }} className='sign-up-input-field' value={form.email} onChange={(e) => onChange("email", e.target.value)} />
    //                     <input placeholder='Create a password' style={{ color: "black" }} type="password" className='sign-up-input-field' value={form.password} onChange={(e) => onChange("password", e.target.value)} />
    //                     <div className='flex flex-col gap-5'>
    //                         <div className='flex flex-row align-middle'>
    //                             <CustomCheckbox onChange={(e: any) => onChange("checked", e.target.checked)} />
    //                             <p className='sign-in-subheading' style={{ color: customTheme[ourTheme].primaryText }}>I agree to YOGO POS's<Link href={TermsLink} className='sign-up-link'>Terms & Conditions</Link> and <Link href={PrivacyLink} className='sign-up-link'>Privacy Policy</Link>
    //                                 {/* , and <Link href={ConsentLink} className='sign-up-link'>E Sign Consent</Link> */}
    //                                 .</p>
    //                         </div>
    //                         {/* captcha */}
    //                         {/* <div className='flex flex-col'>
    //                         <p className='sign-in-subheading' style={{ color: customTheme[ourTheme].primaryText }}>This site is protected by reCAPTCHA Enterprise and the Google<Link href={PrivacyLink} className='sign-up-link'>Privacy</Link></p>
    //                         <p className='sign-in-subheading' style={{ color: customTheme[ourTheme].primaryText }}>
    //                             <Link href={PrivacyLink} className='sign-up-link'>Policy </Link>
    //                             and<Link href={TermsLink} className='sign-up-link'> Terms of Service</Link> apply. </p>
    //                     </div> */}

    //                     </div>
    //                     {/* I agree to Square's Terms, Privacy Policy, and E-Sign Consent.
    //                 This site is protected by reCAPTCHA Enterprise and the Google Privacy Policy and Terms of Service apply. */}

    //                 </div>

    //                 <button className='sign-up-continue-button mt-2 text-white '
    //                     onClick={() => dispatch(registerThunk(form))}
    //                 >Sign Up</button>
    //                 <p className='sign-in-subheading' style={{ color: customTheme[ourTheme].primaryText }}>Already have a YOGO POS account? <Link href={"/login"} className='sign-up-link'>Sign in</Link></p>

    //             </div>
    //         </div>
    //         {/* <div className='sign-up-page-footer'>
    //         <div className='language' style={{ color: customTheme[ourTheme].primaryText }}> English </div>
    //         <ThemeChangeButton
    //             ourTheme={ourTheme}
    //             setOurTheme={setOurTheme}
    //         />
    //     </div> */}
    //     </div>
    // </>

}

export default SignUpPage
