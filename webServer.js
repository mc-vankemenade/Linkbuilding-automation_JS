//inits webserver dependencies
const express = require("express");
const bodyParser = require('body-parser');
const server = express();

//inits other JS files
const dataHandler = require("./dataHandler.js"); //dataHandler parses POST data and forwards it to the correct request scripts
 
console.log("modules loaded");


server.use(bodyParser.json()); //tells webserver to parse request bodies as JSON
server.use(express.static("web"));//tells webserver to serve directory called 'web'

//tells webserver how to respond to post requests at the /startBuilding link
server.post("/startBuilding", (req, res) =>{
    res.sendStatus(200);
    dataHandler.dataParser(req.body);
});

var port = 8080 //defines port to host webserver on

//launces webserver
server.listen(port, () =>{
    console.log("server started at port: " + port)
});
