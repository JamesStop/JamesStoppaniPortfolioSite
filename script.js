/*----- constants -----*/





/*----- app's state (variables) -----*/

//GA carousel
let currentImgIndexGA = 0;
let previousImgIndexGA = 0;

//Professional carousel
let currentImgIndexProfessional = 0;
let previousImgIndexProfessional = 0;

//Personal carousel
let currentImgIndexPersonal = 0;
let previousImgIndexPersonal = 0;


/*----- cached element references -----*/

const body = document.querySelector('body');

//element reference for whole main section
const main = document.querySelector('main');

/* 

element references for experience section

*/

const experienceNav = document.querySelector('.experience-nav-list');
const experienceResume = document.querySelector('#resume-display');
const experienceEpoll = document.querySelector('#EPoll-display');



/* 

element references for projects section 

*/

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


//GA projects carousel
const nextButtonGA = document.querySelector('#carouselNextGA');
const prevButtonGA = document.querySelector('#carouselPrevGA');
const imagesGA = document.querySelectorAll('.carousel-item-GA');


//Professional projects carousel
const nextButtonProfessional = document.querySelector(
	'#carouselNextProfessional'
);
const prevButtonProfessional = document.querySelector(
	'#carouselPrevProfessional'
);
const imagesProfessional = document.querySelectorAll(
	'.carousel-item-Professional'
);

//Personal projects carousel
const nextButtonPersonal = document.querySelector('#carouselNextPersonal');
const prevButtonPersonal = document.querySelector('#carouselPrevPersonal');
const imagesPersonal = document.querySelectorAll('.carousel-item-Personal');





/*----- event listeners -----*/



//event listener for whole main section
main.addEventListener('click', something)


//event listener for experiences section
experienceNav.addEventListener('mouseover', showExperience)
experienceNav.addEventListener('click', showExperience);


//event listener projects section
projectSection.addEventListener('click', projectsShowClick)
projectSection.addEventListener('mouseover', projectsShowHover);
body.addEventListener('mouseover', projectsNavHide)


/*----- functions -----*/


//nav buttons click function

function something(event) {
    if (event.target.id == 'first') {
    }
    if (event.target.id == 'second') {
	}
    if (event.target.id == 'third') {
	}
    if (event.target.id == 'fourth') {
	}
}


//experiences show function
function showExperience(event) {
	if (event.target.id == 'experience-resume') {
		experienceResume.classList.remove('hide');
		experienceEpoll.classList.add('hide');
	}
	if (event.target.id == 'experience-EPoll') {
		experienceResume.classList.add('hide');
		experienceEpoll.classList.remove('hide');
	}
}


//projects options page functions
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
		event.target.id != 'projectsNav' &&
		event.target.id != 'projects-section' &&
		event.target.id != 'cloud1'
	) {
		projectNavGA.classList.add('hide');
		projectNavProfessional.classList.add('hide');
		projectNavPersonal.classList.add('hide');
	}
}

//GA carousel movement
nextButtonGA.addEventListener('click', function (event) {
	event.preventDefault;
	previousImgIndexGA = currentImgIndexGA;
	currentImgIndexGA += 1;
	if (currentImgIndexGA >= imagesGA.length) {
		currentImgIndexGA = 0;
	}
	imagesGA[previousImgIndexGA].style.display = 'none';
	imagesGA[currentImgIndexGA].style.display = 'flex';
});

prevButtonGA.addEventListener('click', function (event) {
	event.preventDefault;
	previousImgIndexGA = currentImgIndexGA;
	currentImgIndexGA -= 1;
	if (currentImgIndexGA < 0) {
		currentImgIndexGA = imagesGA.length - 1;
	}
	imagesGA[previousImgIndexGA].style.display = 'none';
	imagesGA[currentImgIndexGA].style.display = 'flex';
});

//Professional carousel movement
nextButtonProfessional.addEventListener('click', function (event) {
	event.preventDefault;
	previousImgIndexProfessional = currentImgIndexProfessional;
	currentImgIndexProfessional += 1;
	if (currentImgIndexProfessional >= imagesProfessional.length) {
		currentImgIndexProfessional = 0;
	}
	imagesProfessional[previousImgIndexProfessional].style.display = 'none';
	imagesProfessional[currentImgIndexProfessional].style.display = 'flex';
});

prevButtonProfessional.addEventListener('click', function (event) {
	event.preventDefault;
	previousImgIndexProfessional = currentImgIndexProfessional;
	currentImgIndexProfessional -= 1;
	if (currentImgIndexProfessional < 0) {
		currentImgIndexProfessional = imagesProfessional.length - 1;
	}
	imagesProfessional[previousImgIndexProfessional].style.display = 'none';
	imagesProfessional[currentImgIndexProfessional].style.display = 'flex';
});


//Personal carousel movement
nextButtonPersonal.addEventListener('click', function (event) {
	event.preventDefault;
	previousImgIndexPersonal = currentImgIndexPersonal;
	currentImgIndexPersonal += 1;
	if (currentImgIndexPersonal >= imagesPersonal.length) {
		currentImgIndexPersonal = 0;
	}
	imagesPersonal[previousImgIndexPersonal].style.display = 'none';
	imagesPersonal[currentImgIndexPersonal].style.display = 'flex';
});

prevButtonPersonal.addEventListener('click', function (event) {
	event.preventDefault;
	previousImgIndexPersonal = currentImgIndexPersonal;
	currentImgIndexPersonal -= 1;
	if (currentImgIndexPersonal < 0) {
		currentImgIndexPersonal = imagesPersonal.length - 1;
	}
	imagesPersonal[previousImgIndexPersonal].style.display = 'none';
	imagesPersonal[currentImgIndexPersonal].style.display = 'flex';
});