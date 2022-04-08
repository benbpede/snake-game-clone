import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Container = (props) => {
  let [data, setData] = useState(props.shoes);

  const onClick = () => {
    //로딩중 개발해볼것

    axios.post("서버URL", {
      //전송할데이터
      id: "???",
      pw: 1111,
    });

    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((result) => {
        //로딩중 안보이게 처리
        setData([...data, ...result.data]);
      })
      .catch(() => {
        console.log("실패");
      });
  };

  return (
    <div className="container">
      <Card data={data} />
      <button className="btn btn-primary" onClick={onClick}>
        더보기
      </button>
    </div>
  );
};

export default Container;
