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
    "images/banners/banner-01.webp",
    "images/banners/banner-02.webp",
    "images/banners/banner-03.webp"
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