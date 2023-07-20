import Image from "next/image";
import Link from "next/link";
import team1 from '@/public/assets/team1.jpg';
import team2 from '@/public/assets/team2.jpg';
import team3 from '@/public/assets/team3.jpg';

export default function ContactPage() {
    return (
        <div className="h-screen w-screen">
            <header>
                <div className="container">
                    <nav className="py-3 flex text-lg">
                        <div id="logo">
				            <h1> <a href="index.html"><span className="fa fa-university "></span> Helping Bank </a></h1>
			            </div>
			            <label htmlFor="drop" className="toggle"><span className="fa fa-bars"></span></label>
                        <input type="checkbox" id="drop" />
                        <ul className="menu ml-auto mt-1">
                            <li className=""><Link href="/">Home</Link></li>
                            <li className=""><Link href="/about">About</Link></li>
                            <li className=""><Link href="/services">Services</Link></li>
                            <li className="active"><Link href="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Inner banner */}
            <section className="inner-banner" id="home">
                <div className="inner-layer">
                    <div className="container">
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="breadcrumb-w3pvt">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Contact section */}
            <section className="contact py-5">
                <div className="container py-lg-5">
                    <h2 className="heading mb-sm-5 mb-4">Get in <strong> touch with us </strong></h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 contact-address">
                            <h4 className="mb-4 w3f_title">Contact Address</h4>
                            <ul className="list-w3">
                                <li className="my-3"><span className="fa mr-1 fa-phone"></span>+256-703-713-641</li>
                                <li className="my-3"><span className="fa mr-1 fa-phone"></span>+256-703-713-641</li>
                                <li className=""><span className="fa mr-1 fa-envelope"></span><a href="mailto:info@example.com">Kusemvulavuvu@gmail.com</a></li>
                            </ul>
                            <h4 className="mt-sm-5 mt-4 mb-3 w3f_title">Follow Us</h4>
                            <p>For more information you can follow us on our social media page.</p>
                            <ul className="list-social">
                                <li><a href="#" className="mr-3 facebook"><span className="fa fa-facebook"></span></a></li>
                                <li className="mr-3"><a href="#" className="twitter"><span className="fa fa-twitter"></span></a></li>
                                <li className="mr-3"><a href="#" className="google"><span className="fa fa-google-plus"></span></a></li>
                                <li className=""><a href="#" className="instagram"><span className="fa fa-instagram"></span></a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 contact-form mt-md-0 mt-sm-5 mt-4">
                            <h4 className="mb-4 w3f_title">Contact Form</h4>
                            <form name="contactform" id="contactform" method="post" action="#" onsubmit="return(validate());" novalidate="novalidate">
                                    <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" />
                                    </div>
                                    <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" id="name" placeholder="Enter Email" name="email" />
                                    </div>
                                    <div className="form-group">
                                    <label>How can we help?</label>
                                    <textarea name="issues" className="form-control" id="iq" placeholder="Enter Your Message Here"></textarea>
                                    </div>				
                                    <button type="submit" className="btn btn-default">Submit</button>
                                </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-5 pl-10">
                <div className="container pt-lg-4">
                    <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:justify-between">
                        <div className="col-lg-3 col-sm-6 footer-top">
                            <h4 className=" w3f_title">Contacts</h4>
                            <ul className="list-w3">					
                                <li className="my-2"><span className="fa mr-1 fa-phone"></span>+256-703-713-641</li>
                                <li className="my-2"><span className="fa mr-1 fa-phone"></span>+256-703-713-641</li>
                    
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-6 footer-top flex flex-col">
                            <h4 className="mb-1 w3f_title">Email Address</h4>
                            <div className="flex">
                                <div>                                
                                    <span className="fa mr-1 fa-envelope text-gray-500"></span>
                                </div>
                                <div>
                                    <a href="mailto:info@example.com">Kusemvulavuvu@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 footer-top">
                            <h4 className="mb-1 w3f_title">Services</h4>
                            <ul className="list-w3">
                                <li><a href="services.html">Business Loans</a></li>
                                <li className="my-2"><a href="services.html">Emergency Loans</a></li>
                                <li className="my-2"><a href="services.html">Individual Loans</a></li>
                                <li className=""><a href="services.html">Quick Simple Loans</a></li>
                                <li className=""><a href="services.html">Tuition Fees </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Copyright */}
            <section className="copy-right py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <p className="">© 2023 Bank Card All rights reserved | Design by Ann Chance
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Move to top */}
            <div className="move-top text-right">
                <Link href="/contact" className="move-top"> 
                    <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span>
                </Link>
            </div>
        </div>
    )
}