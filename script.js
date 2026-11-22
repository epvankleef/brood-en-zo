// Zoek de knop en het blok met openingstijden op
const knop = document.getElementById("openingstijden-knop");
const openingstijden = document.getElementById("openingstijden");

// Bij een klik: toon of verberg de openingstijden en pas de tekst op de knop aan
knop.addEventListener("click", function () {
  if (openingstijden.hidden) {
    openingstijden.hidden = false;
    knop.textContent = "Verberg openingstijden";
  } else {
    openingstijden.hidden = true;
    knop.textContent = "Toon openingstijden";
  }
});
