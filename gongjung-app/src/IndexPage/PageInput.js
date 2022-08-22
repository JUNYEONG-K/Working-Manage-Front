import React from "react";
import {Input} from "antd";
import styled from "styled-components";

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputColumn = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1%;
`;

const PageInput = () =>{
    return (
        <div style={{marginTop:"5%"}}>
            <ul>
                <ListItem>
                    <div style={{width: "37%", marginLeft: "5%", textAlign: "left", lineHeight: "2.5"}}>첫페이지</div>
                    <div style={{width: "37%", marginLeft: "5%", textAlign: "left", lineHeight: "2.5"}}>끝페이지</div>
                    <div style={{width: "37%", marginLeft: "5%", textAlign: "left", lineHeight: "2.5"}}>페이지</div>
                </ListItem>
                <ListItem>
                    <InputColumn>
                        <Input style={{width:"60%"}}/>
                    </InputColumn>
                    <InputColumn>
                        <Input style={{width:"60%"}}/>
                    </InputColumn>
                    <InputColumn>
                        <Input style={{width:"60%"}}/>
                    </InputColumn>
                </ListItem>
                <ListItem>
                    <InputColumn>
                        <Input style={{width:"60%"}}/>
                    </InputColumn>
                    <InputColumn>
                        <Input style={{width:"60%"}}/>
                    </InputColumn>
                    <InputColumn>
                        <Input style={{width:"60%"}}/>
                    </InputColumn>
                </ListItem>
                <ListItem>
                    <InputColumn>
                        <Input style={{width:"60%"}}/>
                    </InputColumn>
                    <InputColumn>
                        <Input style={{width:"60%"}}/>
                    </InputColumn>
                    <InputColumn>
                        <Input style={{width:"60%"}}/>
                    </InputColumn>
                </ListItem>
            </ul>
        </div>
    );
}

export default PageInput