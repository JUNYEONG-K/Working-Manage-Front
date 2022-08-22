import React, {useState} from 'react';
import {Table, Radio, Divider, Button, DatePicker} from 'antd';
import styled from "styled-components";
import TableColumns from "../ColumnList";
import DailyList from "./DailyList";
import axios from 'axios'

const ButtonStyle =  styled(Button)`
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(120, 152, 199, 0.49);
  background-color: #C5D8EF;
`;

function TestList(props) {
    const data = [];

    // for(let i =0; i<props.data.count; i++) {
    //     data.push({
    //         w_name: props.data.data[i].w_name,
    //         m_date: props.data.data[i].m_date,
    //         m_attend: props.data.data[i].m_attend,
    //         m_late: props.data.data[i].m_late,
    //         m_night: props.data.data[i].m_night,
    //         m_leave: props.data.data[i].m_leave,
    //         m_out: props.data.data[i].m_out,
    //         m_process: props.data.data[i].m_process,
    //         m_amount: props.data.data[i].m_amount
    //     })
    // }
    const getData = () => {
        // axios.get(`http://localhost:8080/1/manage/workplace/search/day?date=${}`)
    }
    return (
        <div style={{height: "100%"}}>
            <div style={{width: "33%", margin: "20px 1%"}}>
                <DatePicker />
                <ButtonStyle style={{
                    width: "30%", marginRight: "4%",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                }} htmlType="button">
                    조회
                </ButtonStyle>
            </div>
            <DailyList columns={TableColumns.dailyList} data={data}/>
        </div>
    );
};

export default TestList;