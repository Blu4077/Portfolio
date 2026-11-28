window.onload = function() {
    ScrollReveal().reveal('.intro', {delay:1000});
    ScrollReveal().reveal('.about', {delay:1500});
    ScrollReveal().reveal('.projects', {delay:3000});
    ScrollReveal().reveal('.contacts', {delay:3500});
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}