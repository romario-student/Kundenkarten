# Stocard

Gruppenprojekt: Online-Kundenkartenverwaltungsdienst.

Gruppenteilnehmer: Aylin Günes, Lars Berning, Romario Hagemann

Unsere Website: 
Die Website Stocard ist ein Online-Kundenkartenverwaltungsdienst. 
Auf der Homepage befinden sich folgende Navigationselemente:

- Home: Zeigt die Startseite von Stocard an.

- Deine Kundenkarten: Führt zum Abschnitt, indem die Kundenkarten angezeigt,bearbeitet und angelegt werden können.

- Partner: Zeigt die mit Stocard zusammenarbeitenden Partnerunternehmen an.

- Kontakt/Anfragen: Öffnet ein Formular, in welchem Fragen an den Support gesendet werden können.


Technische Details:

Der Server wurde mittels node.js aufgesetzt. Installiert wurden dabei der BodyParser, sqlite3 und express. 
Die Datenbank, die dahinter arbeitet ist eine sqlite3 Datenbank. Das Schema der Datenbank heißt project, dass wiederum in 3 verschiedene
Tabellen aufgeteilt ist. Users, Request und Cards. 

Die verschiedenen Input-Felder auf der Website interagieren mit der Datenbank. Leider werden die Inhalte erst nach einmal refreshen 
angezeigt. Die erstellten Karten werden unten in der Liste angezeigt und können gelöscht und bearbeitet werden. 
Unten bei der Kontaktanfrage können Anfragen gestellt werden. Diese werden nur abgeschickt und in der Datenbank gespeichert. Sie werden
angezeigt. 



