import React from "react";
import "react-bootstrap";
import Card from "react-bootstrap/Card";
import logo from "./logo.png";

export default function LogoCard() {
  return (
     <div className="align-items-start d-flex">
        <img src={logo} width="75"/>
        <h4 className="card-text mb-5 font-bold text-6xl" style={{fontFamily: '"Futura", san-serif', padding: "2.5px"}}>
          TAP
        </h4>
    </div>
  );
}
