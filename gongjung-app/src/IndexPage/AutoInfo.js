import React from "react";
import {Input} from "antd";
import styled from "styled-components";

const AutoInfoContainer  = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 1%;
  background-color: white;
  padding: 2%;
  width: 80%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const SecondRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ThirdRow = styled.div`
  display: flex;
  justify-content: space-around;
`;


const InputColumn  = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2%;
  width: 100%;
`;

const AutoInfo = () =>{
    return(
        <AutoInfoContainer>
            <InputColumn>
                <div style={{width: "10%", marginLeft: "5%", textAlign: "left", lineHeight: "2.5"}}>생산기관명</div>
                <Input style={{width: "60%"}}/>
            </InputColumn>
            <SecondRow>
                <InputColumn>
                    <div style={{width: "25%", marginLeft: "5%", textAlign: "left", lineHeight: "2.5", color:"red"}}>생산년도</div>
                    <Input style={{width: "30%"}} />
                </InputColumn>
                <InputColumn>
                    <div style={{width: "25%", marginLeft: "5%", textAlign: "left", lineHeight: "2.5", color:"red"}}>종료년도</div>
                    <Input style={{width: "30%"}} />
                </InputColumn>
            </SecondRow>
            <ThirdRow>
                <InputColumn>
                    <div style={{width: "33%", marginLeft: "5%", textAlign: "left", lineHeight: "2.5"}}>현재 권호수</div>
                    <Input style={{width: "20%"}} />
                </InputColumn>
                <InputColumn>
                    <div style={{width: "15%", marginLeft: "5%", textAlign: "left", lineHeight: "2.5"}}>건수</div>
                    <Input style={{width: "20%"}} />
                </InputColumn>
                <InputColumn>
                    <div style={{width: "15%", marginLeft: "5%", textAlign: "left", lineHeight: "2.5"}}>쪽수</div>
                    <Input style={{width: "30%"}} />
                </InputColumn>
            </ThirdRow>

        </AutoInfoContainer>
    );
}

export default AutoInfo;