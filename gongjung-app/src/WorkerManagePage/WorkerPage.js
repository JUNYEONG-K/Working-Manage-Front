import React, { useState, useEffect } from "react";
import WorkerForm from "./WorkerForm";
import WorkerList from "./WorkerList"
import { Content } from "antd/es/layout/layout";
import {Button, Form, Layout} from "antd";
import TableColumns from "../WorkingPlacePage/ColumnList";
import axios from "axios";
function WorkerPage(props){

    const [data, setData] = useState({});
    const [worker, setWorker] = useState({});

    useEffect(() => {
        axios
            .get('http://localhost:8080/manage/worker', {withCredentials: true})
            .then(response=>setWorker(response.data))
    },[])
    // deps에 worker을 넣으면 저장, 삭제 버튼에 즉각적으로 반응하지만, 쿼리문 전송에 무한 루프에 빠지게 된다... 이것은 나의 딜레마..!

    return(
        <Layout style={{height: "100%", marginRight: "0px"}} >
            {/*<Header style={{backgroundColor: "white", height: "30px", border: "0", fontSize: "5px", padding:"0px" , margin: "0px"}}> 업로드 </Header>*/}
            <div style={{height: "100%", border: "0.5px solid #EDEDED", padding: "5px", background: "#FFFFFF", paddingLeft: "10px"}}>작업자 관리<br/>
                <Content style={{height: "90%"}}>
                    <div id={"container"} style={{display: "flex", alignItems:"end", justifyContent:"start"}}>
                        <WorkerForm data={data} setData={setData}></WorkerForm>
                    </div>
                    <div style={{height: "80%", padding: "10px 10px 0px 10px", margin: "17px 20px 20px 0", backgroundColor: "#FFF9F9", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                        <WorkerList data={data} setData={setData} worker={worker}></WorkerList>
                    </div>
                </Content>
            </div>
        </Layout>
    );
}

export default WorkerPage;