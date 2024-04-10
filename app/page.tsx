"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";





export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
       
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/home");
        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally{
        setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            
            {/* 
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
                onClick={onLogin}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login here</button>
                <Link href="/signup">Visit Signup page</Link> */}
            <section className="bg">
                <div className="we">
                    <h1 className="text-center text-gray-600">{loading ? "Processing" : "LOGIN FORM"}</h1>
                    <hr />
                    <form action="#">

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
                        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                            id="password"
                            type="password"
                            value={user.password}
                            onChange={(e) => setUser({...user, password: e.target.value})}
                            placeholder="Password" 
                            required
                            />
                            <button onClick={onLogin}>
                                <Link 
                                    href="/home" 
                                    className="good1 p-2 bg-gray-500 hover:bg-gray-600 text-white border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-center">
                                    LOGIN HERE
                                </Link>
                            </button><br />
                            
                        <Link href="/signup">Visit Signup page</Link>
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