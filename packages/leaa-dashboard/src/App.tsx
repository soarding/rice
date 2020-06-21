import React, { useState } from 'react';
import { Spin, ConfigProvider } from 'antd';
import { Router, Switch } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';
import { LoadingOutlined } from '@ant-design/icons';
import zhCN from 'antd/es/locale-provider/zh_CN';
import enUS from 'antd/es/locale-provider/en_US';

import { history } from '@leaa/dashboard/src/libs';
// cannot use deconstruction components dir in here (App.tsx)
import { ErrorBoundary } from '@leaa/dashboard/src/components/ErrorBoundary/ErrorBoundary';
import { RefreshflatPermissions } from '@leaa/dashboard/src/components/RefreshflatPermissions/RefreshflatPermissions';
import { RefreshSetting } from '@leaa/dashboard/src/components/RefreshSetting/RefreshSetting';
import { ProgressLoading } from '@leaa/dashboard/src/components/ProgressLoading/ProgressLoading';

import { masterRoute, authRoute, otherRoute } from '@leaa/dashboard/src/routes';
import { initStore, StoreProvider } from '@leaa/dashboard/src/stores';
import i18n from '@leaa/dashboard/src/i18n';
import { envConfig } from '@leaa/dashboard/src/configs';

const store = initStore();

Spin.setDefaultIndicator(<LoadingOutlined spin style={{ fontSize: '180%', marginTop: 30 }} />);

export const App = (): JSX.Element => {
  const getLocale = () => (i18n.language === 'zh-CN' ? zhCN : enUS);
  const [locale, setLocale] = useState(getLocale());

  i18n.on('languageChanged', () => {
    setLocale(getLocale());
  });

  const NOT_FOUND_CONFIG_DOM = <p>PLEASE CHECK THE CONFIG FILE!</p>;

  if (!envConfig) return NOT_FOUND_CONFIG_DOM;
  // return NOT_FOUND_CONFIG_DOM;

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ConfigProvider locale={locale}>
          <StoreProvider value={store}>
            <I18nextProvider i18n={i18n}>
              <RefreshSetting>
                <RefreshflatPermissions history={history}>
                  <Router history={history}>
                    <Switch>
                      {authRoute}
                      {masterRoute}
                      {otherRoute}
                    </Switch>
                  </Router>
                </RefreshflatPermissions>
              </RefreshSetting>
            </I18nextProvider>
          </StoreProvider>
        </ConfigProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};
