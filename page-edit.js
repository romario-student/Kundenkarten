"use strict";

/**
 * Klasse PageEdit: Stellt die Seite mit dem Eingabeformular zur Verfügung.
 *
 * Diese Klasse wird von der App-Klasse zu bestimmten Zeitpunkten instantiiert
 * und aufgerufen, um die Liste mit den Adressen darzustellen.
 */
class PageEdit {
    /**
     * Konstruktor.
     *
     * @param {App} app Instanz der App-Klasse
     * @param {String} pageName Name der aufgerufenen Seite
     * @param  {Integer} editIndex Nummer des bearbeiteten Datensatzes
     */
    constructor(app, pageName, editIndex) {
        // Parameter merken
        this._app = app;
        this._editIndex = editIndex;

        // Hauptelement mit dem Inhalt der Seite ermitteln
        this._mainElement = document.getElementById("main-page-edit");

        // Bearbeiteten Datensetz einlesen
        this._dataset = {
            firma: "",
            first_name: "",
            last_name: "",
            kundennummer: "",
            homepage: "",
        };

        if (this._editIndex > -1) {
            let dataset = this._app.getDataByIndex(this._editIndex);

            this._dataset.firma = dataset.firma
            this._dataset.first_name = dataset.first_name;
            this._dataset.last_name = dataset.last_name;
            this._dataset.kundennummer = dataset.kundennummer;
            this._dataset.homepage = dataset.homepage;
        }
    }

    /**
     * Seite anzeigen. Wird von der App-Klasse aufgerufen.
     */
    show() {
        this._renderForm();
        this._mainElement.classList.remove("hidden");
    }

    /**
     * Seite nicht mehr anzeigen. Wird von der App-Klasse aufgerufen.
     */
    hide() {
        this._mainElement.classList.add("hidden");
    }

    /**
     * Formularfelder in die Seite einfügen. (Interne Methode)
     */
    _renderForm() {
        // Alten Inhalt verwerfen
        this._mainElement.innerHTML = "";

        // Formularfelder einfügen
        let template = document.getElementById("template-page-edit").innerHTML;
        this._mainElement.innerHTML = template;
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$FIRMA$", this._dataset.firma);
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$FIRST_NAME$", this._dataset.first_name);
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$LAST_NAME$", this._dataset.last_name);
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$KUNDENNUMMER$", this._dataset.kundennummer);
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$HOMEPAGE$", this._dataset.homepage);

        let saveButton = this._mainElement.querySelector(".action.save");
        saveButton.addEventListener("click", () => this._saveAndExit());
    }

    /**
     * Speichert den aktuell bearbeiteten Datensatz und kehr dann wieder
     * in die Listenübersicht zurück.
     */
    _saveAndExit() {
        // Eingegebene Werte überprüfen
        let firma = document.querySelector("#main-page-edit .firma").value.trim();
        let firstName = document.querySelector("#main-page-edit .first_name").value.trim();
        let lastName = document.querySelector("#main-page-edit .last_name").value.trim();
        let kundennummer = document.querySelector("#main-page-edit .kundennummer").value.trim();
        let homepage = document.querySelector("#main-page-edit .homepage").value.trim();

        if (firma === "") {
            alert("Geben Sie erst eine Firma ein.");
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

        // Datensatz speichern
        this._dataset.Firma = firma;
        this._dataset.first_name = firstName;
        this._dataset.last_name = lastName;
        this._dataset.kundennummer = kundennummer;
        this._dataset.homepage = homepage;

        if (this._editIndex > -1) {
            this._app.updateDataByIndex(this._editIndex, this._dataset);
        } else {
            this._app.appendData(this._dataset);
        }

        // Zurück zur Übersicht
        this._app.showPage("page-list");
    }
}
