import React, {useState} from 'react';
import {Table, Radio, Divider, Button} from 'antd';
import ExportSearchTableList from "./ExportSearchTableList";
import ExportSearchTableCol from "./ExportSearchTableCol";


function ExportSearchList(props) {
    const data = props.data;
    for (let i = 0; i < data.length; i++) {
        data[i].key= i;
        data[i].no= i+1;
    }
    return (
        <div style={{margin: "10px 0px"}}>
            <ExportSearchTableList columns={ExportSearchTableCol.exportData} data={props.data}
                                   b_num={props.b_num} f_db={props.f_db} f_scan={props.f_scan} f_id={props.f_id} e_list={props.e_list} essential={props.essential} selectRow={props.selectRow}
                                   setB_num={props.setB_num} setF_db={props.setF_db} setF_scan={props.setF_scan} setF_id={props.setF_id} setE_list={props.setE_list} setEssential={props.setEssential} setSelectRow={props.setSelectRow}/>
        </div>
    );
};

export default ExportSearchList;