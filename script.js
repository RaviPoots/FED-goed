var menuButton = document.querySelector("header > section:first-of-type section img");
var menuNav = document.querySelector("header > nav");
var Buttongrey = document.querySelector(".Buttongrey")
var Buttonred = document.querySelector(".Buttonred")


menuButton.onclick = toggleMenu;

function toggleMenu() {
    menuNav.classList.toggle("toggleMenu");
}

Buttongrey.addEventListener('click', function () {
    console.log('hij doet het')
    Buttonred.classList.toggle('add')
    Buttongrey.classList.toggle('remove')
});

