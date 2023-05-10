$(document).ready(function () {
  $(".slide-block-grid").slick({
    arrows: false,
    autoplay: false,
    slideToShow: 1,
    slideToScroll: 1,
  });
});

$(window).on("load", function () {
  $(".featured__slider__row").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
  });
});

$(window).on("load", function () {
  $(".main_images").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: ".thumb_images",
  });
  $(".thumb_images").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".main_images",
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
  });
});

$(document).on("click", ".easytabs-tab-item", function () {
  $(this).toggleClass("tab-item-active");
  $(this).siblings(".easytabs-tab-item").removeClass("tab-item-active");
});

$(document).on("click", ".easytabs-tabs li", function () {
  let tabValue = $(this).data("tab");
  $(".easytabs-content-item").removeClass("content-item-active");
  $(".easytabs-contents")
    .find("[data-tab=" + tabValue + "]")
    .addClass("content-item-active");

  // $(".easytabs-content-item").addClass("content-item-active");
  // $(this).siblings(".easytabs-content-item").removeClass("content-item-active");
});

// $(document).on("click", ".accordion-content-head h3", function () {
//   let accValue = $(this).data("acc");
//   // $(".accordion-content-text")
//   //   .find("[data-acc=" + accValue + "]")
//   //   .toggleClass("acc-active");
//   // $(".accordion-content")
//   //   .find("[data-acc=" + accValue + "]")
//   //   .addClass("acc-active");
//   $(".accordion-content-text").addClass("acc-active");
//   $(this).siblings(".accordion-content-text").removeClass("acc-active");
// });

$(".accordion-content-head").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("active");

  let $this = $(this);
  if ($this.next().hasClass("show")) {
    $this.next().removeClass("show");
    $this.next().slideUp(350);
  } else {
    $this.parent().parent().find(".accordion-content-text").removeClass("show");
    $this.parent().parent().find(".accordion-content-text").slideUp(350);
    $this.next().toggleClass("show");
    $this.next().slideToggle(350);
  }
});

/*$(document).on("click", ".accordion-content-head h3", function () {
  $(".accordion-content-head").toggleClass("active");
  $(this).siblings(".accordion-content-head").removeClass("active");
});*/



$(document).on("click", ".model-btn-container button", function () {
  let tabValue = $(this).data("tab");
  $(".feature-container").removeClass("feature-container-active");
  $(this).addClass("active");
  $(this).siblings(".df-model").removeClass("active");
  $('.feature-container[data-tab="'+tabValue+'"]').addClass("feature-container-active");
  $('.df-model-img').removeClass("df-model-img-active");
  $('.df-model-img[data-tab="'+tabValue+'"]').addClass("df-model-img-active");
});



$(window).on("load", function () {
  $(".black-content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
  });
});


$(document).on("click", ".reserve-btn button", function () {
$("#reservenow").addClass("res-block");
$(".reservenow").addClass("res-active");
});

$(document).on("click", ".reservenow .close-btn", function () {
$(".reservenow").removeClass("res-active");
  $("#reservenow").removeClass("res-block");
});


function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}
const countDownDate = new Date("May 17, 2023 00:00:00").getTime();
const countdownfunc = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24
)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60
)) / (1000 * 60 * 60));
  let x = minutes.toString().split("")[1];
  console.log(minutes);
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  days = pad(days);
  hours = pad(hours);
  minutes = pad(minutes);
  seconds = pad(seconds);
  document.getElementById("days1a").innerHTML = days.split("")[0];
  document.getElementById("days1b").innerHTML = days.split("")[1];
  document.getElementById("hours1a").innerHTML = hours.split("")[0];
  document.getElementById("hours1b").innerHTML = hours.split("")[1];
  document.getElementById("mins1a").innerHTML = minutes.split("")[0];
  document.getElementById("mins1b").innerHTML = minutes.split("")[1];
  document.getElementById("sec1a").innerHTML = seconds.split("")[0];
  document.getElementById("sec1b").innerHTML = seconds.split("")[1];
}, 1000);

