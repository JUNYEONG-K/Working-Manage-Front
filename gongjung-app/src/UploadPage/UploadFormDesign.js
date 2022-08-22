import styled from "styled-components";
import {Form} from "antd";

const UploadFormD = styled(Form)`
{
  height: 15%;
  width: 89.5%;
  margin-right: 10px;
}
  #second {
    width: 100%;
  }
`

const ItemOcode = styled(Form.Item)`
{
  height: 30%;
  margin-bottom: 30px;
}
  .ant-input{
    width: 47%;
    height: 25px;
  }
`

const ItemCheck = styled(Form.Item)`
{
  height: 8%;
  width: 15%;
  margin: 0;
}
`

const ItemUpload = styled(Form.Item)`
{
  height: 8%;
  width: 15%;
  margin: 0;
}
`

const ItemBox = styled(Form.Item)`
{
  height: 30%;
  width: 60%;
  margin-bottom: 0px;
}
  .ant-input{
    width: 40%;
    height: 25px;
  }
`

const ItemSearchButton = styled(Form.Item)`
{
  width: 10%;
  height: 8%;
  margin: 0;
}
  #searchdiv{
    //display: flex;
    //justifyContent: start;
  }
  #searchbutton{
    width: 100%;
  }
`


export {UploadFormD, ItemOcode, ItemCheck, ItemUpload, ItemBox, ItemSearchButton}