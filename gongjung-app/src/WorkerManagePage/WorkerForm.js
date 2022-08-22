import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Row, Select, DatePicker } from "antd";
import './WorkerForm.css';
import axios from 'axios';
import WorkerList from "./WorkerList";
const { Option } = Select;

const WorkerForm = (props) => {

    const [w_id, setW_id] = useState(null);
    const [w_name, setW_name] = useState(null);
    const [w_ssn, setW_ssn] = useState(null);
    const [w_address, setW_address] = useState(null);
    const [w_tel, setW_tel] = useState(null);
    const [w_bank, setW_bank] = useState(null);
    const [w_account, setW_account] = useState(null);
    const [w_authority, setW_authority] = useState(null);
    const [w_sdate, setW_sdate] =  useState(null);
    const [w_edate, setW_edate] = useState(null);

    let ref = React.createRef();

    const change = (e) => {
        let value = e.target.value;
        return value;
    }

    function onChange1(date, dateString) {
        setW_sdate(dateString)
    }
    function onChange2(date, dateString) {
        setW_edate(dateString)
    }

    const onFinish = async (values) => {
        delete values.period;
        values.w_id = props.data.w_id
        values.w_sdate = w_sdate;
        values.w_edate = w_edate;
        await axios.post('http://localhost:8080/manage/worker', values, {withCredentials: true})
            .then((response)=>{
                props.setData(response);
            })
    }

    const getData = async (values) => {
        const result = await axios.get('http://localhost:8080/manage/worker', {withCredentials: true})
        props.setData(result.data)
    }

    const onFill = () => {
        ref.current.setFieldsValue({
            w_name: props.data.w_name,
            w_ssn: props.data.w_ssn,
            w_tel: props.data.w_tel,
            w_bank: props.data.w_bank,
            w_account: props.data.w_account,
            w_authority: props.data.w_authority,
            w_sdate: props.data.w_sdate,
            w_edate: props.data.w_edate,
            w_address: props.data.w_address,
            w_id: props.data.w_id
        })
    }

    const onDelete = async () => {
        await axios.delete(`http://localhost:8080/manage/worker/${props.data.w_id}`, {withCredentials: true})
            .then((response) => {
                // getData();
            })
    }
    // style={{height: "30%", margin: "0 7% 0 0", width: "30%"}}
    // style={{width: "40%", height: "25px"}}

    return  (
        <Form
            id="WorkerForm"
            initialValues={{remember: true,}}
            onFinish={onFinish}
            autoComplete="off"
            style={{height: "15%", width:"98%"}}
            ref={ref}
        >
            <Row>
            <Form.Item
                label="이름"
                name="w_name"
                rules={[
                    {
                        required: true,
                        message: '필수 항목입니다.',
                    },
                ]}
            >
                <Input onChange={(e)=>{setW_name(change(e))}}/>
            </Form.Item>

            <Form.Item
                label="주민번호"
                name="w_ssn"
                rules={[
                    {
                        required: true,
                        message: '필수 항목입니다.',
                    },
                ]}
            >
                <Input onChange={(e)=>{setW_ssn(change(e))}}/>
            </Form.Item>

            <Form.Item
                label="주소"
                name="w_address"
                rules={[
                    {
                        required: true,
                        message: '필수 항목입니다.',
                    },
                ]}
            >
                <Input onChange={(e)=>setW_address(change(e))}/>
            </Form.Item>

            <Form.Item
                label="전화번호"
                name="w_tel"
                rules={[
                    {
                        required: true,
                        message: '필수 항목입니다.',
                    },
                ]}
            >
                <Input onChange={(e)=>{setW_tel(change(e))}}/>
            </Form.Item>

            <Form.Item
                label="은행"
                name="w_bank"
                rules={[
                    {
                        required: true,
                        message: '필수 항목입니다.',
                    },
                ]}
            >
                <Input onChange={(e)=>{setW_bank(change(e))}}/>
            </Form.Item>

            <Form.Item
                label="계좌번호"
                name="w_account"
                rules={[
                    {
                        required: true,
                        message: '필수 항목입니다.',
                    },
                ]}>
                <Input onChange={(e)=>setW_account(change(e))}/>
            </Form.Item>

            <Form.Item
                label="구분"
                name="w_authority"
                rules={[
                    {
                        required: true,
                        message: '필수 항목입니다.'
                    }
                ]}
                style={{width: "8%"}}
            >
                <Select>
                    <Option value = "WORKER">작업자</Option>
                    <Option value = "ADMIN">관리자</Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="날짜 범위"
                name="period"
            >
                <DatePicker name="w_sdate" onChange={onChange1} />
                <span> ~ </span>
                <DatePicker name="w_edate" onChange={onChange2} />
            </Form.Item>
            </Row>
            <Row>
                <Form.Item
                    style={{margin : "0 5% 0 0", height: "8%"}}
                >
                    <div style={{display: "flex", justifyContent:"start"}}>
                        <Button type="primary" htmlType="검색" onClick={(e)=>{
                            getData();
                        }}>
                            저장
                        </Button>
                        <Button onClick={(e)=>{onDelete()}}>
                            삭제
                        </Button>
                        <Button onClick={(e)=>{onFill()}}>
                            수정
                        </Button>
                    </div>
                </Form.Item>
            </Row>
        </Form>
    )
}

export default WorkerForm;