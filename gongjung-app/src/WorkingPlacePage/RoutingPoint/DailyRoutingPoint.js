import React, {useState} from "react";
import Navigator from "../../Navigation/navigator";
import DailyPage from "../DailyPage/DailyPage";

function ExportRoutingPoint () {
    const [current, setCurrent] = useState('workingplace plan');
    return (
        <Navigator content={DailyPage} current={current}/>
    )
}

export default ExportRoutingPoint;