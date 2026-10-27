// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  console.log(guest);
  if (guest !== "") {
    addToList(guest);
    clearInput();
    updateGuestCount();
  }
});
const clearInput = function () {
  guestInput.value = "";
};
const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.appendChild(listItem);
};
const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};
const assignItems = function () {
  const potluckItems = [
    "baked char siu bao",
    "char siu bao",
    "har gow",
    "lotus-wrapped sticky rice",
    "sin chuk kuen",
    "fried taro puffs",
    "taro cake",
    "dan tat",
    "bolo bao",
    "jian dui",
    "double-yolk moon cake",
    "pão de queijo",
  ];
  const allGuests = document.querySelectorAll(".guest-list li");
  for (let guest of allGuests) {
    const randomPotLuckIndex = Math.floor(Math.random() * potluckItems.length);

    const randomPotluckItem = potluckItems[randomPotLuckIndex];

    const listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} will bring ${randomPotluckItem}.`;

    assignedItems.append(listItem);
    potluckItems.splice(randomPotLuckIndex, 1);
  }
};
assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});