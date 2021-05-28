const { Server } = require("http");
const Express = require("express")();
const Http = require("http").Server(Express);
const socket = require("socket.io-client")(Http);
const path = require("path");
const port = 3000;

const fastify = require("fastify")({
  // set this to true for detailed logging:
  logger: false
});

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'dist'),
})

fastify.register(require('fastify-socket.io'), {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
  }
})

fastify.ready(err => {
  if (err) throw err

  fastify.io.on('connection', function (socket) {
    console.log(`'Nuovo visitatore connesso!' 'IdTotem:'${socket.id}`);
    //console.log(socket);
    socket.emit("Totem", { conn: "Connessione Socket effetuata con Totem" });

    //socket.emit("Device", { conn: "Sei conesso al server con Device" });
    socket.on('idSocketTotem', function (idSocket) {
      socket.idSocket = idSocket;
      socket.broadcast.emit('message', idSocket);
    });
    socket.on('changeSlideNext', function (slide) {
      socket.slide = slide;
      socket.broadcast.emit('changeSlideNext', slide);

    });
    socket.on('changeSlidePrevious', function (slide) {
      socket.slide = slide;
      socket.broadcast.emit('changeSlidePrevious', slide);

    });
    socket.on('playVideo', function (events) {
      socket.events = events;
      socket.broadcast.emit('play', events);

    });
    socket.on('stopVideo', function (events) {
      socket.events = events;
      socket.broadcast.emit('stopVideo', events);

    });

    socket.on('indexSlide', function (index) {
      socket.index = index;
      socket.broadcast.emit('indexSlide', index);

    });

  });
})

fastify.listen(8080, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})