async function fetchCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags");
    const countries = await response.json();

    const grid = document.getElementById("countries-grid");

    countries.forEach(country => {
      const div = document.createElement("div");
      div.classList.add("country");
      
      div.innerHTML = `
        <img src="${country.flags.svg}" alt="Flag of ${country.name.common}">
        <h3>${country.name.common}</h3>
      `;

      grid.appendChild(div);
    });
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
}

fetchCountries();
