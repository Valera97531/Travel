"use strict";

import * as flsFunctions from "./modules/function.js";
flsFunctions.isWebp();

import Swiper from 'swiper/bundle';

import AOS from 'aos';

AOS.init({
	disable: 'phone'
});

document.addEventListener('DOMContentLoaded', () => {
	const headerSearch = document.querySelector('.header__search'),
		headerSearchIcon = document.querySelector('[data-icon="search"]'),
		headerSearchBar = document.querySelector('.header__search-bar'),
		headerSearchClose = document.querySelector('[data-icon="close"]');

	headerSearch.addEventListener('click', () => {
		headerSearchBar.classList.toggle('_active');
		headerSearchIcon.classList.toggle('_none');
		headerSearchClose.classList.toggle('_active');
		document.body.classList.remove('_lock');
		headerBurger.classList.remove('_active');
		headerMenu.classList.remove('_active');
	});

	const headerUser = document.querySelector('.header__user'),
		overlay = document.querySelector('.overlay'),
		modal = document.querySelector('.modal');

	headerUser.addEventListener('click', () => {
		document.body.classList.toggle('_lock');
		overlay.classList.toggle('_active');
		modal.classList.toggle('_active');
		headerBurger.classList.remove('_active');
		headerMenu.classList.remove('_active');
		headerSearchIcon.classList.remove('_none');
		headerSearchClose.classList.remove('_active');
		headerSearchBar.classList.remove('_active');
	});

	const closeModal = document.querySelector('[data-icon="close-modal"]');

	closeModal.addEventListener('click', () => {
		document.body.classList.remove('_lock');
		overlay.classList.remove('_active');
		modal.classList.remove('_active');
	});

	const headerBurger = document.querySelector('.header__burger'),
		headerMenu = document.querySelector('.header__nav');

	headerBurger.addEventListener('click', () => {
		document.body.classList.toggle('_lock');
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

	window.addEventListener('scroll', () => {
		headerSearchBar.classList.remove('_active');
		headerSearchClose.classList.remove('_active');
		headerSearchIcon.classList.remove('_none');
	});

	new Swiper(".mySwiper", {
		spaceBetween: 20,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		},
		breakpoints: {
			640: {
				slidesPerView: 1
			},
			768: {
				slidesPerView: 2
			},
			1200: {
				slidesPerView: 3
			},
		},
	});

	new Swiper(".swiperBrands", {
		spaceBetween: 20,
		loop: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		},
		breakpoints: {
			992: {
				slidesPerView: 5
			},
			850: {
				slidesPerView: 4
			},
			580: {
				slidesPerView: 3
			},
			400: {
				slidesPerView: 2
			}
		},
	});
});






