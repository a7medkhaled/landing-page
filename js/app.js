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

const l = (k = null, m) => console.log(k, m);

// build the nav

const navBar = document.querySelector("#navbar__list");
l(navBar);

const listOfSections = document.querySelectorAll("section");
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

  document.querySelector(`#section${n}`).scrollIntoView();
};
listOfSections.forEach((sec, index) => {
  const title = sec.children[0]?.children[0].textContent;
  const ele = `<li id='sec${index}'><a href="" > ${title}</a></li>`;

  navBar.insertAdjacentHTML("afterbegin", ele);
  document
    .querySelector(`#sec${index}`)
    .addEventListener("click", clickOnNavItem);
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
