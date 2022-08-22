import React, {useState, useEffect} from "react";
import {Button, Form, Input, Row, InputNumber, Select, Col} from "antd";
import {Option} from "antd/es/mentions";
import styled from "styled-components";
import axios from "axios";


const FormGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const LeftItem = styled(Form)`
  display: grid;
  grid-template-columns: 3fr 1fr 2fr;
  width: 100%;
`;

const RightItem = styled(Form)`
  display: grid;
  justify-content: end;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const LeftBottomItem = styled.div`
  display: grid;
`;

const RightTopItem = styled.div`
  display: grid;
  justify-content: end;
  grid-template-columns: 3fr 1fr 1fr 1fr 0.35fr;
`;

const ButtonStyle = styled(Button)`
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(120, 152, 199, 0.49);
  background-color: #C5D8EF;
`;

const ExportSearch = (props) => {
    const {selectRow, setSelectRow} = props;
    const [first_label, setFirst_label] = useState(null);
    const [last_label, setLast_label] = useState(null);


    useEffect(() => {
        if (first_label === "")
            setFirst_label(null);
        if (last_label === "")
            setLast_label(null);
    }, [first_label, last_label])

    const change = (e) => {
        let value = e.target.value;
        console.log(e.target);
        console.log(value);
        return value;
    }
    const {Option} = Select;

    const onSearch = async () => {
        console.log("first_label==" + first_label);
        console.log("last_label==" + last_label);
        await axios
            .get("http://localhost:8080/1/export/search/label", {params: {slabel: first_label, elabel: last_label}})
            .then((response) => {
                props.setData(response.data);
                console.log(response.data);
            });
        setSelectRow(null);
        props.setB_num('');
        props.setF_db('');
        props.setF_scan('');
    }

    const onFinish = (values) => {
        delete values.search_by_label;
        values.first_label = first_label;
        values.last_label = last_label;
        onSearch();
    }

    const onSave = async (values) => {
        // console.log('========e_list===========');
        // console.log(props.e_list);

        await axios
            .patch("http://localhost:8080/1/export/save", JSON.stringify({
                e_list: props.e_list
            }), {headers: {"Content-Type": "application/json"}, withCredentials: true})
            .then((response) => {
                console.log(response.data);
                console.log(values)
                onSearch();
            });
    }


    const onChange = (e) => {
        props.setB_num(e.target.value);
        props.setE_list([{...props.e_list[0], b_num: e.target.value}]);
    }

    const onChangeDB = (e) => {
        props.setF_db(e);
        props.setE_list([{...props.e_list[0], f_db: e}]);
    }

    const onChangeSCAN = (e) => {
        props.setF_scan(e);
        props.setE_list([{...props.e_list[0], f_scan: e}]);
    }

    //================출력버튼================
    const onPrint = () => {
        window.print();
    }


    const [form] = Form.useForm();
    React.useEffect(() => {
        form.setFieldsValue({
            b_num: props.b_num,
        });
        form.setFieldsValue({
            f_db: props.f_db,
        });
        form.setFieldsValue({
            f_scan: props.f_scan,
        });
    }, [props.b_num, props.f_db, props.f_scan]);


    return (

        <FormGrid>
            <LeftItem style={{marginLeft: "2%"}} onFinish={onFinish}>
                <Form.Item name="search_by_label">
                    <Input name="first_label" onChange={(e) => {
                        setFirst_label(change(e));
                    }} style={{width: "45%"}}/>
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
                    <Input name="last_label" onChange={(e) => {
                        setLast_label(change(e));
                    }} style={{width: "45%"}}/>
                </Form.Item>
                <ButtonStyle htmlType="submit" onClick={(e) => {
                    console.log(e);
                }}>
                    레이블 검색
                </ButtonStyle>
                <> </>
            </LeftItem>
            <RightTopItem>
                <span>ㅤ</span>
                <ButtonStyle style={{width: "80%"}} htmlType="button" onClick={onPrint}>
                    박스 출력
                </ButtonStyle>
                <ButtonStyle style={{width: "80%"}} htmlType="button" onClick={onPrint}>
                    철 출력
                </ButtonStyle>
                <ButtonStyle style={{width: "80%"}} htmlType="button" onClick={onPrint}>
                    모두 출력
                </ButtonStyle>
            </RightTopItem>
            <LeftBottomItem>ㅤ</LeftBottomItem>
            <RightItem form={form}>
                <Form.Item
                    name="b_num"
                    label="박스번호"
                    // rules={[{required: true, message: '필수 항목입니다.',}]}
                    rules={[{required: props.essential, message: '필수 항목입니다.',}]}
                    labelCol={{
                        span: 10,
                    }}
                    wrapperCol={{
                        span: 13,
                    }}
                >
                    <Input
                        name="b_num"
                        onChange={onChange}
                        disabled={!props.essential}
                    />
                </Form.Item>
                <Form.Item
                    name="f_db"
                    label="구축여부"
                    rules={[{required: props.essential, message: '필수 항목입니다.',}]}
                    labelCol={{
                        span: 12,
                    }}
                    wrapperCol={{
                        span: 12,
                    }}
                >
                    <Select
                        name="f_db"
                        onChange={onChangeDB}
                        disabled={!props.essential}
                    >
                        <Option value="YES">구축</Option>
                        <Option value="NO">비구축</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="f_scan"
                    label="스캔여부"
                    rules={[{required: props.essential, message: '필수 항목입니다.',}]}
                    labelCol={{
                        span: 12,
                    }}
                    wrapperCol={{
                        span: 12,
                    }}
                >
                    <Select
                        name="f_scan"
                        onChange={onChangeSCAN}
                        disabled={!props.essential}
                    >
                        <Option value="YES">구축</Option>
                        <Option value="NO">비구축</Option>
                    </Select>
                </Form.Item>
                <div>
                    <ButtonStyle
                        style={{
                            width: "50%",
                            marginLeft: "15%",
                        }}
                        htmlType="submit" type=""
                        onClick={onSave}
                    >
                        저장
                    </ButtonStyle>
                </div>
            </RightItem>
        </FormGrid>
    );

}
export default ExportSearch

