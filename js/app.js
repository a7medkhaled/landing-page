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

const navBar = document.querySelector("#navbar__list");
const listOfSections = document.querySelectorAll("section");
const listOfNavElements = [];
let lastKnownScrollPosition = 0;
let ticking = false;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// this is a helper function to make it easy to print out to the console
const l = (k = null, m) => console.log(k, m);

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// this function aims to determine whether an element in the viewport or not

function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();

  return rect.top >= 0 && rect.bottom <= window.outerHeight + 300;
}

/* 
 this function handle the scroll event firing it checks 
 for each element if in the view port it will add the active class to that section
*/
function scrollEventHandler() {
  console.log("hi");
  listOfSections.forEach((sec, index) => {
    if (isElementInViewport(sec)) {
      sec.classList.add("active");
      listOfNavElements[index].classList.add("active");

      console.log("sec", sec);
    } else {
      listOfNavElements[index].classList.remove("active");
      sec.classList.remove("active");
    }
  });
}
/* 
 this function handle the click event firing, it will add the active class to that section and scroll to that section 
*/
const clickOnNavItem = (event) => {
  l("event", event);
  event.preventDefault();
  l("clicked");
  l(event.path[1].id);
  const number = event.path[1].id;
  let s = new String(number.toString());
  const n = parseInt(s.slice(3)) + 1;
  l("index", n);

  document
    .querySelector(`#section${n}`)
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
};

// the main function which will build the dynamic menu
const buildMenuDynamic = () => {
  listOfSections.forEach((sec, index) => {
    const title = sec.children[0]?.children[0].textContent;
    const ele = `<li id='sec${index}'><a href="" > ${title}</a></li>`;

    navBar.insertAdjacentHTML("afterbegin", ele);
    listOfNavElements.push(document.querySelector(`#sec${index}`));
    // Scroll to section on link click
    listOfNavElements[index].addEventListener("click", clickOnNavItem);
  });
};
// add event listener to watch the scroll ecents
document.addEventListener("scroll", function (e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      scrollEventHandler();
      ticking = false;
    });

    ticking = true;
  }
});

// Build menu
buildMenuDynamic();
