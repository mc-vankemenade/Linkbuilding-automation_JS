//inits webserver dependencies
const express = require("express");
const server = express();

//inits websocket server dependencies
const webSocket = require("ws");
const wss = new webSocket.Server({ port: 8080 })

const dataHandler = require("./dataHandler.js");

server.use(express.static("web"));//tells webserver to serve directory called 'web'

var port = 80 //defines port to host webserver on

//launces webserver
server.listen(port, () =>{
    console.log("server started at port: " + port)
});
console.log("Webserver loaded!");

wss.on("connection", ws => {
    ws.on("message", data => {
        try{
            msg = JSON.parse(data);

            switch(msg.header){

                case "connected":
                    console.log(`${ws._socket.remoteAddress} connected!`);
                    //ws.send("hello client");
                    break;

                case "start":
                    let linkReport = dataHandler.dataParser(msg.data);
                    linkReport = {"header": "report", "data": linkReport}
                    linkReport = JSON.stringify(linkReport);
                    ws.send(linkReport);
                    break;
            }
            
        }catch(error){
            console.log(error);
        }

        
    })
})
