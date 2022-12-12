const steps = document.querySelectorAll(".multi-main .step");
const nexts = document.querySelectorAll("button.next");
const backs = document.querySelectorAll("button.back");
const side = document.querySelectorAll(".container .steps li");

console.log(side);
let current = 0;

// when you click on the next button jump to the next step
nexts.forEach((next) => {
  next.addEventListener("click", () => {
    if (current <= steps.length - 2) {
      current += 1;
      console.log(current);
      switchThePages();
      sidebar();
    }
  });
});

// when you click on the go back button jump to the next step
backs.forEach((back) => {
  back.addEventListener("click", () => {
    if (current != 0) {
      current -= 1;
      console.log(current);
      switchThePages();
      sidebar();
    }
  });
});

// function switch the small pages in the page
function switchThePages() {
  removeClasses("active", steps);
  steps[current].classList.add("active");
}
switchThePages();

// this function just for remove any active
function removeClasses(className, array) {
  array.forEach((element) => {
    element.classList.remove(className);
  });
}

// change in side bar

function sidebar() {
  if (current <= side.length - 1) {
    removeClasses("active", side);
    side[current].classList.add("active");
  }
}
