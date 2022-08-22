import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Row, DatePicker } from "antd";
import './PeriodForm.css';
import axios from 'axios';

const PeriodForm = (props) => {

    const [sdate, setSdate] =  useState(null);
    const [edate, setEdate] = useState(null);

    const getData = async () => {
        const result = await axios.get(`http://localhost:8080/manage/workplace/search/period?sdate=${sdate}&edate=${edate}`, {withCredentials: true})
        props.setData(result.data)
    }

    const change = (e) => {
        let value = e.target.value;
        return value;
    }
    function onChange1(date, dateString) {
        setSdate(dateString)
    }
    function onChange2(date, dateString) {
        setEdate(dateString)
    }

    const onFinish = async (values) => {
        delete values.period;
        values.sdate = sdate;
        values.edate = edate;
    }
    return  (
        <Form
            id="PeriodForm"
            initialValues={{remember: true,}}
            onFinish={onFinish}
            autoComplete="off"
            style={{height: "15%", width: "98%"}}
        >
            <Row>
            <Form.Item
                label="날짜 범위"
                name="period"
            >
                <DatePicker name="w_sdate" onChange={onChange1} />
                <span> ~ </span>
                <DatePicker name="w_edate" onChange={onChange2} />
            </Form.Item>


            <Form.Item>
                <Button type="primary" htmlType="검색" onClick={(e)=>{getData()}}>
                    조회
                </Button>
            </Form.Item>
            </Row>
        </Form>
    )
}

export default PeriodForm;