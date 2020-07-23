import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'

import loadable from '@loadable/component'

const HomeEntry = loadable(() => import(/* webpackChunkName: "HomeEntry" */ '../pages/Home/HomeEntry'))
const HomeSub1Entry = loadable(() => import(/* webpackChunkName: "HomeSub1Entry" */ '../pages/Home/HomeSub1Entry'))
const HomeSub2Entry = loadable(() => import(/* webpackChunkName: "HomeSub2Entry" */ '../pages/Home/HomeSub2Entry'))
const SettingEntry = loadable(() => import(/* webpackChunkName: "SettingEntry" */ '../pages/Setting/SettingEntry'))
const DocumentEntry = loadable(() => import(/* webpackChunkName: "SettingEntry" */ '../pages/Document/DocumentEntry'))

 const App = () => {
  return (
    <Switch>
      <Route path="/home" component={HomeEntry} exact />
      <Route path="/home/sub1" component={HomeSub1Entry} exact />
      <Route path="/home/sub2" component={HomeSub2Entry} exact />
      <Route path="/setting" component={SettingEntry} exact />
      <Route path="/document" component={DocumentEntry} exact />
      <Redirect from="/" to="/home" />
    </Switch>
  )
}

export default withRouter(App);