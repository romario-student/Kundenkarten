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
function showCards(cards) {
    var cardsSection = document.getElementById("list");
    for(var i = 0; i< cards.length; i++){
        var section = document.createElement("aside");
        section.className += "suggestion";
        var company = document.createElement("h4");
        company.innerHTML = cards[i].company;
        var customer = document.createElement("h5");
        customer.innerHTML = cards[i].customer;
        var username = document.createElement("h5");
        username.innerHTML = cards[i].username;
        var homepage = document.createElement('a');
        var link = document.createTextNode("Homepage");
        homepage.appendChild(link);
        homepage.title = "Homepage der Firma";
        homepage.href = homepage;
        section.appendChild(company);
        section.appendChild(customer);
        section.appendChild(username);
        section.appendChild(homepage);
        cardsSection.appendChild(section);
    }
};
