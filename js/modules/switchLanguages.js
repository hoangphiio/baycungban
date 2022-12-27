export default function switchLanguages() {
  $(document).ready(function () {
    // By default
    $(".eng-lang").addClass("active-lang");
    $("#lang-switch .eng").addClass("active-flag");

    // Function switch
    $(function () {
      // French button
      $("#lang-switch .vn").click(function () {
        // Enable French
        $(".vn-lang").addClass("active-lang");

        // Disable English
        $(".eng-lang").removeClass("active-lang");

        // Active or remove the opacity on the flags.
        $("#lang-switch .vn").addClass("active-flag");
        $("#lang-switch .eng").removeClass("active-flag");
      });

      // English button
      $("#lang-switch .eng").click(function () {
        // Enable English
        $(".eng-lang").addClass("active-lang");

        // Disable French
        $(".vn-lang").removeClass("active-lang");

        // Active or remove the opacity on the flags.
        $("#lang-switch .eng").addClass("active-flag");
        $("#lang-switch .vn").removeClass("active-flag");
      });
    });
  });
}
