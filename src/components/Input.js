import React from "react";

const Input = ({ setSearch }) => {
  const Busqueda = (e) => {
    let search = e.target.value;
    setSearch(search);
  };

  return (
    <input
      onChange={Busqueda}
      type="text"
      placeholder="Buscar"
      className="nav-input"
    />
  );
};

export default Input;
