import { Outlet, Link } from "react-router-dom";
function Header() {

    const handleMouseOver = (event) => {
        event.target.style.color = "red";
    };

    const handleMouseOut = (event) => {
        event.target.style.color = "";
    };

    return (
        <div>
            <nav>
                <ul>

                    <h1 style={{ backgroundColor: "black", color: "white" }}>

                        <h1>  <b>Welcome</b></h1></h1>
                    <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>  <Link to="/Home" ><h1 className="nav-item">Home</h1></Link> </li>
                    <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>  <Link to="/addProductType"><h1 className="nav-item">Add Product</h1></Link> </li>
                    <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>  <Link to="/productdetails"><h1 className="nav-item">List Product</h1></Link> </li>
                    <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>  <Link to="/Contactus"><h1 className="nav-item">Contact us</h1></Link> </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}
export default Header;