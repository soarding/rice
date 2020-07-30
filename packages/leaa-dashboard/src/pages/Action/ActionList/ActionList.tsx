import _ from 'lodash';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useUpdateEffect } from 'react-use';

import { Action } from '@leaa/api/src/entrys';
import { envConfig } from '@leaa/dashboard/src/configs';
import { DEFAULT_QUERY } from '@leaa/dashboard/src/constants';
import { IPage, ICrudListQueryParams, ICrudListRes, IFetchRes } from '@leaa/dashboard/src/interfaces';
import {
  setCrudQueryToUrl,
  transUrlQueryToCrudState,
  genFuzzySearchByQ,
  genCrudRequestQuery,
  calcTableSortOrder,
  httpErrorMsg,
} from '@leaa/dashboard/src/utils';
import { useSWR } from '@leaa/dashboard/src/libs';
import { PageCard, HtmlMeta, TableCard, SearchInput } from '@leaa/dashboard/src/components';

import style from './style.module.less';

const API_PATH = 'actions';

export default (props: IPage) => {
  const { t } = useTranslation();

  const [crudQuery, setCrudQuery] = useState<ICrudListQueryParams>({
    ...DEFAULT_QUERY,
    ...transUrlQueryToCrudState(window),
  });

  const list = useSWR<IFetchRes<ICrudListRes<Action>>>(
    {
      url: `${envConfig.API_URL}/${envConfig.API_VERSION}/${API_PATH}`,
      params: genCrudRequestQuery(crudQuery),
      crudQuery,
    },
    {
      onError: httpErrorMsg,
      onSuccess: (res) => setCrudQueryToUrl({ window, query: res.config.crudQuery, replace: true }),
    },
  );

  useUpdateEffect(() => {
    if (_.isEqual(crudQuery, DEFAULT_QUERY)) list.mutate();
    else setCrudQuery(DEFAULT_QUERY);
  }, [props.history.location.key]);

  return (
    <PageCard
      route={props.route}
      title="@LIST"
      extra={
        <SearchInput
          className={cx('g-page-card-extra-search-input')}
          value={crudQuery.q}
          onSearch={(s?: string) => {
            return setCrudQuery({
              ...DEFAULT_QUERY,
              q: s,
              search: genFuzzySearchByQ(s, { type: '$or', fields: ['account', 'module'] }),
            });
          }}
        />
      }
      className={style['page-card-wapper']}
      loading={list.loading}
    >
      <HtmlMeta title={t(`${props.route?.namei18n}`)} />

      <TableCard
        crudQuery={crudQuery}
        setCrudQuery={setCrudQuery}
        route={props.route}
        routerName={API_PATH}
        columnFields={[
          'id',
          'account',
          'module',
          {
            title: t('_lang:token'),
            dataIndex: 'token',
            sorter: true,
            sortOrder: calcTableSortOrder('token', crudQuery.sort),
            render: (text: string, record: any) => <Link to={`${props.route.path}/${record.id}`}>{record.token}</Link>,
          },
          'createdAt',
          { action: { fieldName: 'account' } },
        ]}
        list={list.data?.data}
      />
    </PageCard>
  );
};
