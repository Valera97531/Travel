"use strict";

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
		headerBurger.classList.remove('_active');
		headerMenu.classList.remove('_active');
	});

	const headerUser = document.querySelector('.header__user'),
		overlay = document.querySelector('.overlay'),
		modal = document.querySelector('.modal');

	headerUser.addEventListener('click', () => {
		overlay.classList.toggle('_active');
		modal.classList.toggle('_active');
		headerBurger.classList.remove('_active');
		headerMenu.classList.remove('_active');
		headerSearchIcon.classList.remove('_none');
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
		headerSearchBar.classList.remove('_active');
		headerSearchClose.classList.remove('_active');
		headerSearchIcon.classList.remove('_none');

	});

	const headerLink = document.querySelectorAll('.header__link');

	headerLink.forEach(item => {
		item.addEventListener('click', () => {
			headerBurger.classList.remove('_active');
			headerMenu.classList.remove('_active');
		});
	});

	const videoBtn = document.querySelectorAll('.promo__inner span');

	videoBtn.forEach(btn => {
		btn.addEventListener('click', () => {
			document.querySelector('.promo__inner span._active').classList.remove('_active');
			btn.classList.add('_active');
			let src = btn.getAttribute('data-src');
			document.querySelector('.promo__video video').src = src;
		});
	});

	// const documentLink = document.querySelectorAll('a');

	// documentLink.forEach(link => {
	// 	link.addEventListener('click', (event) => {
	// 		event.preventDefault();
	// 	});
	// })

});

