
const carousel = document.querySelector(".hero-carousel");

const previousButton = document.querySelector("#previous-photo");
const nextButton = document.querySelector("#next-photo");

if (carousel && previousButton && nextButton) {

    const slides = carousel.querySelectorAll(".hero-slide");

    function changePhoto(direction) {

        const currentIndex = Math.round(
            carousel.scrollLeft / carousel.clientWidth
        );

        const nextIndex =
            (currentIndex + direction + slides.length) % slides.length;

        carousel.scrollTo({
            left: nextIndex * carousel.clientWidth,
            behavior: "smooth"
        });
    }

    previousButton.addEventListener("click", function() {
        changePhoto(-1);
    });

    nextButton.addEventListener("click", function() {
        changePhoto(1);
    });

}
