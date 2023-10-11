const $dropdown = document.getElementById("dropdown");
const $dropdownOpen = document.getElementById("dropdown-open");
const $dropdownClose = document.getElementById("dropdown-close");

const openDropdown = () => {
  $dropdown.classList.add("show");
  document.body.classList.add("dropdown-opened");
};

const closeDropdown = () => {
  $dropdown.classList.remove("show");
  document.body.classList.remove("dropdown-opened");
};

$dropdownOpen.onclick = openDropdown;
$dropdownClose.onclick = closeDropdown;
$dropdown.onclick = (event) => {
  if (event.target.tagName === "A") {
    closeDropdown();
  }
};
