var linkList = document.getElementById("backlinkList");

var linkArray = [];

function updateList() {
    linkList.innerHTML = "";
    for (let i=0; i < linkArray.length; i++) {
        linkList.innerHTML += "<a target='_blank' href=" + linkArray[i] + ">" + linkArray[i] + "</a>";

        linkList.innerHTML += "<button type='button' class='deleteButton' data-linkid=" + i + " id=" + "delete " + i + ">Delete</button>";
        
        linkList.innerHTML += "<br>";
        linkList.innerHTML += "<br>";

    }
    const deleteButtons = document.querySelectorAll(".deleteButton");
    deleteButtons.forEach(deleteButtons => {
        deleteButtons.addEventListener('click', function(){
            let num = this.getAttribute("data-linkid");
            linkArray.splice(num, 1);
            updateList(); 
        });
    })


}


function addLink() {
    let newlink = prompt("please enter a URL", "https://");
    console.log(newlink)
    linkArray.push(newlink);
    console.log(linkArray)


    updateList();
}