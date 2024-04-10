"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";




export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/signup", user);
            console.log("Signup success", response.data);
            router.push("/");
            
        } catch (error:any) {
            console.log("Signup failed", error.message);
            
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


    return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        {/* <h1>{loading ? "Processing" : "Signup"}</h1>
        <hr />
        <label htmlFor="username">username</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"
            />
        <label htmlFor="email">email</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
        <label htmlFor="password">password</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button
            onClick={onSignup}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{buttonDisabled ? "No signup" : "Signup"}</button>
            <Link href="/login">Visit login page</Link> */}
            <section className="bg">
                <div className="we">
                    <h1 className="text-center text-gray-600">{loading ? "Processing" : "SIGNUP FORM"}</h1>
                    <hr />
                    <form action="#">

                        <div className="good flex flex-col">
                            <input 
                                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-gray-600"
                                    id="username"
                                    type="text"
                                    value={user.username}
                                    onChange={(e) => setUser({...user, username: e.target.value})}
                                    placeholder="Username"
                                    />
                        </div>

                        <div className="good flex flex-col">
                        <input 
                            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-gray-600"
                                id="email"
                                type="text"
                                value={user.email}
                                onChange={(e) => setUser({...user, email: e.target.value})}
                                placeholder="Email" 
                                required
                                />
                        </div>

                        <div className="good flex flex-col">
                        <input 
                        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-gray-600"
                            id="password"
                            type="password"
                            value={user.password}
                            onChange={(e) => setUser({...user, password: e.target.value})}
                            placeholder="Password"
                            required
                            />
                            {/* <Link href="/" 
                                className="good1 p-2 bg-gray-500 hover:bg-gray-600 text-white border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-center">
                                <button
                                onClick={onSignup}
                                >SIGNUP HERE</button>
                            </Link> */}
                            
                            <button>
                                <Link 
                                    href="/" 
                                    className="good1 p-2 bg-gray-500 hover:bg-gray-600 text-white border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-center">
                                    SIGNUP HERE
                                </Link>
                            </button><br />
                            
                            
                        <Link href="/">Visit Login page</Link>
                        </div><br />

                        <input type="checkbox" /><span> Remeber Me.</span>
                        

                    </form>
                    <div className="link">
                        <a href="#">Forget password?</a>
                    </div>

                </div>


            </section>
        </div>
    )

}