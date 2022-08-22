import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Row, Select, DatePicker } from "antd";
import './DailyForm.css';
import axios from 'axios';
const { Option } = Select;

const DailyForm = (props) => {
    const data = [];
    for(let i = 0; i < props.worker.count; i++) {
        data.push({
            w_name: props.worker.data[i].w_name,
            w_id: props.worker.data[i].w_id
        })
    }

    const [w_name, setW_name] = useState(null);
    const [m_date, setM_date] = useState(null);
    const [m_attend, setM_attend] = useState(null);
    const [m_night, setM_night] = useState(null);
    const [m_late, setM_late] = useState(null);
    const [m_leave, setM_leave] = useState(null);
    const [m_out, setM_out] = useState(null);
    const [m_process, setM_process] =  useState(null);
    const [m_amount, setM_amount] = useState(null);
    const [m_etc, setM_etc] = useState(null);
    const [worker, setWorker] = useState([]);

    const change = (e) => {
        let value = e.target.value;
        return value;
    }
    function onChange(date, dateString) {
        setM_date(dateString)
    }

    function getData() {
        axios.get(`http://localhost:8080/manage/workplace/search/day?date=${m_date}`, {withCredentials: true})
            .then((response)=>{
                props.setData(response.data)
            })
    }

    // 날짜별 작업량 저장
    const onFinish = async (values) => {
        delete values.m_date;
        values.m_date = m_date;
        await axios.post('http://localhost:8080/manage/workplace/day', values, {withCredentials: true})
            .then((response)=>{
                props.setData(response);
            })
    }
    // style={{height: "30%", margin: "0 7% 0 0", width: "30%"}}
    // style={{width: "40%", height: "25px"}}
    return (
        <Form
            id="DailyForm"
            initialValues={{remember: true,}}
            onFinish={onFinish}
            autoComplete="off"
            style={{height: "15%", width: "98%"}}
        >
            <Row>
                <Form.Item
                    label="날짜"
                    name="m_date"
                    rules={[
                        {
                            required: true,
                            message: '필수 항목입니다.',
                        },
                    ]}>
                    <DatePicker name="m_date" onChange={onChange} />
                </Form.Item>

                <Form.Item
                    label="작업자"
                    name="w_id"
                    rules={[
                        {
                            required: true,
                            message: '필수 항목입니다.',
                        },
                    ]}
                    style={{width: "10%"}}
                >
                    <Select>
                        {data.map((e) => {
                            return <Option value = {e.w_id}>{e.w_name}</Option>
                        })}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="출근"
                    name="m_attend"
                    rules={[
                        {
                            required: true,
                            message: '필수 항목입니다.',
                        },
                    ]}
                    style={{width: "10%"}}
                >
                    <Select>
                        <Option value = "1">출근</Option>
                        <Option value = "0">결석</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="지각"
                    name="m_late"
                    style={{width: "8%"}}
                >
                    <Input onChange={(e)=>{setM_late(change(e))}}  placeholder={"시간"}/>
                </Form.Item>

                <Form.Item
                    label="조퇴"
                    name="m_leave"
                    style={{width: "8%"}}
                >
                    <Input onChange={(e)=>{setM_leave(change(e))}}  placeholder={"시간"}/>
                </Form.Item>

                <Form.Item
                    label="외출"
                    name="m_out"
                    style={{width: "8%"}}
                >
                    <Input onChange={(e)=>setM_out(change(e))}  placeholder={"시간"}/>
                </Form.Item>

                <Form.Item
                    label="야근"
                    name="m_night"
                    style={{width: "8%"}}
                >
                    <Input onChange={(e)=>setM_night(change(e))}  placeholder={"시간"}/>
                </Form.Item>
            </Row>
            <Row>
                <Form.Item
                    label="공정"
                    name="m_process"
                    style={{width:"15%"}}
                >
                    <Select>
                        <Option value = "1">전수조사</Option>
                        <Option value = "2">목록작업</Option>
                        <Option value = "3">반입반출</Option>
                        <Option value = "4">분   류</Option>
                        <Option value = "5">분류검증</Option>
                        <Option value = "6">면 표시 </Option>
                        <Option value = "7">면표시검증</Option>
                        <Option value = "8">스   캔</Option>
                        <Option value = "9">스캔검증</Option>
                        <Option value = "10">이미지보정</Option>
                        <Option value = "11">이미지검증</Option>
                        <Option value = "12">색인입력</Option>
                        <Option value = "13">색인검증</Option>
                        <Option value = "14">로   딩</Option>
                        <Option value = "15">재 편 철</Option>
                        <Option value = "16">보존상자편성</Option>
                        <Option value = "17">서가배치</Option>
                        <Option value = "18">기   타</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="작업량"
                    name="m_amount"
                    style={{width: "10%"}}
                >
                    <Input onChange={(e)=>setM_amount(change(e))} />
                </Form.Item>

                <Form.Item
                    label="기타작업내용"
                    name="m_etc"
                >
                    <Input onChange={(e)=>setM_etc(change(e))} />
                </Form.Item>
            </Row>
            <Row>
                <Form.Item
                    style={{margin : "0 5% 0 0", height: "8%"}}
                >
                    <div style={{display: "flex", justifyContent:"start"}}>
                        <Button type="primary" htmlType="검색" onClick={(e)=>{
                            console.log(e);
                        }}>
                            저장
                        </Button>
                        <Button onClick={getData}>조회</Button>
                    </div>
                </Form.Item>
            </Row>
        </Form>
    )
}

export default DailyForm;