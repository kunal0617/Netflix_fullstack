import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../authContext/AuthActions";
import { AuthContext } from "../../authContext/AuthContext";
import "./navbar.scss";

const Navbar = () => {
  const [searchIcon, setSearchIcon] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  console.log(searchTerm);
  //isScrolled for making navbar transparent when navbar at top o.w black
  const [isScrolled, setIsScrolled] = useState(false);

  const { dispatch } = useContext(AuthContext);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchIcon((searchIcon) => !searchIcon);
    searchIcon === true && searchTerm
      ? history.push(`/search/${searchTerm}`)
      : null;
  };

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <div className="search">
            <Search className="icons" onClick={handleSearch} />
            {searchIcon && (
              <input
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                type="text"
                className="searchInput"
                placeholder="Title, People, Genre"
              />
            )}
          </div>
          <span>KID</span>
          <Notifications className="icons" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icons" />
            <div className="options">
              <span>Settings</span>
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
