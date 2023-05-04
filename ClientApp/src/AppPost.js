import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductPost() {
    const [product, setProduct] = useState({});
    let navigate = useNavigate();

    const onAddProduct = (event) => {
        let demo = JSON.stringify(product);
        console.log(JSON.parse(demo));
        fetch("https://localhost:7058/api/products", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: demo,
        }).then((r) => {
            r.json();
        });
        event.preventDefault();
        navigate("/");
    };

    const handleNavigateToIndex = () => {
        navigate("/");
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setProduct((values) => ({ ...values, [name]: value }));
    };

    return (
        <div>
            <h2>Enter New Product</h2>
            <table style={{ margin: "0 auto" }} cellSpacing={""} cellPadding={8} border={4} borderradius={5}>
                <tbody>
                    <tr>
                        <td>
                            <label>Product Name:</label>
                        </td>
                        <td>
                            <input type="text" name="name" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Product Description:</label>
                        </td>
                        <td>
                            <input type="text" name="description" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Price:</label>
                        </td>
                        <td>
                            <input type="text" name="price" onChange={handleChange} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <button onClick={handleNavigateToIndex} className="my-buttonback">
                Back
            </button>
            &nbsp;&nbsp;
            <button onClick={onAddProduct} className="my-buttondisp">
                Create
            </button>
        </div>
    );
}

export default ProductPost;
