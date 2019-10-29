"use strict";

class PageEdit {
    /**

     * @param {App} app
     * @param {String} pageName
     * @param  {Integer} editIndex
     */
    constructor(app, pageName, editIndex) {

        this._app = app;
        this._editIndex = editIndex;


        this._mainElement = document.getElementById("main-page-edit");


        this._dataset = {
            Firma: "",
            first_name: "",
            last_name: "",
            K_Nr: "",
            Homepage: "",
        };

        if (this._editIndex > -1) {
            let dataset = this._app.getDataByIndex(this._editIndex);

            this._dataset.Firma = dataset.Firma;
            this._dataset.first_name = dataset.first_name;
            this._dataset.last_name = dataset.last_name;
            this._dataset.K_Nr = dataset.K_Nr;
            this._dataset.Homepage = dataset.Homepage;
        }
    }


    show() {
        this._renderForm();
        this._mainElement.classList.remove("hidden");
    }


    hide() {
        this._mainElement.classList.add("hidden");
    }


    _renderForm() {

        this._mainElement.innerHTML = "";


        let template = document.getElementById("template-page-edit").innerHTML;
        this._mainElement.innerHTML = template;
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$FIRMA$", this._dataset.firma);
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$FIRST_NAME$", this._dataset.first_name);
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$LAST_NAME$", this._dataset.last_name);
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$K_NR$", this._dataset.K_Nr);
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$HOMEPAGE$", this._dataset.homepage);

        let saveButton = this._mainElement.querySelector(".action.save");
        saveButton.addEventListener("click", () => this._saveAndExit());
    }


    _saveAndExit() {
<<<<<<< HEAD

=======
        // Eingegebene Werte überprüfen
        let Firma = document.querySelector("#main-page-edit .Firma").value.trim();
>>>>>>> e396446b81e700b5bfc1df9dcf2580059a2790ea
        let firstName = document.querySelector("#main-page-edit .first_name").value.trim();
        let lastName = document.querySelector("#main-page-edit .last_name").value.trim();
        let K_Nr = document.querySelector("#main-page-edit .K_Nr").value.trim();
        let Homepage = document.querySelector("#main-page-edit .Homepage").value.trim();

        if (Firma === "") {
            alert("Geben Sie erst einen Firmennamen ein.");
            return;
        }

        if (firstName === "") {
            alert("Geben Sie erst einen Vornamen ein.");
            return;
        }

        if (lastName === "") {
            alert("Geben Sie erst einen Nachnamen ein.");
            return;
        }

<<<<<<< HEAD

=======
        if (K_Nr === "") {
            alert("Geben Sie erst eine Kundennummer ein.");
            return;
        }

        // Datensatz speichern
        this._dataset.Firma = Firma;
>>>>>>> e396446b81e700b5bfc1df9dcf2580059a2790ea
        this._dataset.first_name = firstName;
        this._dataset.last_name = lastName;
        this._dataset.K_Nr = K_Nr;
        this._dataset.Homepage = Homepage;

        if (this._editIndex > -1) {
            this._app.updateDataByIndex(this._editIndex, this._dataset);
        } else {
            this._app.appendData(this._dataset);
        }

        
        this._app.showPage("page-list");
    }
}
