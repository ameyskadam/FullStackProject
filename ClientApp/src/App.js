import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './AppGet';
import GetProductById from './ById';
import ProductPost from './AppPost';
import ProductDelete from './ProductTypeDelete';
import ProductPut from './ProductTypePut';
import Header from './HeaderLayout';
import ProductNames from './AppGetNames1';
import Contactus from './Contactus';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Header />} />
                        <Route path="/Home" element={<ProductList />} />
                        <Route path="/disp/:code" element={<GetProductById />} />
                        <Route path="/Productdetails" element={<ProductNames />} />
                        <Route path="/AddProductType" element={<ProductPost />} />
                        <Route path="/Protypedel/:code" element={<ProductDelete />} />
                        <Route path="/Productypeedit/:code" element={<ProductPut />} />
                        <Route path="/contactus" element={<Contactus />} />

                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
