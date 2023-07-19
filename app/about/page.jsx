import Image from "next/image";
import Link from "next/link";
import team1 from '@/public/assets/team1.jpg';
import team2 from '@/public/assets/team2.jpg';
import team3 from '@/public/assets/team3.jpg';

export default function AboutPage() {
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
                            <li className="active"><Link href="/about">About</Link></li>
                            <li className=""><Link href="/services">Services</Link></li>
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
                            <li className="breadcrumb-item" aria-current="page">About Us</li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Testimonials */}
            <section className="clients">
                <div className="layer pt-5">
                    <div className="container py-lg-5">
                        <h2 className="heading mb-sm-5 mb-4">Our <strong> customers feedback</strong></h2>
                        <div className="row pb-5">
                            <div className="col-lg-4 col-md-6 pl-sm-0 mb-3">
                                <div className="col- client-grid">
                                    <div className="c-left">
                                        <Image 
                                            src={team1} 
                                            alt="image" 
                                            className="img-fluid" />
                                        <div className="info">
                                            <h6>Johnson</h6>
                                            <p>- Customer</p>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                        <p className="mt-2">Consequat sapien ute leo cursus sed rhoncus. Nullam dui mi, vulputate ac metus semper. Nullam dui mi.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 pl-sm-0 mb-3">
                                <div className="col- client-grid">
                                    <div className="c-left">
                                        <Image 
                                            src={team2} 
                                            alt="image" 
                                            className="img-fluid" />
                                        <div className="info">
                                            <h6>Johnson</h6>
                                            <p>- Customer</p>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                        
                                        <p className="mt-2">Consequat sapien ute leo cursus sed rhoncus. Nullam dui mi, vulputate ac metus semper. Nullam dui mi.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 pl-sm-0 mb-3">
                                <div className="col- client-grid">
                                    <div className="c-left">
                                        <Image 
                                            src={team3} 
                                            alt="image" 
                                            className="img-fluid" />
                                        <div className="info">
                                            <h6>Johnson</h6>
                                            <p>- Customer</p>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                        <p className="mt-2">Consequat sapien ute leo cursus sed rhoncus. Nullam dui mi, vulputate ac metus semper. Nullam dui mi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <div className="subscribe py-5">
                <div className="container py-sm-4">
                    <h3 className="heading mb-md-5 mb-4">subscribe for <strong> news and updates</strong></h3>
                    <div className="row">
                        <div className="col-lg-6 w3-w3pvt-subscribe">
                            <form action="#" method="post">
                                <input type="email" name="email" placeholder="Enter your email here" required="" />
                                <button className="btn1"><span className="fa fa-paper-plane" aria-hidden="true"></span></button>
                            </form>
                            <p>We'll never share your email with anyone else.</p>
                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-4">
                            <h4>Sign up for our Newsletter, and get the latest banking & financial related news and updates.</h4>
                        </div>
                    </div>
                </div>
            </div>

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
                <Link href="/about" className="move-top"> 
                    <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span>
                </Link>
            </div>
        </div>
    )
}