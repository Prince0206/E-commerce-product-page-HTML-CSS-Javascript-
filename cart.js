const countEL = document.querySelector(".count");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const cartIcon = document.querySelector(".cart i");
const cartContainer = document.querySelector(".cart-container");
const cartCount = document.querySelector(".cart-count");
const addToCartBtn = document.querySelector(".add-to-cart");
const cartItems = document.querySelector(".cart-items");
const checkout = document.querySelector(".checkout");

let count = 0;
let totalQty = 0;

const updateCount = (newCount) => {
  count = newCount;
  countEL.textContent = count;
};

minus.addEventListener("click", () => {
  if (count > 0) {
    updateCount(count - 1);
  }
});

plus.addEventListener("click", () => {
  updateCount(count + 1);
});

cartIcon.addEventListener("click", () => {
  cartContainer.classList.toggle("active");
});

cartCount.addEventListener("click", () => {
  cartContainer.classList.toggle("active");
});

const updateTotalQty = () => {
  const cartItemsList = document.querySelectorAll(".cart-item");
  totalQty = 0;
  cartItemsList.forEach((item) => {
    totalQty += parseInt(item.dataset.quantity);
  });

  cartCount.innerHTML = `<span class="qty">${totalQty}</span>`;
};

const removeItemFromCart = (cartItem) => {
  cartItem.remove();
  updateTotalQty();

  if (cartItems.children.length == 1) {
    cartItems.classList.add("empty");
    checkout.classList.add("empty");
  }
};

const addItemtoCart = (name, price, imgSrc) => {
  const totalPrice = price * count;

  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  cartItem.dataset.quantity = count;
  cartItem.innerHTML = `
       <img src="${imgSrc}" alt="${name}"/>
       <div>
        <div>${name}</div>
        <div>
           <p>
             $${price.toFixed(2)} x ${count}
             <span class="total-price">$${totalPrice.toFixed(2)}</span>
           <p>
        </div>
       </div>
       <button class="delete-item">
       <i class="fa fa-trash" ait="delete icon"></i>
       </button>
    `;

  cartItems.appendChild(cartItem);
  updateTotalQty();

  if (cartItems.classList.contains("empty")) {
    cartItems.classList.remove("empty");
    checkout.classList.remove("empty");
  }

  /* attach an event listener to the delete button */

  const deleteButton = cartItem.querySelector(".delete-item");
  deleteButton.addEventListener("click", (event) => {
    const cartItem = event.target.closest(".cart-item");
    removeItemFromCart(cartItem);
  });
};

addToCartBtn.addEventListener("click", () => {
  if (count === 0) return;

  const productName = document.querySelector(".main .product-name").textContent;
  const productPriceEl = document.querySelector(".main .current-price");
  const productPrice = parseFloat(productPriceEl.textContent.replace("$", ""));
  const productImg = document
    .querySelector(".default.gallery .main-img img")
    .getAttribute("src");

  addItemtoCart(productName, productPrice, productImg);
  cartContainer.classList.add("active");

  updateCount(0);
});
