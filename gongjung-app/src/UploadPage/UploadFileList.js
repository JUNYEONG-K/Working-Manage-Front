import React, { useState } from "react";
import { Table, Radio, Divider } from "antd";
import styled from "styled-components";
import { StyledTable } from "./UploadFileListDesigin";
import { DefaultButton } from "../GongjungTags/Buttons";

const columns = [
  {
    title: "No.",
    dataIndex: "key",
    fixed: "left",
    width: 50,
    render: (text) => <a>{text}</a>,
  },
  {
    title: "레이블",
    dataIndex: "f_labelcode",
    fixed: "left",
    width: 150,
  },
  {
    title: "생산기관명",
    dataIndex: "o_name",
    width: 100,
  },
  {
    title: "기관코드",
    dataIndex: "office",
    width: 150,
  },
  {
    title: "철 제목",
    dataIndex: "f_name",
    width: 200,
  },
  {
    title: "생산\n년도",
    dataIndex: "f_pyear",
    width: 100,
  },
  {
    title: ["보존\n기간"],
    dataIndex: "f_kperiod",
    width: 100,
  },
  {
    title: "스캔\n여부",
    dataIndex: "f_scan",
    width: 50,
  },
  {
    title: "박스\n번호",
    dataIndex: "b_num",
    width: 70,
  },
  {
    title: "서\n가",
    dataIndex: "suga",
    width: 50,
  },
  {
    title: "층",
    dataIndex: "cung",
    width: 50,
  },
  {
    title: "열",
    dataIndex: "yul",
    width: 50,
  },
  {
    title: "번",
    dataIndex: "bun",
    width: 50,
  },
  {
    title: "보존장소",
    dataIndex: "f_kplace",
    width: 100,
  },
  {
    title: "문서유형",
    dataIndex: "suga",
    width: 100,
  },
  {
    title: "분류번호",
    dataIndex: "suga",
    width: 100,
  },
  {
    title: "작업단계",
    dataIndex: "f_process",
    fixed: "right",
    width: 100,
  },
];

function UploadFileList(props) {
  const [selectionType, setSelectionType] = useState("checkbox");
  const {uploadRow, setUploadRow} = props

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          "selectedRows: ",
          selectedRows
      );
      let temp = {};
      temp.f_id = selectedRowKeys;
      setUploadRow(temp);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      no: record.no,
    }),
  };

  return (
    <pre style={{ height: "100%" }}>
      <StyledTable
        style={{ height: "100%" }}
        scroll={{ x: 1200, y: "100%" }}
        id={"uploadtable"}
        //scroll={{ y: 'calc(52vh)'}}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={props.data}
      />
    </pre>
  );
}

export default UploadFileList;
