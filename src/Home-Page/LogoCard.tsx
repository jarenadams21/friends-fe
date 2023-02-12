import React from "react";
import "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function LogoCard() {
  return (
    <div>
     <Card className="align-items-center border-0 bg-transparent"
     style={{ width: '5rem', height: '7rem' }}>
        <Card.Img variant="top" src="https://www.i2symbol.com/images/symbols/math/infinity_u221E_icon_256x256.png"/>
        <h4 className="card-text mb-5" >TAP</h4>
    </Card>
    </div>
  );
}
