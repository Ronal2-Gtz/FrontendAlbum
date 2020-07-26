import React from "react";
import { Link } from "react-router-dom";

import Input from "./Input";
import imgAdd from "../img/add.png";

const Header = ({ setSearch }) => {
  return (
    <div className="nav">
      <Link to="/" className="nav-logo">
        [A]lbum [P]erron
      </Link>
      <div className="nav-add">
        <Link to="/addImage" className="nav-link">
          <img src={imgAdd} alt="Ico" /> Agregar Foto
        </Link>
        <Input setSearch={setSearch} />
      </div>
    </div>
  );
};

export default Header;
