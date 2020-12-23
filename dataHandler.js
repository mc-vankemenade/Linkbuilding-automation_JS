//imports file with different types of known domains to match links with
const domainTypes = require("./data/domainlist.json");

//parses the domaintypes JSON File into multiple variables
var domainType1 = domainTypes["domainType1"]
var domainType2 = domainTypes["domainType2"]
var domainType3 = domainTypes["domainType3"]

const dataParser = function (data) {

    //parses the data from the webserver into two variables
    let links = data["linksToRequest"];
    delete data["linksToRequest"];
    let credentials = data;

    var linkType1 = [];
    var linkType2 = [];
    var linkType3 = [];

    
    //tests each link against all the domains of the different types and adds them to their respective arrays
    links.forEach(link => {
        
        domainType1.forEach(domain => {
            if(link.includes(domain)){
                linkType1.push(link);
            }
        });

        domainType2.forEach(domain => {
            if(link.includes(domain)){
                linkType2.push(link);
            }
        });

        domainType3.forEach(domain => {
            if(link.includes(domain)){
                linkType3.push(link);
            }
        });
    });


    console.log(links);
    console.log(linkType1);
    console.log(linkType2);
    console.log(linkType3);
}

//exports functions so that they can be called from other files.
module.exports = {
    dataParser
};
    