import { Button, Form, Input, Select, Switch } from "antd"
import _ from "lodash";
import moment from "moment"
import "./AddApplication.less"
const AddApplication = ({ addApplication, modalConfig }: { addApplication: (newData) => void, modalConfig: any }) => {
    const onFinish = values => {
        addApplication({ ...values, createTime: moment().format('yyyy-MM-DD hh:mm:ss'), key: _.uniqueId() },)
    };
    const { data } = modalConfig
    return (
        <div className="add_application">
            <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 12 }}
                layout="horizontal"
                onFinish={onFinish}
                initialValues={
                    data
                }
            >
                <Form.Item label="应用名称" name="name">
                    <Input placeholder="请输入" />
                </Form.Item>
                <Form.Item label="应用类型" name="applicationType">
                    <Select placeholder="请选择">
                        <Select.Option value="多媒体会议">
                            多媒体会议
                        </Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="启用" name="status" valuePropName="checked">
                    <Switch checkedChildren="开启" unCheckedChildren="关闭" />
                </Form.Item>
                <Form.Item
                    wrapperCol={{ span: 24 }}
                    className="modal_action"
                >
                    <Button type="primary" htmlType="submit">确定</Button>
                    <Button type="default">取消</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default AddApplication