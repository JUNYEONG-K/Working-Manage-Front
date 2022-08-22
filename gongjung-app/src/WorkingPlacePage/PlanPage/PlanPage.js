import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Content, Header} from "antd/es/layout/layout";
import {Button, Form, Layout} from "antd";
import PlanForm from "./PlanForm";
import WorkingPlaceMenubar from "../WorkingPlaceMenu";
import PerformList from "./PerformList";
import OfficeList from "./OfficeList";
import ProcessList from "./ProcessList";
import styled from "styled-components";
import TableColumns from "../ColumnList";
import PeriodList from "../PeriodPage/PeriodList";
import {MainContainer, LeftContainer, RightContainer} from "./PlanPageDesign";

function PlanPage(props){

    const [data, setData] = useState({});
    const [process, setProcess] = useState({});
    const [plan, setPlan] = useState({});
    const [output, setOutput] = useState({});
    const [input, setInput] = useState({})
    useEffect(() => {
        axios
            .get('http://localhost:8080/manage/workplace/plan/officeList', {withCredentials: true})
            .then(response=>setData(response.data))
        axios
            .get('http://localhost:8080/manage/workplace/plan', {withCredentials: true})
            .then(response=>setPlan(response.data))
        axios
            .get('http://localhost:8080/manage/workplace/search', {withCredentials: true})
            .then(response=>setOutput(response.data))
        axios
            .get('http://localhost:8080/manage/workplace/search/member', {withCredentials: true})
            .then(response=>setInput(response.data))
    }, [])

    return(
        <Layout style={{height: "100%", marginRight: "0px"}} >
            <Header style={{backgroundColor: "White"}}>
                <WorkingPlaceMenubar/>
            </Header>
            <div style={{height: "100%", border: "0.5px solid #EDEDED", padding: "5px", background: "#FFFFFF", paddingLeft: "10px"}}>계획<br/>
                <Content style={{height: "90%"}}>
                    <div id={"container"} style={{display: "flex", alignItems:"end", justifyContent:"start"}}>
                        <PlanForm data={data} setData={setData}></PlanForm>
                    </div>
                    <MainContainer>
                        <LeftContainer style={{height: "100%", padding: "10px 10px 0px 10px", margin: "17px 20px 20px 0", backgroundColor: "#FFF9F9", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                            <PerformList data={data} setData={setData} plan={plan} input={input} output={output}/>
                        </LeftContainer>
                        <RightContainer >
                            <div style={{height: "50%", padding: "10px 10px 0px 10px", margin: "17px 20px 20px 0", backgroundColor: "#FFF9F9", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                                <OfficeList data={data} setData={setData} process={process} setProcess={setProcess}/>
                            </div>
                            <div style={{height: "50%", padding: "10px 10px 0px 10px", margin: "17px 20px 20px 0", backgroundColor: "#FFF9F9", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                                <ProcessList data={data} setData={setData} process={process} setProcess={setProcess}/>
                            </div>
                        </RightContainer>
                    </MainContainer>
                </Content>
            </div>
        </Layout>
    );
}

export default PlanPage;