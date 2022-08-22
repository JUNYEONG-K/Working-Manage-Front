import React, {useState} from 'react';
import {Table, Radio, Divider, Button} from 'antd';
import {StyledTable} from "./PreinfoListDesign";
import TableList from "../PreinfoPage/TableList";
import TableColumns from "../PreinfoPage/TableColumns";
import styled from "styled-components";


const ButtonStyle = styled(Button)`
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(120, 152, 199, 0.49);
  background-color: #C5D8EF;
`;

function PreinfoList(props) {
    const data = props.data;
    for (let i = 0; i < data.length; i++) {
        data[i].key = i;
        data[i].no = i + 1;
    }
    return (
        <div style={{height: "100%"}}>
            <div style={{float: "right", width: "33%", margin: "20px 1%"}}>
                <ButtonStyle style={{
                    width: "30%", marginRight: "4%",
                }} htmlType="button">
                    폴더생성
                </ButtonStyle>
                <ButtonStyle style={{
                    width: "30%", marginRight: "4%",
                }} htmlType="button">
                    목록 불러오기
                </ButtonStyle>
                <ButtonStyle style={{
                    width: "30%",
                }} htmlType="button">
                    엑셀로 저장
                </ButtonStyle>
            </div>
            <TableList columns={TableColumns.preinfo} data={props.data}
                       o_code={props.o_code} f_labelcode={props.f_labelcode}
                       o_name={props.o_name} f_name={props.f_name} f_pyear={props.f_pyear} f_kperiod={props.f_kperiod}
                       f_db={props.f_db}
                       f_scan={props.f_scan} b_num={props.b_num} f_location={props.f_location} f_kplace={props.f_kplace}
                       f_type={props.f_type} f_typenum={props.f_typenum}
                       setO_code={props.setO_code} setF_labelcode={props.setF_labelcode} setO_name={props.setO_name}
                       setF_name={props.setF_name} setF_pyear={props.setF_pyear} setF_kperiod={props.setF_kperiod}
                       setF_db={props.setF_db} setF_scan={props.setF_scan} setB_num={props.setB_num}
                       setF_location={props.setF_location} setF_kplace={props.setF_kplace} setF_type={props.setF_type}
                       setF_typenum={props.setF_typenum} selectRow={props.selectRow} setSelectRow={props.setSelectRow}
                       f_id={props.f_id} setF_id={props.setF_id} disabledBTN={props.disabledBTN} setDisabledBTN={props.setDisabledBTN}
                       f_location1={props.f_location1} f_location2={props.f_location2} f_location3={props.f_location3} f_location4={props.f_location4}
                       setF_location1={props.setF_location1} setF_location2={props.setF_location2} setF_location3={props.setF_location3} setF_location4={props.setF_location4}
            />
        </div>
    );
};

export default PreinfoList;