import React, {useState} from "react";
import Navigator from "../../Navigation/navigator";
import PeriodPage from "../PeriodPage/PeriodPage";

function ExportRoutingPoint () {
    const [current, setCurrent] = useState('workingplace plan');
    return (
        <Navigator content={PeriodPage} current={current}/>
    )
}

export default ExportRoutingPoint;