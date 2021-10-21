import { Link } from "react-router-dom";
import "./main.css"

function TopBar() {
    const user = false;
    return (
        <div className='top'>
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter"></i>
            <i className="topIcon fab fa-pinterest-p"></i>
            <i className="topIcon fab fa-instagram"></i>
            </div>
            <div className="topCenter">
                <li className="topListItem"><Link to="/">HOME</Link></li>
                <li className="topListItem"><Link to="/about">ABOUT</Link></li>
                <li className="topListItem"><Link to="/contact">CONTACT</Link></li>
                <li className="topListItem"><Link to="/write">WRITE</Link></li>
                <li className="topListItem">
                    {user && "LOGOUT"}
                </li>
            </div>
            <div className="topRight">
                {
                    user ? (
                <img className="topImage" src="https://www.gannett-cdn.com/presto/2021/07/01/USAT/d044800e-5d2d-4615-86ba-ed907b307216-GTY_1316985020.jpg?crop=4837,3225,x0,y0&width=660&height=441&format=pjpg&auto=webp" alt=""/>
                
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link to="/login">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                                <Link to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
            </div>
        </div>
    )
}

export default TopBar
