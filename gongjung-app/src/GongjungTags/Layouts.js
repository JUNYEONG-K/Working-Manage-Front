import styled from "styled-components";
import {Layout} from "antd";
import {Footer, Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

const OuterLayOut = styled(Layout)`
   {
    display: flex;
    height: 100% !important;
    min-height: 100% !important;
    max-height: 100% !important;
  }
`;

const InnerLayOut = styled(Layout)`
   {
    height: 92%;
    padding: 10px;
  }
`;

const OuterHeader = styled(Header)`
   {
    height: 5%;
    background: aliceblue;
    padding-right: 50px;
    font-size: large;
    color: black;
  }
`;
const OuterFooter = styled(Footer)`
   {
    padding: 0px;
    height: 3%;
    text-align: center;
    font-size: 15px;
  }
`;
const InnerSider = styled(Sider)`
   {
    flex: 0 0 8% !important;
    max-width: 8% !important;
    min-width: 8% !important;
    width: 8% !important;
    background: #80d0e1;
  }
`;

export { OuterLayOut, InnerLayOut, OuterFooter, OuterHeader, InnerSider}