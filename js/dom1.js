var left = document.querySelector("#left");
var right = document.querySelector("#right");
var itemsList = document.querySelector("#items");
var slider = document.querySelector(".slider");
var items = document.querySelectorAll(".item");

var minRight = 0;
var sliderWidth = getComputedStyle(slider).width;
var itemWidth = getComputedStyle(items[0]).width;
var step = parseInt(itemWidth);
var list = parseInt(sliderWidth);
var preShownItems = list / step;
var maxRight = (items.length - preShownItems) * step;
var currentRight = 0;

itemsList.style.right = currentRight;

right.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentRight < maxRight) {
    currentRight += step;
    itemsList.style.right = `${currentRight}px`;
  }
});

left.addEventListener("click", (e) => {
  e.preventDefault();

  if (currentRight > minRight) {
    currentRight -= step;
    itemsList.style.right = `${currentRight}px`;
  }
});
