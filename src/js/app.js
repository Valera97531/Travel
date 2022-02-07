import * as flsFunctions from "./modules/function.js";
flsFunctions.isWebp();

document.addEventListener('DOMContentLoaded', () => {
	const headerSearch = document.querySelector('.header__search'),
		headerSearchIcon = document.querySelector('[data-icon="search"]'),
		headerSearchBar = document.querySelector('.header__search-bar'),
		headerSearchClose = document.querySelector('[data-icon="close"]');

	headerSearch.addEventListener('click', () => {
		headerSearchBar.classList.toggle('_active');
		headerSearchIcon.classList.toggle('_none');
		headerSearchClose.classList.toggle('_active');
	});

	const headerUser = document.querySelector('.header__user'),
		overlay = document.querySelector('.overlay'),
		modal = document.querySelector('.modal');

	headerUser.addEventListener('click', () => {
		overlay.classList.toggle('_active');
		modal.classList.toggle('_active');
	});

	const closeModal = document.querySelector('[data-icon="close-modal"]');

	closeModal.addEventListener('click', () => {
		overlay.classList.remove('_active');
		modal.classList.remove('_active');
	});

	const headerBurger = document.querySelector('.header__burger'),
		headerMenu = document.querySelector('.header__nav');

	headerBurger.addEventListener('click', () => {
		headerBurger.classList.toggle('_active');
		headerMenu.classList.toggle('_active');
	});

});

