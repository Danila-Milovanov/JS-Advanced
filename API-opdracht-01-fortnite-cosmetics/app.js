const container = document.getElementById("cosmetics-container");

async function fetchCosmetics() {
  try {
    const response = await fetch("https://fortnite-api.com/v2/cosmetics/new/");
    const data = await response.json();
    console.log(data)
    
    const items = data.data.items.br;
    console.log(items)
    items.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${item.images.featured}" alt="${item.name}">
        <h2>${item.name}</h2>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching cosmetics:", error);
    container.innerHTML = "<p>Could not load cosmetics</p>";
  }
}

fetchCosmetics();
