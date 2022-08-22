import React, {useState} from "react";
import styled from "styled-components";
import {Divider, Table} from "antd";
import Radio from "antd/es/radio/radio";


const TableBox = styled.div`
  height: 100%;
  width: 98%;
`;

const StyledTable = styled(Table)`
{
  height: 100%;
}

  .ant-table-header .ant-table-cell {
    background-color: #80D0E1;
    text-align: center;
    padding: 9px;
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
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #FFF9F9;
`;


const TableList = (props) => {
    const {columns, data, selectRow, setSelectRow, f_id, setF_id} = props;
    const [selectionType, setSelectionType] = useState('checkbox');

    const rowSelection = {
        selectedRowKeys: selectRow,
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);

            setSelectRow(selectedRowKeys);

            if (selectedRows.length === 1) {
                props.setF_id(selectedRows[0].f_id);
                props.setO_code(selectedRows[0].o_code);
                props.setF_labelcode(selectedRows[0].f_labelcode);
                props.setO_name(selectedRows[0].o_name);
                props.setF_name(selectedRows[0].f_name);
                props.setF_pyear(selectedRows[0].f_pyear);
                props.setF_kperiod(selectedRows[0].f_kperiod);
                props.setF_db(selectedRows[0].f_db);
                props.setF_scan(selectedRows[0].f_scan);
                props.setB_num(selectedRows[0].b_num);
                props.setF_location(selectedRows[0].f_location);
                props.setF_kplace(selectedRows[0].f_kplace);
                props.setF_type(selectedRows[0].f_type);
                props.setF_typenum(selectedRows[0].f_typenum);
                props.setDisabledBTN(false); //하나만 선택 됐을시 삭제 버튼 활성화

                if (selectedRows[0].f_location !== null) {
                    if (selectedRows[0].f_location.length > 0) {
                        const locationAry = selectedRows[0].f_location.split("/"); //서가/층/열/번 구분해서 배열에 넣음
                        console.log(locationAry);
                        props.setF_location1(locationAry[0]);   //서가
                        props.setF_location2(locationAry[1]);   //층
                        props.setF_location3(locationAry[2]);   //열
                        props.setF_location4(locationAry[3]);   //번
                    }
                }
            }
            if (selectedRows.length === 0 || selectedRows.length >= 2) {
                props.setF_id(null);
                props.setO_code(null);
                props.setF_labelcode(null);
                props.setO_name(null);
                props.setF_name(null);
                props.setF_pyear(null);
                props.setF_kperiod(null);
                props.setF_db(null);
                props.setF_scan(null);
                props.setB_num(null);
                props.setF_location(null);
                props.setF_location1(null);
                props.setF_location2(null);
                props.setF_location3(null);
                props.setF_location4(null);
                props.setF_kplace(null);
                props.setF_type(null);
                props.setF_typenum(null);
                if (selectedRows.length >= 2) {
                    props.setDisabledBTN(true); //하나만 선택 됐을시 삭제 버튼 활성화
                }
            }
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
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    border
                    scroll={{y: '35vh'}}
                />
            </TableBox>
        </TableContainer>
    );
}

export default TableList;