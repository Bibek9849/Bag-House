import React from 'react';
import "../assets/css/Termsandcondition.css";
import {Link} from "react-router-dom";
const Termsandcondition: React.FC = () => {
    return (
        <div className={"tc-container"}>
            <div className={"tc-header"}>

                <div className={"tc-logo"}>
                    <a href="/dashboard"> {/* Replace "/dashboard" with the actual URL of your dashboard page */}
                        <img
                            width={100}
                            src={"images/logo.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"tc-btn_before"}>
                    <button>Brands</button>
                    <button>Categories</button>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                </div>

                <div className={"tc-searchbar"}>
                <input type={"text"} placeholder={"Search Product"} />
                </div>
                <div className={"tc-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className={"tc-btn-wrapper"}>
                    <button><i className="fa-solid fa-cart-shopping cart-icon"></i>Cart</button>
                    <Link to={"/wishlist"}><button><i className="fa-regular fa-heart"></i>Wishlist</button></Link>
                    <Link to="/Myaccount"><button>My Account</button></Link>
                    <Link to="/"><button>Sign Out</button></Link>


                </div>


            </div>
            <div className={"tc-body"}>


                <h2>Terms and conditions</h2>
                <p>These terms and conditions ("Agreement") set forth the general terms and conditions of your use of the lugahub.com website ("Website") and any of the related products and services (collectively, "Services"). This Agreement is legally binding between you ("User, you, your") and LugaHub Private Limited (, "LugaHub, we, us"). By accessing and using the Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement and You accept and agree to these terms and conditions and the revisions henceforth. You also accept and agree to be bound by LugaHub Policies set out in the website and as amended from time to time. If you choose not to agree with any of these terms, you may stop using the Services immediately. Subject to You complying with these Terms of Use, we grant you a personal, non-exclusive, non-transferable, limited privilege to enter and use the Website. If you are entering into this Agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this Agreement, in which case the terms "User" and “you/your” shall refer to such entity. You acknowledge that this Agreement is a contract between you and the LugaHub, even though it is electronic and is not physically signed by you, and it governs your use of the Services, creating a binding obligation for you.</p>
                <h2>User content</h2>
                <p>We do not own any data, information or material (collectively, "Content") that you submit on the Services in the course of using the Service. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content. We may monitor and review the Content on the Services submitted or created using our Services by you. You grant us permission to access, copy, distribute, store, transmit, reformat, display and perform the Content of your user account solely as required for the purpose of providing the Services to you. Without limiting any of those representations or warranties, we have the right, though not the obligation, to, in our own sole discretion, refuse or remove any Content that, in our reasonable opinion, violates any of our policies or is in any way harmful or objectionable. You also grant us the license to use, reproduce, adapt, modify, publish or distribute the Content to a third-party created by you or stored in your user account for commercial, marketing or any similar purpose.</p>

                <h2>Backup</h2>
                <p>Regular backups of the Website and its content is done by us, however, these backups are for our own organizational purposes only and are not guaranteed in any manner. You are responsible for maintaining your own backups of your data. We do not provide any sort of compensation for lost or incomplete data in the event that backups do not function properly.</p>
                <h2>Prohibited uses</h2>
                <p>In addition to other terms as set forth in the Agreement, you are barred from using the Services or Content: (a) for any unlawful act; (b) to instigate others to perform or partake in any unlawful acts; (c) to violate any international, national, provincial regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate in any manner, or disability; (f) to upload counterfeited, wrong or misleading information; (g) to upload or transfer viruses or any other type of malware that will or may be used in any way that will disrupt the functionality or smooth operation of the Services including third party products and services, or the Internet; (h) for any obscene or immoral purpose; (i) to interfere with or circumvent the security features of the Services, third party products and services, or the Internet; or (j) to abuse the benefits or facilities that We may provide. We reserve the right to terminate your use of the Services for violating any of the prohibited uses . If any liability arises due to the above-mentioned reasons, then the User agrees to take full responsibility.</p>
                <h2>Intellectual property rights</h2>
                <p>"Intellectual Property Rights" means all present and future rights conferred by law or equity in or in relation to any copyright and related rights, trademarks, designs, patents, inventions, goodwill and the right to sue for passing off, rights to inventions, rights to use, and all other intellectual property rights, in each case whether registered or unregistered and including all applications and rights to apply for and be granted, rights to claim priority from, such rights and all similar or equivalent rights or forms of protection and any other results of intellectual activity which subsist or will subsist now or in the future in any part of the world. This Agreement does not transfer to you any intellectual property owned by LugaHub or third parties, and all rights, titles, and interests in and to such property will remain (as between the parties) solely with LugaHub. All trademarks, service marks, graphics and logos used in connection with the Services, are trademarks or registered trademarks of LugaHub or its licensors. Other trademarks, service marks, graphics and logos used in connection with the Services may be the trademarks of other third parties. Your use of the Services grants you no right or license to reproduce or otherwise use any of the LugaHub or third party Intellectual property.</p>



            </div>




            <div className={"tc-footer"}>
                <div className={"tc-get-help"}>
                    <h1>GET HELP</h1>
                    <Link to="/Customercare"><button>Customer Care</button></Link>
                    <Link to="/Payment"><button>Payment Options</button></Link>
                    <Link to="/returnandrefundpolicy"><button>Return and Refund Policy</button></Link>
                    <Link to="/PrivacyPolicy"><button>Privacy Policy</button></Link>
                    <Link to="/Termsandcondition"><button>Terms and Conditions</button></Link>
                    <span>@2023 Lugahub Pvt. Ltd. All Rights Reserved</span>

                </div>
                <div className={"tc-about-us"}>
                    <h1>LUGAHUB</h1>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Careers"><button>Careers</button></Link>





                </div>
                <div className={"tc-logos"}>
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

export default Termsandcondition;
