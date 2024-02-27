import React from 'react';
import "../assets/css/ReturnandRefund.css";
import {Link} from "react-router-dom";
const ReturnandRefund: React.FC = () => {
    return (
        <div className={"rr-container"}>
            <div className={"rr-header"}>

                <div className={"rr-logo"}>
                    <a href="/dashboard"> {/* Replace "/dashboard" with the actual URL of your dashboard page */}
                        <img
                            width={100}
                            src={"images/logo.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"rr-btn_before"}>
                    <button>Brands</button>
                    <button>Categories</button>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                </div>

                <div className={"rr-searchbar"}>
                <input type={"text"} placeholder={"Search Product"} />
                </div>
                <div className={"rr-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className={"rr-btn-wrapper"}>
                    <button><i className="fa-solid fa-cart-shopping cart-icon"></i>Cart</button>
                    <Link to={"/wishlist"}><button><i className="fa-regular fa-heart"></i>Wishlist</button></Link>
                    <Link to="/Myaccount"><button>My Account</button></Link>
                    <Link to="/"><button>Sign Out</button></Link>


                </div>


            </div>
            <div className={"rr-body"}>


                <h2>Return and Refund policy</h2>
                <p>Returns are the provision by the sellers under different category where the option of return & refund is provided to you by the respective sellers. The return policy may not be the same for all the products under a different product category. The product which is under the warranty period will be redirected to the service center, return & refund policies will not be eligible for such products. You can refer to the product page for the applicable return policy. Valid reasons to return an item 1. If the Delivered Product is damaged/defective (physically damaged or broken) 2. If the Delivered Product is incorrect/incomplete (missing product or wrong product/ different from the product presented on website) 3. If the size of the fashion product doesn’t fit. (wrong/different size) 4. If the delivered product is no longer needed. (you have changed your mind about the purchase/ you do not like the product after opening the package)-eligible for selected products only. Please refer to the product page to check if the vendor accepts "change of mind" or not.</p>
                <h2>Return cycle and pickup period</h2>
                <p>The return request must be initiated within 7 days of product return cycle and for damaged/defective products the return request must be initiated within 3 days of receiving the product. After the return request is accepted, product is picked within 3 days after the return request is accepted for inside valley. For outside valley the period may extend to 7 days. After the item has been picked up LugaHub will quality check the product and based on the outcome will be processed for refund or notifying the customer on any issue encountered.</p>

                <h2>Refund</h2>
                <p>The refund will be processed after the product is picked and quality checked by the QC Team. The refund time depends on the payment method.</p>



            </div>




            <div className={"rr-footer"}>
                <div className={"rr-get-help"}>
                    <h1>GET HELP</h1>
                    <Link to="/Customercare"><button>Customer Care</button></Link>
                    <Link to="/Payment"><button>Payment Options</button></Link>
                    <Link to="/returnandrefundpolicy"><button>Return and Refund Policy</button></Link>
                    <Link to="/PrivacyPolicy"><button>Privacy Policy</button></Link>
                    <Link to="/Termsandcondition"><button>Terms and Conditions</button></Link>
                    <span>@2023 Lugahub Pvt. Ltd. All Rights Reserved</span>

                </div>
                <div className={"rr-about-us"}>
                    <h1>LUGAHUB</h1>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Careers"><button>Careers</button></Link>



                </div>
                <div className={"rr-logos"}>
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

export default ReturnandRefund;
