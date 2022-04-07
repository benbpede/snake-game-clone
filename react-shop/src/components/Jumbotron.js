import { Button } from "react-bootstrap";
import React from "react";

const Jumbotron = () => {
  return (
    <div className="background">
      <h1>20% Season Off</h1>
      <p>This is a simple hero unit, ad simple</p>
      <p>
        <Button variant="primary"> Learn more</Button>
      </p>
    </div>
  );
};

export default Jumbotron;
