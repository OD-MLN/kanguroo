/*global $ */
$(document).ready(function () {
	'use strict';

	$('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
	//Checks if li has sub (ul) and adds class for toggle icon - just an UI

	$('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
	//Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)

	if (window.location.href.indexOf('product') > -1) {
		$('.menu > ul').before(
			'<a href="../index.html" class="menu-mobile"><img src="../images/Tate-Logo-Web3.png" alt="Tate logo" /></a>'
		);
	} else {
		$('.menu > ul').before(
			'<a href="index.html" class="menu-mobile"><img src="images/Tate-Logo-Web3.png" alt="Tate logo" /></a>'
		);
	}
	//<li class='menu-logo desktop'><a href="index.html"><img src="images/Tate-Logo-Web3.png" alt="Tate logo" /></a></li>

	//Adds menu-mobile class (for mobile toggle menu) before the normal menu
	//Mobile menu is hidden if width is more then 959px, but normal menu is displayed
	//Normal menu is hidden if width is below 959px, and jquery adds mobile menu
	//Done this way so it can be used with wordpress without any trouble

	$('.menu > ul > li').hover(
		function (e) {
			if ($(window).width() > 1230) {
				$(this).children('ul').fadeIn(150);
				e.preventDefault();
			}
		},
		function (e) {
			if ($(window).width() > 1230) {
				$(this).children('ul').fadeOut(150);
				e.preventDefault();
			}
		}
	);
	//If width is more than 1230px dropdowns are displayed on hover

	//the following hides the menu when a click is registered outside
	$(document).on('click', function (e) {
		if ($(e.target).parents('.menu').length === 0)
			$('.menu > ul').removeClass('show-on-mobile');
	});

	$('.menu > ul > li').click(function () {
		//no more overlapping menus
		//hides other children menus when a list item with children menus is clicked
		var thisMenu = $(this).children('ul');
		var prevState = thisMenu.css('display');
		$('.menu > ul > li > ul').fadeOut();
		if ($(window).width() < 1230) {
			if (prevState !== 'block') thisMenu.fadeIn(150);
			$(this).toggleClass('rotate');
		}
	});
	//If width is less or equal to 1230px dropdowns are displayed on click (thanks Aman Jain from stackoverflow)

	$('.menu-mobile').click(function (e) {
		$('.menu > ul').toggleClass('show-on-mobile');
		$('.menu-mobile').toggleClass('close-btn');
		e.preventDefault();
	});
	//when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story (thanks mwl from stackoverflow)
});
