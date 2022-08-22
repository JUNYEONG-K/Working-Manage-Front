import React from "react";

const ExportCompleteTableCol = {

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
            width: "8%"
        },
        {
            title: '생산기관명',
            dataIndex: 'o_name',
            width: "12%"
        },
        {
            title: '기관코드',
            dataIndex: 'o_code',
            width: "9%"
        },
        {
            title: '철 제목',
            dataIndex: 'f_name',
            width: "18%"
        },
        {
            title: ['생산년도'],
            dataIndex: 'f_pyear',
            width: "7%"
        },
        {
            title: ['보존기간'],
            dataIndex: 'f_kperiod',
            width: "7%"
        },
        {
            title: ['구축여부'],
            dataIndex: 'f_db',
            width: "7%"
        },
        {
            title: ['스캔여부'],
            dataIndex: 'f_scan',
            width: "7%"
        },
        {
            title: ['박스번호'],
            dataIndex: 'b_num',
            width: "7%"
        },
        {
            title: '서가 / 층 / 열 / 번',
            dataIndex: 'f_location',
            width: "16%"
        },
        // {
        //     title: '서가',
        //     dataIndex: 'f_location1',
        //     width: "4%"
        // },
        // {
        //     title: '층',
        //     dataIndex: 'f_location2',
        //     width: "4%"
        // },
        // {
        //     title: '열',
        //     dataIndex: 'f_location3',
        //     width: "4%"
        // },
        // {
        //     title: '번',
        //     dataIndex: 'f_location4',
        //     width: "4%"
        // },
        {
            title: '보존장소',
            dataIndex: 'f_kplace',
            width: "8%"
        },
        {
            title: '문서유형',
            dataIndex: 'f_type',
            width: "8%"
        },
        {
            title: '분류번호',
            dataIndex: 'f_typenum',
            width: "8%"
        },

    ]
}

export default ExportCompleteTableCol;