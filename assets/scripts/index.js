const viewPrices = document.getElementById("view-prices");
const viewFeat = document.getElementById("view-feat");
const contact = document.getElementById("contact");

var homePath = "/";
var pricePath = "/preise/";
var featPath = "/features/";

var isFirstrun = localStorage.getItem("isFirstrun");
if (isFirstrun === false || isFirstrun === null || isFirstrun === undefined) {
  const checkIN = confirm(
    "WICHTIG!!\n\nDiese Webseite dient nur zur Unterhaltung! Sie steht mit keinen Auftragsfickern in verbindung.\n\nMfG\ndas DG Team"
  );
  if (checkIN) {
    localStorage.setItem("isFirstrun", true);
    location.reload();
  } else {
    alert("Du musst diesen Dialog bestätigen, sonst kann die Seite nicht geladen werden");
    location.reload();
  }
} else {
  const getNavbar = new XMLHttpRequest();
  getNavbar.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("getNavbar").innerHTML = getNavbar.responseText;
    }
  };
  getNavbar.open("GET", "/assets/html/navbar.html", true);
  getNavbar.send();

  if (window.location.pathname === homePath) {
    viewPrices.addEventListener("click", () => {
      window.open(pricePath, "_self");
    });

    viewFeat.addEventListener("click", () => {
      window.open(featPath, "_self");
    });
  } else if (window.location.pathname === pricePath) {
    contact.addEventListener("click", () => {
      window.open("https://instagram.com/auftragsficker", "_blank");
    });
  }
}
