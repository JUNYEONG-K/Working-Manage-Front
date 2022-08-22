import React, {useState, useEffect} from "react";
import {Button, Form, Input, Row, DatePicker, InputNumber, Select, Col} from "antd";
import {Option} from "antd/es/mentions";
import moment from "moment";

import styled from "styled-components";
import axios from "axios";

const FormGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1.1fr 0.9fr 1fr;
  //background-color: red;
`;

const LeftItem = styled(Form)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
`;
const MiddleItem = styled(Form)`
  display: grid;
  grid-template-columns: 0.3fr 1.2fr 1fr 0.7fr;
  width: 100%;
`;

const RightItem = styled.div`
  display: grid;
  justify-content: end;
  grid-template-columns: 4.9fr 1.3fr 1.1fr;
`;

const ButtonStyle = styled(Button)`
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(120, 152, 199, 0.49);
  background-color: #C5D8EF;
`;


const ExportComplete = (props) => {
    const {Option} = Select;
    const {dis_date, setDis_date, dis_box, setDis_box} = props;
    const [first_date, setFirst_date] = useState(null);
    const [last_date, setLast_date] = useState(null);
    const [first_box, setFirst_box] = useState(null);
    const [last_box, setLast_box] = useState(null);

    const change = (e) => {
        let value = e.target.value;
        if (value === null || value === '') {
            return null;
        } else {
            console.log(e.target);
            console.log(value);
            return value;
        }
    }


    const onFinishDate = (values) => {
        delete values.search_by_date;
        values.first_date = first_date;
        values.last_date = last_date;
        setFirst_box(null);
        setLast_box(null);
        onSearchDate();
    }

    const onSearchDate = async () => {
        await axios
            .get("http://localhost:8080/1/export/search/date", {params: {sdate: first_date, edate: last_date}})
            .then((response) => {
                props.setExportData(response.data);
                console.log(response.data);
            });
    }

    const onFinishBox = (values) => {
        delete values.search_by_box;
        values.first_box = first_box;
        values.last_box = last_box;
        // setFirst_date('');
        // setLast_date('');
        // console.log("momentmomentmomentmomentmomentmomentmoment"+   moment(first_date));
        // console.log("momentmomentmomentmomentmomentmomentmoment"+   moment("","YYYY-MM-DD"));
        onSearchBox();
    }
    const onSearchBox = async () => {
        await axios
            .get("http://localhost:8080/1/export/search/box", {params: {sbox: first_box, ebox: last_box}})
            .then((response) => {
                props.setExportData(response.data);
                console.log(response.data);
            });
    }

    React.useEffect(() => {
        console.log("1: first_date===>>>>>>>>>>>>>>>>>>" + first_date);
        console.log("2: last_date===>>>>>>>>>>>>>>>>>>" + last_date);

    }, [first_date, last_date, first_box, last_box]);

    return (
        <FormGrid>
            <LeftItem style={{marginLeft: "2%"}} onFinish={onFinishDate}>
                <Form.Item name="search_by_date">
                    <DatePicker name="first_date"
                                onChange={(e, d) => {
                                    console.log("날짜~~~~~~~~~~~~"+d);
                                    if (d === null || d === '') {
                                        setFirst_date(null);
                                    } else {
                                        setFirst_date(d);
                                    }
                                }}
                                style={{width: '45%',}}
                                // value={moment("YYYY-MM-DD")}
                    />
                    <Input
                        style={{
                            width: 30,
                            pointerEvents: 'none',
                            backgroundColor: "#FFF9F9",
                            border: 0
                        }}
                        placeholder="~"
                        disabled
                    />
                    <DatePicker name="last_date"
                                onChange={(e, d) => {
                                    if (d === null || d === '') {
                                        setLast_date(null);
                                    } else setLast_date(d);
                                }}
                                style={{width: '45%',}}
                                // value={moment(last_date)}
                    />

                </Form.Item>
                <ButtonStyle name="dateSearchBtn" style={{width: "70%"}} htmlType="submit">
                    날짜 검색
                </ButtonStyle>
            </LeftItem>
            <MiddleItem onFinish={onFinishBox}>
                <div></div>
                <Form.Item name="search_by_box">
                    <Input name="first_box"
                           onChange={(e) => {
                               setFirst_box(change(e));
                           }}
                           style={{width: "37%",}}
                           value={first_box}
                    />
                    <Input
                        style={{
                            width: 30,
                            border: 0,
                            pointerEvents: 'none',
                            backgroundColor: "#FFF9F9",
                        }}
                        placeholder="~"
                        disabled
                    />
                    <Input
                        name="last_box"
                        onChange={(e) => {
                            setLast_box(change(e));
                        }}
                        style={{width: "37%",}}
                        value={last_box}
                    />
                </Form.Item>
                <ButtonStyle name="boxSearchBtn" style={{width: "70%"}} htmlType="submit">
                    박스 검색
                </ButtonStyle>
            </MiddleItem>
            <RightItem>
                <span>ㅤ</span>
                <ButtonStyle htmlType="button">
                    엑셀로 저장
                </ButtonStyle>
            </RightItem>

        </FormGrid>
    )
        ;

}
export default ExportComplete;

