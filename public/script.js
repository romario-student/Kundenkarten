getCards();
function getCards() {
    $.get("/project", function(data) {
        if(!data) {
            console.log("No data received");
        }
        console.log("Received data:");
        for(var i = 0; i < data.length; i++){
            console.log(data[i].name);
        }
        showCards(data);
    })
};
