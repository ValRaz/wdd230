const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const memberCards = document.querySelector("#member-cards");

memberCards.classList.add("grid");

gridButton.addEventListener("click", () => {
    memberCards.classList.add("grid");
    memberCards.classList.remove("list");
});

listButton.addEventListener("click", () => {
    memberCards.classList.add("list");
    memberCards.classList.remove("grid");
});