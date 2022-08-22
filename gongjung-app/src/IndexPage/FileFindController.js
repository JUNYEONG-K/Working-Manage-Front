import React, {Component} from "react";
import styled from "styled-components";
import {Button, Input} from "antd";

const FinderContainer = styled.div`
  width: 95%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #E9E9E9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const FirstRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SecondRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SmallInput =styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center;
`;

const LargeInput =styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  align-items: center;
`;

const FileFindController = () =>{
    return (
        <FinderContainer>
            <FirstRow>
                <LargeInput>
                    <span style={{width: "25%"}}>* 기관코드</span>
                    <Input/>
                </LargeInput>
                <div>
                    (<Input style={{width: "40%"}}/>)
                </div>
                <div>
                    <Button>기관코드찾기</Button>
                </div>
            </FirstRow>
            <SecondRow>
                <SmallInput>
                    <span style={{width: "20%"}}>* 박스</span>
                    <Input/>
                </SmallInput>
                <SmallInput>
                    <span style={{width: "25%"}}>* 레이블</span>
                    <Input/>
                </SmallInput>
                <div>
                    <Button>검색</Button>
                    <Button>출력</Button>
                </div>
            </SecondRow>
        </FinderContainer>
    );
}

export default FileFindController;