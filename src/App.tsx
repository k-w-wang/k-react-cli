import './App.css';
import PageMain from './layout/PageMain';
import PageHeader from './layout/PageHeader';
import PageContent from './layout/PageContent';
import { ConfigProvider } from 'antd';
import zhCN from "antd/es/locale/zh_CN";
import Login from './components/Login';
import { IntlProvider } from "react-intl";
import zh_CN from "./locales/zh_CN";
import en_JS from "./locales/en_US";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  const handleMessages = (lang: any) => {
    let res = null;
    switch (lang) {
      case "zh-CN":
        res = zh_CN;
        break;
      case "en-US":
        res = en_JS;
        break;
      default:
        res = en_JS;
    }
    return res;
  };
  const [locale, setLocale] = useState(() => {
    return localStorage.getItem("language") || navigator.language
  })
  return (
    <div >
      <Provider store={store}>
        <IntlProvider locale={locale}
          messages={handleMessages(locale)}>
          <ConfigProvider locale={zhCN}>
            <Router>
              <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/regist" component={Login} exact />
                <PageMain>
                  <PageHeader setLocale={setLocale} />
                  <PageContent />
                </PageMain>
              </Switch>
            </Router>
          </ConfigProvider>
        </IntlProvider>
      </Provider>
    </div>
  );
}

export default App;
