import React, {useState} from "react";
import styled from "styled-components";
import {Divider, Table} from "antd";
import Radio from "antd/es/radio/radio";


const TableBox = styled.div`
  height: 95%;
  width: 95%;
`;

const StyledTable = styled(Table)`
  .ant-table-header .ant-table-cell{
    background-color: #80D0E1;
    text-align: center;
  }
  
  .ant-table-body .ant-table-cell{
    text-align: center;
    padding: 7px;
  }
`;

const TableContainer = styled.div`
      width: 95%;
      height: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #FFF9F9;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;



const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name,
    }),
};


const TableList =(props) => {
    const {columns, data}=props;

    return (
        <TableContainer>
                <TableBox>
                    <StyledTable
                        rowSelection={{
                            type: "checkbox",
                            ...rowSelection,
                        }}
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                        border
                        scroll={{y:'15vh'}}
                    />
                </TableBox>
            </TableContainer>
        );
}

export default TableList;