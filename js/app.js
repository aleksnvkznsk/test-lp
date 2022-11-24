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

    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");

    btn.onclick = function(){
         btn.addEventListener("click", function() { modal.classList.add("modal_opened") })
    }
    
    window.onclick = function(event){
        if (event.target == modal){
            modal.classList.remove("modal_opened")
        }
    }
}

document.addEventListener('DOMContentLoaded', init);






