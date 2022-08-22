import React, {useState} from "react";
import PlanPage from '../PlanPage/PlanPage.js'
import Navigator from "../../Navigation/navigator";

function ExportRoutingPoint () {
    const [current, setCurrent] = useState('workingplace plan');
    return (
        <Navigator content={PlanPage} current={current}/>
    )
}

export default ExportRoutingPoint;