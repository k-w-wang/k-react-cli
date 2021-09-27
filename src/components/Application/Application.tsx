import { Button, Modal, Table, Typography } from "antd"
import { ColumnsType } from "antd/lib/table";
import { useState } from "react";
import useModal from "../../unitl/useModalV2";
import AddApplication from "./AddApplication";
import "./application.less"
const { Title } = Typography;
const Application = () => {
    const { modalConfig, showModal, hideModal, setData } = useModal("创建应用")
    const [dataSource, setDatasourcr] = useState([{
        key: '1',
        name: '示例1',
        status: true,
        createTime: '2020-08-01 12:00:00',
    },
    {
        key: '2',
        name: '示例2',
        status: false,
        createTime: '2020-08-01 12:00:00',
    },])
    const columns: ColumnsType<object> = [
        {
            title: '序号',
            key: "index",
            render: (text, record, index) => {
                return index + 1
            }
        },
        {
            title: '应用名称',
            dataIndex: 'name',
        },
        {
            title: '启用',
            className: 'status',
            dataIndex: 'status',
            render: (text: any) => {
                return text ? "已启用" : "未启用"
            }
        },
        {
            title: '创建时间',
            dataIndex: 'createTime',
            className: 'createTime',
        },
        {
            title: '操作',
            className: "action",
            render: (text, record, index) => {
                return (
                    <Button type="default" onClick={() => {
                        showModal()
                        setData(record);
                    }}>
                        详情
                    </Button>
                )
            }
        },
    ];
    const addApplication = (value: any) => {
        setDatasourcr([...dataSource, value])
    }
    // const data = [
    //     {
    //         key: '1',
    //         name: '示例1',
    //         status: true,
    //         createTime: '2020-08-01 12:00:00',
    //     },
    //     {
    //         key: '2',
    //         name: '示例2',
    //         status: false,
    //         createTime: '2020-08-01 12:00:00',
    //     },
    // ];
    return (
        <div className="application">
            <Table
                columns={columns}
                dataSource={dataSource}
                bordered
                rowKey="key"
                title={() => {
                    return (
                        <div className="table_header">
                            <Title level={2}>我的应用</Title>
                            <Button type="primary" onClick={showModal}>创建</Button>
                        </div>
                    )
                }}
            />
            <Modal destroyOnClose visible={modalConfig.visible} title={modalConfig.title} onCancel={hideModal} footer={null}>
                <AddApplication addApplication={addApplication} modalConfig={modalConfig} />
            </Modal>
        </div>
    )
}
export default Application