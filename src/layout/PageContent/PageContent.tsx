import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import Overview from "../../routers/Overview";
import Error from "../../routers/Error";

const PageContent = () => {

  return (
    <Layout.Content style={{ margin: "0 24px" }}>
      <Switch>
        <Route path="/overview" component={Overview} exact />
        <Route path="/error/:errorType" component={Error} exact />
        <Route path="" component={Error} exact />
      </Switch>
    </Layout.Content>
  );
};

export default PageContent;
