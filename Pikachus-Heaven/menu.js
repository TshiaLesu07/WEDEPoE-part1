const searchInput = document.getElementById("menu-search");
const menuCards = document.querySelectorAll(".card-grid article");

searchInput.addEventListener("input", function() {
    const searchText = searchInput.value.toLowerCase().trim();

    menuCards.forEach(function (card){
        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchText)){
            card.style.display = "";
        } else{
            card.style.display = "none";
        }
    });
});