import React from "react";

const ExportSearchTableCol = {

    exportData: [
        {
            title: 'No.',
            dataIndex: 'no',
            render: (text) => <a>{text}</a>,
            width: "7%"
        },
        {
            title: '레이블',
            dataIndex: 'f_labelcode',
            width: "9%"
        },
        {
            title: '철 제목',
            dataIndex: 'f_name',
            width: "70%"
        },
        {
            title: '생산년도',
            dataIndex: 'f_pyear',
            width: "7%"
        },
        {
            title: '보존기간',
            dataIndex: 'f_kperiod',
            width: "7%"
        },

    ]
}

export default ExportSearchTableCol;