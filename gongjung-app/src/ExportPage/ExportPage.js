import React, {useState, useEffect} from "react";
import {Content} from "antd/es/layout/layout";
import {Button, Layout} from "antd";
import ExportSearch from "./ExportSearch";
import ExportComplete from "./ExportComplete";
import ExportCompleteList from "./ExportCompleteList";
import ExportSearchList from "./ExportSearchList";

function ExportPage(props) {
    const [data, setData] = useState([]);
    const [exportdata, setExportData] = useState([]);
    const [b_num, setB_num] = useState('');
    const [f_db, setF_db] = useState('');
    const [f_scan, setF_scan] = useState('');
    const [f_id, setF_id] = useState('');
    const [essential, setEssential] = useState(true);
    const [e_list, setE_list] = useState([]);
    const [selectRow, setSelectRow] = useState(null);
    const [dis_date, setDis_date]= useState(false);
    const [dis_box, setDis_box]= useState(false);

    useEffect(() => {
        // console.log('b_num change');
        // console.log(b_num);
    }, [b_num, f_db, f_scan])

    return (

        <Layout style={{height: "100%", marginRight: "0px"}}>
            <div style={{
                height: "100%",
                border: "0.5px solid #EDEDED",
                padding: "5px",
                background: "#FFFFFF",
                paddingLeft: "10px"
            }}>문서반출<br/>
                <Content style={{
                    background: "#FFF9F9",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    height: "47%",
                    margin: "15px 30px 0px 15px",
                    padding: "1%"
                }}>
                    <div id={"container"} style={{display: "flex", height: "28%",}}>
                        <ExportSearch data={data} setData={setData}
                                      b_num={b_num} f_db={f_db} f_scan={f_scan} f_id={f_id} e_list={e_list} essential={essential} selectRow={selectRow}
                                      setB_num={setB_num} setF_db={setF_db} setF_scan={setF_scan} setF_id={setF_id} setE_list={setE_list} setEssential={setEssential} setSelectRow={setSelectRow}
                        ></ExportSearch>
                    </div>

                    <Content style={{
                        height: "70%",
                    }}>
                        <div id={"container"} style={{paddingTop: "5px"}}>
                            <ExportSearchList data={data} setData={setData}
                                              b_num={b_num} f_db={f_db} f_scan={f_scan} f_id={f_id} e_list={e_list} essential={essential} selectRow={selectRow}
                                              setB_num={setB_num} setF_db={setF_db} setF_scan={setF_scan} setF_id={setF_id} setE_list={setE_list} setEssential={setEssential} setSelectRow={setSelectRow}
                            ></ExportSearchList>
                        </div>
                    </Content>
                </Content>
                <Content style={{
                    background: "#FFF9F9",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    height: "47%",
                    margin: "15px 30px 0px 15px",
                    padding: "1%"
                }}>
                    <div id={"container"} style={{display: "flex", height: "15%"}}>
                        <ExportComplete exportdata={exportdata} setExportData={setExportData} dis_date={dis_date} setDis_date={setDis_date} dis_box={dis_box} setDis_box={setDis_box}    ></ExportComplete>
                    </div>

                    <Content style={{
                        height: "85%",
                    }}>
                        <div id={"container"} style={{paddingTop: "5px"}}>
                            <ExportCompleteList exportdata={exportdata} setExportData={setExportData} dis_date={dis_date} setDis_date={setDis_date} dis_box={dis_box} setDis_box={setDis_box}></ExportCompleteList>
                        </div>
                    </Content>
                </Content>
            </div>
        </Layout>

    )
}

export default ExportPage;