import React, {useState} from "react";
import Navigator from "../Navigation/navigator";
import PreinfoPage from "../PreinfoPage/PreinfoPage";

function PreinfoRoutingPoint () {
    const [current, setCurrent] = useState('pre_info');
    return (
        <Navigator content={PreinfoPage} current={current}/>
    )
}

export default PreinfoRoutingPoint;