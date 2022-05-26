/*----- constants -----*/





/*----- app's state (variables) -----*/




/*----- cached element references -----*/

const firstButton = document.querySelector('#first');
const main = document.querySelector('main')



/*----- event listeners -----*/

main.addEventListener('click', something)






/*----- functions -----*/


function something(event) {
    console.log(event)
    if (event.target.id == 'first') {
        console.log('1');
    }
    if (event.target.id == 'second') {
		console.log('2');
	}
    if (event.target.id == 'third') {
		console.log('3');
	}
    if (event.target.id == 'fourth') {
		console.log('4');
	}
}