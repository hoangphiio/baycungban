export default function swapButtonModule() {
  // Button swap
  $("#location-swap").click(function () {
    var div1_value = $("#location-from").html();
    var div2_value = $("#location-to").html();
    $("#location-from").hide().html(div2_value).fadeIn(500);
    $("#location-to").hide().html(div1_value).fadeIn(500);
  });
}
