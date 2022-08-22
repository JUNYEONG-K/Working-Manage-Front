import React, {useState} from "react";
import Navigator from "../Navigation/navigator";
import ExportPage from "../ExportPage/ExportPage";

function ExportRoutingPoint () {
    const [current, setCurrent] = useState('export');
    return (
        <Navigator content={ExportPage} current={current}/>
    )
}

export default ExportRoutingPoint;