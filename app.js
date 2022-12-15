const steps = document.querySelectorAll(".multi-main .step");
const nexts = document.querySelectorAll("button.next");
const backs = document.querySelectorAll("button.back");
const side = document.querySelectorAll(".container .steps li");
const plans = document.querySelectorAll(".step2 .box input");
const yearPlan = document.querySelector(".yearly-plan input");
const monay = document.querySelectorAll(".selcted .box .text");
const inputs = document.querySelectorAll(".input");
const ons = document.querySelectorAll(".step3 .price span");

let one = false,
  two = false,
  three = false,
  run = false,
  yourPlan = 0,
  extanxtons = [],
  year = false,
  current = 0;

//remove back when it's just the first page
function backbutton() {
  // show the back button
  backs.forEach((backbtn) => {
    if (current == 0) {
      backbtn.style.opacity = 0;
    } else {
      backbtn.style.opacity = 1;
    }
    // change the text from next step to confirm when it's the last step
    nexts.forEach((nextBtn) => {
      if (current == 3) {
        nextBtn.innerHTML = "Confirm";
        nextBtn.classList.add("remove-me");
      } else {
        nextBtn.innerHTML = "Next Step";
      }
    });
  });
}

// when you click on the next button jump to the next step
nexts.forEach((next) => {
  next.addEventListener("click", () => {
    if (one && two && three) {
      if (current <= steps.length - 2) {
        current += 1;
        switchThePages();
        sidebar();
      }
      backbutton();
    }
  });
});

// when you click on the go back button jump to the next step
backs.forEach((back) => {
  back.addEventListener("click", () => {
    if (current != 0) {
      current -= 1;
      switchThePages();
      sidebar();
    }
    backbutton();
  });
});

// function switch the small pages in the page
function switchThePages() {
  removeClasses("active", steps);
  steps[current].classList.add("active");
}
switchThePages();

// check fo the inputs
function check() {
  // on change
  inputs.forEach((input) => {
    input.children[1].value = "";
  });

  inputs[0].children[1].addEventListener("blur", () => {
    if (inputs[0].children[1].value.trim() == "") {
      inputs[0].classList.add("error");
      one = false;
    } else {
      inputs[0].classList.remove("error");
      one = true;
    }
  });

  // two input
  inputs[1].children[1].addEventListener("blur", () => {
    if (inputs[1].children[1].value.trim() == "") {
      inputs[1].classList.add("error");
      two = false;
    } else {
      inputs[1].classList.remove("error");
      two = true;
    }
  });

  // the therd input
  inputs[2].children[1].addEventListener("blur", () => {
    if (inputs[2].children[1].value.trim() == "") {
      inputs[2].classList.add("error");
      three = false;
    } else {
      inputs[2].classList.remove("error");
      three = true;
    }
  });
}
check();
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

// check for checked plan and highlight and set it as a chosen one
function checkPlan() {
  plans.forEach((plan) => {
    plan.addEventListener("click", () => {
      // remove the classes
      plans.forEach((plan) => {
        plan.parentElement.classList.remove("chose");
      });
      plan.parentElement.classList.add("chose");
      yourPlan = plan.id;
    });
  });
}
checkPlan();

// swich of year plan

function yearplan() {
  yearPlan.addEventListener("change", () => {
    if (yearPlan.checked) {
      yearPlan.parentElement.children[3].classList.add("black");
      yearPlan.parentElement.children[0].classList.remove("black");
      document.querySelector(".step4 .amount .type .name").textContent = `${yourPlan} (Yearly)`;

      year = true;
      itIsYear();
      ones();
    } else {
      yearPlan.parentElement.children[3].classList.remove("black");
      yearPlan.parentElement.children[0].classList.add("black");
      document.querySelector(".step4 .amount .type .name").textContent = `${yourPlan} (Monthly)`;

      year = false;
      itIsYear();
      ones();
    }
  });

  if (yearPlan) {
    year = true;
    ones();

    yearPlan.parentElement.children[3].classList.add("black");
    yearPlan.parentElement.children[0].classList.remove("black");
  }
}
yearplan();

function itIsYear() {
  if (year) {
    monay.forEach((single) => {
      let div = document.createElement("div");
      const text1 = document.createTextNode("2 months free");
      div.appendChild(text1);
      div.className = "free";
      single.append(div);
    });
  } else {
    document.querySelectorAll(".free").forEach((free) => {
      free.remove();
    });
  }
}
itIsYear();

function ones() {
  if (year) {
    ons.forEach((price) => {
      price.textContent = Number(price.textContent) * 10;
    });

    monay.forEach((dollar) => {
      dollar.children[1].children[0].textContent = dollar.children[1].children[0].textContent * 10;
    });

    document.querySelector(".step4 .price span").textContent = dollar.children[1].children[0].textContent * 10;
  } else {
    ons.forEach((price) => {
      price.textContent = Number(price.textContent) / 10;
    });

    monay.forEach((dollar) => {
      dollar.children[1].children[0].textContent = dollar.children[1].children[0].textContent / 10;
    });

    document.querySelector(".step4 .price span").textContent = dollar.children[1].children[0].textContent / 10;
  }
}

ons[1].parentElement.parentElement.parentElement.children[0].children[0].addEventListener("change", () => {
  ons[1].parentElement.parentElement.parentElement.children[0].children[0].checked ? extanxtons.push("Online service") : extanxtons.splice(extanxtons.indexOf("Online service"), 1);
});

ons[1].parentElement.parentElement.parentElement.children[0].children[0].addEventListener("change", () => {
  ons[1].parentElement.parentElement.parentElement.children[0].children[0].checked ? extanxtons.push("Larger storage") : extanxtons.splice(extanxtons.indexOf("Larger storage"), 1);
});

ons[2].parentElement.parentElement.parentElement.children[0].children[0].addEventListener("change", () => {
  ons[2].parentElement.parentElement.parentElement.children[0].children[0].checked
    ? extanxtons.push("Customizable profile")
    : extanxtons.splice(extanxtons.indexOf("Customizable profile"), 1);
});
