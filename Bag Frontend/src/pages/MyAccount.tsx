import React, { useEffect, useState } from 'react';
import "../assets/css/MyAccount.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


const MyAccount: React.FC = () => {
    const { id } = useParams();
    const [userDetails, setUserDetails] = useState<any>({});

    // Fetch user details when the component mounts
    useEffect(() => {
        fetchUserDetails();
    }, []);

    const fetchUserDetails = async () => {
        try {
            // Retrieve user ID from local storage
            const userId = localStorage.getItem('userId');

            if (userId) {
                // Fetch user details by ID using your API endpoint
                const response = await axios.get(`http://localhost:8082/user/getById/${userId}`);

                // Set the user details in the state
                setUserDetails(response.data);
            }
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    return (
        <div className={"myaccount-container"}>
            <div className={"myaccount-header"}>
                <div className={"myaccount-logo"}>
                    <a href="/dashboard">
                        <img
                            width={100}
                            src={"images/Logo.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"myaccount-btn_before"}>
                    <Link to="/dashboard" className="link-button"><button><i className="fa-solid fa-home home-icon"></i>Home</button></Link>                  
                    <Link to="/Aboutus"><button><i className="fa-solid fa-info-circle about-icon"></i>About Us</button></Link>
                </div>
                <div className={"myaccount-btn-wrapper"}>
                    <Link to={"/cart"}><button><i className="fa-solid fa-cart-shopping cart-icon"></i>Cart</button></Link>
                    <Link to="/myaccount" className="link-button"><button><i className="fa-solid fa-user-circle profile-icon"></i>Profile</button></Link>                    
                    <Link to="/" className="logout-link"><button><i className="fa-solid fa-sign-out"></i> Log Out</button></Link>       
                </div>
                {/* <div className={"myaccount-searchbar"}>
                    <input type={"text"} placeholder={"Search Bags"} />
                </div>
                <div className={"myaccount-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div> */}
                
            </div>

            <div className={"myaccount-body"}>
                <div className={"myaccount-profile-second"}>
                    <div className={"myaccount-section1"}>
                        <h3>My profile</h3>
                    </div>
                    <div className={"myaccount-section2"}>
                        <div className={"myaccount-info"}>
                            <div className={"myaccount-part1"}>
                                <div>
                                    <label><i className="fa-solid fa-user user-icon"></i>First Name:</label>
                                    <input type="text" value={userDetails.firstName} readOnly />
                                </div>
                                <div>
                                    <label>  <i className="fa-solid fa-user user-icon"></i>Last Name:</label>
                                    <input type="text" value={userDetails.lastName} readOnly />
                                </div>
                                <div>
                                    <label>  <i className="fa-solid fa-envelope email-icon"></i>Email Address:</label>
                                    <input type="text" value={userDetails.email} readOnly />
                                </div>
                            </div>
                        </div>
                        <div className={"myaccount-buttons"}>
                            <Link to="/EditProfile" className="link-button"><button><i className="fa-solid fa-edit edit-icon"></i>Edit Profile</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"myaccount-footer"}>
                <div className={"myaccount-get-help"}>
                    <h1>Contact Us</h1>
                    <div className="contact-info">
                        <p>Email: baghouse@gmail.com</p>
                        <p>Phone No: 9818619735</p>

                    </div>
                    <span>@2024 BagHouse Pvt. Ltd. All Rights Reserved</span>
                </div>
                <div className={"myaccount-about-us"}>
                    <h1>Bag House</h1>
                </div>
                <div className={"myaccount-logos"}>
                    <span>Follow Us:</span>
                    <a href="https://www.facebook.com/b1bek.pandey" target="_blank" rel="noopener noreferrer">
                        <img width={43} src={"images/fb.png"} alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/bibekpandey558/" target="_blank" rel="noopener noreferrer">
                        <img width={43} src={"images/insta.png"} alt="Instagram" />
                    </a>
                </div>
            </div>

        </div>
    );
};

export default MyAccount;