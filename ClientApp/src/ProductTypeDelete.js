import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function ProductDelete() {
    const [product, setProduct] = useState({});
    const [isDeleted, setIsDeleted] = useState(false);
    const { code } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://localhost:7058/api/products/" + code)
            .then((res) => res.json())
            .then((result) => {
                setProduct(result);
            });
    }, []);

    const handleNavigateToIndex = () => {
        navigate(-1);
    };

    const onDeleteProduct = (event) => {
        let demo = JSON.stringify(product);
        console.log(JSON.parse(demo));
        fetch("https://localhost:7058/api/products/" + code, {
            method: "DELETE",
        })
            .then(() => {
                setIsDeleted(true);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        event.preventDefault();
    };

    useEffect(() => {
        if (isDeleted) {
            setTimeout(() => {
                setIsDeleted(false);
                navigate(-1);
            }, 500);
        }
    }, [isDeleted, navigate]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setProduct((values) => ({ ...values, [name]: value }));
    };

    return (
        <div>
            <h2>Delete Product</h2>
            <table style={{ margin: "0 auto" }} cellSpacing={"10"} cellPadding={4} border={10} borderradius={5}>
                <tbody>
                    <tr>
                        <td>
                            <p>
                                <label>
                                    Product Id:{" "}
                                    <input
                                        type="text"
                                        name="productId"
                                        value={product.id || ""}
                                        onChange={handleChange}
                                    ></input>{" "}
                                </label>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                <label>
                                    Product Name:{" "}
                                    <input
                                        type="text"
                                        name="productName"
                                        value={product.name || ""}
                                        onChange={handleChange}
                                    ></input>{" "}
                                </label>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                <label>
                                    Product Description:{" "}
                                    <input
                                        type="text"
                                        name="productDescription"
                                        value={product.description || ""}
                                        onChange={handleChange}
                                    ></input>{" "}
                                </label>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                <label>
                                    Unit Price:{" "}
                                    <input
                                        type="text"
                                        name="unitPrice"
                                        value={product.price || ""}
                                        onChange={handleChange}
                                    ></input>{" "}
                                </label>
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>

            <button onClick={handleNavigateToIndex} className="my-buttonback">
                Back
            </button>
            &nbsp;&nbsp;
            <button onClick={onDeleteProduct} className="my-buttondelete">
                Delete{" "}
            </button>
            {isDeleted && <p>Product Deleted Successfully</p>}
        </div>
    );
}
export default ProductDelete;
