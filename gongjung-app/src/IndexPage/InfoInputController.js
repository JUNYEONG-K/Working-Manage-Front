import React from "react";
import {Tabs} from "antd";
import styled from "styled-components";
import FileInfoInputController from "./FileInfoInputController";
import CaseAmountInputController from "./CaseAmountInputController";


const StyledTabs = styled(Tabs)`
  
  {
    width: 95%; 
    height: 70%; 
    background:#FFF9F9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .ant-tabs-nav{
    background-color: white;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  }
  .ant-tabs-nav .ant-tabs-nav-wrap .ant-tabs-nav-list .ant-tabs-tab-active{
    background-color: #F3C2C2;
    border-color: #F3C2C2;
  }
  
`;

const { TabPane } = Tabs;
const InfoInputController = () => {
    return(
        <StyledTabs type="card" >
            <TabPane tab="철항목" key="1">
                <FileInfoInputController />
            </TabPane>
            <TabPane  tab="건수입력" key="2">
                <CaseAmountInputController />
            </TabPane>
            <TabPane tab="건항목" key="3">
                Content of Tab Pane 3
            </TabPane>
        </StyledTabs>
    );
}

export default InfoInputController;