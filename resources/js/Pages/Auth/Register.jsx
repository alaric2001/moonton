import React, { useEffect } from 'react';
import Label from '@/Components/Label'
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        // console.log(data);
        post(route('register'));
    };

    return (
        <>
        <Head title="Sign Up"/>
        <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
        <div className="fixed top-[-50px] hidden lg:block">
            <img src="/images/signup-image.png"
                className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt=""/>
        </div>
        <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
            <div>
                <img src="/images/moonton-white.svg" alt=""/>
                <div className="my-[70px]">
                    <div className="font-semibold text-[26px] mb-3">
                        Sign Up
                    </div>
                    <p className="text-base text-[#767676] leading-7">
                        Explore our new movies and get <br/>
                        the better insight for your life
                    </p>
                    <ValidationErrors errors={errors} />
                </div>
                <form className="w-[370px]" onSubmit={submit}>
                    <div className="flex flex-col gap-6">
                        <div>
                            {/* <label className="text-base block mb-2">Full Name</label> */}
                            <Label
                                forInput='name'
                                value='Full Name'
                                
                            />
                            {/* <input type="text" name="fullname"
                                className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                placeholder="Your fullname..." value="Angga React" /> */}
                            <Input
                                type="text" 
                                // className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                value={data.name}
                                name="name"
                                placeholder="Your fullname..." 
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                            />  
                        </div>
                        <div>
                            {/* <label className="text-base block mb-2">Email Address</label> */}
                            <Label
                                forInput='email'
                                value='Email Address'
                            />
                            {/* <input type="email" name="email"
                                className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                placeholder="Your Email Address" value="anggaforreact@fb.com" /> */}
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email Address"
                                    value={data.email}
                                    handleChange={onHandleChange}
                                    required
                                />
                        </div>
                        <div>
                            {/* <label className="text-base block mb-2">Password</label> */}
                            <Label
                                forInput='password'
                                value='Password'
                            />
                            <Input 
                                type="password" name="password"
                                // className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                placeholder="Your Password" 
                                value={data.password}
                                handleChange={onHandleChange}
                                required
                            />
                        </div>
                        <div>
                            <Label
                                forInput='password'
                                value='Confirm Password'
                            />
                            <Input
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                placeholder="Your Password"
                                handleChange={onHandleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="grid space-y-[14px] mt-[30px]">
                        {/* <a href="/" className="rounded-2xl bg-alerange py-[13px] text-center">
                            <span className="text-base font-semibold">
                                Sign Up
                            </span>
                        </a> */}
                        {/* <a href="sign_in.html" className="rounded-2xl border border-white py-[13px] text-center">
                            <span className="text-base text-white">
                                Sign In to My Account
                            </span>
                        </a> */}
                            <Button processing={processing}>
                                <span className="text-base font-semibold">
                                    Sign Up
                                </span>
                            </Button>
                        
                        <Link href={route("login")}>
                            <Button type='submit' variant="light-outline">
                                <span className="text-base text-white">
                                    Sign In to My Account
                                </span>
                            </Button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
</div>
        </>


    )}