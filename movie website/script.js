const arrows = document.querySelectorAll(".arrow");
const movielist = document.querySelectorAll(".movie-list");
const li = document.querySelectorAll("li")[4];


arrows.forEach((arrow, i) => {
    const widthRatio=Math.floor(window.innerWidth/300);
    let clickCounter = 0;
    const imageItem = movielist[i].querySelectorAll("img").length;
    arrow.addEventListener("click", function () {
        clickCounter++;
        if (imageItem - (4 + clickCounter)+(4-widthRatio) >= 0) {
            movielist[i].style.transform = `translateX(${movielist[i].computedStyleMap().get("transform")[0].x.value - 300}px)`

        } else {
            movielist[i].style.transform = "translateX(0)";
            clickCounter=0;
        }
    });
    
});



/*dark mode */

const ball = document.querySelector(".toggle-ball");

const items = document.querySelectorAll(
    ".container,.menu-list li,.movie-list-container h1,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-lister-filter select"
    );

ball.addEventListener("click", function () {
    items.forEach((item) => item.classList.toggle("active"));

})