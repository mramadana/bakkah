// start to loader
$(window).on("load", function () {
  $(".Loading-container")
    .delay(200)
    .fadeOut(2000, function () {
      $("body").css("overflow", "auto");
    });
});

$(document).ready(function () {
  "use strict";
  let isRtl = $('html[lang="ar"]').length > 0;
  // when click to responsive btn show ul and overlay
  $(".nav-btn").click(function () {
    $(this).addClass("active");
    $(".nav-links").addClass("active");
    $(".nav-overlay").addClass("show");
  });

  // when i click on overlay remove class show and remove ul

  $(".nav-overlay").click(function () {
    $(".nav-btn").removeClass("active");
    $(".nav-links").removeClass("active");
    $(".nav-overlay").removeClass("show");
  });

  // select-2
  $(".select-plugin").select2({
    dir: isRtl ? "rtl" : "ltr",
  });

  $(".select").select2({
    dir: isRtl ? "rtl" : "ltr",
  });

  $(".select-plugin").select2({
    dropdownCssClass: "dropdown-select-2",
    minimumResultsForSearch: Infinity,
    dir: isRtl ? "rtl" : "ltr",
  });

  $(".select-timing").select2({
    dropdownCssClass: "dropdown-select-3",
    minimumResultsForSearch: Infinity,
    dir: isRtl ? "rtl" : "ltr",
  });

  $(':input[type="number"]').on("input", function () {
    var nonNumReg = /[^0-9]/g;
    $(this).val($(this).val().replace(nonNumReg, ""));
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $(".header-nav").addClass("show");
    } else {
      $(".header-nav").removeClass("show");
    }
  });

  // js footer
  if ($(window).width() <= 768) {
    $(".foot-title").click(function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).siblings(".links").stop().slideUp();
      } else {
        $(".foot-title").removeClass("active");
        $(".footer-links .links").stop().slideUp();
        $(this).addClass("active");
        $(this).siblings(".links").stop().slideDown();
      }
    });
  }

  // toggle icon-password
  $(".input-password i").click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(this).siblings(".main-input").attr("type", "text");
    } else {
      $(this).siblings(".main-input").attr("type", "password");
    }
  });

  $(".fave").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
  });

  $(".fave").click(function (e) {
    $(this).toggleClass("far");
    $(this).toggleClass("fas");
  });
});
