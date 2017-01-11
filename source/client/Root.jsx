/* eslint-disable max-len */
import React from 'react'
import { Provider } from 'react-redux'
import { Router, Redirect, IndexRedirect, Route } from 'react-router'
import App from 'App'

const Root = ({
  store,
  history,
}) => {
  const run = (action, pr) => ({ params }) => store.dispatch(action(params[pr]))
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App.container}>
        </Route>
      </Router>
    </Provider>
  )
}

export default Root
