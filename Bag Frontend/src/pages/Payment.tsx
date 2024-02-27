import React from 'react';
import "../assets/css/Payment.css";
import {Link} from "react-router-dom";
const Payment: React.FC = () => {
    return (
        <div className={"py-container"}>
            <div className={"py-header"}>

                <div className={"py-logo"}>
                    <a href="/dashboard"> {/* Replace "/dashboard" with the actual URL of your dashboard page */}
                        <img
                            width={100}
                            src={"images/logo.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"py-btn_before"}>
                    <button>Brands</button>
                    <button>Categories</button>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                </div>

                <div className={"py-searchbar"}>
                <input type={"text"} placeholder={"Search Product"} />
                </div>
                <div className={"py-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className={"py-btn-wrapper"}>
                    <button><i className="fa-solid fa-cart-shopping cart-icon"></i>Cart</button>
                    <Link to={"/wishlist"}><button><i className="fa-regular fa-heart"></i>Wishlist</button></Link>
                    <Link to="/Myaccount"><button>My Account</button></Link>
                    <Link to="/"><button>Sign Out</button></Link>


                </div>


            </div>
            <div className={"py-about-us-body"}>
                <h1>PAYMENT METHOD</h1>

                <h1>Payment Method:</h1>
                <h1>1. How do I pay for a LugaHub purchase?</h1>
                <p>LugaHub offers you two payment methods. One is through online by the use of Khalti wallet and another is cash on delivery. </p>
                <h1>2. What is Cash on Delivery?</h1>
                <p>If you are not comfortable making an online payment on LugaHub.com, you can do Cash on Delivery (C-o-D) payment method instead. With C-o-D you can pay in cash at the time of actual delivery of the product at your doorstep, without requiring you to make any advance payment online. Foreign currency cannot be used to make a C-o-D payment. Only Nepali Rupees accepted. *We do not accept Cheque in Cash on Delivery</p>

                <h1>3.How do I pay through Khalti?</h1>
                <p>The service -khalti.com — will provide easy access to Nepalis for paying utilities’ bills, shopping for mobile recharge cards and household items. Simply create an Khalti account and Register your bank account.
                    When you purchase product from LugaHub and during checkout click on Khalti button.
                    Log into Khalti and speed through checkout securely with just an email and password.
                    To know more about Khalti you can go to this link : https://khalti.com</p>



            </div>




            <div className={"py-footer"}>
                <div className={"py-get-help"}>
                    <h1>GET HELP</h1>
                    <Link to="/Customercare"><button>Customer Care</button></Link>
                    <Link to="/Payment"><button>Payment Options</button></Link>
                    <Link to="/returnandrefundpolicy"><button>Return and Refund Policy</button></Link>
                    <Link to="/PrivacyPolicy"><button>Privacy Policy</button></Link>
                    <Link to="/Termsandcondition"><button>Terms and Conditions</button></Link>
                    <span>@2023 Lugahub Pvt. Ltd. All Rights Reserved</span>


                </div>
                <div className={"py-about-us"}>
                    <h1>LUGAHUB</h1>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Careers"><button>Careers</button></Link>





                </div>
                <div className={"py-logos"}>
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

export default Payment;
