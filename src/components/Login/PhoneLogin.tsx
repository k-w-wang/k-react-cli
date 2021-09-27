import {  Tabs } from "antd";
// import { FormattedMessage } from "react-intl"

import './login.less';
const { TabPane } = Tabs;
const Login = () => {
    function callback(key: any) {
        console.log(key);
    }
    return (
        <div className="login_box">
            <div className="login_content">
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="手机号登录" key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="邮箱登录" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}
export default Login