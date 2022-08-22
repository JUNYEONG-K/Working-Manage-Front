import React, {useState} from "react";
import UploadPage from "../UploadPage/UploadPage";
import Navigator from "../Navigation/navigator";

function UploadRoutingPoint () {
    const [current, setCurrent] = useState('upload');
    return (
        <Navigator content={UploadPage} current={current}/>
    )
}

export default UploadRoutingPoint;