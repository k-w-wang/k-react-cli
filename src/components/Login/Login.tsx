import { Tabs } from "antd";
import { FormattedMessage } from "react-intl"

import EmailLogin from "./UserNameLogin";
import './login.less';
const { TabPane } = Tabs;
const Login = () => {
    return (
        <div className="login_box">
            <div className="login_content">
                <Tabs defaultActiveKey="2" size="large" animated={true}>
                    <TabPane tab={<><FormattedMessage id="phone" /><FormattedMessage id="login" /></>} key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab={<><FormattedMessage id="username" /><FormattedMessage id="login" /></>} key="2">
                        <EmailLogin />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}
export default Login