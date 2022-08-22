import React, {useState} from 'react';
import {Table, Radio, Divider, Button} from 'antd';
import ExportCompleteTableList from "./ExportCompleteTableList";
import ExportCompleteTableCol from "./ExportCompleteTableCol";



function ExportCompleteList(props) {
    const data = props.exportdata;
    for (let i = 0; i < data.length; i++) {
        data[i].key= i;
        data[i].no= i+1;
    }
    return (
        <div style={{margin:"10px 0px"}}>
            <ExportCompleteTableList columns={ExportCompleteTableCol.exportData} exportData={props.exportdata}/>
        </div>
    );
};

export default ExportCompleteList;