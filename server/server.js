const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header'],
    credentials: true,
    allowEIO3: true
  }
})
const mongoClient = require('mongodb').MongoClient // to store the db info

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

var port = 6969

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

mongoClient.connect('mongodb+srv://apiuser:PvjO6hwgqsjgRbgr@cluster0.nf61a.mongodb.net/Emissary?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, db) => { // connects to db
  if (err) return console.log(err)

  // routes go here

  io.on('connection', socket => {
    console.log('a user connected')

    socket.on('registerName', SOCK_registerName)

    socket.on('messagetoserver', (data) => {
      SOCK_messagetoserver(socket, data, db)
    })
  })
})

http.listen(port, () => { // begins listen
  console.log('Listening on ' + port)
})

// eslint-disable-next-line camelcase
async function SOCK_messagetoserver (socket, data, db) {
  console.log(socket.id)
  socket.emit('messagetoclient', data)
  const messageDoc = {
    senderName: data.sender,
    time: new Date().toTimeString(),
    text: data.body
  }
  const result = await db.db('Emissary').collection('Messages').insertOne(messageDoc)
  console.log(result.insertedId)
}

// eslint-disable-next-line camelcase
function SOCK_registerName (socket, data) {
  console.log(data)
  return false
}

function runDevCommand (cmd) {
  // eslint-disable-next-line no-eval
  eval(cmd)
}

global.dev = runDevCommand
