import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function GetProductById() {
    const [product, setProduct] = useState({});
    const { code } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        fetch("https://localhost:7058/api/Products/" + code)
            .then(res => res.json())
            .then((result) => {
                setProduct(result);
            });
    }, {});

    const handleNavigateToIndex = () => {
        navigate(-1);
    };

    return (
        <div>
            <h1 align="center">Product Details</h1>
            <table style={{ margin: "0 auto" }} cellSpacing={""} cellPadding={12} border={4} borderradius={5}>
                <thead>
                    <tr>
                        <th>Product Id &nbsp;</th>
                        <th>Name &nbsp; </th>
                        <th>Description &nbsp;</th>
                        <th>Price &nbsp;</th>
                    </tr>
                </thead>
                <tbody align="center">
                    <tr>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                    </tr>
                </tbody>
            </table>

            <button className="my-buttonback" onClick={handleNavigateToIndex}>Back</button>
        </div>
    );
}
export default GetProductById;
