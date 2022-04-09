import React, { useEffect } from "react";

const TapContent = (props) => {
  useEffect(() => {
    props.스위치변경(true);
  });

  if (props.누른탭 === 0) {
    return <div>0번째 탭 내용입니다.</div>;
  } else if (props.누른탭 === 1) {
    return <div>1번째 탭 내용입니다.</div>;
  }
};

export default TapContent;
