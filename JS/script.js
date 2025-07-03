// Get menu from query string, default to breakfast
function getMenuPage() {
  const params = new URLSearchParams(window.location.search);
  const menu = params.get("menu") || "breakfast";
  switch (menu) {
    case "lunch":
      return "lunch.html";
    case "dinner":
      return "dinner.html";
    case "dessert":
      return "dessert.html";
    case "drink":
      return "drink.html";
    default:
      return "breakfast.html";
  }
}
// Set iframe src
document.getElementById("menu-iframe").src = getMenuPage();

// Highlight active tab
const menu =
  new URLSearchParams(window.location.search).get("menu") || "breakfast";
document.querySelectorAll('[id^="tab-"]').forEach((tab) => {
  tab.classList.remove("border-b-[#53ce16]", "text-white");
  tab.classList.add("border-b-transparent", "text-[#a5c893]");
});
const activeTab = document.getElementById("tab-" + menu);
if (activeTab) {
  activeTab.classList.remove("border-b-transparent", "text-[#a5c893]");
  activeTab.classList.add("border-b-[#53ce16]", "text-white");
}
