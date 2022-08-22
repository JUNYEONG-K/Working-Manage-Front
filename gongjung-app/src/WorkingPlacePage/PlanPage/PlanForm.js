import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Row, Select } from "antd";
import './PlanForm.css';
import axios from 'axios';
import styled from "styled-components";
const { Option } = Select;

const PlanForm = (props) => {

    const [p_search, setP_search] = useState(null);
    const [p_searchw, setP_searchw] = useState(null);
    const [p_list, setP_list] = useState(null);
    const [p_listw, setP_listw] = useState(null);
    const [p_export, setP_export] = useState(null);
    const [p_exportw, setP_exportw] = useState(null);
    const [p_classify, setP_classify] = useState(null);
    const [p_classifyw, setP_classifyw] =  useState(null);
    const [p_classifych, setP_classifych] = useState(null);
    const [p_classifychw, setP_classifychw] = useState(null);
    const [p_page, setP_page] = useState(null);
    const [p_pagew, setP_pagew] = useState(null);
    const [p_pagech, setP_pagech] = useState(null);
    const [p_pagechw, setP_pagechw] = useState(null);
    const [p_scan, setP_scan] = useState(null);
    const [p_scanw, setP_scanw] = useState(null);
    const [p_scanpage, setP_scanpage] = useState(null);
    const [p_scanpagew, setP_scanpagew] = useState(null);
    const [p_image, setP_image] = useState(null);
    const [p_imagew, setP_imagew] = useState(null);
    const [p_imagech, setP_imagech] = useState(null);
    const [p_imagechw, setP_imagechw] = useState(null);
    const [p_index, setP_index] = useState(null);
    const [p_indexw, setP_indexw] = useState(null);
    const [p_indexch, setP_indexch] = useState(null);
    const [p_indexchw, setP_indexchw] = useState(null);
    const [p_loading, setP_loading] = useState(null);
    const [p_loadingw, setP_loadingw] = useState(null);
    const [p_reorg, setP_reorg] = useState(null);
    const [p_reorgw, setP_reorgw] = useState(null);
    const [p_boxreorg, setP_boxreorg] = useState(null);
    const [p_boxreorgw, setP_boxreorgw] = useState(null);
    const [p_place, setP_place] = useState(null);
    const [p_placew, setP_placew] = useState(null);
    const [p_etc, setP_etc] = useState(null);
    const [p_etcw, setP_etcw] = useState(null);


    const change = (e) => {
        let value = e.target.value;
        return value;
    }

    const onFinish = async (values) => {
        delete values.search;
        delete values.list;
        delete values.export;
        delete values.classify;
        delete values.classifych;
        delete values.page;
        delete values.pagech;
        delete values.scan;
        delete values.scanpage;
        delete values.image;
        delete values.imagech;
        delete values.index;
        delete values.indexch;
        delete values.loading;
        delete values.reorg;
        delete values.boxreorg;
        delete values.place;
        delete values.etc;

        values.p_search = p_search;
        values.p_searchw = p_searchw;
        values.p_list = p_list;
        values.p_listw = p_listw;
        values.p_export = p_export;
        values.p_exportw = p_exportw;
        values.p_classify = p_classify;
        values.p_classifyw = p_classifyw;
        values.p_classifych = p_classifych;
        values.p_classifychw = p_classifychw;
        values.p_page = p_page;
        values.p_pagew = p_pagew;
        values.p_pagech = p_pagech;
        values.p_pagechw = p_pagechw;
        values.p_scan = p_scan;
        values.p_scanw = p_scanw;
        values.p_scanpage = p_scanpage;
        values.p_scanpagew = p_scanpagew;
        values.p_image = p_image;
        values.p_imagew = p_imagew;
        values.p_imagech = p_imagech;
        values.p_imagechw = p_imagechw;
        values.p_index = p_index;
        values.p_indexw = p_indexw;
        values.p_indexch = p_indexch;
        values.p_indexchw = p_indexchw;
        values.p_loading = p_loading;
        values.p_loadingw = p_loadingw;
        values.p_reorg = p_reorg;
        values.p_reorgw = p_reorgw;
        values.p_boxreorg = p_boxreorg;
        values.p_boxreorgw = p_boxreorgw;
        values.p_place = p_place;
        values.p_placew = p_placew;
        values.p_etc = p_etc;
        values.p_etcw = p_etcw;

        await axios.post('http://localhost:8080/manage/workplace/plan', values, {withCredentials: true})
            .then((response)=>{
                props.setData(response);
            })
    }

    return  (
        <Form
            id="PlanForm"
            initialValues={{remember: true,}}
            onFinish={onFinish}
            autoComplete="off"
            style={{width: "98%"}}
        >

            <Row>
            <Form.Item
                label="전수조사"
                name="search"
                style={{width: "20%"}}
            >
                <span> 계획</span>
                <Input onChange={(e)=>{setP_search(change(e));}} style={{width:"30%"}}/>
                <span> 인력</span>
                <Input onChange={(e)=>{setP_searchw(change(e));}} style={{width:"30%"}}/>
            </Form.Item>

            <Form.Item
                label="목록작업"
                name="list"
                style={{width: "20%"}}
            >
                <span> 계획</span>
                <Input onChange={(e)=>{setP_list(change(e));}} style={{width:"30%"}}/>
                <span> 인력</span>
                <Input onChange={(e)=>{setP_listw(change(e));}} style={{width:"30%"}}/>
            </Form.Item>

            <Form.Item
                label="반입반출"
                name="export"
                style={{width: "20%"}}
            >
                <span> 계획</span>
                <Input onChange={(e)=>{setP_export(change(e));}} style={{width:"30%"}}/>
                <span> 인력</span>
                <Input onChange={(e)=>{setP_exportw(change(e));}} style={{width:"30%"}}/>
            </Form.Item>

            <Form.Item
                label="분   류"
                name="classify"
                style={{width: "20%"}}
            >
                <span> 계획</span>
                <Input onChange={(e)=>{setP_classify(change(e));}} style={{width:"30%"}}/>
                <span> 인력</span>
                <Input onChange={(e)=>{setP_classifyw(change(e));}} style={{width:"30%"}}/>
            </Form.Item>

            <Form.Item
                label="분류검증"
                name="classifych"
                style={{width: "20%"}}
            >
                <span> 계획</span>
                <Input onChange={(e)=>{setP_classifych(change(e));}} style={{width:"30%"}}/>
                <span> 인력</span>
                <Input onChange={(e)=>{setP_classifychw(change(e));}} style={{width:"30%"}}/>
            </Form.Item>

            <Form.Item
                label="면 표시"
                name="page"
                style={{width: "20%"}}
            >
                <span> 계획</span>
                <Input onChange={(e)=>{setP_page(change(e));}} style={{width:"30%"}}/>
                <span> 인력</span>
                <Input onChange={(e)=>{setP_pagew(change(e));}} style={{width:"30%"}}/>
            </Form.Item>

            <Form.Item
                label="면표시검증"
                name="pagech"
                style={{width: "20%"}}
            >
                <span> 계획</span>
                <Input onChange={(e)=>{setP_pagech(change(e));}} style={{width:"30%"}}/>
                <span> 인력</span>
                <Input onChange={(e)=>{setP_pagechw(change(e));}} style={{width:"30%"}}/>
            </Form.Item>

            <Form.Item
                label="스캔문서"
                name="scan"
                style={{width: "20%"}}
            >
                <span> 계획</span>
                <Input onChange={(e)=>{setP_scan(change(e));}} style={{width:"30%"}}/>
                <span> 인력</span>
                <Input onChange={(e)=>{setP_scanw(change(e));}} style={{width:"30%"}}/>
            </Form.Item>

            <Form.Item
                label="스캔도면"
                name="scanpage"
                style={{width: "20%"}}
            >
                <span> 계획</span>
                <Input onChange={(e)=>{setP_scanpage(change(e));}} style={{width:"30%"}}/>
                <span> 인력</span>
                <Input onChange={(e)=>{setP_scanpagew(change(e));}} style={{width:"30%"}}/>
            </Form.Item>

            <Form.Item
                label="이미지보정"
                name="image"
                style={{width: "20%"}}
            >
                <span> 계획</span>
                <Input onChange={(e)=>{setP_image(change(e));}} style={{width:"30%"}}/>
                <span> 인력</span>
                <Input onChange={(e)=>{setP_imagew(change(e));}} style={{width:"30%"}}/>
            </Form.Item>

            <Form.Item
                label="이미지검수"
                name="imagech"
                style={{width: "20%"}}
            >
                <span> 계획</span>
                <Input onChange={(e)=>{setP_imagech(change(e));}} style={{width:"30%"}}/>
                <span> 인력</span>
                <Input onChange={(e)=>{setP_imagechw(change(e));}} style={{width:"30%"}}/>
            </Form.Item>

            <Form.Item
                label="색인입력"
                name="index"
                style={{width: "20%"}}
            >
                <span> 계획</span>
                <Input onChange={(e)=>{setP_index(change(e));}} style={{width:"30%"}}/>
                <span> 인력</span>
                <Input onChange={(e)=>{setP_indexw(change(e));}} style={{width:"30%"}}/>
            </Form.Item>

            <Form.Item
                label="색인검수"
                name="indexch"
                style={{width: "20%"}}
            >
                <span> 계획</span>
                <Input onChange={(e)=>{setP_indexch(change(e));}} style={{width:"30%"}}/>
                <span> 인력</span>
                <Input onChange={(e)=>{setP_indexchw(change(e));}} style={{width:"30%"}}/>
            </Form.Item>

            <Form.Item
                label="로딩"
                name="loading"
                style={{width: "20%"}}
            >
                <span> 계획</span>
                <Input onChange={(e)=>{setP_loading(change(e));}} style={{width:"30%"}}/>
                <span> 인력</span>
                <Input onChange={(e)=>{setP_loadingw(change(e));}} style={{width:"30%"}}/>
            </Form.Item>

            <Form.Item
                label="재편철"
                name="reorg"
                style={{width: "20%"}}
            >
                <span> 계획</span>
                <Input onChange={(e)=>{setP_reorg(change(e));}} style={{width:"30%"}}/>
                <span> 인력</span>
                <Input onChange={(e)=>{setP_reorgw(change(e));}} style={{width:"30%"}}/>
            </Form.Item>

            <Form.Item
                label="보존상자편성"
                name="boxreorg"
                style={{width: "20%"}}
            >
                <span> 계획</span>
                <Input onChange={(e)=>{setP_boxreorg(change(e));}} style={{width:"30%"}}/>
                <span> 인력</span>
                <Input onChange={(e)=>{setP_boxreorgw(change(e));}} style={{width:"30%"}}/>
            </Form.Item>

            <Form.Item
                label="서가배치"
                name="place"
                style={{width: "20%"}}
            >
                <span> 계획</span>
                <Input onChange={(e)=>{setP_place(change(e));}} style={{width:"30%"}}/>
                <span> 인력</span>
                <Input onChange={(e)=>{setP_placew(change(e));}} style={{width:"30%"}}/>
            </Form.Item>

            <Form.Item
                label="기타작업"
                name="etc"
                style={{width: "20%"}}
            >
                <span> 계획</span>
                <Input onChange={(e)=>{setP_etc(change(e));}} style={{width:"30%"}}/>
                <span> 인력</span>
                <Input onChange={(e)=>{setP_etcw(change(e));}} style={{width:"30%"}}/>
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
                    </div>
                </Form.Item>
            </Row>
        </Form>
    )
}

export default PlanForm;