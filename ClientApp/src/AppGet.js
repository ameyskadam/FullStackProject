import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductList() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://localhost:7058/api/products")
            .then(res => res.json())
            .then((result) => { setProducts(result); }
            );
    }, []);

    const handleNavigateToIndex = () => {
        navigate("/");
    };

    return (
        <div>
            <h1 align="center">PRODUCT LIST</h1>

            <table style={{ margin: "0 auto" }} cellSpacing={""} cellPadding={12} border={4} borderradius={5}>
                <thead>
                    <tr>
                        <th>ID &nbsp;</th>
                        <th>Name &nbsp; </th>
                        <th>&nbsp; Description &nbsp;</th>
                        <th>Price &nbsp;</th>
                        <th colSpan={3}>Action</th>
                    </tr>
                </thead>
                <tbody align="center">
                    {products.map((product, i) => (
                        <tr key={i + 1}>
                            <td>{product.id}</td>
                            <td>{product.name} </td>
                            <td>{product.description} </td>
                            <td>{product.price} </td>
                            <td> <a href={'/disp/' + product.id}><button className="my-buttondisp">Display</button></a></td>
                            <td><a href={'/Productypeedit/' + product.id}><button className="my-buttonedit">Edit</button></a></td>
                            <td><a href={'/Protypedel/' + product.id}><button className="my-buttondelete">Delete</button></a></td>
                        </tr>

                    ))}

                </tbody>
            </table>
            <button onClick={handleNavigateToIndex} className="my-buttonback">Back</button>
        </div>
    );
}

export default ProductList;


