import { useEffect, useState } from "react";
import Sider from "antd/es/layout/Sider";
import Menubar from "./Menubar.js";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Layout } from "antd";
import styled from "styled-components";
import UploadPage from "../UploadPage/UploadPage.js";
import {
  InnerLayOut,
  InnerSider,
  OuterFooter,
  OuterHeader,
  OuterLayOut,
} from "../GongjungTags/Layouts";
import axios from "axios";
import {Redirect} from "react-router-dom";

// 참고 navigator 에 props 로 넘겨주면 자동으로 배정 해준다.
function Navigator(props) {
  useEffect(() => {
    console.log("navigator called");
  });

  let Page = () => {
    return <></>;
  };
  if (props.content !== null) {
    Page = props.content;
  }

  const [logined, setlogined] = useState(true);
  console.log(props);

  axios.get("http://localhost:8080/check_login", { withCredentials: true })
      .then(response =>{
        console.log(response);
        if(response.data === false){
          setlogined(false);
        }
      })

  if(logined) return (
    <OuterLayOut>
      <OuterHeader>공정관리 프로그램</OuterHeader>
      <InnerLayOut>
        <InnerSider>
          <Menubar current={props.current} />
        </InnerSider>
        <Content style={{ padding: "0 24px" }}>
          <Page />
        </Content>
      </InnerLayOut>
      <OuterFooter>FI solution</OuterFooter>
    </OuterLayOut>
  );
  else {
    alert("세션이 만료되어 자동 로그아웃 됩니다");
    return <Redirect to={"/login"} />
  }
}

export default Navigator;
