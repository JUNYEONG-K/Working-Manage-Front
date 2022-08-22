import styled from "styled-components";
import {Table} from "antd";

const StyledTable = styled(Table)`
    .ant-table-wrapper {
        height: 100%;
        max-height: 100%;
        clear: both;
        max-width: 100%;
    }
    .ant-spin-nested-loading{
      height: 100%;
      max-height: 100%;
      max-width: 100%;
      position: relative;
    }
    .ant-spin-container, .ant-table-container, .ant-table-content ,.ant-table-content table, .table-layout, .ant-layout{
      height: 100%;
    }
    .ant-table{
      height: 90%;
    }
    table{
      max-height: 100% !important;
      height: 100% !important;
      table-layout: auto !important;
    }
    .ant-table-header{
      height: 12%;
      max-height: 10%;
      overflow: auto scroll !important;
    }
    .ant-table-body{
      min-height: 88% !important;
      height: 88% !important;
    }
    .ant-table-row{
      min-height: 10%;
    }
`;

export { StyledTable }