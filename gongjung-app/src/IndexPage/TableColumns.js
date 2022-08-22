const TableColumns = {
    objectList: [
        {
            title: 'No.',
            dataIndex: 'number',
            width: " 8%"
        },
        {
            title: '레이블',
            dataIndex: 'label',
            width: " 15%"
        },
        {
            title: '사전조사 철제목',
            dataIndex: 'f_name',
            width: " 30%",
        },
        {
            title: '생산년도',
            dataIndex: 'f_pyear',
            width: " 13%",
        },
        {
            title: '보존기간',
            dataIndex: 'f_kperiod',
            width: " 13%",
        },
        {
            title: '박스번호',
            dataIndex: 'b_num',
            width: " 13%",
        },
        {
            title: '완료',
            dataIndex: 'f_complete',
            width: " 10%",
        },
        {
            title: '검수',
            dataIndex: 'f_check',
            width: " 10%",
        },
    ],
    fileList: [
        {
            title: 'No.',
            dataIndex: 'number',
            width: " 8%"
        },
        {
            title: '레이블',
            dataIndex: 'label',
            width: " 15%"
        },
        {
            title: '권호수',
            dataIndex: 'v_num',
            width: " 10%"
        },
        {
            title: '철 제목',
            dataIndex: 'f_name',
            width: " 30%"
        },
        {
            title: '생산년도',
            dataIndex: 'f_pyear',
            width: " 13%",
        },
        {
            title: '종료년도',
            dataIndex: 'f_eyear',
            width: " 13%",
        },
        {
            title: '보존기간',
            dataIndex: 'f_kperiod',
            width: " 13%",
        },
    ],
    caseList:[
        {
            title: 'No.',
            dataIndex: 'number',
            width: "8%"
        },
        {
            title: '생산(접수)일자',
            dataIndex: 'c_pdate',
            width: " 15%"
        },
        {
            title: '건제목',
            dataIndex: 'c_name',
            width: " 30%"
        },
        {
            title: '첫페이지',
            dataIndex: 'c_spage',
            width: " 13%"
        },
        {
            title: '끝페이지',
            dataIndex: 'c_epage',
            width: " 13%"
        },
        {
            title: '보존기간',
            dataIndex: 'c_kperiod',
            width: " 13%"
        },
        {
            title: '검수',
            dataIndex: 'c_check',
            width: " 10%"
        },
    ]
}

export default TableColumns;