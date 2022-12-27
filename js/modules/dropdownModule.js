export default function dropdownModule() {
  $(".dropdown-click .selected").on("click", function () {
    $(".dropdown-click .dropdown-content ul").slideToggle();
  });

  $(".dropdown-click .dropdown-content ul li span").on("click", function () {
    // var bindText = $(this).html();
    $(".dropdown-click .selected span").html($(this).html());
    $(".dropdown-click .dropdown-content ul").slideUp();
  });

  $(".quality-click .selected").on("click", function () {
    $(".quality-click .quality-content ul").slideToggle();
  });

  $(".quality-click .quality-content ul li span").on("click", function () {
    // var bindText = $(this).html();
    $(".quality-click .selected span").html($(this).html());
    $(".quality-click .quality-content ul").slideUp();
  });
}
