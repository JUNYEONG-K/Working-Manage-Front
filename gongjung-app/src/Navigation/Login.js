import { Button, Form, Input, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import styled from "styled-components";
import FisImg from "../Image/fislogo.png";
import Checkbox from "antd/es/checkbox/Checkbox";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import axios from "axios";
import { Redirect } from "react-router-dom";
import {useState} from "react";

const LoginHeader = styled(Header)`
   {
    height: 25vh;
    background: white;
  }
  div {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 60vw;
    margin: 0 auto;
    text-align: center;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
  }
  img {
    margin-top: 10vh;
    height: 10vh;
    width: 10vw;
  }
`;

const LoginContent = styled(Content)`
   {
    background: white;
  }
  > div {
    height: 60vh;
    display: flex;
    flex-direction: column;
    width: 30vw;
    margin-top: 10vh;
    //justify-content: center;
    margin-left: 35vw;
  }
`;

const LoginForm = styled(Form)`
   {
    border: #c4c4c4 solid 1px;
    border-radius: 7px;
  }
  .ant-form-item {
    margin-left: 5vw;
    margin-right: 5vw;
  }
  #nickname {
    height: 5vh;
  }
  .ant-input-password {
    height: 5vh;
  }
  button {
    height: 5vh;
  }
`;

const LoginFooter = styled(Footer)`
   {
    background: white;
  }
`;

function Login(props) {

    let onFinish = async function (data) {
        console.log(data);
        await axios
            .post("http://localhost:8080/login", data, { withCredentials: true })
            .then((response) => {
                console.log(response.data);
                if (response.data == "success") {
                    console.log("dfsdfs");
                    Setredirect(true);
                }
            });
    };

    console.log(props);

    const [redirect, Setredirect] = useState(false);
    const {logined, Setlogined} = props;

    console.log(redirect);

    if(redirect) return <Redirect to={"/"} />;
    else return (
    <Layout>
      <LoginHeader>
        <div>
          <img src={FisImg} />
          <h1>(주)FI SOLUTION 공정관리 프로그램</h1>
        </div>
      </LoginHeader>
      <LoginContent>
        <div>
          <LoginForm
            // name="basic"
            // labelCol={{
            //   span: 8,
            // }}
            // wrapperCol={{
            //   span: 16,
            // }}
            onFinish={onFinish}
            //onFinishFailed={onFinishFailed}
            //autoComplete="off"
          >
            <br />
            <br />
            <Form.Item
              name="nickname"
              rules={[
                {
                  required: true,
                  message: "아이디를 입력해주세요!",
                },
              ]}
            >
              <Input placeholder={" 아이디"} prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "비밀번호를 입력해주세요!",
                },
              ]}
            >
              <Input.Password
                placeholder={" 비밀번호"}
                prefix={<LockOutlined />}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                로그인
              </Button>
            </Form.Item>
          </LoginForm>
        </div>
      </LoginContent>
      <LoginFooter></LoginFooter>
    </Layout>
  );
}

export default Login;
