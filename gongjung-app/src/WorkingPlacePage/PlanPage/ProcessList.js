import React, { useState } from 'react';
import { Table, Radio, Divider } from 'antd';
import styled from "styled-components"
import axios from 'axios'
import {StyledTable} from "./OfficeListDesign";
import ColumnList from "../ColumnList";


function ProcessList(props){
    const [selectionType, setSelectionType] = useState('checkbox');

    const data = [];
    data.push({
        no: 1,
        process: '색인입력',
        done: props.process[0]
    })
    data.push({
        no: 2,
        process: '색인검수',
        done: props.process[1]
    })
    data.push({
        no: 3,
        process: '업로드',
        done: props.process[2]
    })
    return (
        <StyledTable
            style={{height: "100%"}}
            scroll={{x: "100%", y: "85%"}}
            id={"processtable"}
            //scroll={{ y: 'calc(52vh)'}}
            // rowSelection={{
            //     type: selectionType,
            //     ...rowSelection,
            // }}
            columns={ColumnList.processList}
            dataSource={data}
        />
    );
};

export default ProcessList;