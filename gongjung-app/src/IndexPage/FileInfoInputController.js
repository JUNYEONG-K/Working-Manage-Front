import React from "react";
import {Button, Input, Select} from "antd";
import styled from "styled-components";
import AutoInfo from "./AutoInfo";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
`;

const InputColumn = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1%;
`;

const {Option} = Select;

const FileInfoInputController = () => {
    return (
        <div>
            <FormContainer>
                <InputColumn>
                    <div style={{width: "10%", marginLeft: "5%", textAlign: "left", lineHeight: "2.5", color: "red"}}>*
                        철제목
                    </div>
                    <Input style={{width: "60%"}}/>
                </InputColumn>
                <InputColumn>
                    <div style={{width: "10%", marginLeft: "5%", textAlign: "left", lineHeight: "2.5"}}>* 총 권호수</div>
                    <Input style={{width: "10%"}}/>
                </InputColumn>
                <InputColumn>
                    <div style={{width: "10%", marginLeft: "5%", textAlign: "left", lineHeight: "2.5"}}>분류 번호</div>
                    <Input style={{width: "10%"}}/>
                </InputColumn>
                <InputColumn>
                    <div style={{width: "10%", marginLeft: "5%", textAlign: "left", lineHeight: "2.5"}}>* 담 당 자</div>
                    <Input style={{width: "13%"}}/>
                </InputColumn>
                <InputColumn>
                    <div style={{width: "10%", marginLeft: "5%", textAlign: "left", lineHeight: "2.5"}}>* 보존 기간</div>
                    <Select style={{width: "7vw"}}>
                        <Option value={"1"}>1</Option>
                        <Option value={"2"}>2</Option>
                        <Option value={"3"}>3</Option>
                        <Option value={"4"}>4</Option>
                    </Select>
                </InputColumn>
                <InputColumn>
                    <div style={{width: "10%", marginLeft: "5%", textAlign: "left", lineHeight: "2.5"}}>* 보존 방법</div>
                    <Select style={{width: "10vw"}}>
                        <Option value={"1"}>1</Option>
                        <Option value={"2"}>2</Option>
                        <Option value={"3"}>3</Option>
                        <Option value={"4"}>4</Option>ㅛ
                    </Select>
                </InputColumn>
                <InputColumn>
                    <div style={{width: "10%", marginLeft: "5%", textAlign: "left", lineHeight: "2.5"}}>* 보존 장소</div>
                    <Select style={{width: "7vw"}}>
                        <Option value={"1"}>1</Option>
                        <Option value={"2"}>2</Option>
                        <Option value={"3"}>3</Option>
                        <Option value={"4"}>4</Option>
                    </Select>
                </InputColumn>
                <InputColumn>
                    <div style={{width: "10%", marginLeft: "5%", textAlign: "left", lineHeight: "2.5"}}>* 기록물 형태</div>
                    <Input style={{width: "40%"}}/>
                </InputColumn>
                <Button style={{width: "10vw", marginLeft: "6%"}}>자동 정보 확인 >>></Button>
            </FormContainer>
            <div style={{display:"flex", justifyContent:"center"}}>
                <AutoInfo/>
            </div>
            <div style={{marginRight:"2%",marginTop:"2%",display:"flex", justifyContent:"flex-end"}}>
                <Button style={{marginRight:"1%"}}>저장</Button>
                <Button>삭제</Button>
            </div>
        </div>
    );
};

export default FileInfoInputController;