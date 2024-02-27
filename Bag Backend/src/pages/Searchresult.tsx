import { Link } from "react-router-dom";
import "../assets/css/Searchresult.css";
import Carousel from "react-bootstrap/Carousel";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

function Searchresult() {
    const [searchData, setSearchData] = useState();
    const { data: searchByName, refetch } = useQuery({
        queryKey: ["SEARCHBYNAME"],
        queryFn: () => {
            return axios.get("http://localhost:8082/item/searchByName/" + searchData);
        },
        enabled: false, // Set to false initially
    });

    const handleSearch = () => {
        // Trigger the query when the search button is clicked
        refetch();
    };

    return (
        <div className={"s-container"}>
            <div className={"s-header"}>
                <div className={"s-searchbar"}>
                    <input
                        type={"text"}
                        placeholder={"Search Product"}
                        onChange={(e) => {
                            setSearchData(e.target.value);
                        }}
                    />
                </div>
                <div className={"s-search_button"}>
                    <Link to={"/"}><button type="submit" onClick={handleSearch}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button></Link>
                </div>
            </div>
            <div className={"s-body"}>
                <div className={"s-dash1"}>
                    <div className={"s-product-dash1"}>
                        {searchByName?.data.length > 0 ? (
                            searchByName?.data.map((i) => (
                                <div key={i.itemId}>
                                    <div className={"item-image"}>
                                        <img
                                            src={"data:image/png;base64, " + i?.itemImage}
                                            width={100}
                                            alt={i?.itemName}
                                        />
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
                            <p>No results found for '{searchData}'</p>
                        )}
                    </div>

                </div>
                <div className={"s-dash2"}>
                    <div className={"s-product-dash2"}></div>
                </div>
            </div>
        </div>
    );
}

export default Searchresult;
