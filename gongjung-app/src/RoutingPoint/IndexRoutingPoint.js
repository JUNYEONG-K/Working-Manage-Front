import React, {useState} from "react";
import IndexPage from "../IndexPage/IndexPage";
import Navigator from "../Navigation/navigator";

function IndexRoutingPoint () {
    const [current, setCurrent] = useState('index');
    return (
        <Navigator content={IndexPage} current={current}/>
    )
}

export default IndexRoutingPoint;