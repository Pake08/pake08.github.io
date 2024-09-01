window.onload = () => {
  document.getElementById("home").style.display = "block";
  document.getElementById("present").style.display = "none";
  document.getElementById("sale").style.display = "none";
  document.getElementById("buy").style.display = "none";
}
function showHome() {
  document.getElementById("home").style.display = "block";
  document.getElementById("present").style.display = "none";
  document.getElementById("sale").style.display = "none";
  document.getElementById("buy").style.display = "none";
}
function showPresent() {
  document.getElementById("home").style.display = "none";
  document.getElementById("present").style.display = "block";
  document.getElementById("sale").style.display = "none";
  document.getElementById("buy").style.display = "none";
}
function showSale() {
  document.getElementById("home").style.display = "none";
  document.getElementById("present").style.display = "none";
  document.getElementById("sale").style.display = "block";
  document.getElementById("buy").style.display = "none";
}
function showBuy() {
  document.getElementById("home").style.display = "none";
  document.getElementById("present").style.display = "none";
  document.getElementById("sale").style.display = "none";
  document.getElementById("buy").style.display = "flex";
}
