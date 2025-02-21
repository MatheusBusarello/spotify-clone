import React from "react";
import logoSpotily from '../assets/logo/spotify-logo.png';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoSpotily} alt="Spotify's logo"/>
      </Link>

      <Link to="/" className="header__link">
        <h1>Spotify</h1>
      </Link>
    </div>
  );
};

export default Header