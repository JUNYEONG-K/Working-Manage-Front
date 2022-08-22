import React, {Component, useState} from 'react';
import Navigator from "../Navigation/navigator";
import { withRouter, Redirect } from 'react-router-dom';
import UploadPage from "../UploadPage/UploadPage";
import axios from "axios";

function HomeRoutingPoint(props) {

    const [current, setCurrent] = useState('home');

    return (
            <Navigator content={null} current={current}/>
        )
}

export default HomeRoutingPoint;