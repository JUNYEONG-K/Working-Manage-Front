import React, {useState} from "react";
import WorkingPlacePage from "../WorkingPlacePage/WorkingPlaceMenu";
import Navigator from "../Navigation/navigator";

function WorkingPlaceRoutingPoint () {
    const [current, setCurrent] = useState('working place');
    return (
        <Navigator content={WorkingPlacePage} current={current}/>
    )
}

export default WorkingPlaceRoutingPoint;