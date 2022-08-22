import React, {useState, useEffect} from "react";
import {Content, Header} from "antd/es/layout/layout";
import {Button, Form, Layout} from "antd";
import DailyForm from "./DailyForm";
import WorkingPlaceMenubar from "../WorkingPlaceMenu";
import DailyList from "./DailyList";
import axios from 'axios'
import TableColumns from "../ColumnList";
function DailyPage(props){

    const [data, setData] = useState({});
    const [worker, setWorker] = useState({})
    useEffect(() => {
        axios
            .get('http://localhost:8080/manage/worker', {withCredentials: true})
            .then(response=>setWorker(response.data))
    },[])
    return(
        <Layout style={{height: "100%", marginRight: "0px"}} >
            {/*<Header style={{backgroundColor: "white", height: "30px", border: "0", fontSize: "5px", padding:"0px" , margin: "0px"}}> 업로드 </Header>*/}
            <Header style={{backgroundColor: "White"}}>
                <WorkingPlaceMenubar/>
            </Header>
            <div style={{height: "100%", border: "0.5px solid #EDEDED", padding: "5px", background: "#FFFFFF", paddingLeft: "10px"}}>일일 작업<br/>
            <Content style={{height: "90%"}}>
                <div id={"container"} style={{display: "flex", alignItems:"end", justifyContent:"start"}}>
                    <DailyForm data={data} setData={setData} worker={worker}></DailyForm>
                </div>
                <div style={{height: "80%", padding: "10px 10px 0px 10px", margin: "17px 20px 20px 0", backgroundColor: "#FFF9F9", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                    <DailyList data={data} setData={setData}></DailyList>
                </div>
            </Content>
            </div>
        </Layout>
    );
};

export default DailyPage;