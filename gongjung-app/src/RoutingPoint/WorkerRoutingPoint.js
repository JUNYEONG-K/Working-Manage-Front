import React, {useState} from "react";
import WorkerPage from "../WorkerManagePage/WorkerPage";
import UploadPage from "../UploadPage/UploadPage";
import Navigator from "../Navigation/navigator";

function WorkerRoutingPoint () {
    const [current, setCurrent] = useState('worker');
    return (
        <Navigator content={WorkerPage} current={current}/>
    )
}

export default WorkerRoutingPoint;