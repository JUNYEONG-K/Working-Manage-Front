import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Divider, Table} from "antd";
import Radio from "antd/es/radio/radio";


const TableBox = styled.div`
  height: 80%;
  width: 98%;
`;

const StyledTable = styled(Table)`
{
  height: 80%;
}

  .ant-table-header .ant-table-cell {
    padding: 9px;
    background-color: #80D0E1;
    text-align: center;
  }

  .ant-table-body .ant-table-cell {
    text-align: center;
  }

  .ant-table-cell {
    white-space: nowrap;
    overflow-wrap: normal;
    overflow-x: scroll;
    padding: 7px;


    &::-webkit-scrollbar {
      width: 3px;
      height: 7px;
      background: none;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(128, 208, 225, 0.19);
      border-radius: 30px;

    }

    &::-webkit-scrollbar-track {
      background: none;
    }
  }

`;

const TableContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const ExportSearchTableList = (props) => {
    const {columns, data, selectRow, setSelectRow} = props;
    const [selectionType, setSelectionType] = useState('checkbox');




    const rowSelection = {
        selectedRowKeys:selectRow,
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);

            setSelectRow(selectedRowKeys);

            if (selectedRows.length === 1) {
                props.setB_num(selectedRows[0].b_num);
                props.setF_db(selectedRows[0].f_db);
                props.setF_scan(selectedRows[0].f_scan);
                props.setF_id(selectedRows[0].f_id);
                props.setEssential(true);
            }
            if (selectedRows.length === 0 ||selectedRows.length >=2) {
                props.setB_num('');
                props.setF_db('');
                props.setF_scan('');
                props.setEssential(false);
            }


            // console.log('&&&&&&&&&&&&&&&&&&&&&&');
            // console.log(selectedRows);
            const today = new Date();
            const year = today.getFullYear();
            const month = ('0' + (today.getMonth() + 1)).slice(-2);
            const day = ('0' + today.getDate()).slice(-2);
            const dateString = year + '-' + month  + '-' + day;

            let ary = selectedRows.map(function (o){
                // console.log('o.f_id========='+o.f_id, o.f_db, o.f_scan, o.b_num);
                const obj = {f_id: o.f_id, f_exportdate: dateString, f_db: o.f_db, f_scan: o.f_scan, b_num: o.b_num};
                return obj;
            })
            props.setE_list(ary);

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
                        type: "chekbox",
                        ...rowSelection,
                    }}
                    id={"ExportSearchTable"}
                    columns={columns}
                    dataSource={props.data}
                    pagination={false}
                    border
                    scroll={{y: '20vh'}}
                />
            </TableBox>
        </TableContainer>
    );
}

export default ExportSearchTableList;