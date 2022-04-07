import React from "react";
import Card from "./Card";

const Container = (props) => {
  return (
    <div className="container">
      <Card shoes={props.shoes} />
    </div>
  );
};

export default Container;
