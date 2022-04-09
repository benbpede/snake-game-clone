import React, { useContext } from "react";
import { 재고context } from "../App";

const Card = (props) => {
  let 재고 = useContext(재고context);

  const data = props.data;
  const shoeslist = data.map((상품) => (
    <div className="col-md-4" key={상품.id}>
      <img src={상품.photo} width="100%" alt="" />
      <h4>{상품.title}</h4>
      <p>{상품.content}</p>
      <p>{상품.price}</p>
      {재고}
    </div>
  ));

  return <div className="row">{shoeslist}</div>;
};

export default Card;
