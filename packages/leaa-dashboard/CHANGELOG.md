# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.10.2](https://github.com/SolidZORO/leaa/compare/v3.10.1...v3.10.2) (2020-08-17)

### Bug Fixes

- fixed BuildInfo show git version hash ([2e41371](https://github.com/SolidZORO/leaa/commit/2e4137107710abf882c806fd2c0c7fca4f73bc1d))
- fixed vercel.json favicon rewrite ([c4dddac](https://github.com/SolidZORO/leaa/commit/c4dddac364960241c9b9aae792effe6e8ef736a6))

## [3.10.1](https://github.com/SolidZORO/leaa/compare/v3.10.0...v3.10.1) (2020-08-17)

**Note:** Version bump only for package @leaa/dashboard

# [3.10.0](https://github.com/SolidZORO/leaa/compare/v3.9.0...v3.10.0) (2020-07-30)

### Bug Fixes

- avoid all props.history.push fn memory op leak ([e2e426e](https://github.com/SolidZORO/leaa/commit/e2e426e4b9d522ec7c07dbf13a8578652fa4abe9))
- switch language lang-flag padding ([ebd73a1](https://github.com/SolidZORO/leaa/commit/ebd73a174959a60cd7e99f9a9461a21808582abe))
- use `formatAttaUrl` to `UserAvatar` ([6e093af](https://github.com/SolidZORO/leaa/commit/6e093af4dbe42962186d2cfc644bd590e828abb4))

### Features

- add atta view-only page ([8b4f31d](https://github.com/SolidZORO/leaa/commit/8b4f31d9dc8c9f374cb91a8cbb68b583f2bc4a73))
- add default image ([7705c32](https://github.com/SolidZORO/leaa/commit/7705c32996621b7d2424af3fa3cd6547e1ad811d))
- api .env add DEFAULT IMAGE and AVATAR ([21b696d](https://github.com/SolidZORO/leaa/commit/21b696d6e6b179d5d3e1287c9c6c767464bdfe35))
- comp `TableCard` add `mutate` prop ([d1d25a3](https://github.com/SolidZORO/leaa/commit/d1d25a37d118af3f7e8e55528b5bce143e2c0a4a))
- use SWR for part modules ([694f56c](https://github.com/SolidZORO/leaa/commit/694f56c8df0fb8ab0b2dc1cbd92aa22b76f333e8))

# [3.9.0](https://github.com/SolidZORO/leaa/compare/v3.8.2...v3.9.0) (2020-07-06)

**Note:** Version bump only for package @leaa/dashboard

## [3.8.1](https://github.com/SolidZORO/leaa/compare/v3.8.0...v3.8.1) (2020-07-06)

### Bug Fixes

- sidebar drawer scroll bug ([d060cb6](https://github.com/SolidZORO/leaa/commit/d060cb6a483ae4761a215717a9ac545719c7856e))

### Performance Improvements

- adjust login UI ([7858bf6](https://github.com/SolidZORO/leaa/commit/7858bf66de36ab3b1d807dfd7965c3eb5bcff663))
- adjust UI ([333362c](https://github.com/SolidZORO/leaa/commit/333362c87a0b442b4674a6163d6c044410ae9787))

# [3.8.0](https://github.com/SolidZORO/leaa/compare/v3.7.0...v3.8.0) (2020-07-06)

### Bug Fixes

- sidebar drawer scroll bug ([231b52a](https://github.com/SolidZORO/leaa/commit/231b52a4cecfc0bf1a3bd0a8432f283eae8a0319))

### Features

- mobile header add responsive design ([d04e46e](https://github.com/SolidZORO/leaa/commit/d04e46e2c9830045126638ffe9b96f7e9eba7f69))

### Performance Improvements

- adjust login UI ([776af81](https://github.com/SolidZORO/leaa/commit/776af8188d7e3e627b6213cd97a38c7ab4bb510e))
- adjust UI ([304cc4d](https://github.com/SolidZORO/leaa/commit/304cc4d9ec58f1f31bcab3faaf7f0069f05ac75a))

# [3.7.0](https://github.com/SolidZORO/leaa/compare/v3.6.0...v3.7.0) (2020-07-04)

### Bug Fixes

- click filterbar have reset URL query ([a141c05](https://github.com/SolidZORO/leaa/commit/a141c055a04fe1b46bc9e1f44ce6955bbe29e174))

# [3.6.0](https://github.com/SolidZORO/leaa/compare/v3.5.6...v3.6.0) (2020-07-02)

### Bug Fixes

- compatible mobile ([2f9c8bf](https://github.com/SolidZORO/leaa/commit/2f9c8bf60e6961c6f4b541699c9ef06f416d8eb8))
- fix SwitchLanguage click missing setVisible ([367c798](https://github.com/SolidZORO/leaa/commit/367c7985cfe5ed8fe2f8f503875bc907b1e28660))
- fix SwitchLanguage in Safari bug ([cb3e0d6](https://github.com/SolidZORO/leaa/commit/cb3e0d67ae389fe98305db42a464a79968f6af83))

### Features

- add `platform_build_and_push` to dashboard ([0a0dc2b](https://github.com/SolidZORO/leaa/commit/0a0dc2b4fc55d9e8596ecd26c0fbc331ebb97086))
- done new UI ([a39c982](https://github.com/SolidZORO/leaa/commit/a39c982c0afd454dca5a02a96d8619d242b23d2a))
- WIP UI redesign ([a3f0946](https://github.com/SolidZORO/leaa/commit/a3f09466dc39e3550ba349d2c6861513c4da1bed))

## [3.5.6](https://github.com/SolidZORO/leaa/compare/v3.5.5...v3.5.6) (2020-06-25)

### Bug Fixes

- `react-imported-component` bug in HMR, reset `loadable` ([d2b5582](https://github.com/SolidZORO/leaa/commit/d2b5582cfcf7665f6b2fb19ddf474a63732fa2c7))
- fixed \_lang:create ([f3da7d9](https://github.com/SolidZORO/leaa/commit/f3da7d960896005fcd2f2a0d9b82eb7a2845d909))

### Features

- `ROUTER_BASENAME` compatible `sub dir` deploy on nginx ([b9c89c6](https://github.com/SolidZORO/leaa/commit/b9c89c62ee6b7df3e23ec601143bcdfe3e2125d6))

## [3.5.5](https://github.com/SolidZORO/leaa/compare/v3.5.4...v3.5.5) (2020-06-24)

### Bug Fixes

- page card align title ([64e7724](https://github.com/SolidZORO/leaa/commit/64e77240eed7ba3b049a60c8e03e516ee21292df))
- sidebar on mb has scroll y ([f6ba5c5](https://github.com/SolidZORO/leaa/commit/f6ba5c5db0f353a146a748944736c99b1932efdb))
- sidebar position fixed ([5d39d2a](https://github.com/SolidZORO/leaa/commit/5d39d2a54085cda08b312a89b525389a8378d03f))

### Code Refactoring

- remove sidebar collapsed fn of pc ([87dcd8f](https://github.com/SolidZORO/leaa/commit/87dcd8fb90bd8402d0452ccd822f707226b0cfd3))

### Features

- use `react-icons` replace `<Rcon>` ([4699686](https://github.com/SolidZORO/leaa/commit/46996863c4791e9de3e865e8138effe0712cb054))

### Performance Improvements

- dashboard UI mobile friendly ([7d21749](https://github.com/SolidZORO/leaa/commit/7d2174948e642b9ef6beb3cc0bb88f22f8b2977b))

### BREAKING CHANGES

- remove sidebar collapsed fn of pc

## [3.5.4](https://github.com/SolidZORO/leaa/compare/v3.5.3...v3.5.4) (2020-06-23)

### Bug Fixes

- @loadable/component on sidebar link error ([228608f](https://github.com/SolidZORO/leaa/commit/228608f3ee074ea915358063ddb3d91371f740ae))
- Route `component` to `children` ([1cc0f1d](https://github.com/SolidZORO/leaa/commit/1cc0f1d5bcf8860d758970d74725922781716b02))

### Performance Improvements

- done all routes lazy load by `react-imported-component` ([d546ce0](https://github.com/SolidZORO/leaa/commit/d546ce0eff888cdbbe33f8a5e825818ba23082cc))
- done all routes lazy load, use `react-imported-componet ([1ce8e89](https://github.com/SolidZORO/leaa/commit/1ce8e89d26cfc990b6ed91efae6c79e800e254e9))

## [3.5.3](https://github.com/SolidZORO/leaa/compare/v3.5.2...v3.5.3) (2020-06-21)

### Bug Fixes

- temp downgrading eslint to v7.2.0 ([a1e5c31](https://github.com/SolidZORO/leaa/commit/a1e5c31f5c56ce0a6cb862f2a37c3957af3ad22a))

### Features

- add a pMinDelay load ([977c2d2](https://github.com/SolidZORO/leaa/commit/977c2d2f5f4fba164edadd93451a5c617b045d8b))
- dashboard header top add `nprogress` Loading ([3815ca8](https://github.com/SolidZORO/leaa/commit/3815ca89c9d5b981e0b1ff5fc85f18ecea85f051))

### Performance Improvements

- react-router perf ([a2b97f3](https://github.com/SolidZORO/leaa/commit/a2b97f357c8e4d65243c7bf5b942e6cd016de77e))
- react-router use `lazy` from '@loadable/component' ([58e306d](https://github.com/SolidZORO/leaa/commit/58e306d3e38034d8f34fa7312563a4736b04ad30))

## [3.5.2](https://github.com/SolidZORO/leaa/compare/v3.5.1...v3.5.2) (2020-06-20)

### Bug Fixes

- `.env.js` -> `_.env.js` ([5c88115](https://github.com/SolidZORO/leaa/commit/5c88115894630a711ba3d2cf1e14c21733208e8d))
- fix table account dataIndex ([cda97aa](https://github.com/SolidZORO/leaa/commit/cda97aab901d441c8ffa8038f1ecfe73fd23663b))
- formatAttaUrl format gravatar error display ([c436884](https://github.com/SolidZORO/leaa/commit/c436884371fd547101de6a04a0ffa7213a5507cb))

### Features

- dashboard .env add `PRIMARY_ACCOUNT_TYPE` ([97e4f2a](https://github.com/SolidZORO/leaa/commit/97e4f2ae7349e4460c372c2f724b73c05ab2fe79))

### Performance Improvements

- click sidebar menu item can refresh list ([e85e385](https://github.com/SolidZORO/leaa/commit/e85e385be61bec2d66b492d5894fc7f6eeaebb03))
- DEFAULT_PAGE_SIZE value to `20`, one screen can display ([3596609](https://github.com/SolidZORO/leaa/commit/359660950ba04f69fc7a6478bc18acd5b4783e4d))
- onFetchList use `react-use` control effect ([d46dad9](https://github.com/SolidZORO/leaa/commit/d46dad9084e1b09324f41a5a6d84fb007e9bcb8e))

## [3.5.1](https://github.com/SolidZORO/leaa/compare/v3.5.0...v3.5.1) (2020-06-18)

### Bug Fixes

- fixed resource dir in `deploy-api.sh` ([3e625ab](https://github.com/SolidZORO/leaa/commit/3e625ab942129fecbf25a6e0315f31a098130ee3))

### Performance Improvements

- better CLI UX ([3848713](https://github.com/SolidZORO/leaa/commit/3848713c8cb7895fe0a1c63c6199860e840543e5))

# [3.5.0](https://github.com/SolidZORO/leaa/compare/v3.4.1...v3.5.0) (2020-06-16)

### Bug Fixes

- change `.env.js` to `_env.js`, fix serverless not load ([7c35661](https://github.com/SolidZORO/leaa/commit/7c35661d051657cd90b50b7feca2e217e77a636b))
- LoginForm check env.DEMO_MODE inject account ([b59e64c](https://github.com/SolidZORO/leaa/commit/b59e64c48def40fa3a9ec0970edd5f2827698708))

### Features

- api .env add `AUTO_CUT_TAGS` ([b8ca654](https://github.com/SolidZORO/leaa/commit/b8ca6540de38898097bc74ede8fcbd6e6e574d18))
- delete dotenv of dashboard use `.env.js` replace `.env` ([7cc0950](https://github.com/SolidZORO/leaa/commit/7cc0950930004ef9da852448155734f254f4f891))

### Performance Improvements

- update UX ([cb8867a](https://github.com/SolidZORO/leaa/commit/cb8867a60c125f6aacda13aaf7f4703fd075b035))

### BREAKING CHANGES

- change `.env.js` to `_env.js`, fix serverless not load
- delete dotenv of dashboard use `.env.js` replace `.env`

## [3.4.1](https://github.com/SolidZORO/leaa/compare/v3.4.0...v3.4.1) (2020-06-14)

**Note:** Version bump only for package @leaa/dashboard

# [3.4.0](https://github.com/SolidZORO/leaa/compare/v3.3.5...v3.4.0) (2020-06-13)

### Features

- auto push to DeployRepo and Server and RUN! ([a7a91ac](https://github.com/SolidZORO/leaa/commit/a7a91ac2731a989878bb39bde3fe98659540e3a7))

## [3.3.5](https://github.com/SolidZORO/leaa/compare/v3.3.4...v3.3.5) (2020-06-11)

### Bug Fixes

- clean ajax console.log ([be7ce89](https://github.com/SolidZORO/leaa/commit/be7ce8968a1120aeaae05c4efcc3b889dba09562))

## [3.3.4](https://github.com/SolidZORO/leaa/compare/v3.3.3...v3.3.4) (2020-06-11)

**Note:** Version bump only for package @leaa/dashboard

## [3.3.3](https://github.com/SolidZORO/leaa/compare/v3.3.2...v3.3.3) (2020-06-11)

### Bug Fixes

- ajax timeout to 10s ([b6f56ed](https://github.com/SolidZORO/leaa/commit/b6f56ed472e93e5deba0a59f76bfd8a15ddcacda))

## [3.3.2](https://github.com/SolidZORO/leaa/compare/v3.1.1...v3.3.2) (2020-06-11)

### Bug Fixes

- fix ajax finally memory leak ([6fdd9f6](https://github.com/SolidZORO/leaa/commit/6fdd9f662befe10d789b997b441cb2588e5e4704))
- fix all Components `memory leak in your application.` ([d55e741](https://github.com/SolidZORO/leaa/commit/d55e7417e2580996e1559f7c5a0afe79f2b27371))
- fix atta box missing attachmentParams ([ba160a2](https://github.com/SolidZORO/leaa/commit/ba160a291410c25454d9cb4ccf72777fb73deac2))
- fix rowKey types ([4a11331](https://github.com/SolidZORO/leaa/commit/4a11331c85ac0b55c68a40010b0608292dbf6f70))
- selectCategoryIdByTree This is a no-op, memory leak ([2cdcff8](https://github.com/SolidZORO/leaa/commit/2cdcff8cf6678c606acfdbb69818323a19eb59e3))
- update user and update avatar at the same time ([298ccfa](https://github.com/SolidZORO/leaa/commit/298ccfa0917ee2968666ce637b743fd166adb8a7))

### Code Refactoring

- ???? .env change to production default env file ([dcca7d0](https://github.com/SolidZORO/leaa/commit/dcca7d0e2fbe55c0cd5775d9d76deaf6ce4d7d32))

### Features

- .env add `LOGO_(BLACK|WHITE)_FILENAME` can mod default logo ([4978e30](https://github.com/SolidZORO/leaa/commit/4978e307508c348fabd7d00fdf399cd53eb5d2fc))
- .env add GRAVATAR_TYPE ([dcb3ba1](https://github.com/SolidZORO/leaa/commit/dcb3ba1b959ad9702e5656255b7daebbd59c8e0a))
- <BuildInfo> add props showSwitchDebug ([3901a1d](https://github.com/SolidZORO/leaa/commit/3901a1d667fccb863fe21d30e8942683d69880c8))
- add deploy bash script ([d3914d1](https://github.com/SolidZORO/leaa/commit/d3914d19f4c05932cb3abda3bdc3c483c6d0f0fb))
- add use phone login dashboard ([4824440](https://github.com/SolidZORO/leaa/commit/482444069b3ea99e395ce50db09f52de526fc0c7))
- can create user by phone ([77237f9](https://github.com/SolidZORO/leaa/commit/77237f9b615fbeaba1adc097635bb83f71ddbaa7))
- dashboard add `debugMode` in header dropdown menu ([932d994](https://github.com/SolidZORO/leaa/commit/932d9946f09cb53e10a14de4d7c359cd81b8cf70))
- user add avatar change ([c317528](https://github.com/SolidZORO/leaa/commit/c317528eabcb7e21dd280c5a2ebdf2afbb3a06a7))

### Performance Improvements

- ajax timeout to 100s ([38aac42](https://github.com/SolidZORO/leaa/commit/38aac42cfbe4d8624aec58f3bb751d2823e6a541))
- debugCount 10 to 5 ([5614f84](https://github.com/SolidZORO/leaa/commit/5614f84159c74c02039ac75dfb1b27ffad364b30))

### BREAKING CHANGES

- ???? .env change to production default env file, keep docker .env compatible,
  and follow dotenv recommended @link
  https://github.com/motdotla/dotenv#should-i-have-multiple-env-files

## [3.1.1](https://github.com/SolidZORO/leaa/compare/v3.1.0...v3.1.1) (2020-06-01)

### Bug Fixes

- fix packages version ([14e1ffb](https://github.com/SolidZORO/leaa/commit/14e1ffb64de596c0f28075acd9d73d9099305000))

### Features

- add verification code(captcha) to login ([41a0b9c](https://github.com/SolidZORO/leaa/commit/41a0b9cbd7e2398caebba0137050e875c609ab76))
- cLI show local real ip address ([33ca1e2](https://github.com/SolidZORO/leaa/commit/33ca1e262098e8051db2d55151504b1629aa1563))
- svgCaptcha load a new font ([fe89fee](https://github.com/SolidZORO/leaa/commit/fe89fee51cb29f9d8da2fa94683a9453a4cfe027))

## [3.0.1](https://github.com/SolidZORO/leaa/compare/v2.0.6...v3.0.1) (2020-05-29)

### Bug Fixes

- all `curd` rename to `crud` ([1f47746](https://github.com/SolidZORO/leaa/commit/1f477463a05b45e9fb6c81c805fb8c746db9440f))
- fix validateUserByPayload last_token_at Compare jwt `iattz` ([9c18c02](https://github.com/SolidZORO/leaa/commit/9c18c02c56cec75deed10fac2637449c8b030926))
- rimraf add to packages ([294834a](https://github.com/SolidZORO/leaa/commit/294834af917b9e7c9be3bc38dfccf214fb57efa6))

### Features

- add genCrudQuerySearch ([9558c72](https://github.com/SolidZORO/leaa/commit/9558c72641560e4a89d89b9476ec4bd0dfc96b80))
- add new data seed ([434b6a8](https://github.com/SolidZORO/leaa/commit/434b6a8dc7f3ed37de3da0815e4d9cfded9a4ff5))
- add TransformInterceptor and HttpExceptionFilter ([4866653](https://github.com/SolidZORO/leaa/commit/48666532d497bc4f497fe9bf9d9be32278244efa))
- attachmentBox can work! ([99c247a](https://github.com/SolidZORO/leaa/commit/99c247a740ed50964f85f0c00c9484bd477ab7d1))
- auth login add Captcha (not display by default, auto tigger) ([a068b54](https://github.com/SolidZORO/leaa/commit/a068b543e81c65b235cb85a8430d4ca27285219f))
- category crud ([adbf2c4](https://github.com/SolidZORO/leaa/commit/adbf2c499c94c90d521814e576c429d50cf5ca32))
- done all user method ([aec4913](https://github.com/SolidZORO/leaa/commit/aec4913aeffd3cf0b6711e6d98a626f2f477d0c1))
- new FilterIcon and new SearchInput ([0f37f45](https://github.com/SolidZORO/leaa/commit/0f37f45c61717decf97c5b77c245243e7a0a614c))
- replace react-dnd to react-beautiful-dnd ([a851781](https://github.com/SolidZORO/leaa/commit/a85178189d0f2ad1075ec4a148eb4d5a3ede9c93))
- setting crud ([800f107](https://github.com/SolidZORO/leaa/commit/800f10718d89b0dc1239bf014949a3676806056e))

### Performance Improvements

- .babelrc add ignore ([99040ad](https://github.com/SolidZORO/leaa/commit/99040adf66b67fa3ca409bb86acdab9f1458aaa3))
- babel useBuiltIns: 'usage' replace @babel/polyfill ([ee25c09](https://github.com/SolidZORO/leaa/commit/ee25c092152ddddf917ca5dff8c031e6006bf4a3))
- format code ([e8502d3](https://github.com/SolidZORO/leaa/commit/e8502d3c9455b685e47ac18e39769f4d5e588724))

## [2.0.6](https://github.com/SolidZORO/leaa/compare/v1.1.0...v2.0.6) (2020-05-05)

### Bug Fixes

- divisions gen ([787ed42](https://github.com/SolidZORO/leaa/commit/787ed42eec16776702f3bdde9d4aef425e378cf3))
- seed data ([0d6e6e8](https://github.com/SolidZORO/leaa/commit/0d6e6e84807ccd7d94b4a0882379325dfaf3fd87))

# [1.1.0](https://github.com/SolidZORO/leaa/compare/v1.0.5...v1.1.0) (2020-03-22)

## [1.0.5](https://github.com/SolidZORO/leaa/compare/v1.0.4...v1.0.5) (2020-02-21)

## [1.0.4](https://github.com/SolidZORO/leaa/compare/v1.0.3...v1.0.4) (2020-01-15)

## [1.0.3](https://github.com/SolidZORO/leaa/compare/v1.0.2...v1.0.3) (2020-01-02)

## [1.0.2](https://github.com/SolidZORO/leaa/compare/v1.0.1...v1.0.2) (2019-11-23)

## [1.0.1](https://github.com/SolidZORO/leaa/compare/v0.0.4...v1.0.1) (2019-11-23)

## [0.0.4](https://github.com/SolidZORO/leaa/compare/v0.0.1...v0.0.4) (2019-10-28)

## [0.0.1](https://github.com/SolidZORO/leaa/compare/v0.0.2...v0.0.1) (2019-08-17)

## [0.0.2](https://github.com/SolidZORO/leaa/compare/0.0.1...v0.0.2) (2019-08-17)
