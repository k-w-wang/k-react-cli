
import { Layout, Menu } from "antd";
import "./pagemain.less"
import {
  PieChartOutlined,
} from '@ant-design/icons';
import { Link } from "react-router-dom";
const { Sider } = Layout;
const PageMain = (props: any) => {
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
            <Menu.Item key="2" icon={<PieChartOutlined />}>
              <Link to="/application">我的应用</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<PieChartOutlined />}>
              <Link to="/coveragearea">覆盖区域</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>{props.children}</Layout>
      </Layout>
    </div>
  );
}
export default PageMain