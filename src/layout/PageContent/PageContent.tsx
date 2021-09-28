import * as React from "react";

import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import Overview from "../../routers/Overview";
import Application from "../../routers/Application";
import CoverageArea from "../../routers/CoverageArea";
import Error from "../../routers/Error";

const PageContent = () => {
  // const getComponents: (moduleName:string) => React.FC<{}> | ErrorConstructor  = (moduleName: string) => {
  //   switch (moduleName) {
  //     case "Overview":
  //       return Overview;
  //     default:
  //       return Error;
  //   }
  // }
  return (
    <Layout.Content style={{ margin: "0 24px" }}>
      <Switch>
        <Route path="/overview" component={Overview} exact />
        <Route path="/application" component={Application} exact />
        <Route path="/coveragearea" component={CoverageArea} exact />
        <Route path="/error/:errorType" component={Error} exact />
        <Route path="" component={Error} exact />
      </Switch>
    </Layout.Content>
  );
};

export default PageContent;
