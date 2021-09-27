import { Form, Input, Button } from "antd"
import { FormattedMessage } from "react-intl"
import IntlInput from "../Shard/IntlInput"
import { UserOutlined, LockOutlined, WeiboOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import { useFormatMessage } from "../../unitl/useFormatMessage";
import { login, ILogin } from "../../apis/login";
const EmailLogin = () => {
    const onFinish = async (values: ILogin) => {
        // login(values).then((res)=>{
        //     console.log(res);

        // }).catch(err => {
        //     console.log(err);
        // })
        const res = await login(values)
        console.log(res);
    };
    return (
        <div className="email_login">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <IntlInput size="large" prefix={< UserOutlined className="site-form-item-icon" />} />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        size="large"
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder={useFormatMessage("password")}
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        size="large"
                        block htmlType="submit" >
                        <FormattedMessage id="login" />
                    </Button>
                </Form.Item>
            </Form>
            <div className="other_login">
                <Button type="link" disabled>
                    其他登录方式
                </Button>
                <Button size="large" shape="circle" icon={<WechatOutlined />} />
                <Button size="large" shape="circle" icon={<WeiboOutlined />} />
                <Button size="large" shape="circle" icon={<QqOutlined />} />
            </div>
        </div>
    )
}
export default EmailLogin