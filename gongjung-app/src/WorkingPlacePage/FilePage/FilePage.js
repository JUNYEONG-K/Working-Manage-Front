import React, {useState, useEffect} from "react";
import {Content, Header} from "antd/es/layout/layout";
import {Button, Form, Layout} from "antd";
import WorkingPlaceMenubar from "../WorkingPlaceMenu";
import HistoryList from "./HistoryList";
import TableColumns from "../ColumnList";
import axios from "axios";

function FilePage(props){

    const [data, setData] = useState({});
    useEffect(() => {
        axios
            .get('http://localhost:8080/manage/workplace/record', {withCredentials: true})
            .then(response=>setData(response.data))
    },[])

    return(
        <Layout style={{height: "100%", marginRight: "0px"}} >
            {/*<Header style={{backgroundColor: "white", height: "30px", border: "0", fontSize: "5px", padding:"0px" , margin: "0px"}}> 업로드 </Header>*/}
            <Header style={{backgroundColor: "White"}}>
                <WorkingPlaceMenubar/>
            </Header>
            <div style={{height: "100%", border: "0.5px solid #EDEDED", padding: "5px", background: "#FFFFFF", paddingLeft: "10px"}}>철별 이력<br/>
                <Content style={{height: "90%"}}>
                    <div style={{height: "90%", padding: "10px 10px 0px 10px", margin: "17px 20px 20px 0", backgroundColor: "#FFF9F9", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                        <HistoryList data={data} setData={setData} ></HistoryList>
                    </div>
                </Content>
            </div>
        </Layout>
    );
}

export default FilePage;