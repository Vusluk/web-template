import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import App from './Components/App'
import * as actions from './actions'

const provider = state => ({
  user: state.app.get('user'),
  form: state.app.get('form').toJS(),
})

const dispatchProvider = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(provider, dispatchProvider)(App)
