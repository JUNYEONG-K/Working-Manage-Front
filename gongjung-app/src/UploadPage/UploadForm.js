import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox, Row } from "antd";
import "./UploadForm.css";
import axios from "axios";
import { SearchOutlined, UploadOutlined } from "@ant-design/icons";
import { DefaultButton } from "../GongjungTags/Buttons";
import {
  ItemBox,
  ItemCheck,
  ItemOcode,
  ItemSearchButton,
  ItemUpload,
  UploadFormD,
} from "./UploadFormDesign";

const process_level = {
  "12": "색인 입력",
  "13": "검수",
  "14": "로딩",
  "15": "업로드",
  "16": "최종 완료",
}

const UploadForm = (props) => {
  const [o_code, setO_code] = useState(null);
  const [s_box, setS_box] = useState(null);
  const [f_box, setF_box] = useState(null);
  const {uploadRow} = props;

  const change = (e) => {
    let value = e.target.value;
    console.log(e.target);
    console.log(value);
    return value;
  };

  const onFinish = async (values) => {
    delete values.box;
    delete values.O_code;
    if (values.check_include === undefined) values.check_include = false;
    if (values.upload_include === undefined) values.upload_include = false;
    values.office_code = o_code;
    values.s_box = s_box;
    values.e_box = f_box;
    while (values.s_box && values.s_box.length < 3) {
      values.s_box = "0" + values.s_box;
    }
    while (f_box && f_box.length < 3) {
      values.f_box = "0" + values.f_box;
    }
    setS_box(values.s_box);
    setF_box(values.e_box);
    await axios
      .post("http://localhost:8080/upload/search/box", values, { withCredentials: true })
      .then((response) => {
        for(let label of response.data){
          let level = label.f_process;
          console.log(level);
          label.f_process = process_level[level];
          console.log(label);
        }
        props.setData(response.data);
        console.log(response.data);
      });
    // 그 후에 ajax 로 요청 보내기
    // props.data = 받아온거
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div id={"UploadForm"}>
      <UploadFormD
        // labelCol={{span: 8,}}
        // wrapperCol={{span: 16,}}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <ItemOcode label="기관 코드" name="O_code">
          <Input
            id={"O_code"}
            onChange={(e) => {
              setO_code(change(e));
            }}
          />
          <span> </span>
          <Input
            onChange={(e) => {
              setO_code(change(e));
            }}
            placeholder={"직접입력"}
          />
        </ItemOcode>
        <Row id={"second"}>
          <ItemCheck
            name="check_include"
            valuePropName="checked"
            style={{ width: "15%", margin: 0, height: "8%" }}
          >
            <Checkbox>미검수 포함</Checkbox>
          </ItemCheck>

          <ItemUpload name="upload_include" valuePropName="checked">
            <Checkbox>업로드 포함</Checkbox>
          </ItemUpload>

          <ItemBox label="박스 범위 검색" name="box">
            <Input
              onChange={(e) => {
                setS_box(change(e));
              }}
            />
            <span> ~ </span>
            <Input
              onChange={(e) => {
                setF_box(change(e));
              }}
            />
          </ItemBox>

          <ItemSearchButton>
            <div id={"searchdiv"}>
              <DefaultButton
                id={"searchbutton"}
                onClick={(e) => {
                  console.log(e);
                }}
              >
                <SearchOutlined />
                검색
              </DefaultButton>
            </div>
          </ItemSearchButton>
        </Row>
      </UploadFormD>
      <DefaultButton
        style={{ width: "8.95%", marginBottom: "4px" }}
        onClick={async (e) => {
          console.log(uploadRow);
          await axios
              .post("http://localhost:8080/upload/create/file", uploadRow)
              .then((response) => {
                console.log(response);
              });
        }}
      >
        <UploadOutlined />
        업로드
      </DefaultButton>
    </div>
  );
};

export default UploadForm;
