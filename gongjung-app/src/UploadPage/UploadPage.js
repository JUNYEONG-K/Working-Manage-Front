import React, { useState } from "react";
import { Content, Header } from "antd/es/layout/layout";
import { Button, Form, Layout } from "antd";
import UploadForm from "./UploadForm";
import UploadFileList from "./UploadFileList";
import styled from "styled-components";
import { UploadOutlined } from "@ant-design/icons";
import {DefaultButton} from "../GongjungTags/Buttons";
import {InnerDiv, InnerDiv2, OuterDiv, OuterLayout} from "./UploadPageDesign";


const StyledContent = styled(Content)`
{}
`;

function UploadPage(props) {
  const [data, setData] = useState([]);
  const [uploadRow, setUploadRow] = useState({});

  return (
    <OuterLayout>
      <OuterDiv>
        업로드
        <br />
        <Content style={{ height: "89%"}}>
          <InnerDiv id={"container"}>
            <UploadForm uploadRow={uploadRow} data={data} setData={setData}></UploadForm>
          </InnerDiv>
          <InnerDiv2>
            <UploadFileList uploadRow={uploadRow} setUploadRow={setUploadRow} data={data} setData={setData}></UploadFileList>
          </InnerDiv2>
        </Content>
      </OuterDiv>
    </OuterLayout>
  );
}

export default UploadPage;
