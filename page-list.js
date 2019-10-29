"use strict";


class PageList {
    /**.
     *
     * @param {App} app
     */
    constructor(app) {
        this._app = app;
        this._mainElement = document.getElementById("main-page-list");
    }

    /**

     */
    show() {
        this._renderList();
        this._mainElement.classList.remove("hidden");
    }

    /**

     */
    hide() {
        this._mainElement.classList.add("hidden");
    }

    /**

     */
    _renderList() {

        let ol = document.querySelector("#main-page-list > ol");
        ol.innerHTML = "";


        let data = this._app.getData();

        if (data.length < 1) {
            let template = document.getElementById("template-page-list-empty").innerHTML;
            ol.innerHTML = template;
            return;
        }


        let template = document.getElementById("template-page-list-li").innerHTML;
        let index = -1;

        data.forEach(dataset => {

            index++;


            let dummy = document.createElement("div");
            dummy.innerHTML = template;

            dummy.innerHTML = dummy.innerHTML.replace("$INDEX$", index);
            dummy.innerHTML = dummy.innerHTML.replace("FIRMA", Firma);
            dummy.innerHTML = dummy.innerHTML.replace("$First_NAME$", dataset.first_name);
            dummy.innerHTML = dummy.innerHTML.replace("$Last_NAME$", dataset.last_name);
            dummy.innerHTML = dummy.innerHTML.replace("$KUNDENNUMMER$", dataset.Kundennummer);
            dummy.innerHTML = dummy.innerHTML.replace("$HOMEPAGE$", dataset.Homepage);


            let _addEventListeners = (index) => {

                let editButton = dummy.querySelector(".action.edit");
                editButton.addEventListener("click", () => this._app.showPage("page-edit", index));


                let deleteButton = dummy.querySelector(".action.delete");
                deleteButton.addEventListener("click", () => this._askDelete(index));
            };

            _addEventListeners(index);


            let li = dummy.firstElementChild;

            if (li) {
                dummy.removeChild(li);
                ol.appendChild(li);
            }
        });
    }

    /**

     *
     * @param {Integer} index
     */
    _askDelete(index) {
<<<<<<< HEAD

        let answer = confirm("Soll die ausgewählte Adresse wirklich gelöscht werden?");
=======
        // Sicherheitsfrage zeigen
        let answer = confirm("Soll die ausgewählte Kundenkarte wirklich gelöscht werden?");
>>>>>>> e396446b81e700b5bfc1df9dcf2580059a2790ea
        if (!answer) return;


        this._app.deleteDataByIndex(index);

        
        this._renderList();
    }
}
