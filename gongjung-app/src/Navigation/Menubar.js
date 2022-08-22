import React from "react";
import "antd/dist/antd.css";
import {Menu} from "antd";
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    CalendarOutlined, UserOutlined,
} from "@ant-design/icons";
import "./Menubar.css";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Cookies from 'js-cookie';

const {SubMenu} = Menu;

const FisMenu = styled(Menu)`

`;
const FisMenuitem = styled(Menu.Item)`
{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px !important;
  line-height: 14px;
  display: flex;
  align-items: center;
  align-content: center;
  height: 50px;

  border: 1px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #000000;
  padding: 0 20px !important;
}
`;


const FisSubMenu = styled(Menu.SubMenu)`
{
  border: 1px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #000000;
}

  .ant-menu-item-group-title {
    padding: 0 !important;
    margin: 0 !important;
    height: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px !important;
    line-height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: solid 1px #61dafb;
  }
`;

const Infodiv = styled.div`
{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 15vh;
}
  div{
    display: flex;
  }
`

class menubar extends React.Component {

    SubmenuClick(e){
        console.log(e);
    }


    render() {
        console.log("rendered with : " + this.props.current);
        let username = Cookies.get('username');

        return (
            <FisMenu
                class={"navigator"}
                onClick={this.handleClick}
                selectedKeys={[this.props.current]}
                mode="inline"
                style={{height: "100%"}}
            >

                <Infodiv>
                    <div>안녕하세요 {username}님!</div>
                    <div> <UserOutlined style={{fontSize: "100px"}}/> </div>
                </Infodiv>

                <FisMenuitem
                    key="pre_info"
                    icon={<MailOutlined/>}
                >
                    <Link to={'/preinfo'}>
                        사전조사
                    </Link>
                </FisMenuitem>
                <FisMenuitem
                    key="export"
                    icon={<AppstoreOutlined/>}
                >
                    <Link to={'/export'}>
                        문서반출
                    </Link>
                </FisMenuitem>
                <FisMenuitem
                    key="index"
                    icon={<AppstoreOutlined/>}
                >
                    <Link to={'/index'}>
                        색인입력
                    </Link>
                </FisMenuitem>
                <FisMenuitem
                    key="upload"
                    icon={<AppstoreOutlined/>}
                >
                    <Link to={'/upload'}>
                        업로드
                    </Link>
                </FisMenuitem>
                <FisSubMenu onTitleClick={this.SubmenuClick} className={"fissubmenu"} key="management" icon={<CalendarOutlined/>} title="관리">
                    <Menu.ItemGroup title="목록">
                        <FisMenuitem key="worker">
                            <Link to={'/worker'}>
                                작업자 관리
                            </Link>
                        </FisMenuitem>
                        <FisMenuitem key="working place">
                            <Link to={'/workingplace/plan'}>
                                작업장 관리
                            </Link>
                        </FisMenuitem>
                    </Menu.ItemGroup>
                </FisSubMenu>
            </FisMenu>
        );
    }
}

export default menubar;


