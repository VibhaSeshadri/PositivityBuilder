src = "https://docs.google.com/spreadsheets/d/1AqqZPr3VJ3c0ijuaFAE7E9HnX-ZKlXNMuvmck9kYgfc/edit?usp=sharing";

var message;
function sendToSheets() {
    "use strict"
    message = document.getElementById("pThought");
    
};

convertTOGeoJSON = function(spreadsheetData){
    var geoJSON = {
        thoughts:[]
    };
    var thought = {
        properties:{
            thought: message,
        }
        
    };
};

geoJSON.thoughs.post(thought);

$document.ready(function(){
    key: '1AqqZPr3VJ3c0ijuaFAE7E9HnX-ZKlXNMuvmck9kYgfc',
    callback:convertTOGeoJSON,
    simpleSheet:true
}