/*----- constants -----*/





/*----- app's state (variables) -----*/




/*----- cached element references -----*/

const body = document.querySelector('body');

//element reference for whole main section
const main = document.querySelector('main');

//element reference for projects section
const projectSection = document.querySelector('#projects-section');

    //project nav section
const projectsNavSection = document.querySelector('#projectsNav');
const projectNavShower = document.querySelector('#projectsNavShower');
const projectNavGA = document.querySelector('#GAProjectNav');
const projectNavProfessional = document.querySelector('#ProfessionalProjectNav');
const projectNavPersonal = document.querySelector('#PersonalProjectNav');

    //project GA section
const projectsGASection = document.querySelector('#projectsGA');

    //project professional section
const projectsProfessionalSection = document.querySelector('#projectsProfessional');

    //project personal section
const projectsPersonalSection = document.querySelector('#projectsPersonal');

/*----- event listeners -----*/



//event listener for whole main section
main.addEventListener('click', something)

//event listener projects section
projectSection.addEventListener('click', projectsShowClick)
projectSection.addEventListener('mouseover', projectsShowHover);
body.addEventListener('mouseover', projectsNavHide)


/*----- functions -----*/


//nav buttons click function

function something(event) {
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

//projects function
function projectsShowClick(event) {
  if (event.target.className == 'nav-shower') {
    projectNavGA.classList.remove('hide')
    projectNavProfessional.classList.remove('hide')
    projectNavPersonal.classList.remove('hide')
  }
  if (
		event.target.id == 'GAProjectNav' ||
		event.target.id == 'ProfessionalProjectNav' ||
		event.target.id == 'PersonalProjectNav' ||
		event.target.id == 'backProjects'
	) {
		projectsNavSection.classList.add('hide');
		projectsGASection.classList.add('hide');
		projectsProfessionalSection.classList.add('hide');
		projectsPersonalSection.classList.add('hide');
		if (event.target.id == 'GAProjectNav') {
			projectsGASection.classList.remove('hide');
		}
		if (event.target.id == 'ProfessionalProjectNav') {
			projectsProfessionalSection.classList.remove('hide');
		}
		if (event.target.id == 'PersonalProjectNav') {
			projectsPersonalSection.classList.remove('hide');
		}
    if (event.target.id == 'backProjects') {
			projectsNavSection.classList.remove('hide');
		}
	}
}

function projectsShowHover(event) {
	if (event.target.id == 'projectsNavShower') {
		projectNavGA.classList.remove('hide');
		projectNavProfessional.classList.remove('hide');
		projectNavPersonal.classList.remove('hide');
	}
}

function projectsNavHide(event) {
	if (
		event.target.id != 'GAProjectNav' &&
		event.target.id != 'ProfessionalProjectNav' &&
		event.target.id != 'PersonalProjectNav' &&
		event.target.id != 'projectsNavShower' &&
		event.target.id != 'projectsNav'
	) {
		projectNavGA.classList.add('hide');
		projectNavProfessional.classList.add('hide');
		projectNavPersonal.classList.add('hide');
	}
}
