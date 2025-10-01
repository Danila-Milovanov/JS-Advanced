async function fetchBirthdays() {
const response = await fetch('data.json');
const birthdays = await response.json();


const title = document.getElementById("title");
const list = document.getElementById("list");
const clearBtn = document.getElementById("clearBtn");


function displayBirthdays() {
title.textContent = `${birthdays.length} Birthdays Today`;
list.innerHTML = birthdays.map(person => `
<div class="person">
<img src="${person.image}" alt="${person.name}">
<div class="info">
<h4>${person.name}</h4>
<p>${person.age} years</p>
</div>
</div>
`).join("");
}


clearBtn.addEventListener("click", () => {
list.innerHTML = "";
title.textContent = "0 Birthdays Today";
});


displayBirthdays();
}


fetchBirthdays();