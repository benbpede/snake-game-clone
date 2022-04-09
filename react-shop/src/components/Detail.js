import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import Alert from "./Alert";
import Info from "./Info";
import TapContent from "./TapContent";
import { Nav } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

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

  let [누른탭, 누른탭변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);

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

  const onClick = (i) => {
    let copy = [...props.재고];
    copy[i]--;
    props.재고변경(copy);
  };

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
          <Info 재고={props.재고[0]}></Info>
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
      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            evnetKey="link-0"
            onClick={() => {
              스위치변경(false);
              누른탭변경(0);
            }}
          >
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              스위치변경(false);
              누른탭변경(1);
            }}
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={스위치} classNames="wow" timeout={500}>
        <TapContent 누른탭={누른탭} 스위치변경={스위치변경}></TapContent>
      </CSSTransition>
    </div>
  );
};

export default Detail;
