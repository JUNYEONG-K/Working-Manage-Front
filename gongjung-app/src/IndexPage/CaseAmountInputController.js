import React from "react";
import {Button, Input, Select} from "antd";
import styled from "styled-components";
import {Table} from "antd";
import PageInput from "./PageInput";

const InputContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TableContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const InputColumn = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1%;
`;

const {Option} = Select;

const CaseAmountInputController = () => {
    return(
        <div>
            <InputContainer>
                <InputColumn >
                    <div style={{width: "40%", marginLeft: "5%", textAlign: "left", lineHeight: "2.5"}}>* 권호수 선택</div>
                    <Select style={{width: "7vw"}}>
                        <Option value={"1"}>1</Option>
                        <Option value={"2"}>2</Option>
                        <Option value={"3"}>3</Option>
                        <Option value={"4"}>4</Option>
                    </Select>
                </InputColumn>
                <InputColumn>
                    <div style={{width: "35%", marginLeft: "5%", textAlign: "left", lineHeight: "2.5"}}>* 건수</div>
                    <Input />
                </InputColumn>
                <Button>쪽수입력</Button>
            </InputContainer>
            <TableContainer>
                <PageInput />
            </TableContainer>
        </div>
    );
}

export default CaseAmountInputController;