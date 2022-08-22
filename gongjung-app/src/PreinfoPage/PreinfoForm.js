import React, {useEffect, useState} from 'react';
import styled from "styled-components";
// import {Button, Form, Label, Input, Row, Col, FormGroup, InputGroup, InputGroupAddon} from "reactstrap";


import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader, Table} from 'antd';
import {Label} from "reactstrap";

import {Mentions, Form, Button} from 'antd';
import Checkbox from "antd/es/checkbox/Checkbox";
import axios from "axios";
import data from "bootstrap/js/src/dom/data";

const {Option, getMentions} = Mentions;

const ButtonStyle = styled(Button)`
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(120, 152, 199, 0.49);
  background-color: #C5D8EF;
`;


const PreinfoForm = (props) => {
    const {
        o_code, setO_code,
        f_labelcode, setF_labelcode,
        o_name, setO_name,
        f_name, setF_name,
        f_pyear, setF_pyear,
        f_kperiod, setF_kperiod,
        f_db, setF_db,
        f_scan, setF_scan,
        f_location, setF_location,
        b_num, setB_num,
        f_kplace, setF_kplace,
        f_type, setF_type,
        f_typenum, setF_typenum,
        setSelectRow,
        f_id, setF_id,
        setF_location1, setF_location2, setF_location3, setF_location4
    } = props;


    const {Option} = Select;
    const change = (e) => {
        let value = e.target.value;
        console.log(e.target);
        console.log(value);
        return value;
    }

    //================초기화버튼================
    const onReset = () => {
        form.resetFields();
        props.setF_id(null);
        props.setO_code(null);
        props.setF_labelcode(null);
        props.setO_name(null);
        props.setF_name(null);
        props.setF_pyear(null);
        props.setF_kperiod(null);
        props.setF_db(null);
        props.setF_scan(null);
        props.setB_num(null);
        props.setF_location(null);
        props.setF_kplace(null);
        props.setF_type(null);
        props.setF_typenum(null);
        props.setF_location1("");
        props.setF_location2("");
        props.setF_location3("");
        props.setF_location4("");
    };

    //================저장버튼================
    const onFinish = async (values) => {
        //서가층열번 합치기
        let mergeLocation = props.f_location1 + '/' + props.f_location2 + '/' + props.f_location3 + '/' + props.f_location4;
        if(mergeLocation === "///" || mergeLocation === "null/null/null/null"){
            mergeLocation = "";
            values.f_location = mergeLocation;
        }else {
            // setF_location(mergeLocation);
            values.f_location = mergeLocation;
        }
        //f_id 존재로 정보 수정인지 구별 (있으면 수정임)
        if (f_id) {
            const PrePushFid = {
                f_id: props.f_id
            }
            values = {...values, ...PrePushFid};
            await onUpdate(values); //수정
        } else {
            await onSave(values); //처음 저장
        }
    };

    const onSave = async (values) => {
        //처음으로 저장
        await axios
            .post("http://localhost:8080/1/preinfo/file", values, {
                withCredentials: true,
                headers: {"Content-Type": "application/json"}
            })
            .then((response) => {
                //반환 받은 f_id 추가해서 넘겨줌
                const pushFid = {
                    f_id: response.data.f_id
                }
                values = {...values, ...pushFid};
                console.log(values);
                props.setData([...props.data, values]);

                onReset(); // 저장하고 입력칸 지우기
            });
    };

    useEffect(() => {
        console.log("=========useEffect called===========")
    }, [props.data]);
    const onUpdate = async (values) => {
        //정보 수정
        await axios
            .post("http://localhost:8080/1/preinfo/file", values, {
                withCredentials: true,
                headers: {"Content-Type": "application/json"}
            })
            .then((response) => {
                console.log(values);
                const willUpdateData = props.data.filter(item => item.f_id === values.f_id);
                let temp = props.data;
                let idx = temp.findIndex(i=>i.f_id === willUpdateData[0].f_id);
                temp.splice(idx, 1,values); //원래 인덱스 위치에 값 하나 지우고 받아온 값으로 변경

                // console.log("1")
                // onchangeData(temp); //!!!!!!!!!!!!!!! 완성 안됨 왜 바로 안바뀌는지 모르겠음 !!!!!!!!!!!!!!!1
                // console.log("4")
                props.setData([...temp]);
                onReset(); // 수정하고 입력칸 지우기
            });
    };
    function onchangeData(v) {
        console.log("2")
        props.setData(v);
        console.log("3")
    }

    //================검색버튼================
    const onSearch = async () => {
        await axios
            .get("http://localhost:8080/1/preinfo/file", {
                params: {
                    o_code: o_code,
                    f_labelcode: f_labelcode,
                    f_name: f_name,
                    f_pyear: f_pyear
                }
            })
            .then((response) => {
                props.setData(response.data);
                // console.log(response.data);
            });
        setSelectRow(null);
    }

    //================삭제버튼================
    const onDelete = async () => {
        await axios
            .delete(`http://localhost:8080/1/preinfo/file/${f_id}`, {
                withCredentials: true,
                headers: {"Content-Type": "application/json"}
            })
            .then((response) => {
                // console.log(response.data);
                const data = props.data.filter(item => item.f_id !== f_id);
                props.setData(data);
            });
    }

    //================출력버튼================
    const onPrint = () => {
        window.print();
    }


    const [form] = Form.useForm();
    React.useEffect(() => {
        form.setFieldsValue({o_code: props.o_code});
        form.setFieldsValue({f_labelcode: props.f_labelcode});
        form.setFieldsValue({o_name: props.o_name});
        form.setFieldsValue({f_name: props.f_name});
        form.setFieldsValue({f_pyear: props.f_pyear});
        form.setFieldsValue({f_kperiod: props.f_kperiod});
        form.setFieldsValue({f_db: props.f_db});
        form.setFieldsValue({f_scan: props.f_scan});
        form.setFieldsValue({b_num: props.b_num});
        form.setFieldsValue({f_kplace: props.f_kplace});
        form.setFieldsValue({f_type: props.f_type});
        form.setFieldsValue({f_typenum: props.f_typenum});
    }, [props.o_code, props.f_labelcode, props.o_name, props.f_name, props.f_pyear, props.f_kperiod, props.f_db, props.f_scan, props.b_num, props.f_location, props.f_kplace, props.f_type, props.f_typenum]);


    return (
        <div className={'pre_layout'} style={{width: "100%",}}>
            <Form form={form} layout="horizontal" style={{margin: "15px"}} onFinish={onFinish}>
                <h3 style={{fontWeight: "bold"}}>필수 입력 정보</h3>
                <div style={{float: "left", width: "100%",}}>
                    <Input.Group compact>
                        <Form.Item style={{width: "30.5%", marginRight: "1.5%",}}
                                   name="o_code"
                                   label={<label style={{color: "red"}}>기관코드</label>}
                                   rules={[{required: true, message: '필수 항목입니다.',},]}
                        >
                            {/*기관코드 검색 기능 만들어지면 다시 추가 할 예정*/}
                            {/*<Select*/}
                            {/*    onChange={(e) => {*/}
                            {/*        setO_code(e)*/}
                            {/*    }}*/}
                            {/*    style={{width: '60%'}} placeholder="등록한 기관에서 선택">*/}
                            {/*    <Option value="1234567">1234567</Option>*/}
                            {/*    <Option value="5555444">5555444</Option>*/}
                            {/*</Select>*/}
                            <Input.Search onChange={(e) => {
                                setO_code(change(e))
                            }} allowClear style={{width: '40%'}} placeholder="기관코드 찾기"/>
                        </Form.Item>

                        <Form.Item
                            name="o_name"
                            label="생산기관명"
                            rules={[{required: true, message: '필수 항목입니다.',}]}
                            style={{width: "23.5%", marginRight: "2%"}}
                        >
                            <Input onChange={(e) => {
                                setO_name(change(e))
                            }} allowClear placeholder="생산기관명"/>
                        </Form.Item>

                        <Form.Item
                            name="f_name"
                            label={<label style={{color: "red"}}>철제목</label>}
                            rules={[{required: true, message: '필수 항목입니다.',}]}
                            style={{width: "16.5%", marginRight: "2%"}}
                        >
                            <Input onChange={(e) => {
                                setF_name(change(e))
                            }} allowClear placeholder="철제목"/>
                        </Form.Item>

                        <Form.Item
                            name="f_labelcode"
                            label={<label style={{color: "red"}}>레이블</label>}
                            rules={[{required: true, message: '필수 항목입니다.',}]}
                            style={{width: "12%"}}
                        >
                            <Input
                                style={{width: "95%", marginRight: "10px"}}
                                onChange={(e) => {
                                    setF_labelcode(change(e));
                                }}
                                allowClear placeholder="레이블"/>
                        </Form.Item>
                        <Form.Item style={{width: "12%"}}>
                            <br/><br/>
                            <Checkbox>
                                레이블 자동저장
                            </Checkbox>
                        </Form.Item>
                    </Input.Group>


                    <div style={{float: "left", width: "74%"}}>
                        <Input.Group compact>
                            <Form.Item
                                name="f_pyear"
                                label={<label style={{color: "red"}}>생산년도</label>}
                                rules={[{required: true, message: '필수 항목입니다.',}]}
                                style={{width: "23%", marginRight: "3%"}}
                            >
                                <Input
                                    onChange={(e) => {
                                        setF_pyear(change(e))
                                    }}
                                    allowClear placeholder="생산년도"/>
                            </Form.Item>
                            <Form.Item
                                name="f_kperiod"
                                label="보존기간(년)"
                                rules={[{required: true, message: '필수 항목입니다.',}]}
                                style={{width: "15%", marginRight: "2%"}}
                            >
                                <Select
                                    onChange={(e) => {
                                        setF_kperiod(e)
                                    }}
                                    placeholder="보존기간(년)">
                                    <Option value="YEAR1">1 년</Option>
                                    <Option value="YEAR3">3 년</Option>
                                    <Option value="YEAR5">5 년</Option>
                                    <Option value="YEAR10">10 년</Option>
                                    <Option value="YEAR20">20 년</Option>
                                    <Option value="YEAR30">30 년</Option>
                                    <Option value="SEMI">준영구</Option>
                                    <Option value="PERMANENT">영구</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="f_db"
                                label="구축여부"
                                rules={[{required: true, message: '필수 항목입니다.',}]}
                                style={{width: "15%", marginRight: "2%"}}
                            >
                                <Select
                                    name="f_db"
                                    onChange={(e) => {
                                        setF_db(e);
                                    }}
                                    placeholder="구축여부">
                                    <Option value="YES">구축</Option>
                                    <Option value="NO">비구축</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="f_scan"
                                label="스캔여부"
                                rules={[{required: true, message: '필수 항목입니다.',}]}
                                style={{width: "15%", marginRight: "3%"}}
                            >
                                <Select
                                    name="f_scan"
                                    onChange={(e) => {
                                        setF_scan(e);
                                    }}
                                    placeholder="스캔여부">
                                    <Option value="YES">구축</Option>
                                    <Option value="NO">비구축</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="b_num"
                                label="박스번호"
                                rules={[{required: true, message: '필수 항목입니다.',}]}
                                style={{width: '22%'}}
                            >
                                <Input
                                    name="b_num"
                                    onChange={(e) => {
                                        setB_num(change(e));
                                    }}
                                    allowClear placeholder={"박스번호"}/>
                            </Form.Item>
                        </Input.Group>


                        <h3 style={{fontWeight: "bold", marginTop: "10px"}}>부가 입력 정보</h3>

                        <Input.Group compact>
                            <Form.Item
                                name="f_location"
                                label="위치(서가,층,열,번)"
                                style={{width: '23%', marginRight: "3%"}}
                            >
                                <Input onChange={(e) => {
                                    setF_location1(change(e))
                                    console.log("서" + props.f_location1);
                                }} style={{width: '25%'}} placeholder="서가" value={props.f_location1}/>
                                <Input onChange={(e) => {
                                    setF_location2(change(e))
                                    console.log("층" + props.f_location2);
                                }} style={{width: '25%'}} placeholder="층" value={props.f_location2}/>
                                <Input onChange={(e) => {
                                    setF_location3(change(e))
                                    console.log("열" + props.f_location3);
                                }} style={{width: '25%'}} placeholder="열" value={props.f_location3}/>
                                <Input onChange={(e) => {
                                    setF_location4(change(e))
                                    console.log("번" + props.f_location4);
                                }} style={{width: '25%'}} placeholder="번" value={props.f_location4}/>
                            </Form.Item>
                            <Form.Item
                                name="f_kplace"
                                label="보존장소"
                                style={{width: '23%', marginRight: "3%"}}
                            >
                                <Select
                                    onChange={(e) => {
                                        setF_kplace(e)
                                    }}
                                    placeholder="보존장소">
                                    <Option value="ARCHIVIST">기록관</Option>
                                    <Option value="PROFESSION">전문관리기관</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="f_type"
                                label="문서종류"
                                style={{width: '23%', marginRight: "3%"}}
                            >
                                <Select
                                    onChange={(e) => {
                                        setF_type(e)
                                    }} placeholder="문서종류">
                                    <Option value="GENERAL">일반문서</Option>
                                    <Option value="DRAWING">도면류</Option>
                                    <Option value="PHOTO">사진-필름류</Option>
                                    <Option value="VIDEO">녹음-동영상류</Option>
                                    <Option value="CARD">카드류</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="f_typenum"
                                label="분류번호"
                                style={{width: '22%'}}
                            >
                                <Input onChange={(e) => {
                                    setF_typenum(change(e))
                                }} allowClear placeholder="분류번호"/>
                            </Form.Item>
                        </Input.Group>
                    </div>
                    {/*/////////////////////////////////////////////////////////////////////////////////////////*/}
                    {/*버튼*/}
                    <div style={{float: "right", width: "23%", marginTop: "2.3%"}}>
                        <Input.Group>
                            <Form.Item>
                                <ButtonStyle style={{
                                    width: "45%", marginRight: "5%",
                                }} htmlType="submit" type="">
                                    저장
                                </ButtonStyle>
                                <ButtonStyle style={{
                                    width: "45%",
                                }} htmlType="button" onClick={onReset}>
                                    초기화
                                </ButtonStyle>
                            </Form.Item>
                        </Input.Group>
                        <Input.Group style={{margin: "2% 0"}}>
                            <Form.Item>
                                <ButtonStyle style={{
                                    width: "45%", marginRight: "5%",
                                }} htmlType="button" onClick={onSearch}>
                                    검색
                                </ButtonStyle>
                                <ButtonStyle style={{
                                    width: "45%",
                                }} htmlType="button" onClick={onDelete}  disabled={props.disabledBTN}>
                                    삭제
                                </ButtonStyle>
                            </Form.Item>
                        </Input.Group>
                        <Input.Group>
                            <Form.Item>
                                <ButtonStyle style={{
                                    width: "95%",
                                }} htmlType="button"  onClick={onPrint} >
                                    출력
                                </ButtonStyle>
                            </Form.Item>
                        </Input.Group>
                    </div>
                </div>

            </Form>
        </div>
    );

}

export default PreinfoForm;