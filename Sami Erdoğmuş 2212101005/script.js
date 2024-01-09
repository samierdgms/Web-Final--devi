

let currentSlide = 1;
let autoSlideInterval;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n > slides.length) { currentSlide = 1; }
    if (n < 1) { currentSlide = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[currentSlide - 1].style.display = 'block';
}

function changeSlide(n) {
    showSlide(currentSlide += n);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
    showSlide(currentSlide);
    startAutoSlide();
});


document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
        clearInterval(autoSlideInterval);
    } else {
        startAutoSlide();
    }
    // script.js



}
);
function bildiri() {

    alert("Başvurunuz alınmıştır");
}
function openForm(formId) {

    var form = document.getElementById(formId);
    form.style.display = "block";
}

function closeForm(formId) {
    var form = document.getElementById(formId);
    form.style.display = "none";
}
function calculatePrice(formId) {
    const personCountId = 'personCount' + formId.slice(-1);
    const totalPriceId = 'totalPrice' + formId.slice(-1);

    const personCount = document.getElementById(personCountId).value;



    const pricePerPerson = 100;
    const totalPrice = personCount * pricePerPerson;

    document.getElementById(totalPriceId).value = totalPrice;
}




