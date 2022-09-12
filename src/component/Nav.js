import logo from "./a.png";

export default function Nav() {
    return (
        <div className="nav">
            <img className="nav-img" src={logo} alt="logo-img"></img>
            <ul className="nav-ul">
                <li className="nav-li">Product</li>
                <li className="nav-li">New</li>
                <li className="nav-li">Contact</li>
            </ul>
        </div>
    );
}
