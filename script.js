/*----- constants -----*/

const ease = 0.1;





/*----- app's state (variables) -----*/

let current = 0;
let target = 0;




/*----- cached element references -----*/

const scroll = document.querySelector('.scroll');
const main = document.querySelector('main');



/*----- event listeners -----*/








/*----- functions -----*/


function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

function init() {
    main.style.height = `${scroll.getBoundingClientRect().height}px`
}

function smoothScroll() {
    target = window.scrollY;
    current = lerp(current, target, ease);
    scroll.style.transform = `translate3d(0, ${-current}px, 0)`;
    window.requestAnimationFrame(smoothScroll);
}

init();
smoothScroll();