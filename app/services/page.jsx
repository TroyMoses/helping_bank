import Image from "next/image";
import Link from "next/link";
import a1 from '@/public/assets/a1.png';
import a2 from '@/public/assets/a2.png';
import a3 from '@/public/assets/a3.png';
import serv from '@/public/assets/serv.jpg';
import banner1 from '@/public/assets/banner1.jpg';
import banner2 from '@/public/assets/banner2.jpg';

export default function ServicesPage() {
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
                            <li className="active"><Link href="/services">Services</Link></li>
                            <li className=""><Link href="/contact">Contact</Link></li>
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
                            <li className="breadcrumb-item" aria-current="page">Services</li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Services */}
            <section className="services py-5">
                <div className="container py-md-5 py-sm-3">
                    <h3 className="heading mb-5">Services <strong> we provide </strong></h3>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-9 mt-lg-5 grid">
                                    <h3>Mobile Banking Apps</h3>
                                    <p className="mt-2"> Vestibulum ante ipsum primis in faucibus orci luctus ipsum.</p>
                                </div>
                                <div className="col-3 mt-lg-5 icon text-lg-center text-left grid1">
                                    <Image 
                                        src={a2} 
                                        alt="" 
                                        className="img-fluid max-w-full h-auto" />
                                </div>
                                
                                <div className="col-9 mt-sm-5 mt-4 grid">
                                    <h3>Personal Profile</h3>
                                    <p className="mt-2"> Vestibulum ante ipsum primis in faucibus orci luctus ipsum.</p>
                                </div>
                                <div className="col-3 mt-sm-5 mt-4 icon text-lg-center text-left grid4">
                                    <Image 
                                        src={a3} 
                                        alt="" 
                                        className="img-fluid max-w-full h-auto" />
                                </div>
                                
                                <div className="col-9 mt-sm-5 mt-4 grid">
                                    <h3>Cheque Transfer</h3>
                                    <p className="mt-2"> Vestibulum ante ipsum primis in faucibus orci luctus ipsum.</p>
                                </div>
                                <div className="col-3 mt-sm-5 mt-4 icon text-lg-center text-left grid5">
                                    <Image 
                                        src={a1} 
                                        alt="" 
                                        className="img-fluid" />
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-4 text-center my-lg-0 my-4">
                            <Image 
                                src={serv} 
                                alt="" 
                                className="img-fluid max-w-full h-auto" />
                        </div>
                        <div className="col-lg-4 text-right">
                            <div className="row">
                                <div className="col-3 mt-sm-5 mt-4 icon text-lg-center text-right grid6">
                                    <Image 
                                        src={a2}
                                        alt="" 
                                        className="img-fluid max-w-full h-auto" />
                                </div>
                                <div className="col-9 mt-sm-5 mt-4 grid">
                                    <h3>Credit, Debit Cards</h3>
                                    <p className="mt-2"> Vestibulum ante ipsum primis in faucibus orci luctus ipsum.</p>
                                </div>
                                
                                <div className="col-3 mt-sm-5 mt-4 icon text-lg-center text-right grid7">
                                    <Image 
                                        src={a3}
                                        alt="" 
                                        className="img-fluid max-w-full h-auto" />
                                </div>
                                <div className="col-9 mt-sm-5 mt-4 grid">
                                    <h3>Savings Account</h3>
                                    <p className="mt-2"> Vestibulum ante ipsum primis in faucibus orci luctus ipsum.</p>
                                </div>
                                
                                <div className="col-3 mt-sm-5 mt-4 icon text-lg-center text-right grid3">
                                    <Image 
                                        src={a1} 
                                        alt="" 
                                        className="img-fluid max-w-full h-auto" />
                                </div>
                                <div className="col-9 mt-sm-5 mt-4 grid">
                                    <h3>24/7 Online Support</h3>
                                    <p className="mt-2"> Vestibulum ante ipsum primis in faucibus orci luctus ipsum.</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other services  */}
            <section className="other_services pt-5">
                <div className="container py-md-5 py-3">
                    <h2 className="heading mb-5">A wide range<strong> of Banking services </strong></h2>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="grid">
                                <Image 
                                    src={banner2} 
                                    alt="" 
                                    className="img-fluid max-w-full h-auto" />
                                <div className="info p-4">
                                    <h4 className="">Personal Banking</h4>
                                    <p className="my-3">Onec consequat sapien ut amet leo cursus rhoncus. Nullam dui mi....</p>
                                    <a href="#">Read More </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="grid">
                                <Image 
                                    src={banner1} 
                                    alt="" 
                                    className="img-fluid max-w-full h-auto" />
                                <div className="info p-4">
                                    <h4 className="">Financial Services</h4>
                                    <p className="my-3">Onec consequat sapien ut amet leo cursus rhoncus. Nullam dui mi....</p>
                                    <a href="#">Read More </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="grid">
                                <Image 
                                    src={banner2} 
                                    alt="" 
                                    className="img-fluid max-w-full h-auto" />
                                <div className="info p-4">
                                    <h4 className="">Loan Management</h4>
                                    <p className="my-3">Onec consequat sapien ut amet leo cursus rhoncus. Nullam dui mi....</p>
                                    <a href="#">Read More </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer py-5">
                <div className="container pt-lg-4">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 footer-top">
                            <h4 className="mb-4 w3f_title">Contacts</h4>
                            <ul className="list-w3">					
                                <li className="my-2"><span className="fa mr-1 fa-phone"></span>+256-703-713-641</li>
                                <li className="my-2"><span className="fa mr-1 fa-phone"></span>+256-703-713-641</li>
                    
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-6 footer-top">
                            <h4 className="mb-4 w3f_title">Email Address</h4>
                            <ul className="list-w3">
                                
                                <li className=""><span className="fa mr-1 fa-envelope"></span><a href="mailto:info@example.com">Kusemvulavuvu@gmail.com</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-6 footer-top">
                            <h4 className="mb-4 w3f_title">Services</h4>
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
                <Link href="/services" className="move-top"> 
                    <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span>
                </Link>
            </div>
        </div>
    )
}