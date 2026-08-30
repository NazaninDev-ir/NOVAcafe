// ================================
// Category Filter
// ================================

const categories = document.querySelectorAll(".category");
const products = document.querySelectorAll(".product");
const sectionTitle = document.getElementById("sectionTitle");

categories.forEach(category => {

    category.addEventListener("click", () => {

        const selectedCategory = category.dataset.category;

        // Active category
        categories.forEach(item => {
            item.classList.remove("active");
        });

        category.classList.add("active");


        // Change title
        sectionTitle.textContent = category.querySelector("span").textContent;


        // Filter products
        products.forEach(product => {

            if (product.dataset.category === selectedCategory) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    });

});


// ================================
// Hero Slider
// ================================

const heroImage = document.getElementById("heroImage");
const dots = document.querySelectorAll(".dot");

const banners = [
    "images/1788111370443-01a053be-1863-72c5-b3e4-cc1a01873f1b.jpeg",
    "images/1788111560705-01a053c0-e8de-728a-853c-501e0cee670a.jpeg",
    "images/1788111560705-01a053c0-e8de-728a-853c-501e0cee670a.jpeg"
];

let currentSlide = 0;


// Change slide
function showSlide(index) {

    currentSlide = index;

    heroImage.src = banners[currentSlide];


    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[currentSlide].classList.add("active");

}


// Auto slider
setInterval(() => {

    currentSlide++;

    if (currentSlide >= banners.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 5000);


// Click on dots
dots.forEach(dot => {

    dot.addEventListener("click", () => {

        const slide = Number(dot.dataset.slide);

        showSlide(slide);

    });

});


// ================================
// Product Modal
// ================================

const productModal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalOverlay = document.querySelector(".modal-overlay");

const modalImage = document.getElementById("modalProductImage");
const modalName = document.getElementById("modalProductName");
const modalDescription = document.getElementById("modalProductDescription");
const modalPrice = document.getElementById("modalProductPrice");

const quantityValue = document.getElementById("quantityValue");
const decreaseQuantity = document.getElementById("decreaseQuantity");
const increaseQuantity = document.getElementById("increaseQuantity");
const modalAddToCart = document.getElementById("modalAddToCart");

const cartBadge = document.querySelector(".cart-button .badge");

let quantity = 1;
let cartCount = 0;


// Open Product Modal
products.forEach(product => {

    product.addEventListener("click", event => {

        // Ignore favorite button
        if (event.target.closest(".favorite")) {
            return;
        }

        const image = product.querySelector(".product-image img");
        const name = product.querySelector("h3");
        const description = product.querySelector(".product-info p");
        const price = product.querySelector(".price");

        modalImage.src = image.src;
        modalImage.alt = image.alt;

        modalName.textContent = name.textContent;
        modalDescription.textContent = description.textContent;
        modalPrice.textContent = price.textContent;

        quantity = 1;
        quantityValue.textContent = quantity;

        productModal.classList.add("active");

    });

});


// Close Product Modal
function closeProductModal() {

    productModal.classList.remove("active");

}


modalClose.addEventListener("click", closeProductModal);

modalOverlay.addEventListener("click", closeProductModal);


// Quantity +
increaseQuantity.addEventListener("click", event => {

    event.stopPropagation();

    quantity++;

    quantityValue.textContent = quantity;

});


// Quantity -
decreaseQuantity.addEventListener("click", event => {

    event.stopPropagation();

    if (quantity > 1) {

        quantity--;

        quantityValue.textContent = quantity;

    }

});


// Add To Cart
modalAddToCart.addEventListener("click", event => {

    event.stopPropagation();

    cartCount += quantity;

    cartBadge.textContent = cartCount;

    closeProductModal();

});