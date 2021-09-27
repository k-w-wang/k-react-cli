/*
 页面header
*/

import * as React from "react";
import { Avatar, Layout, Select } from "antd";
import {
  SearchOutlined,
  BellOutlined
} from '@ant-design/icons';
import "./pageheader.less"
const { Option } = Select
const PageHeader: React.FC<{ setLocale: (language: string) => void }> = ({ setLocale }) => {
  const handleChange = (value: any) => {
    setLocale(value)
    localStorage.setItem("language", value)
  }
  return (
    <Layout.Header className="page_header" id="page_header">
      <Select style={{ width: 120 }} onChange={handleChange}>
        <Option value="zh-CN">中文</Option>
        <Option value="en-US">English</Option>
      </Select>
      <SearchOutlined style={{color: "#fff"}} />
      <BellOutlined style={{color: "#fff"}} />
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <span>用户名</span>
    </Layout.Header>
  );
}

export default PageHeader
