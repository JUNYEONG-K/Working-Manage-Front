import React, { useState } from 'react';
import { Table, Radio, Divider } from 'antd';
import styled from "styled-components"
import axios from 'axios'
import {StyledTable} from "./OfficeListDesign";
import TableColumns from "../ColumnList";


function PerformList(props){
    const { column } = props;
    const data = [];
    let test;
    let plan;
    let out;
    let inpu;
    let iin;
    for(let i = 0; i < 18; i++) {
        if(i == 0){
            test = '전수조사';
            plan = props.plan.p_search;
            out = props.output.search;
            inpu = props.input.search;
            iin = props.plan.p_searchw;
        } else if(i == 1) {
            test = '목록작업';
            plan = props.plan.p_list;
            out = props.output.list;
            inpu = props.input.list;
            iin = props.plan.p_listw;
        } else if(i == 2) {
            test = '반입반출';
            plan = props.plan.p_export;
            out = props.output.export;
            inpu = props.input.export;
            iin = props.plan.p_exportw;
        } else if(i == 3) {
            test = '분류';
            plan = props.plan.p_classify;
            out = props.output.classify;
            inpu = props.input.classify;
            iin = props.plan.p_classifyw;
        } else if(i == 4) {
            test = '분류검증';
            plan = props.plan.p_classifych;
            out = props.output.classifych;
            inpu = props.input.classifych;
            iin = props.plan.p_classifychw;
        } else if(i == 5) {
            test = '면표시';
            plan = props.plan.p_page;
            out = props.output.page;
            inpu = props.input.page;
            iin = props.plan.p_pagew;
        } else if(i == 6) {
            test = '면표시검증';
            plan = props.plan.p_pagech;
            out = props.output.pagech;
            inpu = props.input.pagech;
            iin = props.plan.p_pagechw;
        } else if(i == 7) {
            test = '스캔문서';
            plan = props.plan.p_scan;
            out = props.output.scan;
            inpu = props.input.scan;
            iin = props.plan.p_scanw;
        } else if(i == 8) {
            test = '스캔도면';
            plan = props.plan.p_scanpage;
            out = props.output.scanpage;
            inpu = props.input.scanpage;
            iin = props.plan.p_scanpagew;
        } else if(i == 9) {
            test = '이미지보졍';
            plan = props.plan.p_image;
            out = props.output.image;
            inpu = props.input.image;
            iin = props.plan.p_imagew;
        } else if(i == 10) {
            test = '이미지검수';
            plan = props.plan.p_imagech;
            out = props.output.imagech;
            inpu = props.input.imagech;
            iin = props.plan.p_imagechw;
        } else if(i == 11) {
            test = '색인입력';
            plan = props.plan.p_index;
            out = props.output.index;
            inpu = props.input.index;
            iin = props.plan.p_indexw;
        } else if(i == 12) {
            test = '색인검수';
            plan = props.plan.p_indexch;
            out = props.output.indexch;
            inpu = props.input.indexch;
            iin = props.plan.p_indexchw;
        } else if(i == 13) {
            test = '로딩';
            plan = props.plan.p_loading;
            out = props.output.loading;
            inpu = props.input.loading;
            iin = props.plan.p_loadingw;
        } else if(i == 14) {
            test = '재편철';
            plan = props.plan.p_reorg;
            out = props.output.reorg;
            inpu = props.input.reorg;
            iin = props.plan.p_reorgw;
        } else if(i == 15) {
            test = '보존상자편성';
            plan = props.plan.p_boxreorg;
            out = props.output.boxreorg;
            inpu = props.input.boxreorg;
            iin = props.plan.p_boxreorgw;
        } else if (i == 16) {
            test = '서가배치';
            plan = props.plan.p_place;
            out = props.output.place;
            inpu = props.input.place;
            iin = props.plan.p_placew;
        } else if (i == 17) {
            test = '기타';
            plan = props.plan.p_etc;
            out = props.output.etc;
            inpu = props.input.etc;
            iin = props.plan.p_etcw;
        }
        data.push({
            no: i+1,
            process: test,
            plan: plan,
            output: out,
            output_rate: (out/plan)*100+'%',
            input_plan: iin,
            input: inpu,
            input_rate: (inpu/iin)*100+'%'
        })
    }
    const [selectionType, SelectionType] = useState('checkbox');
    return (
        <StyledTable
            style={{height: "100%"}}
            scroll={{x: "100%", y: "85%"}}
            id={"performtable"}
            //scroll={{ y: 'calc(52vh)'}}
            // rowSelection={{
            //     type: selectionType,
            //     ...rowSelection,
            // }}
            columns={TableColumns.performList}
            dataSource={data}
        />
    );
};

export default PerformList;