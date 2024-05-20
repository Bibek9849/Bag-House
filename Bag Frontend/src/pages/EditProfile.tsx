import React, { useEffect, useState } from 'react';
import "../assets/css/EditProfile.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditProfile: React.FC = () => {
    const [userDetails, setUserDetails] = useState<any>({});
    const [editedDetails, setEditedDetails] = useState({
        firstName: 'string',
        lastName: 'string',
        email: 'string',
    });

    useEffect(() => {
        fetchUserDetails();
    }, []);

    const fetchUserDetails = async () => {
        try {
            const userId = localStorage.getItem('userId');

            if (userId) {
                const response = await axios.get(`https://40.88.27.240:8082/user/getById/${userId}`);
                setUserDetails(response.data);

                // Set the initial values for editing
                setEditedDetails({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    email: response.data.email,
                });
            }
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedDetails({
            ...editedDetails,
            [name]: value,
        });
    };
    

    const saveChanges = async () => {
        try {
            // Assuming there's an API endpoint to update user details
            const userId = localStorage.getItem('userId');
            if (userId) {
                await axios.put(`https://40.88.27.240:8082/user/update/${userId}`, editedDetails);
                // Optionally, you can refetch the updated details
                fetchUserDetails();
                console.log('Changes saved successfully!');
                toast.success('Updated successful!');

            }
        } catch (error) {
            console.error('Error saving changes:', error);
            toast.error('Please check your Details.');
        }
    };


    return (
        <div className={"ep-container"}>
            <div className={"ep-header"}>

                <div className={"ep-logo"}>
                    <a href="/dashboard"> {/* Replace "/dashboard" with the actual URL of your dashboard page */}
                        <img
                            width={100}
                            src={"images/Logo.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"ep-btn_before"}>
                    <Link to="/dashboard" className="link-button"><button><i className="fa-solid fa-home home-icon"></i>Home</button></Link>                  
                    <Link to="/Aboutus"><button><i className="fa-solid fa-info-circle about-icon"></i>About Us</button></Link>

                </div>

                

                <div className={"ep-btn-wrapper"}>
                    <Link to={"/cart"}><button><i className="fa-solid fa-cart-shopping cart-icon"></i>Cart</button></Link>
                    <Link to="/myaccount" className="link-button"><button><i className="fa-solid fa-user-circle profile-icon"></i>Profile</button></Link>                    
                    <Link to="/"><button> <i className="fa-solid fa-sign-out"></i>Log Out</button></Link>


                </div>


            </div>
            <div className={"ep-body"}>
                <div className={"ep-profile-first"}>
                    <div className={"ep-manage-my-account"}>
                        <Link to="/MyAccount"><button><i className="fa-solid fa-user-circle profile-icon"></i> My profile</button></Link>
                    </div>



                </div>
                <div className={"ep-profile-second"}>
                    <div className={"ep-section1"}>
                        <h3>Edit profile</h3>

                    </div>
                    <div className={"ep-section2"}>
                        <div className={"ep-info"}>
                            <div className={"ep-part1"}>
                                <label><i className="fa-solid fa-user user-icon"></i>First Name:</label>
                                <input type={"text"} name="firstName" value={editedDetails.firstName}
                                       onChange={handleInputChange}/>
                            </div>
                            <div className={"ep-part1"}>
                                <label><i className="fa-solid fa-user user-icon"></i>Last Name:</label>
                                <input type={"text"} name="lastName" value={editedDetails.lastName}
                                       onChange={handleInputChange}/>
                            </div>
                            <div className={"ep-part1"}>
                            <label>  <i className="fa-solid fa-envelope email-icon"></i>Email Address:</label>
                                <input type={"text"} name="email" value={editedDetails.email}
                                       onChange={handleInputChange}/>
                            </div>

                        </div>
                        <div className={"ep-buttons"}>
                            <button onClick={saveChanges}>SAVE</button>
                        </div>


                    </div>

                </div>
            </div>


            <div className={"ep-footer"}>
                <div className={"ep-get-help"}>
                    <h1>Contact Us</h1>
                    <div className="contact-info">
                        <p>Email: baghouse@gmail.com</p>
                        <p>Phone No: 9818619735</p>

                    </div>
                    <span>@2024 BagHouse Pvt. Ltd. All Rights Reserved</span>
                </div>
                <div className={"ep-about-us"}>
                    <h1>Bag House</h1>
                </div>
                <div className={"ep-logos"}>
                    <span>Follow Us:</span>
                    <a href="https://www.facebook.com/b1bek.pandey" target="_blank" rel="noopener noreferrer">
                        <img width={43} src={"images/fb.png"} alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/bibekpandey558/" target="_blank" rel="noopener noreferrer">
                        <img width={43} src={"images/insta.png"} alt="Instagram" />
                    </a>
                </div>
            </div>
            <ToastContainer/>
        </div>

    );
};

export default EditProfile;
