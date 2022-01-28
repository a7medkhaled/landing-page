/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return rect.top >= 0 && rect.bottom <= window.outerHeight;
}
const l = (k = null, m) => console.log(k, m);

// build the nav

const navBar = document.querySelector("#navbar__list");
l(navBar);

const listOfSections = document.querySelectorAll("section");
const listOfNavElements = [];

l("listOfSections", listOfSections);

// <li><a href="" class="a_top_hypers"> Inbox</a></li>

const clickOnNavItem = (event) => {
  l("event", event);
  event.preventDefault();
  l("clicked");
  l(event.path[1].id);
  const number = event.path[1].id;
  let s = new String(number.toString());
  const n = parseInt(s.slice(3)) + 1;
  l("index", n);

  document.addEventListener("scroll", (event) => {
    console.log("hi");
    listOfSections.forEach((sec, index) => {
      if (isElementInViewport(sec)) {
        // setTimeout(() => {
        //   sec.classList.add("active");
        //   listOfNavElements[index].classList.add("active");
        // }, 0);
        sec.classList.add("active");
        listOfNavElements[index].classList.add("active");

        console.log("sec", sec);
      } else {
        // setTimeout(() => {
        //   listOfNavElements[index].classList.remove("active");
        //   sec.classList.remove("active");
        // }, 0);
        listOfNavElements[index].classList.remove("active");
        sec.classList.remove("active");
      }
    });
  });

  document
    .querySelector(`#section${n}`)
    .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
};

listOfSections.forEach((sec, index) => {
  const title = sec.children[0]?.children[0].textContent;
  const ele = `<li id='sec${index}'><a href="" > ${title}</a></li>`;

  navBar.insertAdjacentHTML("afterbegin", ele);
  listOfNavElements.push(document.querySelector(`#sec${index}`));

  listOfNavElements[index].addEventListener("click", clickOnNavItem);
});

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
