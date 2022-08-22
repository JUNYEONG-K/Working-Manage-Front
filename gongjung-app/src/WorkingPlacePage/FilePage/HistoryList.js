import React, { useState } from 'react';
import { Table, Radio, Divider } from 'antd';
import styled from "styled-components"
import axios from 'axios'
import { StyledTable, TableBox, TableContainer } from "./HistoryListDesign";
import TableColumns from "../ColumnList";

function HistoryList(props){
    const { column } = props;
    const data = [];
    for(let i = 0; i < props.data.count; i++){
        data.push({
            label: props.data.data[i].f_labelcode,
            F_name: props.data.data[i].f_name,
            O_name: props.data.data[i].o_name,
            F_complete: props.data.data[i].f_complete,
            F_check: props.data.data[i].f_check,
        })
    }
    const [selectionType, setSelectionType] = useState('checkbox');
    return (
        <TableContainer>
            <TableBox>
                <StyledTable
                    style={{height: "100%"}}
                    scroll={{x: "100%", y: "85%"}}
                    id={"historytable"}
                    //scroll={{ y: 'calc(52vh)'}}
                    // rowSelection={{
                    //     type: selectionType,
                    //     ...rowSelection,
                    // }}
                    columns={TableColumns.historyList}
                    dataSource={data}
                />
            </TableBox>
        </TableContainer>
    );
};

export default HistoryList;