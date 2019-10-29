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
            first_name: "",
            last_name: "",
            phone: "",
            email: "",
        };

        if (this._editIndex > -1) {
            let dataset = this._app.getDataByIndex(this._editIndex);

            this._dataset.first_name = dataset.first_name;
            this._dataset.last_name = dataset.last_name;
            this._dataset.phone = dataset.phone;
            this._dataset.email = dataset.email;
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
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$FIRST_NAME$", this._dataset.first_name);
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$LAST_NAME$", this._dataset.last_name);
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$PHONE$", this._dataset.phone);
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$EMAIL$", this._dataset.email);

        let saveButton = this._mainElement.querySelector(".action.save");
        saveButton.addEventListener("click", () => this._saveAndExit());
    }


    _saveAndExit() {

        let firstName = document.querySelector("#main-page-edit .first_name").value.trim();
        let lastName = document.querySelector("#main-page-edit .last_name").value.trim();
        let phone = document.querySelector("#main-page-edit .phone").value.trim();
        let email = document.querySelector("#main-page-edit .email").value.trim();

        if (firstName === "") {
            alert("Geben Sie erst einen Vornamen ein.");
            return;
        }

        if (lastName === "") {
            alert("Geben Sie erst einen Nachnamen ein.");
            return;
        }


        this._dataset.first_name = firstName;
        this._dataset.last_name = lastName;
        this._dataset.phone = phone;
        this._dataset.email = email;

        if (this._editIndex > -1) {
            this._app.updateDataByIndex(this._editIndex, this._dataset);
        } else {
            this._app.appendData(this._dataset);
        }

        
        this._app.showPage("page-list");
    }
}
