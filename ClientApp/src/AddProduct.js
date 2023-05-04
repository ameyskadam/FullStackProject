import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    const handleAddProduct = async () => {
        try {
            const response = await fetch('https://localhost:7058/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product),
            });
            const newProduct = await response.json();
            console.log('New product:', newProduct);
            navigate('/');
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setProduct(values => ({ ...values, [name]: value }))
    };

    return (
        <div>
            <h2>Add Product</h2>
            <label>
                Name:
                <input type="text" name="name" onChange={handleChange} required />
            </label>
            <label>
                Description:
                <input type="text" name="description" onChange={handleChange} required />
            </label>
            <label>
                Price:
                <input type="number" step="0.01" name="price" onChange={handleChange} required />
            </label>
            <button onClick={handleAddProduct}>Add</button>
        </div>
    );
}

export default AddProduct;
