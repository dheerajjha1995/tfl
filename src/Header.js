import React from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <div className="header">

      <div onClick={() => history.push("/")} className="first">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyaMgluH4RscrohRLs-SpN9d4_DUTw0zoiA&usqp=CAU"
          alt="Too Fun Labs"
        />
        <img
          src = "https://see.fontimg.com/api/renderfont4/BW0ox/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/VG9vRnVuTGFicw/aquire.png"
          alt="brand"
        />
      </div>

      <div onClick={() => history.push("/login")} className="third">
        <div className="showLogin">
          <div className="showLogin__button">
              <button>LOGIN</button>
          </div>
        </div>
      </div>

      <div onClick={() => history.push("/about")} className="fourth">
        <p className="tp">About Us</p>
      </div>

    </div>
  );
};

export default Header;
