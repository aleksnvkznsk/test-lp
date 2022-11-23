/* modal */
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");

btn.onclick = function(){
    modal.style.display = "block";
}

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}





/* burger */
function toggleMenu() {
    if (document.body.classList.contains('opened')) {
        document.body.classList.remove('opened');
    } else {
        document.body.classList.add('opened');
    }
}

function init() {
    const sandwichEl = document.querySelector('.header__sandwich');
    const backdropEl = document.querySelector('.backdrop');
    const closeEl = document.querySelector('.menu__close');

    sandwichEl.addEventListener('click', toggleMenu);
    backdropEl.addEventListener('click', toggleMenu);
    closeEl.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', init);



