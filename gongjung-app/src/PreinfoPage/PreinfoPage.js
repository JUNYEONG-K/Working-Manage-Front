import React, {useState, useEffect} from "react";
import PreinfoForm from "./PreinfoForm";
import PreinfoList from "./PreinfoList";
import {Content} from "antd/es/layout/layout";
import {Button, Layout} from "antd";
import "./PreinfoForm.css";

function PreinfoPage(props) {
    const [data, setData] = useState([]);
    const [o_code, setO_code] = useState(null);
    const [f_labelcode, setF_labelcode] = useState(null);
    const [o_name, setO_name] = useState(null);
    const [f_name, setF_name] = useState(null);
    const [f_pyear, setF_pyear] = useState(null);
    const [f_kperiod, setF_kperiod] = useState(null);
    const [f_db, setF_db] = useState(null);
    const [f_scan, setF_scan] = useState(null);
    const [b_num, setB_num] = useState(null);
    const [f_location, setF_location] = useState(null);     //서가/층/열/번
    const [f_location1, setF_location1] = useState("");   //서가
    const [f_location2, setF_location2] = useState("");   //층
    const [f_location3, setF_location3] = useState("");   //열
    const [f_location4, setF_location4] = useState("");   //번
    const [f_kplace, setF_kplace] = useState(null);
    const [f_type, setF_type] = useState(null);
    const [f_typenum, setF_typenum] = useState(null);
    const [selectRow, setSelectRow] = useState(null);
    const [f_id, setF_id] = useState(null);
    const [disabledBTN, setDisabledBTN] = useState(false);

    useEffect(() => {
        // console.log('b_num change');
        // console.log(b_num);
    }, [data,setData,f_id])

    return (

        <Layout style={{height: "100%", marginRight: "0px"}}>
            <div style={{
                height: "100%",
                border: "0.5px solid #EDEDED",
                padding: "5px",
                background: "#FFFFFF",
                paddingLeft: "10px"
            }}>사전조사<br/>
                <Content style={{

                    background: "#dfe4ea",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    margin: "15px 30px 0px 15px"
                }}>
                    <div id={"container"} style={{display: "flex", alignItems: "end", justifyContent: "start"}}>
                        <PreinfoForm data={data} setData={setData} o_code={o_code} f_labelcode={f_labelcode}
                                     o_name={o_name} f_name={f_name} f_pyear={f_pyear} f_kperiod={f_kperiod} f_db={f_db}
                                     f_scan={f_scan} b_num={b_num} f_location={f_location}
                                     f_location1={f_location1} f_location2={f_location2} f_location3={f_location3} f_location4={f_location4}
                                     f_kplace={f_kplace} f_type={f_type} f_typenum={f_typenum}
                                     setO_code={setO_code} setF_labelcode={setF_labelcode} setO_name={setO_name}
                                     setF_name={setF_name} setF_pyear={setF_pyear} setF_kperiod={setF_kperiod}
                                     setF_db={setF_db} setF_scan={setF_scan} setB_num={setB_num} setF_location={setF_location}
                                     setF_location1={setF_location1} setF_location2={setF_location2} setF_location3={setF_location3} setF_location4={setF_location4}
                                     setF_kplace={setF_kplace} setF_type={setF_type}
                                     setF_typenum={setF_typenum} selectRow={selectRow} setSelectRow={setSelectRow}
                                     f_id={f_id} setF_id={setF_id} disabledBTN={disabledBTN} setDisabledBTN={setDisabledBTN}>
                        </PreinfoForm>
                    </div>
                </Content>
                <Content style={{
                    height: "55%",
                    background: "#FFF9F9",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    margin: "15px 30px 0px 15px"
                }}>
                    <div id={"container"} style={{height: "100%"}}>
                        <PreinfoList data={data} setData={setData} o_code={o_code} f_labelcode={f_labelcode}
                                     o_name={o_name} f_name={f_name} f_pyear={f_pyear} f_kperiod={f_kperiod} f_db={f_db}
                                     f_scan={f_scan} b_num={b_num} f_location={f_location}
                                     f_location1={f_location1} f_location2={f_location2} f_location3={f_location3} f_location4={f_location4}
                                     f_kplace={f_kplace} f_type={f_type} f_typenum={f_typenum}
                                     setO_code={setO_code} setF_labelcode={setF_labelcode} setO_name={setO_name}
                                     setF_name={setF_name} setF_pyear={setF_pyear} setF_kperiod={setF_kperiod}
                                     setF_db={setF_db} setF_scan={setF_scan} setB_num={setB_num} setF_location={setF_location}
                                     setF_location1={setF_location1} setF_location2={setF_location2} setF_location3={setF_location3} setF_location4={setF_location4}
                                     setF_kplace={setF_kplace} setF_type={setF_type}
                                     setF_typenum={setF_typenum} selectRow={selectRow} setSelectRow={setSelectRow}
                                     f_id={f_id} setF_id={setF_id} disabledBTN={disabledBTN} setDisabledBTN={setDisabledBTN}>
                        </PreinfoList>
                    </div>
                </Content>
            </div>
        </Layout>

    )
}

export default PreinfoPage;