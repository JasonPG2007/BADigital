$(function () {
  setTimeout(() => {
    const $sidebarNavWrapper = $(".sidebar-nav-wrapper");
    const $mainWrapper = $(".main-wrapper");
    const $menuToggleButton = $("#menu-toggle");
    const $menuToggleButtonIcon = $("#menu-toggle i");
    const $overlay = $(".overlay");

    $menuToggleButton.on("click", function () {
      $sidebarNavWrapper.toggleClass("active");
      $overlay.addClass("active");
      $mainWrapper.toggleClass("active");

      if ($(window).width() > 1200) {
        if ($menuToggleButtonIcon.hasClass("fa-chevron-left")) {
          $menuToggleButtonIcon
            .removeClass("fa-chevron-left")
            .addClass("fa-bars");
        } else {
          $menuToggleButtonIcon
            .removeClass("fa-bars")
            .addClass("fa-chevron-left");
        }
      } else {
        if ($menuToggleButtonIcon.hasClass("fa-chevron-left")) {
          $menuToggleButtonIcon
            .removeClass("fa-chevron-left")
            .addClass("fa-bars");
        }
      }
    });

    $overlay.on("click", function () {
      $sidebarNavWrapper.removeClass("active");
      $overlay.removeClass("active");
      $mainWrapper.removeClass("active");
    });
  }, 500);
});
