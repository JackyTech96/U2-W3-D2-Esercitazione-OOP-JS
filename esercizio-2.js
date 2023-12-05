window.onload = () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerPet").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;

    const registration = new Registration(petName, ownerName, species, breed);
    generateList(registration);
  });
};

class Registration {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  sameOwner(otherUser) {
    if (this.ownerName === otherUser.ownerName) {
      console.log(true);
    }
  }
}

function generateList(registration) {
  const listContainer = document.getElementById("list");
  const ul = document.createElement("ul");
  ul.classList.add("list-group");

  const li = document.createElement("li");
  li.classList.add("list-group-item");

  const registrationInfo = `
      <h4>Registrazione completata!</h4>
      <h6 class="mb-2">${registration.petName}</h6>
      <p class="mb-1">Owner: ${registration.ownerName}</p>
      <p class="mb-1">Species: ${registration.species}</p>
      <p class="mb-1">Breed: ${registration.breed}</p>
    `;

  li.innerHTML = registrationInfo;
  ul.appendChild(li);
  listContainer.appendChild(ul);
}
