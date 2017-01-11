const { create, update, one, all } = require('./model')
const jwt = require('jsonwebtoken')

module.exports = socket => {
  socket.on('USER_SINGUP', (preData) => {
    const token = jwt.sign({ email: preData.email }, preData.pass)
    const data = Object.assign({}, preData, { token: token })
    create(data)
      .then((res) => socket.emit('USER_UPDATED', { error: false, data: res }))
      .catch((err) => socket.emit('USER_UPDATED', { error: true, data: err }))
  })
  socket.on('USER_SINGIN', (data) => {
    one({ email: data.email, pass: data.pass })
      .then((res) => socket.emit('USER_UPDATED', { error: false, data: res }))
      .catch((err) => socket.emit('USER_UPDATED', { error: true, data: err }))
  })
  socket.on('USER_UPDATE', (data) => {
    update(data)
      .then((res) => socket.emit('USER_UPDATED', { error: false, data: res }))
      .catch((err) => socket.emit('USER_UPDATED', { error: true, data: err }))
  })
}
