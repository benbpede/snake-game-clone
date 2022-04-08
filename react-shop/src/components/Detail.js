import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import Alert from "./Alert";

import "./Detail.scss";

let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.h4`
  font-size: 25px;
  color: ${(props) => props.색상};
`;

const Detail = (props) => {
  let [경고, 경고변경] = useState(true);
  let [인풋, 인풋변경] = useState("");

  const onChange = (e) => {
    인풋변경(e.target.value);
  };

  useEffect(() => {
    //마운트될때(컴포넌트 실행될때) 실행됨
    setTimeout(() => {
      경고변경(false);
    }, 2000);
    return () => {
      // 언마운트될때(컴포넌트 벗어날때) 실행됨
      console.log(인풋);
    };
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     const div = document.querySelector(".my-alert-red");
  //     div.classList.add("hidden");
  //   }, 2000);
  // });

  let { id } = useParams();
  let history = useHistory(); //방문기록을 저장해놓는 Object
  let shoes = props.shoes;

  let product = shoes.find((arr) => {
    return arr.id == id;
  });

  return (
    <div className="container">
      <박스>
        <제목 className="red">상세페이지</제목>
      </박스>

      <input value={인풋} onChange={onChange} />

      {경고 === true ? <Alert /> : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (product.id + 1) +
              ".jpg"
            }
            width="100%"
            alt=""
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}원</p>
          <button className="btn btn-danger">주문하기</button>
          &nbsp;
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
