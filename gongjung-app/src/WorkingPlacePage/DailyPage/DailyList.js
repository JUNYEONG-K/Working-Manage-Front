import React from 'react';
import { StyledTable, TableBox, TableContainer } from "./DailyListDesign";
import TableColumns from "../ColumnList";

function DailyList(props){

    const data = [];
    for(let i =0; i<props.data.count; i++) {
        data.push({
            w_name: props.data.data[i].w_name,
            m_date: props.data.data[i].m_date,
            m_attend: props.data.data[i].m_attend,
            m_late: props.data.data[i].m_late,
            m_night: props.data.data[i].m_night,
            m_leave: props.data.data[i].m_leave,
            m_out: props.data.data[i].m_out,
            m_process: props.data.data[i].m_process,
            m_amount: props.data.data[i].m_amount,
            m_etc: props.data.data[i].m_etc,
        })
    }
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
                    columns={TableColumns.dailyList}
                    dataSource={data}
                />
            </TableBox>
        </TableContainer>
    );
};

export default DailyList;