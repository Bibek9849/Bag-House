// Dashboard.tsx
import {Link} from "react-router-dom";
import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import "../assets/css/Dashboard.css";
import Carousel from "react-bootstrap/Carousel";
import React, {useState} from "react";

function Dashboard() {
    const navigate=useNavigate();

    const {data}=useQuery({
        queryKey:["GET_Dashboard_ITEM_ALL"],
        queryFn(){
            return axios.get("https://40.88.27.240:8082/item/getAll", {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            })
        }
    })

    const [searchData, setSearchData] = useState();
    const { data: searchByName, refetch } = useQuery({
        queryKey: ["SEARCHBYNAME"],
        queryFn: () => {
            return axios.get("https://40.88.27.240:8082/item/searchByName/" + searchData, {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            });
        },
        enabled: false, // Set to false initially
    });


    console.log(data?.data)
    return (
        <div className={"db-container"}>
            <div className={"db-header"}>

                <div className={"db-logo"}>
                    <a href="/dashboard"> {/* Replace "/dashboard" with the actual URL of your dashboard page */}
                        <img
                            width={100}
                            src={"images/Logo.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"db-btn_before"}>
                    <Link to="/dashboard" className="link-button"><button><i className="fa-solid fa-home home-icon"></i>Home</button></Link>                  
                    <Link to="/Aboutus"><button><i className="fa-solid fa-info-circle about-icon"></i>About Us</button></Link>
                </div>
                <div className={"db-btn-wrapper"}>
                    <Link to={"/cart"}><button><i className="fa-solid fa-cart-shopping cart-icon"></i>Cart</button></Link>
                    <Link to="/myaccount" className="link-button"><button><i className="fa-solid fa-user-circle profile-icon"></i>Profile</button></Link>                    
                    <Link to="/"><button> <i className="fa-solid fa-sign-out"></i>Log Out</button></Link>

                </div>

               

                
            </div>
            <div className={"db-body"}>
                <div className={"db-dash1"}>
                <div className={"db-img-dash1"}>
                    <img
                        className="d-block w-100"
                        src="images/bg1.jpg"
                        alt="Pic"
                    />
                </div>

                    

                    <div className={"db-product-dash1"}>
                        {searchData && searchByName?.data && searchByName.data.length > 0 ? (
                            searchByName.data.map((i) => (
                                <div onClick={() => { navigate("/products/" + i?.id) }} className={"item-section"} key={i.itemId}>
                                    <div className={"item-image"}>
                                        <img src={"data:image/png;base64, " + i?.itemImage} width={100} alt={i?.itemName} />
                                    </div>

                                    <div className={"item-info"}>
                                        <p>{i?.itemName}</p>
                                        <p>{i?.itemDescription}</p>
                                    </div>
                                    <div className={"item-desc"}>
                                        <div className={"item--desc-detail"}>
                                            <p>Rs.{i?.itemPerPrice}</p>
                                        </div>
                                        <div className={"item-quantity"}>
                                            <p>Stock:({i?.itemQuantity})</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            searchData ? (
                                <div className={"product-not-found-message"}>
                                    <p>Product not found.</p>
                                </div>
                            ) : (
                                data?.data.length > 0 ? (
                                    data?.data.slice(0, 12).map((i) => (
                                        <div onClick={() => { navigate("/products/" + i?.id) }} className={"item-section"} key={i.itemId}>
                                            <div className={"item-image"}>
                                                <img src={"data:image/png;base64, " + i?.itemImage} width={100} alt={i?.itemName} />
                                            </div>

                                            <div className={"item-info"}>
                                                <p>{i?.itemName}</p>
                                                <p>{i?.itemDescription}</p>
                                            </div>
                                            <div className={"item-desc"}>
                                                <div className={"item--desc-detail"}>
                                                    <p>Rs.{i?.itemPerPrice}</p>
                                                </div>
                                                <div className={"item-quantity"}>
                                                    <p>Stock:({i?.itemQuantity})</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className={"product-not-found-message"}>
                                        {searchData && <p>Product not found.</p>}
                                    </div>
                                )
                            )
                        )}
                    </div>



                </div>
                
            </div>
            <div className={"db-footer"}>
                <div className={"db-get-help"}>
                    <h1>Contact Us</h1>
                    <div className="contact-info">
                        <p>Email: baghouse@gmail.com</p>
                        <p>Phone No: 9818619735</p>

                    </div>
                    <span>@2024 BagHouse Pvt. Ltd. All Rights Reserved</span>
                </div>
                <div className={"db-about-us"}>
                    <h1>Bag House</h1>
                </div>
                <div className={"db-logos"}>
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
}

export default Dashboard;
