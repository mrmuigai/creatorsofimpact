// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  // Loop through each section on the page
  sections.forEach((sec) => {
    let top = window.scrollY; // Get the current vertical scroll position
    let offset = sec.offsetTop - 100; // Calculate the offset position of the section
    let height = sec.offsetHeight; // Get the height of the section
    let id = sec.getAttribute("id"); // Get the ID attribute of the section

    if (top >= offset && top < offset + height) {
      // If the current scroll position is within the section's range
      // Update the navigation links to indicate the active section
      navLinks.forEach((links) => {
        links.classList.remove("active"); // Remove 'active' class from all navigation links
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active"); // Add 'active' class to the navigation link that matches the current section's ID
      });
      // active sections for animation on scroll
      sec.classList.add("show-animate");
    }
    //if you want to use animation that repeats on scroll
    else {
        sec.classList.remove("show-animate");
    }
  });

  // sticky header
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle and navbar when click navbarlinks(scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  //animation footer on scroll
  let footer = document.querySelector("footer");

  footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}
