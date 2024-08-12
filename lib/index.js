// TODO: Fetch an activity with the Bored API - Let's pseudocode!
const url = "https://the-fork.api.lewagon.com/api/v1/restaurants";
const button = document.querySelector(".btn-warning");

const insert = (data) => {
  button.innerText = data[11].name;
};

button.addEventListener("click", (event) => {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    insert(data);
  });
});
































// const options = ["Study code", "Drink a coffe", "Play video-games"]
// const button = document.querySelector(".btn-warning");

// button.addEventListener("click", (event) => {
//   const index = Math.floor(Math.random() * 3);
//   event.currentTarget.innerText = options[index];
// });

// CRUD    &    Verbs
// Read         GET
// Create       POST
// Update       PATCH
// Delete       DELETE

