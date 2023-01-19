menuIcon.addEventListener("click", menuDisplay);

let menuTop = document.querySelector(".menu_top");

menuIcon.style.transition = "opacity 0.5s";

/* I added a setTimeout function to create a transition effect when changing from the hamburger to the X icon. This function will perform certain lines of code after a certain amount of time (300ms in this case). THe addEventListener above will call the function menuDisplay everytime I click on the menu icon */

function menuDisplay() {
  if (window.getComputedStyle(menuTop).display == "none") {
    menuTop.style.display = "grid";
    menuIcon.style.opacity = 0;
    setTimeout(() => {
      menuIcon.src = "images/icon-close.svg";
      menuIcon.style.opacity = 1;
    }, 300);
  } else {
    menuTop.style.display = "none";
    menuIcon.style.opacity = 0;
    setTimeout(() => {
      menuIcon.src = "images/icon-hamburger.svg";
      menuIcon.style.opacity = 1;
    }, 300);
  }
}

/* This second part refers to the submenus. I used querySelectorAll to create an array of all the elements of the submenu I'm interested at. The forEach command will run through every single instance of them, and asign a function everytime I click on each element. This has an anonymous arrow function calling the toggle function that will open and close the sub-menus */

let menuHeaders = document.querySelectorAll(".menuHeader");

let subMenus = document.querySelectorAll(".sub_menu");

let arrows = document.querySelectorAll(".arrow");

menuHeaders.forEach((menuHeader, index) =>
  menuHeader.addEventListener("click", () => toggle_submenu(index))
);

function toggle_submenu(i) {
  for (let j = 0; j < subMenus.length; j++) {
    if (j != i) {
      subMenus[j].style.display = 'none'
    }
  }


  if (window.getComputedStyle(subMenus[i]).display == "none") {
    subMenus[i].style.display = "block";
    arrows[i].style.transform = "rotate(180deg)";
  } else {
    subMenus[i].style.display = "none";
    arrows[i].style.transform = "rotate(0deg)";
  }
}


