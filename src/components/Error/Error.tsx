import * as React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
const Error = (props: any) => {
  console.log(props, "props");
  const errorType = props?.match?.params?.errorType;
  console.log(errorType);
  
  if (errorType == "404") {
    return (
      <Result
        status="404"
        title="404"
        subTitle="对不起, 您访问的页面不存在."
        extra={
          <Button type="primary">
            <Link to="/overview">返回首页</Link>
          </Button>
        }
      />
    );
  } else if (errorType == "500") {
    return (
      <Result
        status="500"
        title="500"
        subTitle="对不起, 报错了."
        extra={
          <Button type="primary">
            <Link to="/overview">返回首页</Link>
          </Button>
        }
      />
    );
  } else if (errorType == "403") {
    return (
      <Result
        status="403"
        title="403"
        subTitle="对不起, 您无权访问此页面."
        extra={
          <Button type="primary">
            <Link to="/overview">返回首页</Link>
          </Button>
        }
      />
    );
  } else {
    return (
      <Result
        status="404"
        // title="404"
        subTitle="对不起, 您没有该页面的权限."
        extra={
          <Button type="primary">
            <Link to="/overview">返回首页</Link>
          </Button>
        }
      />
    );
  }
};

export default Error;
