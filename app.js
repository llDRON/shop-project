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

// let decrement = document.querySelector(".decrement-btn");
// console.log(decrement);
// let increment = document.querySelector(".increment-btn");
// console.log(increment);
// let productCount = document.querySelector(".product-counter");
// console.log(productCount);
// let number = 1;

// increment.onclick = function () {
//   if (number < 5) {
//     number++;
//     productCount.value = number;
//   }
// };
// decrement.onclick = function () {
//   if (number > 1) {
//     number--;
//     productCount.value = number;
//   }
// };

let decrementBtns = document.querySelectorAll(".decrement-btn");
let incrementsBtns = document.querySelectorAll(".increment-btn");
let quantityInput = document.querySelectorAll(".product-quantity input");

function Counter(incBtn, decBtn, inpValue, minCount = 1, maxCount = 5) {
  this.domRefs = {
    incBtn,
    decBtn,
    inpValue,
  };
  this.toggleButtonState = function () {
    let count = this.domRefs.inpValue.value;
    this.domRefs.decBtn.disabled = count <= minCount;
    this.domRefs.incBtn.disabled = count >= maxCount;
  };
  this.toggleButtonState();

  this.increment = function () {
    this.domRefs.inpValue.value = +this.domRefs.inpValue.value + 1;
    this.toggleButtonState();
  };
  this.decrement = function () {
    this.domRefs.inpValue.value = +this.domRefs.inpValue.value - 1;
    this.toggleButtonState();
  };
  this.domRefs.incBtn.addEventListener("click", this.increment.bind(this));
  this.domRefs.decBtn.addEventListener("click", this.decrement.bind(this));
}
let counter1 = new Counter(
  incrementsBtns[0],
  decrementBtns[0],
  quantityInput[0]
);
let counter2 = new Counter(
  incrementsBtns[1],
  decrementBtns[1],
  quantityInput[1]
);
let counter3 = new Counter(
  incrementsBtns[2],
  decrementBtns[2],
  quantityInput[2]
);
let counter4 = new Counter(
  incrementsBtns[3],
  decrementBtns[3],
  quantityInput[3]
);
let counter5 = new Counter(
  incrementsBtns[4],
  decrementBtns[4],
  quantityInput[4]
);
let counter6 = new Counter(
  incrementsBtns[5],
  decrementBtns[5],
  quantityInput[5]
);
let counter7 = new Counter(
  incrementsBtns[6],
  decrementBtns[6],
  quantityInput[6]
);
let counter8 = new Counter(
  incrementsBtns[7],
  decrementBtns[7],
  quantityInput[7]
);
let counter9 = new Counter(
  incrementsBtns[8],
  decrementBtns[8],
  quantityInput[8]
);
