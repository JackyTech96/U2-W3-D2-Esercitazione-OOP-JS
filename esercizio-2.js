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
    return this.ownerName === otherUser.ownerName;
  }
}

function generateList(registration) {
  const listContainer = document.getElementById("list");
  const ul = document.createElement("ul");
  ul.classList.add("list-group");

  const li = document.createElement("li");
  li.classList.add("list-group-item");

  const registrationInfo = `          
              <h4 class="mb-3">Registrazione completata!</h4>
                <div class="d-flex align-items-baseline">
                    <p class="pe-3 mb-0"><span class="fw-bold">Name</span>: ${registration.petName}</p>
                    <p class="pe-3 mb-0"><span class="fw-bold">Owner</span>: ${registration.ownerName}</p>
                    <p class="pe-3 mb-0"><span class="fw-bold">Species</span>: ${registration.species}</p>
                    <p class="pe-3 mb-0"><span class="fw-bold">Breed</span>: ${registration.breed}</p>
                    <button onclick="deleteList(event)" class="btn btn-light">❌</button>
                </div> 
    `;

  li.innerHTML = registrationInfo;
  ul.appendChild(li);
  listContainer.appendChild(ul);
}
const deleteList = (event) => {
  const listItem = event.target.closest(".list-group-item");
  listItem.parentNode.remove();
};
