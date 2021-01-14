const failedList = document.getElementById("failedLinks");
const succeededList = document.getElementById("succeededLinks");

const url = "ws://127.0.0.1:8080"
const connection = new WebSocket(url)

connection.onopen = () => {
    let msg = {"header": "connected", "data":"Hello world!"};
    msg = JSON.stringify(msg);
    connection.send(msg);
}

connection.onmessage = (message) => {
    try{
        msg = JSON.parse(message.data);

        switch(msg.header){

            case "report":
                failedList.innerHTML = "";
                for (let i=0; i < msg.data.failed.length; i++) {
                    failedList.innerHTML += "<a target='_blank' href=" + msg.data.failed[i] + ">" + msg.data.failed[i] + "</a>";
                    failedList.innerHTML += "<br>";
                }

                succeededList.innerHTML = "";
                for (let i=0; i < msg.data.success.length; i++) {
                    succeededList.innerHTML += "<a target='_blank' href=" + msg.data.success[i] + ">" + msg.data.success[i] + "</a>";
                    succeededList.innerHTML += "<br>";
                }
                break;
        }

    }catch(error){
        console.log(error);
    }
}

function start(){


    var targetURL = document.getElementById("targetUrl").value;
    var targetName = document.getElementById("targetName").value;
    var targetEmail = document.getElementById("targetEmail").value;
    var devEnviroment = document.getElementById("devEnviroment").checked;

    message = { "header": "start", "data": {
            "targetURL":targetURL,
            "targetName":targetName,
            "targetEmail":targetEmail,
            "devEnviroment":devEnviroment,
            "linksToRequest":linkArray
        }
    }

    jsonMessage = JSON.stringify(message)
    //console.log(jsonMessage)

    connection.send(jsonMessage);   
}
