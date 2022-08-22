import React from "react";

const  TableColumns = {
    workerList: [
        {
            title: 'No.',
            dataIndex: 'no',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'id',
            dataIndex: 'w_id'
        },
        {
            title: '이름',
            dataIndex: 'w_name',
        },
        {
            title: '주민번호',
            dataIndex: 'w_ssn',
        },
        {
            title: '주소',
            dataIndex: 'w_address',
        },
        {
            title: '연락처',
            dataIndex: 'w_tel',
        },
        {
            title: '은행',
            dataIndex: 'w_bank',
        },
        {
            title: '계좌번호',
            dataIndex: 'w_account',
        },
        {
            title: '근무 시작',
            dataIndex: 'w_sdate',
        },
        {
            title: '근무 종료',
            dataIndex: 'w_edate',
        },
        {
            title: '구분',
            dataIndex: 'w_authority',
        },
    ],
    dailyList: [
        {
            title: '이름',
            dataIndex: 'w_name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: '날짜',
            dataIndex: 'm_date',
        },
        {
            title: '출근',
            dataIndex: 'm_attend',
        },
        {
            title: '야근',
            dataIndex: 'm_night',
        },
        {
            title: '지각',
            dataIndex: 'm_late',
        },
        {
            title: '조퇴',
            dataIndex: 'm_leave',
        },
        {
            title: '외출',
            dataIndex: 'm_out',
        },
        {
            title: '공정',
            dataIndex: 'm_process',
        },
        {
            title: '작업량',
            dataIndex: 'm_amount',
        },
        {
            title: '기타',
            dataIndex: 'm_etc',
        },
    ],
    historyList: [
        {
            title: '레이블 번호',
            dataIndex: 'label',
            render: (text) => <a>{text}</a>,
        },
        {
            title: '생산기관명',
            dataIndex: 'O_name',
        },
        {
            title: '철 제목',
            dataIndex: 'F_name',
        },
        {
            title: '색인입력(날짜)',
            dataIndex: 'F_complete',
        },
        {
            title: '색인입력 작업자',
            dataIndex: 'complete_list',
        },
        {
            title: '색인검수(날짜)',
            dataIndex: 'F_check',
        },
        {
            title: '색인검수 작업자',
            dataIndex: 'check_list',
        },
    ],
    periodList: [
        {
            title: '전수조사',
            dataIndex: 'search',
            // render: (text) => <a>{text}</a>,
        },
        {
            title: '목록작업',
            dataIndex: 'list',
        },
        {
            title: '반입반출',
            dataIndex: 'export',
        },
        {
            title: '분류',
            dataIndex: 'classify',
        },
        {
            title: '분류검증',
            dataIndex: 'classifych',
        },
        {
            title: '면표시',
            dataIndex: 'page',
        },
        {
            title: '면표시 검증',
            dataIndex: 'pagech',
        },
        {
            title: '스캔 문서',
            dataIndex: 'scan',
        },
        {
            title: '스캔 도면',
            dataIndex: 'scanpage',
        },
        {
            title: '이미지 보정',
            dataIndex: 'image',
        },
        {
            title: '이미지 검수',
            dataIndex: 'imagech',
        },
        {
            title: '색인입력',
            dataIndex: 'index',
        },
        {
            title: '색인 검수',
            dataIndex: 'indexch',
        },
        {
            title: '로딩',
            dataIndex: 'loading',
        },
        {
            title: '재편철',
            dataIndex: 'reorg',
        },
        {
            title: '보존상자편성',
            dataIndex: 'boxreorg',
        },
        {
            title: '서가배치',
            dataIndex: 'place',
        },
        {
            title: '기타작업',
            dataIndex: 'etc',
        },
    ],
    officeList: [
        {
            title: 'No.',
            dataIndex: 'no',
            render: (text) => <a>{text}</a>,
        },
        {
            title: '기관코드',
            dataIndex: 'o_code',
        },
        {
            title: '생산기관명',
            dataIndex: 'o_name',
        },
        {
            title: '등록권수',
            dataIndex: 'book_num',
        },
        {
            title: '구축대상',
            dataIndex: 'f_construct',
        },
        {
            title: '스캔대상',
            dataIndex: 'f_scan',
        },
    ],
    performList: [
        {
            title: 'No.',
            dataIndex: 'no',
            render: (text) => <a>{text}</a>,
        },
        {
            title: '공정',
            dataIndex: 'process',
        },
        {
            title: '계획(권)',
            dataIndex: 'plan',
        },
        {
            title: '실적',
            dataIndex: 'output',
        },
        {
            title: '진행율',
            dataIndex: 'output_rate',
        },
        {
            title: '인원계획',
            dataIndex: 'input_plan',
        },
        {
            title: '투입 인원',
            dataIndex: 'input',
        },
        {
            title: '투입율',
            dataIndex: 'input_rate'
        }
    ],
    processList: [
        {
            title: 'No.',
            dataIndex: 'no',
            render: (text) => <a>{text}</a>,
        },
        {
            title: '공정',
            dataIndex: 'process',
        },
        {
            title: '완료(권)',
            dataIndex: 'done',
        },
    ]
}

export default TableColumns;