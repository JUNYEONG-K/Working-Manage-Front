import styled from "styled-components";
import {Layout} from "antd";

const OuterDiv = styled.div`
     {
      height: 100%;
      border: 0.5px solid #ededed;
      padding: 5px;
      background: #ffffff;
      paddingleft: 10px;
    }
  `;

const OuterLayout = styled(Layout)`
     {
      height: 100%;
      marginright: 0px;
    }
  `;

const InnerDiv = styled.div`
     {
       display: flex;
       alignitems: end;
       justifycontent: start;
     }
  `;

const InnerDiv2 = styled.div`
     {
      height: 89%;
      padding: 10px 10px 0px 10px;
      margin: 15px 5px 0px 5px;
      background-color: #fff9f9;
      filter : drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
  `;

export {OuterLayout, OuterDiv, InnerDiv, InnerDiv2};