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

// $(window).scroll(function () {
//   if ($(this).scrollTop() >= document.body.scrollHeight / 2) {
//     $(".modal").addClass("show");
//   }
// });

// close modal

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

// show modal by scroll

function showModalByScroll() {
  if (window.pageYOffset > document.body.scrollHeight / 2) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}

window.addEventListener("scroll", showModalByScroll);

// product quantity

let decrement = document.querySelector(".decrement-btn");
console.log(decrement);
let increment = document.querySelector(".increment-btn");
console.log(increment);
let productCount = document.querySelector(".product-counter");
console.log(productCount);
let number = 1;

increment.onclick = function () {
  if (number < 5) {
    number++;
    productCount.value = number;
  }
};
decrement.onclick = function () {
  if (number > 1) {
    number--;
    productCount.value = number;
  }
};
