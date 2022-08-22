import styled from "styled-components";
import {Table} from "antd";

const StyledTable = styled(Table)`
    .ant-table-wrapper {
        height: 100%;
        max-height: 100%;
        min-height: 100%;
        clear: both;
    }
    .ant-spin-nested-loading{
      height: 100%;
      max-height: 100%;
      position: relative;
    }
    .ant-spin-container, .ant-table-container, .ant-table-content ,.ant-table-content table, .table-layout, .ant-layout,{
      height: 100%;
    }
    .ant-table{
      height: 90%;
      font-size: 14px;
    }
    //table{
    //  max-height: 100% !important;
    //  height: 100% !important;
    //  table-layout: auto !important;
    //}
    //.ant-table-header{
    //  max-height: 20%;
    //}
    .ant-table-body{
      min-height: 88% !important;
      height: 100% !important;
      max-height: 88%!important;
    }
    .ant-table-row{
      height: 10%;
    }
  #uploadtable{
    max-height: 95%;
  }
`;

export {StyledTable}