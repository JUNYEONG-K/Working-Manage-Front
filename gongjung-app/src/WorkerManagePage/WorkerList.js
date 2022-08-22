import React, {useState} from "react";
import axios from 'axios';
import TableColumns from "../WorkingPlacePage/ColumnList";
import { StyledTable, TableBox, TableContainer} from "./WorkerListDesign";
import 'antd/dist/antd.css'


const WorkerList = (props) => {
    const {columns} = props;
    const data = [];
    for(let i = 0; i < props.worker.count; i++) {
        data.push({
            key: i,
            no: i+1,
            w_id: props.worker.data[i].w_id,
            w_name: props.worker.data[i].w_name,
            w_ssn: props.worker.data[i].w_ssn,
            w_address: props.worker.data[i].w_address,
            w_tel: props.worker.data[i].w_tel,
            w_bank: props.worker.data[i].w_bank,
            w_account: props.worker.data[i].w_account,
            w_sdate: props.worker.data[i].w_sdate,
            w_edate: props.worker.data[i].w_edate,
            w_authority: props.worker.data[i].w_authority
        })
    }

    const [selectionType, setSelectionType] = useState('radio');

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            props.setData(selectedRows[0])
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            // Column configuration not to be checked
            name: record.name,
        }),
    };

    return (
        <TableContainer>
            <TableBox>
                <StyledTable
                    rowSelection={{
                        type: selectionType,
                        ...rowSelection,
                    }}
                    columns={TableColumns.workerList}
                    dataSource={data}
                    pagination={false}
                    border
                    scroll={{y: '35vh'}}
                />
            </TableBox>
        </TableContainer>
    );
}

export default WorkerList;