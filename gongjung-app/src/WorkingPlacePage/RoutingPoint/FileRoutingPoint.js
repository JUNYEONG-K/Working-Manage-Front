import React, {useState} from "react";
import FilePage from "../FilePage/FilePage";
import Navigator from "../../Navigation/navigator";

function ExportRoutingPoint () {
    const [current, setCurrent] = useState('workingplace plan');
    return (
        <Navigator content={FilePage} current={current}/>
    )
}

export default ExportRoutingPoint;