const input = document.querySelector("input");
const form = document.querySelector("form");
const main = document.querySelector("main");
const noresult = document.querySelector(".no-result");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

form.onsubmit = function(e) {
    e.preventDefault();
}


input.oninput = function (e)  {
    let count = 0;
    noresult.style.display = null;

    let string = e.target.value.toLowerCase();
    [...document.querySelectorAll("h4")].forEach(elm => {
        let tester = new RegExp(string);
        elm.parentElement.style.display = "none";
        if (tester.test(elm.innerHTML.toLowerCase())) {
            elm.parentElement.style.display = null;
            count++;
        }
    }); 

    if (count === 0) {
        noresult.style.display = "block";
    }
};

menu.addEventListener('click', () => {
    if (nav.classList.contains("slide")) {
        nav.classList.remove("slide");
    } else {
        nav.classList.add("slide");
    }
});