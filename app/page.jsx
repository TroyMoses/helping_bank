import Link from "next/link";

export default function HomePage() {

    const emailAddress = 'helpingbank7@gmail.com'
    
    return (
        <div className="h-screen w-screen">
            <header>
                <div className="container">
                    <nav className="py-3 flex text-lg">
                        <div id="logo">
				            <h1> <Link href="/"><span className="fa fa-university "></span> Helping Bank </Link></h1>
			            </div>
			            <label htmlFor="drop" className="toggle"><span className="fa fa-bars"></span></label>
                        <input type="checkbox" id="drop" />
                        <ul className="menu ml-auto mt-1">
                            <li className="active"><Link href="/">Home</Link></li>
                            <li className=""><Link href="/about">About</Link></li>
                            <li className=""><Link href="/services">Services</Link></li>
                            <li className=""><Link href="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Banner */}
            <div class="banner" id="home">
                <div className="layer">
                    <div className="container">
                        <div className="banner-text-w3pvt">
                            <div className="csslider infinity" id="slider1">
                                <input type="radio" name="slides" checked="checked" id="slides_1" />
                                <input type="radio" name="slides" id="slides_2" />
                                <ul className="banner_slide_bg">
                                    <li>
                                        <div className="w3ls_banner_txt">
                                            <h2 className="b-w3ltxt text-capitalize mt-md-4">Quick <span>Loans.</span> </h2>
                                            <p className="w3ls_pvt-title my-3">
                                                Quick Loan Service Is A Great Way To Raise Short-Term Loans 
                                                At A Very Reasonable Rate, You Retain Ownership Of The Deposit 
                                                Goods And They Are Returned To You Once You Have Repaid The Loan 
                                                And Interest At The Agreed Time. All Items Brought To The Store 
                                                Are Insured And Well Kept.
                                            </p>
                                            <Link href="/services" className="btn btn-banner my-3 mr-2">Read More</Link>
                                            <Link href="/contact" className="btn btn-banner1 my-3">Get Started</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="w3ls_banner_txt">
                                            <h3 className="b-w3ltxt text-capitalize mt-md-4">Cash <span>Management.</span> </h3>                                            
                                            <p className="w3ls_pvt-title my-3">
                                                If There's Need For Some Urgent Cash, Our Quick Loan Service 
                                                Could Be Just What You Need. We Will Lend You Cash To Fulfil 
                                                Your Obligation And Secure The Loan Against An Item Of Value 
                                                For A Week To One Month.
                                            </p>
                                            <Link href="/services" className="btn btn-banner my-3 mr-2">Read More</Link>
                                            <Link href="/contact" className="btn btn-banner1 my-3">Get Started</Link>
                                        </div>
                                    </li>
                                    
                                </ul>
                                <div className="navigation">
                                    <div>
                                        <label htmlFor="slides_1"></label>
                                        <label htmlFor="slides_2"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About */}
            <section className="banner-bottom pt-5">
                <div className="container">
                    <h3 className="heading mb-sm-5 mb-4"> <strong> How a loan works</strong></h3>
                    <p> We want to help you acess the loan you need, whether it's for grand plans little or projects, </p>
                    <p>A loan let you borrow  money for set period of time. In return, the lender charges interest. </p>
                    <p>The lender on our panel only offer fixed rated loan, it's means that the rate you're charged</p>
                    <p> will not change during the fixed term. <br/><br/>At the end of the fixed term, you'll have paid back the money you borrow,</p>
                    <p> plus the interest charged by the lender. </p>
                    <p> <br/><br/> </p>		
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
                                <div className="text-gray-400">
                                    <a href={`mailto:${emailAddress}`}>helpingbank7@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 footer-top">
                            <h4 className="mb-1 w3f_title">Services</h4>
                            <ul className="list-w3">
                                <li><Link href="/services">Business Loans</Link></li>
                                <li className="my-2"><Link href="/services">Emergency Loans</Link></li>
                                <li className="my-2"><Link href="/services">Individual Loans</Link></li>
                                <li className=""><Link href="/services">Quick Simple Loans</Link></li>
                                <li className=""><Link href="/services">Tuition Fees </Link></li>
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
                <Link href="/" className="move-top"> 
                    <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span>
                </Link>
            </div>
        </div>
    )
}