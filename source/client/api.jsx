import config from '../../config.json'

const { server: { host, port } } = config
const uri = `${host}${port !== '' ? `:${port}` : ''}`

const socket = io.connect(uri)
socket.on('connect', () => {
  console.log('-->> IO.JS -->> ON -->> CONNECT')
})

export default socket
