import styled from "styled-components";
import {Table} from "antd";

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

const TableBox = styled.div`
  height: 100%;
  width: 98%;
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
export { StyledTable, TableBox, TableContainer }