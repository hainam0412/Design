$(document).ready(function () {
  $(".burger").click(function () {
    $(".nav__bars").slideToggle(700);
    $(".line-1").toggleClass("line-1-move");
    $(".line-2").toggleClass("line-2-move");
    $(".line-3").toggleClass("line-3-move");
  });

  $(".more-btn").click(function (e) {
    e.preventDefault();
    $(".hidden").slideToggle(700);
    $(".hidden").toggleClass("show-row");
  });
});

// var loadMore = document.querySelector(".more-btn");
// const hidMenu = document.querySelector(".hidden");

// loadMore.addEventListener("click", (e) => {
//     e.preventDefault();

// });
