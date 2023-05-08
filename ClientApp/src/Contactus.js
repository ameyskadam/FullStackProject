
import { Link } from 'react-router-dom';

function Contactus() {
    return (
        <div>
            <body color="blue"></body>
            <h1 style={{ backgroundColor: "", color: "Black" }}>
                <h1>Thank You</h1>
                <h3> Amey S. Kadam</h3>
                <a href="mailto:ameyskadam28@gmail.com">ameyskadam28@gmail.com</a>
            </h1>
            <Link to="/">
                <button className="my-buttonback">Back</button>
            </Link>
        </div>

    )
}
export default Contactus;
