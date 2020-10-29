# [2.10.0](https://bitbucket.org/iseats/apollo/compare/v2.9.0...v2.10.0) (2020-10-29)


### Features

* **button:** added onKeyPress to button for better keyboard support ([2c33b24](https://bitbucket.org/iseats/apollo/commits/2c33b24a0e015920c84b775b1cf9705357fc6cc1))

# [2.9.0](https://bitbucket.org/iseats/apollo/compare/v2.8.2...v2.9.0) (2020-10-29)


### Bug Fixes

* **actionables:** default border-color for inputs is now light-gray or #ededed ([9ddfd8b](https://bitbucket.org/iseats/apollo/commits/9ddfd8b0bd4047b53c85de456beacf474a63eba7))
* **divider:** color is now light-gray #ededed ([d2be65b](https://bitbucket.org/iseats/apollo/commits/d2be65be466b4f40695f471f823c67b1d4b6782c))
* **stories:** fixed structure hierarchy ([f2681eb](https://bitbucket.org/iseats/apollo/commits/f2681eb99d6e011a7ad15fa0c288b8c0d6c82d2a))


### Features

* **deprecated <image/>:** it is adviced to use a lazyloading library directly or use next/image ([65e7ee3](https://bitbucket.org/iseats/apollo/commits/65e7ee32f6c00103941e82cde897784d690a42bb))
* removed react-lazyload ([f1e2df4](https://bitbucket.org/iseats/apollo/commits/f1e2df47592cee55e5a9bc3b16a9ed40b0192cf4))
* **globals:** boosted primary and secondary color saturations ([03b789f](https://bitbucket.org/iseats/apollo/commits/03b789fa1b24d4346444554c08c1345fedd2e992))
* **progress:** removed indicator as the progress bar is too small to have a readable indicator ([3e5a542](https://bitbucket.org/iseats/apollo/commits/3e5a54226b5db7c3e399cb3c6d52721a3017893b))
* upped default `border-radius` from 6 to 8px ([9a378ed](https://bitbucket.org/iseats/apollo/commits/9a378ed6dd1c4e0c8af758f6c53899879d72f16c))

## [2.8.2](https://bitbucket.org/iseats/apollo/compare/v2.8.1...v2.8.2) (2020-10-01)


### Bug Fixes

* **image:** changed default values of srcset and sizes to undefined instead of false ([f7be052](https://bitbucket.org/iseats/apollo/commits/f7be052c4a5027725e5bc2d8bdd3395111bed9d8))

## [2.8.1](https://bitbucket.org/iseats/apollo/compare/v2.8.0...v2.8.1) (2020-09-30)


### Bug Fixes

* **image:** fixed missing sizes attribute ([1353be8](https://bitbucket.org/iseats/apollo/commits/1353be898b363947eecfd1b26e9ea5e052791937))
* **image:** fixed missing srcset attribute ([e7434d3](https://bitbucket.org/iseats/apollo/commits/e7434d3ea39f08f7b9f68dadc6ccc3548f4ae725))

# [2.8.0](https://bitbucket.org/iseats/apollo/compare/v2.7.4...v2.8.0) (2020-09-19)


### Features

* **progress:** reduced height of the progress bar to 2px ([0bba719](https://bitbucket.org/iseats/apollo/commits/0bba719c215ee0315f158ca166d6c42b2bda5b99))

## [2.7.4](https://bitbucket.org/iseats/apollo/compare/v2.7.3...v2.7.4) (2020-09-19)


### Bug Fixes

* **calendar:** fixed bug where only 6 days of the week are displayed ([addd2ec](https://bitbucket.org/iseats/apollo/commits/addd2ec9377885b485cb32d58469876ac48add5b))


### Reverts

* **image:** revert on classname prefix of the lazyload-wrapper ([d14aef6](https://bitbucket.org/iseats/apollo/commits/d14aef6876d8e2f7a88eb76fd8db6bdb02600bd8))

## [2.7.3](https://bitbucket.org/iseats/apollo/compare/v2.7.2...v2.7.3) (2020-08-27)


### Bug Fixes

* **image:** fixed lazyload classname ([3dae9b8](https://bitbucket.org/iseats/apollo/commits/3dae9b8c42ace5e26b6d5448ef15203172424f69))

## [2.7.2](https://bitbucket.org/iseats/apollo/compare/v2.7.1...v2.7.2) (2020-07-28)


### Bug Fixes

* **image:** additional dimension fixes ([d541b4b](https://bitbucket.org/iseats/apollo/commits/d541b4b6395e13f84b76813111c37dcefd09f0e1))

## [2.7.1](https://bitbucket.org/iseats/apollo/compare/v2.7.0...v2.7.1) (2020-07-28)


### Bug Fixes

* **image:** height and width is now set by inheritance ([5ae6e67](https://bitbucket.org/iseats/apollo/commits/5ae6e679308e926edbdfa9583d81603dfb420a6e))

# [2.7.0](https://bitbucket.org/iseats/apollo/compare/v2.6.1...v2.7.0) (2020-07-26)


### Features

* **inputs:** added inverse prop for inputs for better dark visbility ([9b894fd](https://bitbucket.org/iseats/apollo/commits/9b894fd9741ca4540f12f32ab97037c04f66737c))

## [2.6.1](https://bitbucket.org/iseats/apollo/compare/v2.6.0...v2.6.1) (2020-07-12)


### Bug Fixes

* **select:** variable width ([819b34d](https://bitbucket.org/iseats/apollo/commits/819b34d7733fa56239147baa7f6dfd60b172f5a4))

# [2.6.0](https://bitbucket.org/iseats/apollo/compare/v2.5.1...v2.6.0) (2020-07-11)


### Bug Fixes

* fixed missing key values for mapping functions ([1d3ad29](https://bitbucket.org/iseats/apollo/commits/1d3ad29f2b412a0d38dfdf97eb73606de02b973c))
* **select:** fixed duplicate map key ([b364d71](https://bitbucket.org/iseats/apollo/commits/b364d71922517403d5f0a766805d8e7df95b26d5))


### Features

* updated dependencies ([668a7cb](https://bitbucket.org/iseats/apollo/commits/668a7cbf2a8664f72623d2224186350df56bc1c2))
* **input:** reduced label size ([80d47a8](https://bitbucket.org/iseats/apollo/commits/80d47a8324895345c4d4fc9d84b300867e1145de))
* **message:** reduced close button size ([5954d13](https://bitbucket.org/iseats/apollo/commits/5954d13f6df9ddfb6edd45ad6055356abc1c0580))
* **message:** updated secondary theme and added a new light theme ([9df1ea1](https://bitbucket.org/iseats/apollo/commits/9df1ea10422fa7d094e71cbcfb54fe2e4907d941))
* **select:** added noBorder and small props ([978ab5c](https://bitbucket.org/iseats/apollo/commits/978ab5c9d3e7e6d1eece50fb3e1dd38d4c1d87c4))

## [2.5.1](https://bitbucket.org/iseats/apollo/compare/v2.5.0...v2.5.1) (2020-06-11)


### Bug Fixes

* **calendar:** correct order of days of the week ([73a5809](https://bitbucket.org/iseats/apollo/commits/73a58094363335399579a39b5562830245393f68))

# [2.5.0](https://bitbucket.org/iseats/apollo/compare/v2.4.0...v2.5.0) (2020-06-11)


### Features

* **calendar:** added weekdays ([93674f8](https://bitbucket.org/iseats/apollo/commits/93674f8861edf57bd21aef73adb84b4a7ec05e94))

# [2.4.0](https://bitbucket.org/iseats/apollo/compare/v2.3.4...v2.4.0) (2020-06-04)


### Bug Fixes

* **modal:** removed modal stories ([a781ef1](https://bitbucket.org/iseats/apollo/commits/a781ef1d334f727e285402624ae0fe3b87319576))


### Features

* **modal:** removed modals ([3bb5785](https://bitbucket.org/iseats/apollo/commits/3bb5785bf719cf701198cff349b29f5a28e29dc1))

## [2.3.4](https://bitbucket.org/iseats/apollo/compare/v2.3.3...v2.3.4) (2020-06-03)


### Bug Fixes

* **closeable:** fixed closeable sizing ([c391c03](https://bitbucket.org/iseats/apollo/commits/c391c030609d9352c2d6012867bcb221ad065c3b))
* **modal:** increased modal padding ([80af85e](https://bitbucket.org/iseats/apollo/commits/80af85e1590842a245fa1d5af0a20657e9f30ccb))

## [2.3.3](https://bitbucket.org/iseats/apollo/compare/v2.3.2...v2.3.3) (2020-06-03)


### Bug Fixes

* **modal:** removed footer to allow more customization ([b7a0338](https://bitbucket.org/iseats/apollo/commits/b7a0338af53b6365bfbcff24d31d66d883e9ffbb))

## [2.3.2](https://bitbucket.org/iseats/apollo/compare/v2.3.1...v2.3.2) (2020-06-03)


### Bug Fixes

* **modal:** fixed modal styling ([931d26a](https://bitbucket.org/iseats/apollo/commits/931d26a97e7e6491b7f14589b0a50757156f892f))

## [2.3.1](https://bitbucket.org/iseats/apollo/compare/v2.3.0...v2.3.1) (2020-05-31)


### Bug Fixes

* **image:** revert of previous commit ([a81dccd](https://bitbucket.org/iseats/apollo/commits/a81dccd16bdaef9ba43654f86ce6891f4ea91ee9))

# [2.3.0](https://bitbucket.org/iseats/apollo/compare/v2.2.2...v2.3.0) (2020-05-31)


### Features

* **images:** removed react-lazyload for react-shimmerm ([d42e32c](https://bitbucket.org/iseats/apollo/commits/d42e32c03922816c080e60621a73f2f84661fea6))

## [2.2.2](https://bitbucket.org/iseats/apollo/compare/v2.2.1...v2.2.2) (2020-05-31)


### Bug Fixes

* **eslint:** fixed eslint config ([c7820fb](https://bitbucket.org/iseats/apollo/commits/c7820fb277c956057b541778c4d394a0434e2ac8))

## [2.2.1](https://bitbucket.org/iseats/apollo/compare/v2.2.0...v2.2.1) (2020-05-28)


### Bug Fixes

* **selectable mixin:** added missing semi-colon ([f66a4e5](https://bitbucket.org/iseats/apollo/commits/f66a4e56abf0eaad09a6305f0afb21f04d6d5b6f))


### Reverts

* **image:** revert to react-lazyload ([daefedf](https://bitbucket.org/iseats/apollo/commits/daefedfd9af758cc5942ff6d01fe5b4937f3495d))

# [2.2.0](https://bitbucket.org/iseats/apollo/compare/v2.1.1...v2.2.0) (2020-05-25)


### Features

* **image:** react-lazyload is replaced with react-shimmer ([acf26d3](https://bitbucket.org/iseats/apollo/commits/acf26d3d2b2d8f43a51b5f0072fcadb11f3a4f40))

## [2.1.1](https://bitbucket.org/iseats/apollo/compare/v2.1.0...v2.1.1) (2020-05-25)


### Bug Fixes

* **global:** added comments for new typeface rules ([03fe71a](https://bitbucket.org/iseats/apollo/commits/03fe71aaf1ac1f0ec0ab24f707f837db5bdaf0e8))

# [2.1.0](https://bitbucket.org/iseats/apollo/compare/v2.0.0...v2.1.0) (2020-04-20)


### Features

* **button:** added `transparent` theme ([957765d](https://bitbucket.org/iseats/apollo/commits/957765dc05c05a9e8b14b18410b93f71e4fbe2e2))

# [2.0.0](https://bitbucket.org/iseats/apollo/compare/v1.4.3...v2.0.0) (2020-04-20)


### Bug Fixes

* **inputs:** fixed no_border class in camelcase ([3259539](https://bitbucket.org/iseats/apollo/commits/32595399ac53f29358d24d86f1cf6a6e986bb115))


### Features

* saturated primary color and changed secondary ([3fcf52a](https://bitbucket.org/iseats/apollo/commits/3fcf52a1cb6c77972b2c5c327210d28fa3e3838c))


### improvement

* **buttons:** various improvements and changed to buttons ([d259977](https://bitbucket.org/iseats/apollo/commits/d25997758c751c454ef9f4cafc12610defe9e50e))


### BREAKING CHANGES

* **buttons:** removal of clear and inverse props. we believe that using the new light theme and
the new filling to the button background contrast will be greatly improved and the props are no
longer needed

## [1.4.3](https://bitbucket.org/iseats/apollo/compare/v1.4.2...v1.4.3) (2020-03-11)


### Bug Fixes

* removed slider component ([460a4c9](https://bitbucket.org/iseats/apollo/commits/460a4c922f8b93588ab2cebd690ab85a0d35ae5c))

## [1.4.2](https://bitbucket.org/iseats/apollo/compare/v1.4.1...v1.4.2) (2020-02-19)


### Bug Fixes

* **modal:** actually fixed button theme ([6e38dfd](https://bitbucket.org/iseats/apollo/commits/6e38dfd9bf37655bad15f45503cce41780c124e2))

## [1.4.1](https://bitbucket.org/iseats/apollo/compare/v1.4.0...v1.4.1) (2020-02-19)


### Bug Fixes

* **modal:** fixed button `danger` and `success` prop ([e246be3](https://bitbucket.org/iseats/apollo/commits/e246be310a12c42a0d7d82e4e89b3572fcf9864d))

# [1.4.0](https://bitbucket.org/iseats/apollo/compare/v1.3.0...v1.4.0) (2020-02-19)


### Features

* removed react-onclickoutside ([41f43f2](https://bitbucket.org/iseats/apollo/commits/41f43f2dfc6c10a54ff9c30c2441b516e6dba556))

# [1.3.0](https://bitbucket.org/iseats/apollo/compare/v1.2.1...v1.3.0) (2020-02-19)


### Features

* **modal component:** added modal component ([4cc5dbd](https://bitbucket.org/iseats/apollo/commits/4cc5dbd2bdee4e85193e519f5b7a8f94474183cc))
* added light-gray and dark-gray colors ([13b05d2](https://bitbucket.org/iseats/apollo/commits/13b05d2d187f76bc081a0edf75d406715d8e9be3))

## [1.2.1](https://bitbucket.org/iseats/apollo/compare/v1.2.0...v1.2.1) (2020-02-13)


### Bug Fixes

* **checkbox:** fixed Failed prop type: Invalid prop `theme` of value `false` supplied to `Text` ([26d9e30](https://bitbucket.org/iseats/apollo/commits/26d9e308328e5bf8e9f0d89360820d2795bc435c))

# [1.2.0](https://bitbucket.org/iseats/apollo/compare/v1.1.0...v1.2.0) (2020-01-27)


### Bug Fixes

* **calendar:** fixed storybook props ([ac5f381](https://bitbucket.org/iseats/apollo/commits/ac5f3815f509a8c3a16a796e73f495883bbe4fd3))
* **datepicker:** fixed datepicker props in story ([7b8314b](https://bitbucket.org/iseats/apollo/commits/7b8314b83b9c7166a2c8ff5e5a8fc11cfdffc36a))
* **package:** semantic release branch fixes ([2c071d6](https://bitbucket.org/iseats/apollo/commits/2c071d632725ff6f280913b100fcecdaf00de64e))
* **package.json:** bumped version inline to release ([2d85976](https://bitbucket.org/iseats/apollo/commits/2d85976fadcafd15fd05803a787d3a2430f56913))
* **package.json:** removed @dinhoabreu/semantic-release-bitbucket-config ([bfbcb49](https://bitbucket.org/iseats/apollo/commits/bfbcb4976839d8d872c5a951408ef0c74c7ba377))


### Features

* **calendar:** added calendar component ([da2fda1](https://bitbucket.org/iseats/apollo/commits/da2fda176d44e0b64688136bad5b61a2adac02e9))


### Reverts

* **package.json:** revert to #bfbcb49 ([7615086](https://bitbucket.org/iseats/apollo/commits/7615086e8cea603f334dcc84d849d5bf25157f6f)), closes [#bfbcb49](https://bitbucket.org/iseats/apollo/issue/bfbcb49)

# [1.1.0](https://bitbucket.org/iseats/apollo/compare/v1.0.0...v1.1.0) (2020-01-24)


### Bug Fixes

* **package.json:** removed @dinhoabreu/semantic-release-bitbucket-config ([bf3de24](https://bitbucket.org/iseats/apollo/commits/bf3de245c0fe5349ee439e49cfeb0e2da88d1ebb))


### Features

* **package.json:** added @dinhoabreu/semantic-release-bitbucket-config ([81da065](https://bitbucket.org/iseats/apollo/commits/81da065fc2d09c648470cec2bfa14aa9fcf8c60b))

# 1.0.0 (2020-01-24)


### Bug Fixes

* **datepicker.scss:** fixed build error ([40b805d](https://bitbucket.org/iseats/apollo/commits/40b805d24b687e541d48de4ce1f3bcca4f8ccf7b))


### Features

* pre-release 0.0.1 ([eb67a38](https://bitbucket.org/iseats/apollo/commits/eb67a38afd3fc54df832e0e591a65201b33fe9c8))
