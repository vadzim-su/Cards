const allText = document.querySelector(".header__info");
const showAllText = document.querySelector(".header__detailed");

const openInfo = document.querySelectorAll(".cards__title");
const hiddenInfo = document.querySelectorAll(".cards__description-hidden");

const paginationItems = document.querySelectorAll(".pagination__item");

const menu = document.querySelector(".card-choose__sort");
const mainList = document.querySelector(".card-choose__list");
const items = document.querySelectorAll(".card-choose__item");
const sortMenu = document.querySelector(".card-choose__select_trigger");

const links = document.querySelectorAll("a");

// =====================Show all text in header======================

showAllText.addEventListener("click", () => {
  allText.classList.toggle("header__info_show");
});

// ========================Slider===============================

$(".navigation__slides").slick({
  slidesToShow: 2,
});

// =======================Selected menu==============================

menu.addEventListener("click", showList);

function showList() {
  mainList.classList.toggle("card-choose__showItems");
}

mainList.addEventListener("click", chooseItem);

function chooseItem(e) {
  let target = e.target;

  if (target.className === "card-choose__item") {
    sortMenu.innerHTML = target.innerHTML;
  }
}

window.addEventListener("click", closeWindow);

function closeWindow(e) {
  let target = e.target;
  if (!target.classList.contains("card-choose__select_trigger")) {
    mainList.classList.remove("card-choose__showItems");
  }
}

// =======================Show info about cards======================

openInfo.forEach((openItem) => {
  hiddenInfo.forEach((hiddenItem) => {
    if (openItem.id === hiddenItem.dataset.id) {
      openItem.addEventListener("click", function () {
        hiddenItem.classList.toggle("cards__description-shown");
      });
    }
  });
});

// =======================Pagination bar=============================

paginationItems.forEach((item) => {
  item.addEventListener("click", doActive);
});

function doActive() {
  paginationItems.forEach((item) => {
    item.classList.remove("pagination__item_active");
  });
  this.classList.add("pagination__item_active");
}

// =======================Delete =============================

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
