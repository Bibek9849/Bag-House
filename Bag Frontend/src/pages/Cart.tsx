import "../assets/css/Cart.css";
import React, { useState,useEffect } from 'react';
import {Link} from "react-router-dom";
import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Cart: React.FC = () => {
    const calculateSubtotal = () => {
        // Assuming data is an array of items with a property itemTotalPrice
        const subtotal = data?.data.reduce((acc, item) => acc + (item.quantity * item.item.itemPerPrice), 0);
        return subtotal || 0;
    };

    const calculateGrandTotal = () => {
        // Assuming delivery charge is a fixed value of Rs. 200
        const deliveryCharge = 100;
        const grandTotal = calculateSubtotal() + deliveryCharge;
        return grandTotal || 0;
    };
    const userId = localStorage.getItem("userId");

    const {data,refetch}=useQuery({
        queryKey:["GET_Cart-ITEM_BY_USERID",userId],
        queryFn(){
            return axios.get(`https://40.88.27.240:8082/cart/getByUserId/${userId}`, {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            })
        }
    })

    const deleteApi = useMutation({
        mutationKey: ["DELETE-CART_ITEM"],
        mutationFn(id: number) {
            return axios.delete("https://40.88.27.240:8082/cart/deleteById/"+id, {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            })
        },
        onSuccess() {
            refetch();
            setTimeout(() => {
                toast.success('Item removed successfully!');
            }, 0);
        },
        onError(error) {
            toast.error(`Error deleting category: ${error.message}`);
        },
    });
    const handleDelete = (id: number) => {
        confirmAlert({
            title: (
                <div style={{ fontSize: '16px' }}>
                    Remove from cart
                </div>
            ),
            message: (
                <div style={{ fontSize: '14px' }}>
                    Are you sure you want to delete this item?
                </div>
            ),
            buttons: [
                {
                    label: (
                        <div style={{ fontSize: '12px' }}>
                            Cancel
                        </div>
                    ),
                    onClick: () => {
                        // No action on cancel or you can add a cancel action if needed
                    }
                },
                {
                    label: (
                        <div style={{ fontSize: '12px' }}>
                            Confirm
                        </div>
                    ),
                    onClick: () => deleteApi.mutate(id)

                }
            ]
        });
    };


    const checkoutApi=useMutation({
        mutationKey:["CHECKOUT_API"],
        mutationFn(payload){
            return axios.post("http://40.88.27.240:8082/order/saveAll",payload,{
                headers:{
                    "authorization":"Bearer "+localStorage.getItem("token")
                }
            })
        }
    })
    const [paymentMethodVisible, setPaymentMethodVisible] = useState(false);

    const handleCheckoutClick = () => {
        // Toggle the visibility of the payment method section
        setPaymentMethodVisible(!paymentMethodVisible);
    };


    const handleCheckout=(data)=>{

       let date =new Date()
console.log(data)
       const payload= data.map(i=>{
            return {
                userId:localStorage.getItem("userId"),
                itemId:i?.item?.id,
                deliveryStatus:"pending",
                deliveryTime:date.getTime(),
                deliveryDate: `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`,
                quantity:i?.quantity,
                size:i?.size,
                color:i?.color
            }
        })

        checkoutApi.mutate(payload,{
            onSuccess(res){
                console.log(res)
                toast.success('Order successful!');

                window.location.href="/dashboard"
            },
            onError(err){
                console.log(err)
        }
        })

    }


    return (

        <div className={"c-container"}>
            <div className={"c-header"}>

                <div className={"c-logo"}>
                    <a href="/dashboard"> {/* Replace "/dashboard" with the actual URL of your dashboard page */}
                        <img
                            width={100}
                            src={"images/Logo.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                
                <div className={"c-btn_before"}>
                    <Link to="/dashboard" className="link-button"><button><i className="fa-solid fa-home home-icon"></i>Home</button></Link>                  
                    <Link to="/Aboutus"><button><i className="fa-solid fa-info-circle about-icon"></i>About Us</button></Link>
                </div>
                <div className={"c-btn-wrapper"}>
                    <button><i className="fa-solid fa-cart-shopping cart-icon"></i>Cart</button>
                    <Link to="/myaccount" className="link-button"><button><i className="fa-solid fa-user-circle profile-icon"></i>Profile</button></Link>                    
                    <Link to="/"><button> <i className="fa-solid fa-sign-out"></i>Log Out</button></Link>

                </div>          
            </div>
            <div className={"c-body"}>
                <div className={"c-container"}>
                    <div className={"c-title"}>
                        <h2>My Cart</h2>
                    </div>

                    {data?.data.length > 0 ? (
                        <div className={"c-table"}>
                            <table>
                                <thead>
                                <tr>
                                    <th>Product Image</th>
                                    <th>Product Name</th>
                                    <th>Product Description</th>
                                    <th>Product Price</th>
                                    <th>Color</th>
                                    <th>Size</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {data?.data.map((i) => (
                                    <tr key={i.id}>
                                        <td>
                                            <img src={"data:image/png;base64, " + i?.itemImage} width={100} alt={i?.itemName} />
                                        </td>
                                        <td><p>{i?.item.itemName}</p></td>
                                        <td><p>{i?.item.itemDescription}</p></td>
                                        <td><p>Rs. {i?.item.itemPerPrice}</p></td>
                                        <td><p>{i?.color}</p></td>
                                        <td><p>{i?.size}</p></td>
                                        <td><p>{i?.quantity}</p></td>
                                        <td><p>Rs. {i?.quantity * i?.item.itemPerPrice}</p></td>
                                        <td>
                                            <button className={"c-delete"} onClick={() => handleDelete(i?.id)}><i className="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                    ) : (
                        <div className={"no-item"}>
                            <img src={"../images/cart.png"} alt={"empty-cart"} width={100}/>
                            <p>Nothing is here</p>
                            <Link to="/dashboard"><button>Buy First</button></Link>
                        </div>
                    )}
                    {data?.data.length > 0 && (
                        <div className={"bill"}>
                            <table>
                                <tbody>
                                <tr>
                                    <th>Fare:</th>
                                    <td><p>Rs. {calculateSubtotal()}</p></td>
                                </tr>
                                </tbody>
                                <tbody>
                                <tr>
                                    <th>Delivery Charge:</th>
                                    <td>Rs.100</td>
                                </tr>
                                </tbody>
                                <tbody>
                                <tr className="highlighted-row">
                                    <th> Total Fare:</th>
                                    <td>Rs. {calculateGrandTotal()}</td>
                                </tr>
                                </tbody>
                                <tbody>
                                <tr className={"proceed"}>
                                    <th></th>
                                    <td><button onClick={()=>handleCheckout(data?.data)}>Order Now</button></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                    <ToastContainer autoClose={4000}/>
                </div>
            </div>
            <div className={"c-footer"}>
                <div className={"c-get-help"}>
                    <h1>Contact Us</h1>
                    <div className="contact-info">
                        <p>Email: baghouse@gmail.com</p>
                        <p>Phone No: 9818619735</p>

                    </div>
                    <span>@2024 BagHouse Pvt. Ltd. All Rights Reserved</span>
                </div>
                <div className={"c-about-us"}>
                    <h1>Bag House</h1>
                </div>
                <div className={"c-logos"}>
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

export default Cart;
