
import "../assets/css/ViewBrand.css";
import {Link} from "react-router-dom";
import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {useNavigate} from "react-router-dom";
// import React from "react";


function ViewBrand() {
    const navigate=useNavigate();
    const {data,refetch}=useQuery({
        queryKey:["GET_ITEM_ALL"],
        queryFn(){
            return axios.get("https://40.88.27.240:8082/brand/getAll")
        }
    })
    console.log(data?.data)
    const deleteApi = useMutation({
        mutationKey: ["DELETE_ITEM"],
        mutationFn(id: number) {
            return axios.delete("https://40.88.27.240:8082/brand/deleteById/"+id)
        },
        onSuccess() {
            refetch();
            setTimeout(() => {
                toast.success('Brand deleted successfully!');
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
                    Confirm Delete
                </div>
            ),
            message: (
                <div style={{ fontSize: '14px' }}>
                    Are you sure you want to delete this brand?
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
    return (
        <div className={"vb-container"}>
            <div className={"vb-buttons"}>
                <div className={"vb-top"}>
                    <img src={"../images/Logo.png"}
                         width={100}
                         alt={"logo"}
                    />
                    <span>Bag House</span>
                </div>
                <div className={"vb-btn"}>
                    <div className="ap-dropdown">
                        <button className="ap-dropbtn"><i className="fa-solid fa-clipboard"></i>Bag Details<i className="fa-solid fa-caret-down" style={{ marginLeft: '57px' }}></i></button>
                        <div className="ap-dropdown-content">
                            <a href="/admin/products">View Bag</a>
                            <a href="/admin/addproduct">Add Bag</a>

                        </div>
                    </div>
                    {/*<button className={"products"}><i className="fa-solid fa-list"></i>Categories</button>*/}
                    <div className="cgr-dropdown">
                        <button className="cgr-dropbtn"><i className="fa-solid fa-list"></i>Categories<i className="fa-solid fa-caret-down" style={{ marginLeft: '40px' }}></i></button>
                        <div className="cgr-dropdown-content">
                            <a href="/admin/viewcategory">View Category</a>
                            <a href="/admin/addcategory">Add Category</a>
                        </div>
                    </div>
                    {/*<button className={"products"}><i className="fa-solid fa-tag"></i>Brands</button>*/}
                    <div className="brd-dropdown">
                        <button className="brd-dropbtn"><i className="fa-solid fa-tag"></i>Brands<i className="fa-solid fa-caret-down" style={{ marginLeft: '69px' }}></i></button>
                        <div className="brd-dropdown-content">
                            <a href="/admin/viewbrand">View Brand</a>
                            <a href="/admin/addbrand">Add Brand</a>
                        </div>
                    </div>
                    <Link to={"/admin/totalorders"}><button className={"products"}><i className="fa-solid fa-cart-shopping"></i>Total Orders</button></Link>
                    <Link to={"/admin/users"}><button className={"products"}><i className="fa-solid fa-users"></i>Users</button></Link>
                    {/*<button className={"products"}><i className="fa-solid fa-user"></i>Profile</button>*/}
                    
                </div>
            </div>
            <div className={"vb-display"}>
                <h2>View Brands</h2>
                <table   id="productTable">
                    <thead>
                    <tr>
                        <th>Brand ID</th>
                        <th>Brand Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data?.data.map((i) => (
                        <tr>
                            <td><p>{i?.id}</p></td>
                            <td><p>{i?.brandName}</p></td>
                            <td ><p>{i?.brandDescription}</p></td>
                            <td>
                                <button onClick={()=>{navigate("/admin/addbrand/"+i?.id)}}>Update</button>
                                <button onClick={()=>handleDelete(i?.id)} className="delete">Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <ToastContainer autoClose={4000}/>
        </div>
    )
}

export default ViewBrand;