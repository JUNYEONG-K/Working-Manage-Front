import React, { useState } from 'react';
import { Table, Radio, Divider } from 'antd';
import styled from "styled-components"
import axios from 'axios'
import { StyledTable, TableBox, TableContainer} from "./PeriodListDesign";
import TableColumns from "../ColumnList";

function PeriodList(props){
    const { column } = props;
    const data = [];

    for (let i = 0; i < 1; i++) {
        data.push({
            search: props.data.search,
            list: props.data.list,
            export: props.data.export,
            classify: props.data.classify,
            classifych: props.data.classifych,
            page: props.data.page,
            pagech: props.data.pagech,
            scan: props.data.scan,
            scanpage: props.data.scanpage,
            image: props.data.image,
            imagech: props.data.imagech,
            index: props.data.index,
            indexch: props.data.indexch,
            loading: props.data.loading,
            reorg: props.data.reorg,
            boxreorg: props.data.boxreorg,
            place: props.data.place,
            etc: props.data.etc,
        });
    } // rowSelection object indicates the need for row selection
    return (
        <TableContainer>
            <TableBox>
                <StyledTable
                    style={{height: "100%"}}
                    scroll={{x: "100%", y: "85%"}}
                    id={"periodtable"}
                    //scroll={{ y: 'calc(52vh)'}}
                    // rowSelection={{
                    //     type: selectionType,
                    //     ...rowSelection,
                    // }}
                    columns={TableColumns.periodList}
                    dataSource={data}
                />
            </TableBox>
        </TableContainer>
    );
};

export default PeriodList;