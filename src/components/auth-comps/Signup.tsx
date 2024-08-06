'use client'
import React, { useState } from 'react'
import { customThemeType } from '../../comp-constants/style.c'
import Image from 'next/image';
import YOCO_POS_LOGO from "../../assets/yogo-pos-logo.png"
import Link from 'next/link';
import "./style.sign-up.css";
import "./style.login.css"
import CustomCheckbox from '@/components/form-fields/CustomCheckbox';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from '@/features/login-redux/login.r';
import Loader from '@/components/loader/Loader';
import { useRouter } from 'next/navigation';
import CustomAntdSelect from '@/components/form-fields/CustomAntdSelect';
import CustomAntdPassword from '@/components/form-fields/CustomAntdInput';

const TermsLink = "/login";
const PrivacyLink = "/login";

const Signup = () => {

    const [country, setCountry] = useState("")

    const [form, setForm] = useState({
        email: "",
        password: "",
        checked: false,
        name: "new user",
        businessProfile: {
            "country": country
        }
    });
    const dispatch = useDispatch();
    const router = useRouter();

    const onChange = (name: any, value: any) => {
        setForm({ ...form, [name]: value })
    }
    const ourTheme = customThemeType.themeOne;
    const { loader } = useSelector((state: any) => state.loader);


    return (
        <>
            <div className='bg-[#f5f5f7] flex-col justify-center ' style={{ width: "100%", height: "100vh", overflow: "hidden" }}>

                <Loader isLoading={loader} />

                <div className="bg-white mb-5 ">
                    <Image className='login-logo-new' src={YOCO_POS_LOGO} alt="logo" />

                </div>
                <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className="w-[450px]  pb-[196.50px] flex-col justify-start items-center gap-[116.50px] inline-flex">
                        <div className="self-stretch h-[562px] flex-col justify-start items-start gap-8 inline-flex">
                            <div className="self-stretch h-[93px] flex-col justify-center items-start gap-3 flex">
                                <div className="text-center text-neutral-900 text-4xl font-semibold font-['Poppins'] leading-[54px]">Sign Up</div>
                                <div className="self-stretch text-[#5e5e5e] text-lg font-normal font-['Inter'] leading-[27px]">Let's create your account</div>
                            </div>
                            <div className="self-stretch h-[338px] flex-col justify-center items-start gap-5 flex">
                                <div className="email-input self-stretch   justify-start items-center gap-0.5 inline-flex">

                                    <input placeholder={"Email"} value={form.email} className="text-neutral-900 text-lg font-normal font-['Inter'] leading-[27px]"
                                        onChange={(e: any) => onChange("email", e.target.value)}
                                    />
                                </div>
                                <div className="email-input self-stretch   justify-start items-center gap-0.5 inline-flex">

                                    {/* <input type='password' placeholder={"Password"} value={form.password} className="text-neutral-900 text-lg font-normal font-['Inter'] leading-[27px]"
                                        onChange={(e: any) => onChange("password", e.target.value)}
                                    /> */}
                                    <CustomAntdPassword
                                        value={form.password}
                                        placeholder={"Password"}
                                        style={{ width: "450px", height: "3.5rem", backgroundColor: "#f5f5f7" }}
                                        onChange={(e: any) => onChange("password", e.target.value)}
                                    />
                                </div>
                                <div className="location-input-select">

                                    <CustomAntdSelect
                                        style={{ width: "450px", height: "3.5rem", background: "#f5f5f7" }}
                                        placeholder={"Location"}
                                        onChange={(val: any) => setCountry(val)}
                                        options={[{
                                            label: "Canada",
                                            value: "Canada"
                                        },
                                        {
                                            label: "America",
                                            value: "America"
                                        }
                                        ]}
                                    />
                                </div>

                                <div className='flex flex-row align-middle'>
                                    <CustomCheckbox onChange={(e: any) => onChange("checked", e.target.checked)} />
                                    <p className='sign-in-subheading' >I agree to Yogo's<Link href={TermsLink} className='sign-up-link'>Terms</Link>,<Link href={PrivacyLink} className='sign-up-link'>Privacy Policy</Link>
                                        {/* , and <Link href={ConsentLink} className='sign-up-link'>E Sign Consent</Link> */}
                                        .</p>
                                </div>

                                <div className="justify-start items-center gap-2.5 inline-flex">
                                    {/* <div className="w-6 h-6 relative" /> */}
                                    {/* <div className="text-neutral-900 text-lg font-normal font-['Inter'] leading-[27px]">Keep me logged in</div> */}
                                </div>
                                <button
                                    disabled={
                                        (!form.checked || !country || !form.email || !form.password || form.password.length < 8) ? true : false
                                    }
                                    onClick={() => dispatch(registerThunk({ form: { ...form, businessProfile: { country: country } }, router }))}
                                    className="self-stretch h-[55px] px-6 py-3.5 bg-[#357aff] rounded-xl flex-col justify-center items-center gap-[35px] flex">
                                    <span className="text-center text-white text-lg font-semibold font-['Poppins'] leading-[27px]">Sign Up</span>
                                </button>
                                {/* <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                                <div className="text-[#5e5e5e] text-base font-medium font-['Inter'] leading-normal">or</div>
                            </div>
                            <div className="self-stretch h-[54px] px-2 py-4 bg-white rounded-[10px] shadow border border-[#e9e9e9] justify-center items-center gap-2 inline-flex">
                                <div className="text-neutral-900 text-lg font-semibold font-['Inter'] leading-snug">Sign in with Google</div>
                                <div className="w-6 h-6 p-[3.50px] justify-center items-center flex">
                                    <div className="w-[17px] h-[17px] relative">
                                    </div>
                                </div>
                            </div> */}
                            </div>
                            <div>
                                <span className="text-neutral-900 text-lg font-normal font-['Inter'] leading-[27px]">Create your account? </span><Link href={"/login"} className="text-[#357aff] text-lg font-semibold font-['Poppins'] underline leading-[27px]">Sign In</Link>
                                <span className="text-[#357aff] text-lg font-semibold font-['Poppins'] leading-[27px]">.</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;
