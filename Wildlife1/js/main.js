var images = [
    "bird.jpg",
    "squirell.jpg",
    "Deer.jpg"
];


var path = "img/slider/";
var currentImage = 0;
$("#slider img")
    .attr("src", path + images[currentImage]);
$("#slider .next").click(function() {
    currentImage++;
    if (currentImage >= images.length) {
        currentImage = 0;
    }
    $("#slider img")
        .attr("src", path + images[currentImage]);
});
$("#slider .pref").click(function() {
    currentImage--;
    if (currentImage >= images.length) {
        currentImage = 0;
    }
    $("#slider img")
        .attr("src", path + images[currentImage]);
});