// Opdracht 3.1: Zoekfunctie
console.log('🚀 Opdracht 3.1: Zoekfunctie');

const films = ['The Matrix', 'avatar', 'INCEPTION', 'Titanic'];
console.log('Alle films:', films);

function zoekFilms(films, zoekterm) {
    // TODO: Return films die de zoekterm bevatten
    const lowerZoekterm = zoekterm.toLowerCase();
    return films.filter(film =>
        film.toLowerCase().includes(lowerZoekterm)
    );
}


// Test de functie
console.log('Zoek "the":', zoekFilms(films, 'the'));
console.log('Zoek "the":', zoekFilms(films, 'a'));
console.log('Verwacht voor "the": ["The Matrix"]');
