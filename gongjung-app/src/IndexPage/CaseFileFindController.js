import React, {Component} from "react";
import {Button, Input, Select} from "antd";
import styled from "styled-components";

const {Option} = Select;

const ImageContainer = styled.div`
  width: 95%;
  height: 7%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #E9E9E9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
`;


class CaseFileFindController extends Component {
    render(){
        return (
            <ImageContainer>
                <Row>
                    <div className={"page_dropdown"} style={{width: "10vw"}}>
                        <Select style={{width:"10vw"}}>
                            <Option value={"1"}>1</Option>
                            <Option value={"2"}>2</Option>
                            <Option value={"3"}>3</Option>
                            <Option value={"4"}>4</Option>
                        </Select>
                    </div>

                    <div style={{width: "20vw"}}>
                        <Input />
                    </div>
                    <div>
                        <Button>검색</Button>
                    </div>
                </Row>
            </ImageContainer>
        );
    }
}

export default CaseFileFindController;