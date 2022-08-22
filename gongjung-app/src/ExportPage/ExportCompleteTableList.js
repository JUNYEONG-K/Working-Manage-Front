import React, {useState} from "react";
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


const ExportCompleteTableList = (props) => {
    const {columns, exportData} = props;
    const [selectionType, setSelectionType] = useState('checkbox');

    return (
        <TableContainer>
            <TableBox>
                <StyledTable
                    rowSelection={{
                        type: "chekbox",
                        ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={exportData}
                    pagination={false}
                    border
                    scroll={{y: '26vh'}}
                />
            </TableBox>
        </TableContainer>
    );
}

export default ExportCompleteTableList;