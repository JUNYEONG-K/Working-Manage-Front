import React, { useState } from 'react';
import { Table, Radio, Divider } from 'antd';
import styled from "styled-components"
import axios from 'axios'
import {StyledTable} from "./OfficeListDesign";
import TableColumns from "../ColumnList";

let result;

function OfficeList(props){
    const getProcess = async (ocode) => {
        result = await axios.get(`http://localhost:8080/manage/workplace/plan/officeProcess?ocode=${ocode}`, {withCredentials: true})
        props.setProcess(result.data.process)
    }
    const { column } = props;
    const data = [];
    for(let i = 0; i < props.data.count; i++) {
        data.push({
            key: i,
            no: i+1,
            o_code: props.data.o_code[i],
            o_name: props.data.name[i],
            book_num: props.data.tot[i],
            // f_construct: 3,
            // f_scan: 3
            f_construct: props.data.db[i],
            f_scan: props.data.scan[i]
        })
    }
    const [selectionType, setSelectionType] = useState('radio');

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            getProcess(selectedRows[0].o_code)
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            // Column configuration not to be checked
            name: record.name,
        }),
    };

    return (
        <StyledTable
            rowSelection={{
                type: selectionType,
                ...rowSelection,
            }}
            style={{height: "100%"}}
            scroll={{x: "100%", y: "85%"}}
            id={"historytable"}
            //scroll={{ y: 'calc(52vh)'}}
            // rowSelection={{
            //     type: selectionType,
            //     ...rowSelection,
            // }}
            columns={TableColumns.officeList}
            dataSource={data}
        />
    );
};

export default OfficeList;