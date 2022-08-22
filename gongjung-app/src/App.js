import "./App.css";
import {Route, Redirect} from 'react-router-dom'
import UploadRoutingPoint from "./RoutingPoint/UploadRoutingPoint";
import {createGlobalStyle} from "styled-components";
import {Fragment, useState} from "react";
import HomeRoutingPoint from "./RoutingPoint/HomeRoutingPoint";
import PreinfoRoutingPoint from "./RoutingPoint/PreinfoRoutingPoint";
import ExportRoutingPoint from "./RoutingPoint/ExportRoutingPoint";
import IndexRoutingPoint from "./RoutingPoint/IndexRoutingPoint";
import WorkingPlaceRoutingPoint from "./RoutingPoint/WorkingPlaceRoutingPoint";
import WorkerRoutingPoint from "./RoutingPoint/WorkerRoutingPoint";
import PlanRoutingPoint from "./WorkingPlacePage/RoutingPoint/PlanRoutingPoint";
import PeriodRoutingPoint from "./WorkingPlacePage/RoutingPoint/PeriodRoutingPoint";
import DailyRoutingPoint from "./WorkingPlacePage/RoutingPoint/DailyRoutingPoint";
import FileRoutingPoint from "./WorkingPlacePage/RoutingPoint/FileRoutingPoint";
import Login from "./Navigation/Login";
import axios from "axios";


const GlobalStyle = createGlobalStyle`
  .ant-menu-item-selected {
    background-color: white;
    border-right: 1px solid #1890ff !important;
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: white;
    border-right: 2px solid #1890ff !important;
  }


  .ant-menu-vertical .ant-menu-item::after, .ant-menu-vertical-left .ant-menu-item::after, .ant-menu-vertical-right .ant-menu-item::after, .ant-menu-inline .ant-menu-item::after {
    border-right: 0 !important;
  }
`;


function App() {

  const [logined, setlogined] = useState(true);

  return (
    <Fragment>
      <GlobalStyle />
        <Route exact path={'/'} component={HomeRoutingPoint}/>
        <Route exact path={'/preinfo'} component={PreinfoRoutingPoint} />
        <Route exact path={'/export'} component={ExportRoutingPoint} />
        <Route exact path={'/index'} component={IndexRoutingPoint} />
        <Route exact path={'/upload'} component={UploadRoutingPoint} />
        <Route exact path={'/worker'} component={WorkerRoutingPoint} />
        <Route exact path={'/workingplace'} component={WorkingPlaceRoutingPoint} />
        <Route exact path={'/workingplace/plan'} component={PlanRoutingPoint} />
        <Route exact path={'/workingplace/periodwork'} component={PeriodRoutingPoint} />
        <Route exact path={'/workingplace/dailywork'} component={DailyRoutingPoint} />
        <Route exact path={'/workingplace/filework'} component={FileRoutingPoint} />
        <Route exact path={'/login'} component={Login} />
    </Fragment>
  );
}

export default App;
