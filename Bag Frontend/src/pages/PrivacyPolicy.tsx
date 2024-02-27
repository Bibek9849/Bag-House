import React from 'react';
import "../assets/css/PrivacyPolicy.css";
import {Link} from "react-router-dom";
const PrivacyPolicy: React.FC = () => {
    return (
        <div className={"pp-container"}>
            <div className={"pp-header"}>

                <div className={"pp-logo"}>
                    <a href="/dashboard"> {/* Replace "/dashboard" with the actual URL of your dashboard page */}
                        <img
                            width={100}
                            src={"images/logo.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"pp-btn_before"}>
                    <button>Brands</button>
                    <button>Categories</button>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                </div>

                <div className={"pp-searchbar"}>
                <input type={"text"} placeholder={"Search Product"} />
                </div>
                <div className={"pp-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className={"pp-btn-wrapper"}>
                    <button><i className="fa-solid fa-cart-shopping cart-icon"></i>Cart</button>
                    <Link to={"/wishlist"}><button><i className="fa-regular fa-heart"></i>Wishlist</button></Link>
                    <Link to="/Myaccount"><button>My Account</button></Link>
                    <Link to="/"><button>Sign Out</button></Link>


                </div>


            </div>
            <div className={"pp-about-us-body"}>


                <h2>Data security and privacy policy</h2>
                <p>LugaHub Pvt. Ltd. (“LugaHub / We”) is committed to protecting data and privacy of individuals (“you”) visiting and using LugaHub's website and platform. LugaHub does not require visitors to give us personal information while browsing our platform, and, we shall not collect your personal information beyond the automatically collected data specified below, unless you specifically and knowingly choose to provide such information to us. However, LugaHub shall require you to provide certain personal information in order to use the services of LugaHub’s platform. LugaHub shall treat the privacy of such information with utmost importance.</p>
                <h2>Personally identifiable information</h2>
                <p>LugaHub shall not collect personal information without your consent. Submitting your personal information is voluntary and by doing so, LugaHub acquires the right to use the information for the specific stated purpose. Incomplete information may result in LuaHub’s inability to provide you with the service you desire. If you should choose to provide us with the personal information on the platform, LugaHub shall use that information to provide the service you request with the best recommendation available.</p>

                <h2>Monitoring of data/communications</h2>
                <p>LugaHub reserves the right to monitor all internet communications including web and email traffic into and out of its domains for the purpose of maintaining security of its systems, record transactions or to prevent and detect crime or unauthorized activities. By using this site, you agree to security monitoring and auditing.</p>
                <h2>Security(protection of data/information)</h2>
                <p>By using our platform, you agree to security monitoring and auditing. LugaHub shall employ programs to monitor network traffic to identify unauthorized attempts to change information or cause damage. Such unauthorized attempts are subject to prosecution under Electronic Transaction Act, 2008. LugaHub monitors the frequency of requests for lugahub.com content to ensure that automated searches do not impact the ability of others to access lugahub.com content. LugaHub reserves the right to block IP addresses that submit excessive requests. LugaHub is committed to maintain security of our platform and protecting sensitive information from unauthorized disclosure. However, there may be certain links to other websites owned and operated by third parties. Your activity in those sites shall be governed by their security and privacy policy. LugaHub shall not be able to control, moderate or endorse or be responsible for such privacy and security practices of third parties or affiliates. We recommend that you review their privacy policies before using them.</p>


            </div>




            <div className={"pp-footer"}>
                <div className={"pp-get-help"}>
                    <h1>GET HELP</h1>
                    <Link to="/Customercare"><button>Customer Care</button></Link>
                    <Link to="/Payment"><button>Payment Options</button></Link>
                    <Link to="/returnandrefundpolicy"><button>Return and Refund Policy</button></Link>
                    <Link to="/PrivacyPolicy"><button>Privacy Policy</button></Link>
                    <Link to="/Termsandcondition"><button>Terms and Conditions</button></Link>
                    <span>@2023 Lugahub Pvt. Ltd. All Rights Reserved</span>

                </div>
                <div className={"pp-about-us"}>
                    <h1>LUGAHUB</h1>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Careers"><button>Careers</button></Link>



                </div>
                <div className={"pp-logos"}>
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

export default PrivacyPolicy;
