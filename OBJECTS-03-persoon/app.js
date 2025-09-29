// Stap 1

// Maak een persoon object waar je allemaal eigenschappen van een persoon in kunt opslaan en tonen op het scherm.

// Het object moet de volgende properties bevatten:

//     Naam: de naam van de persoon (string)
//     Leeftijd: de leeftijd van de persoon (number)
//     Geboortedatum: de geboortedatum van de persoon (string)
//     Geslacht: het geslacht van de persoon (string)
//     In leven: geef aan of de persoon nog leeft (boolean)
//     Hobby’s: 4 hobby’s van de persoon (array)

// Toon elke property op het scherm door het in een p-tag te plaatsen. Hiervoor gebruik je de div-tag van de vorige opdracht.
// Stap 2:

// Het object moet ook de volgende methods bevatten:

//     Een method (functie) die de naam moet veranderen. De naam moet je via de parameters kunnen meegeven.
//     Een method (functie) die het ‘in leven’ property kan veranderen.
//     Een method (functie) die een extra hobby toevoegt aan de array. Een hobby moet je via de parameters kunnen meegeven.

// Toon de wijzigingen op het scherm.

// Gebruik geen arrow function in een object!

var persoon = {
    naam: "Jason",
    leeftijd: 34, 
    geboortedatum: "2000-01-01",
    geslacht: "Man",
    inLeven: true,
    hobbies: ["Coding", "Basketball", "Dancen", "Koken"],

    veranderNaam: function(nieuweNaam) {
        this.naam = nieuweNaam;
        this.toon();
    },
    veranderLeven: function(status) {
        this.inLeven = status;
        this.toon();
    },
    voegHobbyToe: function(nieuweHobby) {
        this.hobbies.push(nieuweHobby);
        this.toon();
    },

    toon: function() {
        var div = document.getElementById("persoon-info");
        div.innerHTML = `
        <p><strong>Naam:</strong> ${this.naam}</p>
        <p><strong>Leeftijd:</strong> ${this.leeftijd}</p>
        <p><strong>Geboortedatum:</strong> ${this.geboortedatum}</p>
        <p><strong>Geslacht:</strong> ${this.geslacht}</p>
        <p><strong>In leven:</strong> ${this.inLeven}</p>
        <p><strong>Hobby's:</strong> ${this.hobbies.join(", ")}</p>
        `;
    }
};

persoon.toon();
