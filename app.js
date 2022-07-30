// add to cart
let productsCountEl = document.getElementById("products-count");
// console.log(productsCountEl);

let addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
// console.log(addToCartBtns);

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  });
}

//  like

let likeBtns = document.querySelectorAll(".like");

likeBtns.forEach((item) =>
  item.addEventListener("click", function () {
    // if (item.classList.contains("liked")) {
    //   item.classList.remove("liked");
    // } else {
    //   item.classList.add("liked");
    // }
    item.classList.toggle("liked");
  })
);

// more details

let moreDetailsBtns = document.querySelectorAll(".btn-more-details");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close");

function openModal() {
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));

btnClose.addEventListener("click", closeModal);

// slider

$(".slider").slick({
  dots: true,
});
