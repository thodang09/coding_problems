
import {Outlet, Link } from "react-router-dom";
const Header = () =>{
    return (
        <>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pics.js">Pictures</Link>
              </li>
              <li>
                <Link to="/contact.js">Contact</Link>
              </li>
              <li>
                <Link to="/about.js">About</Link>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </>
      );
}
export default Header;