
import { Layout, Menu } from "antd";
import "./pagemain.less"
import {
  PieChartOutlined,
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useEffect } from "react";
const { Sider } = Layout;

const PageMain = (props: any) => {
  const token = window.localStorage.getItem("token");
  useEffect(()=>{
    if(!token) {
      window.location.href = window.location.origin + "/#/login"
    }
  },[token])
  return (
    <div id="components-layout-demo-side">
       <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          theme="dark"
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" >
              <Link to="/overview">首页</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>{props.children}</Layout>
      </Layout>
    </div>
  );
}
export default PageMain