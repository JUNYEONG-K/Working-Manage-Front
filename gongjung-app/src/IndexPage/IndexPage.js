import React, {Component} from "react";
import ImageController from "./ImageController";
import TableList from "./TableList";
import styled from "styled-components";
import TableColumns from "./TableColumns";
import CaseFileFindController from "./CaseFileFindController";
import InfoInputController from "./InfoInputController";
import FileFindController from "./FileFindController";
import {Table} from "antd";


const MainContainer = styled.div`
  width:100%;
  height: 100%;
  display: flex;
  background: white;
`;

const LeftContainer = styled.div`
  width:50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

const RightContainer = styled.div`
  width:50%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;



const objectData = [
    {
        key: '1',
        number: '1',
        label: '1102321',
        f_name: '강남구청 인사과',
    },{
        key: '2',
        number: '2',
        label: 32,
        file_name: 'New York No. 1 Lake Park',
    },{
        key: '3',
        number: '3',
        label: 32,
        file_name: 'New York No. 1 Lake Park',
    },{
        key: '4',
        number: '4',
        label: 32,
        file_name: 'New York No. 1 Lake Park',
    },
    {
        key: '5',
        number: '4',
        label: 32,
        file_name: 'New York No. 1 Lake Park',
    },
    {
        key: '6',
        number: '4',
        label: 32,
        file_name: 'New York No. 1 Lake Park',
    },
];

class IndexPage extends Component{
    render(){
        return (
            <MainContainer>
                <LeftContainer>
                    <ImageController/>
                    <TableList columns={TableColumns.objectList} data={objectData}/>
                    <TableList columns={TableColumns.fileList} data={objectData}/>
                    <TableList columns={TableColumns.caseList} data={objectData}/>
                </LeftContainer>
                <RightContainer>
                    <FileFindController/>
                    <CaseFileFindController/>
                    <InfoInputController/>
                </RightContainer>
            </MainContainer>
        );
    }
}

export default IndexPage;