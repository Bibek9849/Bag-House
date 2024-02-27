import React from 'react';
import "../assets/css/Careers.css";
import {Link} from "react-router-dom";

const Careers: React.FC = () => {
    return (
        <div className={"cr-container"}>
            <div className={"cr-header"}>

                <div className={"cr-logo"}>
                    <a href="/dashboard"> {/* Replace "/dashboard" with the actual URL of your dashboard page */}
                        <img
                            width={100}
                            src={"images/logo.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"cr-btn_before"}>
                    <button>Brands</button>
                    <button>Categories</button>
                    <Link to="/Contactus">
                        <button>Contact Us</button>
                    </Link>
                    <Link to="/Aboutus">
                        <button>About Us</button>
                    </Link>
                </div>

                <div className={"cr-searchbar"}>
                <input type={"text"} placeholder={"Search Product"} />
                </div>
                <div className={"cr-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className={"cr-btn-wrapper"}>
                    <button><i className="fa-solid fa-cart-shopping cart-icon"></i>Cart</button>
                    <Link to={"/wishlist"}><button><i className="fa-regular fa-heart"></i>Wishlist</button></Link>
                    <Link to="/MyAccount"><button>My Account</button></Link>
                    <Link to="/">
                        <button onClick={()=>{
                            localStorage.clear();
                            window.location.href="/login"
                        }}>Sign Out</button>
                    </Link>



                </div>


            </div>
            <div className={"cr-body"}>
                <h1>Careers</h1>

                <h2>100% ORIGINAL PRODUCTS:</h2>
                <p>When you purchase from LugaHub.com you can be assured that you are purchasing 100% genuine and authentic products. We acquire products from manufacturers through proper channels and proper quality checks. Questions are raised every day about fake products, counterfeit merchandise, and imitations of original branded products. It’s An unfortunate fact that there are other stores and websites who are not selling authentic product – and sometimes they don’t even realize it themselves because they are not purchasing their products directly from the manufacturers or authorized distributer. Be safe on the Internet and only shop with reputable retailers like LugaHub.com – trust your instincts and ask questions.</p>
                <h2>TIMELY AND FREE DELIVERY:</h2>
                <p>Timely delivery has always been a priority at LUGAHUB. Order today by 9am and it is delivered the same evening in Kathmandu. Also get free delivery for order above Rs.500 in Kathmandu.</p>
                <h2>FREE AND EASY RETURNS:</h2>
                <p>Easy returns for items shopped online on LugaHub.com. Most items can be returned for a refund or replacement within a 7-day return window. Please check our return policies.</p>
                <h2>PRICE MATCH GUARANTEE:</h2>
                <p>Get the best deal with Price Match and Price Guarantee. Shop with confidence, shopping online on LugaHub.com guarantees that you get any product at best price offered in Nepal.</p>
            </div>




            <div className={"cr-footer"}>
                <div className={"cr-get-help"}>
                    <h1>GET HELP</h1>
                    <Link to="/Customercare"><button>Customer Care</button></Link>
                    <Link to="/Payment"><button>Payment Options</button></Link>
                    <Link to="/returnandrefundpolicy"><button>Return and Refund Policy</button></Link>
                    <Link to="/PrivacyPolicy"><button>Privacy Policy</button></Link>
                    <Link to="/Termsandcondition"><button>Terms and Conditions</button></Link>
                    <span>@2023 Lugahub Pvt. Ltd. All Rights Reserved</span>

                </div>
                <div className={"cr-about-us"}>
                    <h1>LUGAHUB</h1>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Careers"><button>Careers</button></Link>


                </div>
                <div className={"cr-logos"}>
                    <span>Connect with us:</span>
                    <a href="https://www.facebook.com/profile.php?id=61555012223662&is_tour_dismissed=true"
                       target="_blank" rel="noopener noreferrer">
                        <img
                            width={43}
                            src={"images/fb.png"}
                            alt="Facebook"
                        />
                    </a>

                    <a href="https://www.instagram.com/luga.hub69/"
                       target="_blank" rel="noopener noreferrer">
                        <img
                            width={43}
                            src={"images/insta.png"}
                            alt="Facebook"
                        />
                    </a>
                    <a href="https://www.threads.net/@luga.hub69"
                       target="_blank" rel="noopener noreferrer">
                        <img
                            width={43}
                            src={"images/thread.png"}
                            alt="X"
                        />
                    </a>


                </div>

            </div>
        </div>

    );
};

export default Careers;
