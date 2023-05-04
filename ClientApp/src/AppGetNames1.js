import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductNames(props) {
    const [Product_arr, setProduct] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://localhost:7058/api/Products")
            .then(res => res.json())
            .then((result) => { setProduct(result); }
            );

    }, []);

    const handleNavigateToIndex = () => {
        navigate("/");
    };

    return (
        <div>
            <h1 align="center">AVAILABLE PRODUCT DETAILS</h1>
            <table align="center" border="1px" cellSpacing={1} cellPadding={15}>
                <thead>
                    <tr>
                        <th>Product Id &nbsp;</th>
                        <th>Product Name &nbsp; </th>
                        <th>Product Description &nbsp;</th>
                        <th>Product Price &nbsp;</th>
                    </tr>
                </thead>
                <tbody align="center">
                    {Product_arr.map((product, i) => (
                        <tr key={i + 1}>
                            <td>{product.id}</td>
                            <td>{product.name} </td>
                            <td>{product.description} </td>
                            <td>{product.price} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleNavigateToIndex} className="my-buttonback" >Back</button>

        </div>
    );
}
export default ProductNames;
