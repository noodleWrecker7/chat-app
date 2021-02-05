const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const mongoClient = require('mongodb').MongoClient // to store the db info

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

var port = 6969

http.listen(6969, () => {
  console.log('listening on 6969')
})

mongoClient.connect('mongodb+srv://admin:OLfFPB05wIVvyzRL@cluster0.nf61a.mongodb.net/Cluster0?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, db) => { // connects to db
  if (err) return console.log(err)

  // routes go here

  io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('registerName', function (data) {
      console.log(data)
    })
  })

  app.listen(port, () => { // begins listen
    console.log('Listening on ' + port)
  })
})

function SOCK_registerName
