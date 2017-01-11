import api from 'api'
import store from 'store'

api.on('USER_UPDATED', (msg) => {
  if (msg.error) {
    store.dispatch({
      type: 'APP_API_ERROR',
      err: msg.data,
    })
  } else {
    store.dispatch({
      type: 'USER_UPDATE',
      data: msg.data,
    })
  }
})

export const formChange = (path, value) => ({
  type: 'FORM_CHANGE',
  path,
  value,
})

export const formClear = (form) => ({
  type: 'FORM_CLEAR',
  form,
})

export const singUp = () => (dispatch, getState) => {
  const form = getState().app.getIn(['form', 'auth'], false).toJS()
  if (form && !!form.email && !!form.pass) api.emit('USER_SINGUP', form)
}

export const singIn = () => (dispatch, getState) => {
  const form = getState().app.getIn(['form', 'auth'], false).toJS()
  if (form && !!form.email && !!form.pass) api.emit('USER_SINGIN', form)
}

export const singOut = () => ({
  type: 'USER_UPDATE',
  data: {},
})
