import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function ProductPut() {
    const [product, setProduct] = useState({});
    const [isUpdated, setIsUpdated] = useState(false);
    let navigate = useNavigate();
    const { code } = useParams();

    useEffect(() => {
        fetch("https://localhost:7058/api/products/" + code)
            .then(res => res.json())
            .then((result) => {
                setProduct(result);
            }
            );
    }, []);

    const handleNavigateToIndex = () => {
        navigate(-1);
    };

    let onUpdateProduct = (event) => {
        let demo = JSON.stringify(product);
        console.log(JSON.parse(demo));
        fetch("https://localhost:7058/api/products/" + code, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        })
        //.then(r => {console.log( r.json()) })
        event.preventDefault();
        setIsUpdated(true);
        setTimeout(() => {
            setIsUpdated(false);
            navigate('/Home');
        }, 2000);
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setProduct(values => ({ ...values, [name]: value }))
    }

    return (
        <div>
            <h2>Update Product Details</h2>
            <table style={{ margin: "0 auto" }} cellSpacing={""} cellPadding={8} border={4} borderradius={8}>
                <tbody>
                    <tr>
                        <td>
                            <label>Product Id:</label>
                        </td>
                        <td><input type="text" name="id" value={product.id || ""} readOnly title="You cannot update the Product Id"></input></td>
                    </tr>
                    <tr>
                        <td><label>Product Name:</label></td>
                        <td><input type="text" name="name" value={product.name || ""} onChange={handleChange}></input></td>
                    </tr>
                    <tr>
                        <td><label>Description:</label></td>
                        <td><input type="text" name="description" value={product.description || ""} onChange={handleChange}></input></td>
                    </tr>
                    <tr>
                        <td><label>Price:</label></td>
                        <td><input type="text" name="price" value={product.price || ""} onChange={handleChange}></input></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={handleNavigateToIndex} className="my-buttonback">Back</button>&nbsp;&nbsp;
            <button onClick={onUpdateProduct} className="my-buttondisp">Update</button>
            {isUpdated && <p>Product Updated Successfully</p>}
        </div>
    )
}
export default ProductPut;
