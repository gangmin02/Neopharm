$(function () {
  $(".gnb .depth1")
    .mouseenter(function () {
      $(this).find(".depth2").slideDown();
    })
    .mouseleave(function () {
      $(this).find(".depth2").hide();
    });
});
