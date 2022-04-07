import React from "react";

const Card = (props) => {
  const shoes = props.shoes;
  const shoeslist = shoes.map((상품) => (
    <div className="col-md-4" key={상품.id}>
      <img src={상품.photo} width="100%" alt="" />
      <h4>{상품.title}</h4>
      <p>{상품.content}</p>
      <p>{상품.price}</p>
    </div>
  ));

  return <div className="row">{shoeslist}</div>;
};

export default Card;
