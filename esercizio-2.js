window.onload = () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerPet").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;

    const registration = new Registration(petName, ownerName, species, breed);
    generateCard(registration);
  });
};

class Registration {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
}

function generateCard(registration) {
  const cardsContainer = document.getElementById("cards");

  const cardHTML = `
      <div class="col">
        <div class="card text-white bg-primary mb-3">
          <div class="card-body">
          <h4>Registrazio completata!</4>
          <hr class="mt-1">
            <h6 class="card-title mb-3">${registration.petName}</h6>
            <h6 class="card-subtitle mb-3 text-white">${registration.ownerName}</h6>
            <p class="card-text">
              Species: ${registration.species}</p>
             <p class="card-text"> Breed: ${registration.breed}</p>
          </div>
        </div>
      </div>
    `;

  cardsContainer.insertAdjacentHTML("beforeend", cardHTML);
}
