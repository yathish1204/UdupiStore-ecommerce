import { category } from "./index.js";
// import products from "./products.json";
// assert { type: "json" };

fetch("./js/products.json")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
  });

const tabContainer = document.querySelector(".tabs-container");

function renderCategoryTabs(categoryList) {
  tabContainer.innerHTML = "";
  categoryList.forEach((category) => {
    const tab = document.createElement("div");
    tab.classList.add("tab");
    tab.setAttribute("data-category", category.name);
    tab.innerHTML = `
    <img src=${category.src} alt=${category.name}>
            <p>${category.name}</p>
    `;
    tabContainer.appendChild(tab);
  });
}

renderCategoryTabs(category);
