var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
        switch(this.responseType){
            case "":
                document.getElementById("startLinkBuilding").innerHTML = this.responseText;
                break;
            
            case "json":
                document.getElementById("startLinkBuilding").innerHTML = "Start Linkbuilding!";
                showReport();
                break;
        }
    }
    if(this.readyState == 4 && this.status == 400){
        alert("Incorrect data entered.")
    }
};

function start(){


    var targetURL = document.getElementById("targetUrl").value;
    var targetName = document.getElementById("targetName").value;
    var targetEmail = document.getElementById("targetEmail").value;
    var devEnviroment = document.getElementById("devEnviroment").checked;

    message = {
        "targetURL":targetURL,
        "targetName":targetName,
        "targetEmail":targetEmail,
        "devEnviroment":devEnviroment,
        "linksToRequest":linkArray
    }

    jsonMessage = JSON.stringify(message)
    console.log(jsonMessage)

    xmlhttp.open("POST", "http://127.0.0.1:8080/startBuilding", true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(jsonMessage);   
}

function showReport() {
    console.log("hello world");
}