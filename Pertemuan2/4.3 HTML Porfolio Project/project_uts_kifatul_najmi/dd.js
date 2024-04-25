document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen dropdown
  var dropdownMenu = document.querySelector(".dropdown-menu");

  // Tambahkan event listener untuk menutup dropdown saat klik di luar dropdown
  document.addEventListener("click", function (event) {
    var isClickInsideDropdown = dropdownMenu.contains(event.target);
    if (!isClickInsideDropdown) {
      // Jika klik diluar dropdown, tutup dropdown
      var dropdownToggle = document.querySelector(".dropdown-toggle");
      if (dropdownToggle.getAttribute("aria-expanded") === "true") {
        dropdownToggle.click();
      }
    }
  });
});
