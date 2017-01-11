import { fromJS } from 'immutable'

const init = fromJS({
  user: {},
  form: {},
})
const app = (state = init, action) => {
  switch (action.type) {
    case 'FORM_CHANGE':
      return state.setIn(['form'].concat(action.path), action.value)
    case 'FORM_CLEAR':
      return state.setIn(['form', 'lesson'], fromJS({}))
    case 'USER_UPDATE':
      return state.set('user', action.data)
    default:
      return state
  }
}
export default app
