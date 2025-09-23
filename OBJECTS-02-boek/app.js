// Maak een boek object waar je allemaal gegevens van een boek in kunt opslaan en tonen op het scherm.

// Het object moet de volgende properties bevatten:

//     Titel: de titel van het boek (string)
//     Auteur: de auteur van het boek (string)
//     Uitgeverij: de uitgeverij van het boek (string)
//     Jaar: het jaar van publicatie van het boek (number)
//     Verkocht: aantal verkochten exemplaren (number)
//     Prijs: prijs van het boek (string)

    const boek = {
        title: 'James Bond',
        auteur: 'JohnnyTheVillain',
        publisher: 'ORCA-Enterprises',
        year: '2002',
        sold: '94567842',
        price: '59$'
    }

// Toon elke property op het scherm door het in een p-tag te plaatsen. Hiervoor maak je in je HTML een div-tag aan met de class 'output'.
    const outputDiv = document.querySelector('.output');

    for (const key in book){
        const p = document.createElement('p');
        p.textContent = `${key}: ${book[key]}`;
        outputDiv.appendChild(p);
    }
// In de theorie staat uitgelegd hoe je dit moet doen.

// Let op: in de code conventions staat dat je de code in het Engels moet schrijven!