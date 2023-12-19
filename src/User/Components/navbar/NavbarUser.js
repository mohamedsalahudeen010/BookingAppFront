import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContextUser } from "../../../context/AuthContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const NavbarUser = () => {
  const { user } = useContext(AuthContextUser);
  const history=useHistory()

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo"
          onClick={()=>history.push("/")}>AKJ Bookings</span>
        </Link>
       <button className="navButton" style={{float:"left"}}onClick={()=>history.push("/adminLogIn")}>Admin</button>
        
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton" onClick={()=>history.push("/userSignUp")}>Register</button>
            <button className="navButton"
            onClick={()=>history.push("/login")}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarUser;