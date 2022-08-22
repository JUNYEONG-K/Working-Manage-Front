import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from "axios";


const WorkingPlaceMenu = styled(Menu)`
`;

const WorkingPlaceMenuitem = styled(Menu.Item)`
{
  //font-family: Roboto;
  //font-style: normal;
  //font-weight: normal;
  //font-size: 12px !important;
  //line-height: 14px;
  //display: flex;
  //align-items: center;
  //align-content: center;
  //height: 50px;
  //
  border: 1px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 20px !important;
  float: left;
  text-align: center;
}`

// WorkingPlacePage  왜?
class WorkingPlaceMenubar extends React.Component {

    render() {
        return (
            <WorkingPlaceMenu
                class={"navigator"}
                >
                <WorkingPlaceMenuitem
                    key="plan"
                    >
                    <Link to={'/workingplace/plan'}>
                        작업장 계획
                    </Link>
                </WorkingPlaceMenuitem>

                <WorkingPlaceMenuitem
                    key="period"
                    >
                    <Link to={'/workingplace/periodwork'}>
                        기간별 공정
                    </Link>
                </WorkingPlaceMenuitem>

                <WorkingPlaceMenuitem
                    key="daily"
                    >
                    <Link to={'/workingplace/dailywork'}>
                        일일 작업
                    </Link>
                </WorkingPlaceMenuitem>

                <WorkingPlaceMenuitem
                    key="file"
                    >
                    <Link to={'/workingplace/filework'}>
                        철별 이력
                    </Link>
                </WorkingPlaceMenuitem>
            </WorkingPlaceMenu>
        )
    }

}

export default WorkingPlaceMenubar;