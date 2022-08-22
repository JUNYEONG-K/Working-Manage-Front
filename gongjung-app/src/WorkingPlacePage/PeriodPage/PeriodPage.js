import React, {useState} from "react";
import {Content, Header} from "antd/es/layout/layout";
import {Button, Form, Layout} from "antd";
import PeriodForm from "./PeriodForm";
import WorkingPlaceMenubar from "../WorkingPlaceMenu";
import PeriodList from "./PeriodList";
import TableColumns from "../ColumnList";
function PlanPage(props){

    const [data, setData] = useState({});

    return(
        <Layout style={{height: "100%", marginRight: "0px"}} >
            {/*<Header style={{backgroundColor: "white", height: "30px", border: "0", fontSize: "5px", padding:"0px" , margin: "0px"}}> 업로드 </Header>*/}
            <Header style={{backgroundColor: "White"}}>
                <WorkingPlaceMenubar/>
            </Header>
            <div style={{height: "100%", border: "0.5px solid #EDEDED", padding: "5px", background: "#FFFFFF", paddingLeft: "10px"}}>기간별 공정<br/>
            <Content style={{height: "90%"}}>
                <div id={"container"} style={{display: "flex", alignItems:"end", justifyContent:"start"}}>
                    <PeriodForm data={data} setData={setData}></PeriodForm>
                </div>
                <div style={{height: "80%", padding: "10px 10px 0px 10px", margin: "17px 20px 20px 0", backgroundColor: "#FFF9F9", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                    <PeriodList data={data} setData={setData}></PeriodList>
                </div>
            </Content>
            </div>
        </Layout>
    );
}

export default PlanPage;