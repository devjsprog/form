var year = new Date().getFullYear();
		var placeY = document.getElementsByClassName("year");
		for (let i = 0; i < placeY.length; i++) {
			var elemY = placeY[i];
			elemY.innerHTML = year;
}
window.lang = 'es';
				window.is_downloaded_from_dashboard = true;
				window.duplicate_order_phone = '34944340466';
				window.order_recently_confirmed =
					'Su pedido ya se ha realizado';
				window.order_in_progress =
					'Su pedido ya se ha realizado, si tiene preguntas sobre el producto, 			puede comunicarse con el número';
				window.order_got_it =
					'Ok';
				window._locations = [{"offer_id":"784","country_code":"CL","price_current":34900,"display_priority":0,"id":3895114,"name":"Chile","type":"country","country_id":3895114,"region_name":null,"currency":"clp","country_name":"Chile","price_previous":69800,"price_delivery":0,"price_total":34900}];
				window.additional_phone_in_downloaded = false;
				window.is_namephone_validated = true;
				
				
				
				
				document.cookie = 'popup_customers_enabled=true;path=/';
				document.cookie = 'popup_callback_enabled=true;path=/';
				document.cookie = 'popup_mouseout_enabled=true;path=/';
				window.country_code = 'CL';
			var cookies = (function(a) {
	if (a == "") return {};
	var b = {};
	for (var i = 0; i < a.length; ++i) {
		var p=a[i].split('=');
		if (p.length != 2) continue;
		b[p[0]] = p[1];
	}

	return b;
})(document.cookie.split('; '));

//для клонирования блока в попап используются следующие айдишники
// #cloneThis - для десктопа
// #cloneMobileThis - для мобильного (если нужно)
//брейкпоинт для переключения попапа при необходимости дефолт значение = 1000

// в случае, если мы не клонируем форму, а верстаем попап произвольно,
// то делать это необходимо в контейнере с классом .ever-popup-build
// false (показывать контейнер) / true (не показывать контейнер)

var popupBuild = true; // false/true


//.ever-popup-btn - класс для для открытия попапа

//проверка кода
//.check__field - класс для поля проверки кода
//.check__btn - класс для кнопки провеки кода
//.check__result - класс для контейнера с результатом проверки кода

//таймер
//для вывода счетчика таймера используется 3 контенера (часы, минуты, секунды)
//.hours класс для вывода часов
//.minutes класс для вывода минут
//.seconds класс для вывода секунд

function initiate(cookies) {

	var breakpoint = 1000;
	var desktop = document.querySelector('#cloneThis');
	var mobile = document.querySelector('#cloneMobileThis');

	if (popupBuild) {
		// в случае, если мы верстаем попап в контейнере .ever-popup-build, даное условие прячет его, если значение переменной popupBuild = true
		var style = document.createElement('style');
		style.innerHTML = '.ever-popup-build{position: fixed; opacity: 0;z-index: -1; top: 0; left: -9999px;}';
		document.querySelector('head').appendChild(style)
	}

	function addPopupStyle() {
		// добавляем стили для нашего поапа
		var cont = document.createElement('style'),
			head = document.querySelector('head');
		cont.innerHTML = '.ever-popup__body.ever-mobile{display:none}.ever-popup{position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0,0,0,.7);z-index: 111;display: none;overflow: auto;}.ever-popup__body{position: static;float: none;display: block;margin: 0 auto;width:auto}.ever-popup.show{display: block;align-items: center;}.ever-popup__inner{position: relative;margin: 0 auto;padding-top:35px}.ever-popup__close{width: 35px;height: 30px;position: absolute;cursor:pointer;top: 0;right: 0;z-index: 1;-webkit-transition: .3s; -moz-transition: .3s; -ms-transition: .3s; -o-transition: .3s; transition: .3s;}.ever-popup__close:after, .ever-popup__close:before {content: "";position: absolute;right: 0;top: 10px;width: 35px;height: 10px;background: #fff;transition: all 1s;}.ever-popup__close:after {-webkit-transform: rotate(-45deg);-ms-transform: rotate(-45deg);-o-transform: rotate(-45deg);transform: rotate(-45deg);}.ever-popup__close:before {-webkit-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);transform: rotate(45deg);}' +
			'@media screen and (max-width: ' + breakpoint + 'px' + '){' +
			'.ever-popup__body.ever-desktop{display:none}' +
			'.ever-popup__body.ever-mobile{display:block}' +
			'}';
		head.appendChild(cont)
	}
	function addMobilePopupStyle() {
		// добавляем стили для нашего поапа
		var cont = document.createElement('style'),
			head = document.querySelector('head');
		cont.innerHTML = '@media screen and (max-width: ' + breakpoint + 'px' + ') {.ever-popup {position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0, 0, 0, .7);z-index: 111;display: none;overflow: auto;}.ever-popup__body {position: static;float: none;display: block;margin: 0 auto;width: auto}.ever-popup.show {display: block;align-items: center;}.ever-popup__inner {position: relative;margin: 0 auto;padding-top: 35px}.ever-popup__close {width: 35px;height: 30px;position: absolute;cursor: pointer;top: 0;right: 0;z-index: 1;-webkit-transition: .3s;-moz-transition: .3s;-ms-transition: .3s;-o-transition: .3s;transition: .3s;}.ever-popup__close:after, .ever-popup__close:before {content: "";position: absolute;right: 0;top: 10px;width: 35px;height: 10px;background: #fff;transition: all 1s;}.ever-popup__close:after {-webkit-transform: rotate(-45deg);-ms-transform: rotate(-45deg);-o-transform: rotate(-45deg);transform: rotate(-45deg);}.ever-popup__close:before {-webkit-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);transform: rotate(45deg);}}';
		head.appendChild(cont)
	}

	function createOverlay() {
		// создаем затемненный фон для попапа и вставляем его в разметку html
		var parent = document.createElement('div'),
			parentInner = document.createElement('div'),
			closeParent = document.createElement('div');

		parent.classList.add('ever-popup');
		parentInner.classList.add('ever-popup__inner');
		closeParent.classList.add('ever-popup__close');

		parent.appendChild(parentInner);
		parentInner.appendChild(closeParent);
		document.body.appendChild(parent);
	}

	function createModalBody(breakpoint) {
		// функция определяет содержимое для попапа, клонирует его содержимое, и поещает в контейнер ever-popup__body
		var parent = document.querySelector('.ever-popup__inner');
		if (desktop) {
			var desktopClone = desktop.cloneNode(true);
			desktopClone.classList.add('ever-popup__body');
			desktopClone.removeAttribute('id');
			parent.appendChild(desktopClone);
			document.querySelector('.ever-popup .ever-popup__inner').style.width = document.querySelector('#cloneThis').offsetWidth + 'px';
		}

		if (mobile) {
			var mobileClone = mobile.cloneNode(true);
			if (desktopClone) {
				desktopClone.classList.add('ever-desktop');
			}
			mobileClone.classList.add('ever-popup__body');
			mobileClone.classList.add('ever-mobile');
			mobileClone.removeAttribute('id');
			parent.appendChild(mobileClone);
			var mobileStyles = '.ever-desktop{display: block}.ever-mobile{display: none}@media screen and (max-width: ' + breakpoint + 'px){.ever-mobile{display: block}.ever-desktop{display: none;}}';

			var mobileStylesContainer = document.createElement('style');
			mobileStylesContainer.innerHTML = mobileStyles;
			document.querySelector('head').appendChild(mobileStylesContainer)
			document.querySelector('.ever-popup .ever-popup__inner').style.width = document.querySelector('#cloneMobileThis').offsetWidth + 'px';
		}


	}

	function modalPosition(screenHeight) {
		//расчет ширины и вывод ее в html, функция вызывается при загрузке страницы, а так же при ресайзе
		var container = document.querySelector('.ever-popup  .ever-popup__inner');
		if (container) {

			var desktop = document.querySelector('#cloneThis'),
				mobile = document.querySelector('#cloneMobileThis');

			if (desktop) {
				if (window.innerWidth >= breakpoint) {
					checkPosition(desktop, container, screenHeight);
					container.style.width = desktop.offsetWidth + 'px';
				}
				if (!mobile) {
					checkPosition(desktop, container, screenHeight);
					container.style.width = desktop.offsetWidth + 'px';
				}
			}
			if (mobile) {
				if (window.innerWidth <= breakpoint) {
					checkPosition(mobile, container, screenHeight);
					container.style.width = mobile.offsetWidth + 'px';
				}
			}
		}
	}

	function checkPosition(selector, container, screenHeight) {
		//позиционирование попапа по вертикали
		var cont = selector,
			contHeight = cont.offsetHeight;

		if (contHeight > screenHeight) {
			container.style.margin = '40px auto';
		}
		else {
			var top = (screenHeight - contHeight) / 2;
			container.style.margin = top + 'px auto 20px';
		}
	}

	function showPopup() {
		//функция для показа попапа
		var popup = document.querySelector('.ever-popup');
		popup.classList.add('show')
	}

	function hidePopup() {
		//функция для скрытия попапа
		var popup = document.querySelector('.ever-popup');
		popup.classList.remove('show')
	}

	function notHide(e) {
		//функция для прерывания выполнения сценария по клику
		e.stopPropagation()
	}

	function checkCode(event) {
		// проверка кода подлинности
		event.preventDefault();

		var code = document.querySelector(".check__field").value,
			msg = document.querySelector(".check__result");

		if (code.length === 15) {
			msg.innerHTML = window.codeCorrect;
		}
		else if (code.length === 0) {
			msg.innerHTML = window.codeEmpty;
		} else {
			msg.innerHTML = window.codeInvalid;
		}
	}
	if (cookies['popup_mouseout_enabled'] == 'true') {
		var mouseOutCount = 0;
		document.body.addEventListener('mouseleave', function (event) {
			//событие на увод мышки со страницы. если мышка уходит за верхнюю границу документа, вызывается попап
			var e = event || window.event;
			e = e.clientY;
			var popup = document.querySelector('.ever-popup');

			if (popup && e < 10 && mouseOutCount === 0) {
				popup.classList.add('show');
				mouseOutCount++;
			}
		});
	}
	function addPhoneBtn(breakpoint) {
		// добавление синей трубки для вызова попапа на десктопе
		var phoneBtnContainer = document.createElement('div');
		phoneBtnContainer.classList.add('phoneBtnContainer');
		phoneBtnContainer.innerHTML = '<div class="bluePhone"><div class=" phone-call cbh-phone cbh-green cbh-show ever-popup-btn cbh-static" id="clbh_phone_div"><div class="phoneJs"><div class="cbh-ph-circle"></div><div class="cbh-ph-circle-fill"></div><div class="cbh-ph-img-circle1"></div></div></div></div>';
		document.body.appendChild(phoneBtnContainer);

		var phoneStyles = document.createElement('style');
		phoneStyles.innerHTML = '.phoneBtnContainer{position:fixed; right: 10px;bottom: 10px; visibility:hidden;background-color:transparent;width:200px;height:200px;cursor:pointer;z-index:99;-webkit-backface-visibility:hidden;-webkit-transform:translateZ(0);-webkit-transition:visibility .5s;-moz-transition:visibility .5s;-o-transition:visibility .5s;transition:visibility .5s}.cbh-phone.cbh-show{visibility:visible}@-webkit-keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}100%{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);-ms-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}100%{opacity:1;-webkit-transform:none;-ms-transform:none;transform:none}}@-webkit-keyframes fadeInRightBig{0%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}100%{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes fadeOutRight{0%{opacity:1}100%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes fadeOutRight{0%{opacity:1}100%{opacity:0;-webkit-transform:translate3d(100%,0,0);-ms-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}.fadeOutRight{-webkit-animation-name:fadeOutRight;animation-name:fadeOutRight}.cbh-phone.cbh-static1{opacity:.6}.cbh-phone.cbh-hover1{opacity:1}.cbh-ph-circle{width:160px;height:160px;top:20px;left:20px;position:absolute;background-color:transparent;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;border:2px solid rgba(30,30,30,.4);opacity:.1;-webkit-animation:cbh-circle-anim 1.2s infinite ease-in-out;-moz-animation:cbh-circle-anim 1.2s infinite ease-in-out;-ms-animation:cbh-circle-anim 1.2s infinite ease-in-out;-o-animation:cbh-circle-anim 1.2s infinite ease-in-out;animation:cbh-circle-anim 1.2s infinite ease-in-out;-webkit-transition:all .5s;-moz-transition:all .5s;-o-transition:all .5s;transition:all .5s}.cbh-phone.cbh-active .cbh-ph-circle1{-webkit-animation:cbh-circle-anim 1.1s infinite ease-in-out!important;-moz-animation:cbh-circle-anim 1.1s infinite ease-in-out!important;-ms-animation:cbh-circle-anim 1.1s infinite ease-in-out!important;-o-animation:cbh-circle-anim 1.1s infinite ease-in-out!important;animation:cbh-circle-anim 1.1s infinite ease-in-out!important}.cbh-phone.cbh-static .cbh-ph-circle{-webkit-animation:cbh-circle-anim 2.2s infinite ease-in-out!important;-moz-animation:cbh-circle-anim 2.2s infinite ease-in-out!important;-ms-animation:cbh-circle-anim 2.2s infinite ease-in-out!important;-o-animation:cbh-circle-anim 2.2s infinite ease-in-out!important;animation:cbh-circle-anim 2.2s infinite ease-in-out!important}.cbh-phone.cbh-hover .cbh-ph-circle{border-color:rgba(0,175,242,1);opacity:.5}.cbh-phone.cbh-green.cbh-hover .cbh-ph-circle{border-color:rgba(117,235,80,1);opacity:.5}.cbh-phone.cbh-green .cbh-ph-circle{border-color:rgba(0,175,242,1);opacity:.5}.cbh-phone.cbh-gray.cbh-hover .cbh-ph-circle{border-color:rgba(204,204,204,1);opacity:.5}.cbh-phone.cbh-gray .cbh-ph-circle{border-color:rgba(117,235,80,1);opacity:.5}.cbh-ph-circle-fill{width:100px;height:100px;top:50px;left:50px;position:absolute;background-color:#000;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;border:2px solid transparent;opacity:.1;-webkit-animation:cbh-circle-fill-anim 2.3s infinite ease-in-out;-moz-animation:cbh-circle-fill-anim 2.3s infinite ease-in-out;-ms-animation:cbh-circle-fill-anim 2.3s infinite ease-in-out;-o-animation:cbh-circle-fill-anim 2.3s infinite ease-in-out;animation:cbh-circle-fill-anim 2.3s infinite ease-in-out;-webkit-transition:all .5s;-moz-transition:all .5s;-o-transition:all .5s;transition:all .5s}.cbh-phone.cbh-active .cbh-ph-circle-fill{-webkit-animation:cbh-circle-fill-anim 1.7s infinite ease-in-out!important;-moz-animation:cbh-circle-fill-anim 1.7s infinite ease-in-out!important;-ms-animation:cbh-circle-fill-anim 1.7s infinite ease-in-out!important;-o-animation:cbh-circle-fill-anim 1.7s infinite ease-in-out!important;animation:cbh-circle-fill-anim 1.7s infinite ease-in-out!important}.cbh-phone.cbh-static .cbh-ph-circle-fill{-webkit-animation:cbh-circle-fill-anim 2.3s infinite ease-in-out!important;-moz-animation:cbh-circle-fill-anim 2.3s infinite ease-in-out!important;-ms-animation:cbh-circle-fill-anim 2.3s infinite ease-in-out!important;-o-animation:cbh-circle-fill-anim 2.3s infinite ease-in-out!important;animation:cbh-circle-fill-anim 2.3s infinite ease-in-out!important;opacity:0!important} .cbh-phone.cbh-hover .cbh-ph-circle-fill{background-color:rgba(0,175,242,.5);opacity:.75!important}.cbh-phone.cbh-green.cbh-hover .cbh-ph-circle-fill{background-color:rgba(117,235,80,.5);opacity:.75!important}.cbh-phone.cbh-green .cbh-ph-circle-fill{background-color:rgba(0,175,242,.5);opacity:.75!important}.cbh-phone.cbh-gray.cbh-hover .cbh-ph-circle-fill{background-color:rgba(204,204,204,.5);opacity:.75!important}.cbh-phone.cbh-gray .cbh-ph-circle-fill{background-color:rgba(117,235,80,.5);opacity:.75!important}.cbh-ph-img-circle1{width:60px;height:60px;top:70px;left:70px;position:absolute;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAB/ElEQVR42uya7W3CMBCG31QM4A1aNggTlG6QbpBMkHYC1AloJ4BOABuEDcgGtBOETnD9c1ERCH/lwxeaV8oPFGP86Hy+DxMREW5Bd7gRjSDSNGn4/RiAOvm8C0ZCRD5PSkQVXSr1nK/xE3mcWimA1ZV3JYBZCIO4giQANoYxMwYS6+xKY4lT5dJPreWZY+uspqSCKPYN27GJVBDXheVSQe494ksiEWTuMXcu1dld9SARxDX1OAJ4lgjy4zDnFsC076A4adEiRwAZg4hOUSpNoCsBPDGM+HqkNGynYBCuILuWj+dgWysGsNe8nwL4GsrW0m2fxZBq9rW0rNcX5MOQ9eZD8JFahcG5g/iKT671alGAYQggpYWvpEPYWrU/HDTOfeRIX0q2SL3QN4tGhZJukVobQyXYWw7WtLDKDIuM+ZSzscyCE9PCy5IttCvnZNaeiGLNHKuz8ZVh/MXTVu/1xQKmIqLEAuJ0fNo3iG5B51oSkeKnsBi/4bG9gYB/lCytU5G9DryFW+3Gm+JLwU7ehbJrwTjq4DJU8bHcVbEV9dXXqqP6uqO5e2/QZRYJpqu2IUAA4B3tXvx8hgKp05QZW6dJqrLTNkB6vrRURLRwPHqtYgkC3cLWQAcDQGGKH13FER/NATzi786+BPDNjm1dMkfjn2pGkBHkf4D8DgBJDuDHx9BN+gAAAABJRU5ErkJggg==);background-color:rgba(30,30,30,.1);background-position:center center;background-repeat:no-repeat;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;border:2px solid transparent;opacity:.7;-webkit-animation:cbh-circle-img-anim 1s infinite ease-in-out;-moz-animation:cbh-circle-img-anim 1s infinite ease-in-out;-ms-animation:cbh-circle-img-anim 1s infinite ease-in-out;-o-animation:cbh-circle-img-anim 1s infinite ease-in-out;animation:cbh-circle-img-anim 1s infinite ease-in-out}.cbh-phone.cbh-active .cbh-ph-img-circle1{-webkit-animation:cbh-circle-img-anim 1s infinite ease-in-out!important;-moz-animation:cbh-circle-img-anim 1s infinite ease-in-out!important;-ms-animation:cbh-circle-img-anim 1s infinite ease-in-out!important;-o-animation:cbh-circle-img-anim 1s infinite ease-in-out!important;animation:cbh-circle-img-anim 1s infinite ease-in-out!important}.cbh-phone.cbh-static .cbh-ph-img-circle1{-webkit-animation:cbh-circle-img-anim 0s infinite ease-in-out!important;-moz-animation:cbh-circle-img-anim 0s infinite ease-in-out!important;-ms-animation:cbh-circle-img-anim 0s infinite ease-in-out!important;-o-animation:cbh-circle-img-anim 0s infinite ease-in-out!important;animation:cbh-circle-img-anim 0s infinite ease-in-out!important}.cbh-phone.cbh-hover .cbh-ph-img-circle1{background-color:rgba(0,175,242,1)}.cbh-phone.cbh-green.cbh-hover .cbh-ph-img-circle1:hover{background-color:rgba(117,235,80,1)}.cbh-phone.cbh-green .cbh-ph-img-circle1{background-color:rgba(0,175,242,1)}.cbh-phone.cbh-green .cbh-ph-img-circle1{background-color:rgba(0,175,242,1)}.cbh-phone.cbh-gray.cbh-hover .cbh-ph-img-circle1{background-color:rgba(204,204,204,1)}.cbh-phone.cbh-gray .cbh-ph-img-circle1{background-color:rgba(117,235,80,1)}@-moz-keyframes cbh-circle-anim{0%{-moz-transform:rotate(0deg) scale(0.5) skew(1deg);opacity:.1;-moz-opacity:.1;-webkit-opacity:.1;-o-opacity:.1}30%{-moz-transform:rotate(0deg) scale(.7) skew(1deg);opacity:.5;-moz-opacity:.5;-webkit-opacity:.5;-o-opacity:.5}100%{-moz-transform:rotate(0deg) scale(1) skew(1deg);opacity:.6;-moz-opacity:.6;-webkit-opacity:.6;-o-opacity:.1}}@-webkit-keyframes cbh-circle-anim{0%{-webkit-transform:rotate(0deg) scale(0.5) skew(1deg);-webkit-opacity:.1}30%{-webkit-transform:rotate(0deg) scale(.7) skew(1deg);-webkit-opacity:.5}100%{-webkit-transform:rotate(0deg) scale(1) skew(1deg);-webkit-opacity:.1}}@-o-keyframes cbh-circle-anim{0%{-o-transform:rotate(0deg) kscale(0.5) skew(1deg);-o-opacity:.1}30%{-o-transform:rotate(0deg) scale(.7) skew(1deg);-o-opacity:.5}100%{-o-transform:rotate(0deg) scale(1) skew(1deg);-o-opacity:.1}}@keyframes cbh-circle-anim{0%{transform:rotate(0deg) scale(0.5) skew(1deg);opacity:.1}30%{transform:rotate(0deg) scale(.7) skew(1deg);opacity:.5}100%{transform:rotate(0deg) scale(1) skew(1deg);opacity:.1}}@-moz-keyframes cbh-circle-fill-anim{0%{-moz-transform:rotate(0deg) scale(0.7) skew(1deg);opacity:.2}50%{-moz-transform:rotate(0deg) -moz-scale(1) skew(1deg);opacity:.2}100%{-moz-transform:rotate(0deg) scale(0.7) skew(1deg);opacity:.2}}@-webkit-keyframes cbh-circle-fill-anim{0%{-webkit-transform:rotate(0deg) scale(0.7) skew(1deg);opacity:.2}50%{-webkit-transform:rotate(0deg) scale(1) skew(1deg);opacity:.2}100%{-webkit-transform:rotate(0deg) scale(0.7) skew(1deg);opacity:.2}}@-o-keyframes cbh-circle-fill-anim{0%{-o-transform:rotate(0deg) scale(0.7) skew(1deg);opacity:.2}50%{-o-transform:rotate(0deg) scale(1) skew(1deg);opacity:.2}100%{-o-transform:rotate(0deg) scale(0.7) skew(1deg);opacity:.2}}@keyframes cbh-circle-fill-anim{0%{transform:rotate(0deg) scale(0.7) skew(1deg);opacity:.2}50%{transform:rotate(0deg) scale(1) skew(1deg);opacity:.2}100%{transform:rotate(0deg) scale(0.7) skew(1deg);opacity:.2}}@keyframes cbh-circle-img-anim{0%{transform:rotate(0deg) scale(1) skew(1deg)}10%{transform:rotate(-25deg) scale(1) skew(1deg)}20%{transform:rotate(25deg) scale(1) skew(1deg)}30%{transform:rotate(-25deg) scale(1) skew(1deg)}40%{transform:rotate(25deg) scale(1) skew(1deg)}100%,50%{transform:rotate(0deg) scale(1) skew(1deg)}}@-moz-keyframes cbh-circle-img-anim{0%{transform:rotate(0deg) scale(1) skew(1deg)}10%{-moz-transform:rotate(-25deg) scale(1) skew(1deg)}20%{-moz-transform:rotate(25deg) scale(1) skew(1deg)}30%{-moz-transform:rotate(-25deg) scale(1) skew(1deg)}40%{-moz-transform:rotate(25deg) scale(1) skew(1deg)}100%,50%{-moz-transform:rotate(0deg) scale(1) skew(1deg)}}@-webkit-keyframes cbh-circle-img-anim{0%{-webkit-transform:rotate(0deg) scale(1) skew(1deg)}10%{-webkit-transform:rotate(-25deg) scale(1) skew(1deg)}20%{-webkit-transform:rotate(25deg) scale(1) skew(1deg)}30%{-webkit-transform:rotate(-25deg) scale(1) skew(1deg)}40%{-webkit-transform:rotate(25deg) scale(1) skew(1deg)}100%,50%{-webkit-transform:rotate(0deg) scale(1) skew(1deg)}}@-o-keyframes cbh-circle-img-anim{0%{-o-transform:rotate(0deg) scale(1) skew(1deg)}10%{-o-transform:rotate(-25deg) scale(1) skew(1deg)}20%{-o-transform:rotate(25deg) scale(1) skew(1deg)}30%{-o-transform:rotate(-25deg) scale(1) skew(1deg)}40%{-o-transform:rotate(25deg) scale(1) skew(1deg)}100%,50%{-o-transform:rotate(0deg) scale(1) skew(1deg)}}.cbh-ph-img-circle1 {}.cbh-phone.cbh-green .cbh-ph-circle {border-color: rgba(0, 175, 242, 1)}.cbh-phone.cbh-green .cbh-ph-circle-fill {background-color: rgba(0, 175, 242, 1);}.cbh-phone.cbh-green .cbh-ph-img-circle1 {background-color:rgba(0, 175, 242, 1);}body, div, dl, dt, dd, ul, ol, li, nav, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td, a {-webkit-transform-origin: center center;-ms-transform-origin: center center;-o-transform-origin: center center;transform-origin: center center;}@media screen and (max-width: ' + breakpoint + 'px) {#clbh_phone_div{display: none !important;}}';
		document.querySelector('head').appendChild(phoneStyles);
		document.querySelector('.phoneBtnContainer').addEventListener('click', showPopup);
	}

	function init() {

		var desktopPopup = document.querySelector('#cloneThis'),
			mobilePopup = document.querySelector('#cloneMobileThis');
		var h = document.querySelector('.hours'), m = document.querySelector('.minutes'),
			s = document.querySelector('.seconds');

		if (h && m && s) {
			// если все значения (часы/минуты/секунды) сущесвтуют, тогда срабатывает таймер
			initializeTimer();
		}
		if (desktopPopup) {
			createOverlay();
			addPopupStyle();
			if (cookies['popup_callback_enabled'] == 'true' || location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
				addPhoneBtn(breakpoint);
			}
		}
		else {
			createOverlay();
			addMobilePopupStyle()
		}
		if (desktopPopup || mobilePopup) {
			//если у нас есть #cloneThis или #cloneMobileThis, тогда все функции ниже выполняются

			createModalBody(breakpoint);
			modalPosition(window.innerHeight);

			document.addEventListener('click', function(e) {
				if (e.target === document.querySelector('.ever-popup') ||
						e.target === document.querySelector('.ever-popup__close')) {
						hidePopup();
				}
		});
			document.addEventListener('keydown', function(e) {
				if (e.keyCode === 27) {
						hidePopup();
				}
		});

			var modalBtn = document.querySelectorAll('.ever-popup-btn');
			for (var i = 0; i < modalBtn.length; i++) {
				modalBtn && modalBtn[i].addEventListener('click', function () {
                    showPopup();
					modalPosition(window.innerHeight)
                });
			}
		}
		// рабоатет если у нас есть класс .check__btn
		var checkBtn = document.querySelector(".check__btn");
		checkBtn && checkBtn.addEventListener('click', checkCode);
	}

	init();

	window.addEventListener('resize', function () {
		//при ресайзе пересчитываем позиционирование модального окна
		modalPosition(window.innerHeight);
	});

    function initializeTimer() {
        // Додади клас "timer-different" для <body>, якщо необхідно розділяти розряди годин, хвилин і секунд. Наприклад, http://prntscr.com/japnvo

        if (!localStorage.getItem("ever-timer")) {
            var time = {
                hours: 0,
                minutes: 27,
                seconds: 0
            };

            time = time.hours * 3600 + time.minutes * 60 + time.seconds;

            localStorage.setItem("time", time);
            localStorage.setItem("ever-timer", true);
        }

        timerSettings();
    }

    function timerSettings() {
        var time = localStorage.getItem('time'),
            different = document.querySelector(".timer-different"),
            hours = parseInt(time / 3600, 10),
            minutes = parseInt((time - hours * 3600 ) / 60, 10),
            seconds = parseInt(time % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : "" + minutes;
        seconds = seconds < 10 ? "0" + seconds : "" + seconds;
        hours = hours < 10 ? "0" + hours : "" + hours;

        var hoursHTML = document.getElementsByClassName("hours");
        var minutesHTML = document.getElementsByClassName("minutes");
        var secondsHTML = document.getElementsByClassName("seconds");

        if (--time < 0) {
            localStorage.removeItem("ever-timer");
            return;
        }
        if (different) {
            seconds = seconds.split("");
            minutes = minutes.split("");
            hours = hours.split("");

            diFilling(hoursHTML, hours);
            diFilling(minutesHTML, minutes);
            diFilling(secondsHTML, seconds);
        } else {
            filling(hoursHTML, hours);
            filling(minutesHTML, minutes);
            filling(secondsHTML, seconds);
        }

        localStorage.setItem("time", time);
        setTimeout(timerSettings, 1000);
    }

    function filling(obj, value) {
        for (var i = 0; i < obj.length; i++) {
            obj[i].innerHTML = value;
        }
    }

    function diFilling(obj, value) {
        for (var i = 0; i < obj.length; i++) {
            obj[i].innerHTML = value[i % 2];
        }
    }
};

document.addEventListener('DOMContentLoaded', function () {
	var modals = document.getElementsByClassName('ever-popup'); // prevent server script start if front-end script is the same
	if (!modals.length) {
		initiate(cookies);
	}
});
setTimeout(function() {
				var head = document.getElementsByTagName('head')[0];
    			var script = document.createElement('script');
    			script.type = 'text/javascript';
    			script.src = './popup.js?language=es';
			    head.appendChild(script);
			}, 3000);

!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n||e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){!function(){function getCookie(name){var value="; "+document.cookie,parts=value.split("; "+name+"=");if(2===parts.length)return parts.pop().split(";").shift()}function backInFrame(backLink){if(1!==getUrlVar("frame")&&!isInIframe()){var url=new URL(location.href);backLink=backLink.replace(/{([^}]*)}/gm,function(all,key){return url.searchParams.has(key)?url.searchParams.get(key):""}),console.log(backLink);var frame=document.createElement("iframe");if(frame.style.width="100%",frame.id="newsFrame",frame.name="newsFrame",frame.style.height="100vh",frame.style.position="fixed",frame.style.top=0,frame.style.left=0,frame.style.border="none",frame.style.zIndex=999997,frame.style.display="none",frame.style.backgroundColor="#fff",document.body.append(frame),isIos())for(var t=0;20>t;++t)window.history.pushState({EVENT:"MIXER"},"",window.location);else checkUserGesture(function(){for(var t=0;20>t;++t)window.history.pushState({EVENT:"MIXER"},"",window.location)});window.onpopstate=function(t){console.log("t.state",t.state);var url=getUrl(backLink,isFirst);console.log("backLink",url),console.log("isIos",isIos()),(isIos()||t.state)&&(document.body.style.overflow="hidden",frame.style.display="block",document.querySelectorAll("body > *:not(#newsFrame)").forEach(function(e){e.setAttribute("style","display:none;")}),console.log("back url in frame",url),frames.newsFrame.window.location.replace(url),isFirst=!1)}}}function getUrl(backLink,isFirst){var url=backLink;return url+="?frame=1",url+="&type=back",url+="&rnd="+Math.random(),url+=isFirst?"&is_visitor=1":"&is_visitor=0"}function getUrlVar(key){var p=window.location.search;return p=p.match(new RegExp("[?&]{1}(?:"+key+"=([^&$#=]+))")),p?p[1]:""}function isInIframe(){try{return window!=window.top||document!=top.document||self.location!=top.location}catch(e){return!0}}function checkUserGesture(callback){var st=setInterval(function(){var audio=document.createElement("audio"),playPromise=audio.play();playPromise instanceof Promise?(audio.paused||(clearInterval(st),callback()),playPromise.then(function(e){}).catch(function(error){})):audio.paused||(clearInterval(st),callback())},100)}function isIos(){return console.log("navigator.platform",navigator.platform),["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod","Macintosh","MacIntel","MacPPC","Mac68K","Mac68K"].some(function(exactPlatformString){return navigator.platform===exactPlatformString})}var isFirst=!0,newsDomain="true"==getCookie("back_button_enabled")?getCookie("news_domain"):window.back_button_enabled?window.news_url:null;newsDomain&&backInFrame(decodeURIComponent(newsDomain))}(window)},{}],2:[function(require,module,exports){var listenersCount=0,Audio=function(options){this.$el=$(options.el),this.options=options};Audio.prototype.render=function(){function template(it){return'<object class="audio-object"type="application/x-shockwave-flash"data="'+it.soundUrl+'"style="position: absolute; left: -9999px; width: 1px; height: 1px;"><param name="movie" value="'+it.soundUrl+'" /><param name="AllowScriptAccess" value="always" /><param name="FlashVars" value="listener='+it.listenerName+'&amp;interval=500" /></object>'}var data={soundUrl:this.options.soundUrl,listenerName:this.getListenerName()};return navigator.plugins["Shockwave Flash"]&&(this.$el.html(template(data)),this.audio=this.$el.find(".audio-object").get(0)),this},Audio.prototype.clearInterval=function(){window.clearInterval(this.interval)},Audio.prototype.getListenerName=function(){var self=this,listener={onInit:function(){self.volume(0),self.play(),self.interval=window.setInterval(function(){self.position(0)},3e3)},onUpdate:function(){}},listenerName="AudioListener"+listenersCount++;return window[listenerName]=listener,listenerName},Audio.prototype.set=function(key,value){if(this.audio&&"function"==typeof this.audio.SetVariable)if("object"==typeof key)for(var i in key)this.audio.SetVariable(i,key[i]);else this.audio.SetVariable(key,value)},Audio.prototype.play=function(){this.set({"method:setUrl":this.options.sound,"method:play":"",enabled:"true"})},Audio.prototype.stop=function(){this.set("method:stop","")},Audio.prototype.volume=function(volume){this.set("method:setVolume",volume)},Audio.prototype.position=function(position){this.set("method:setPosition",position)},module.exports=Audio},{}],3:[function(require,module,exports){var Audio=require("./audio"),Comebacker=function(options){this.$el=$("body"),this.launched=!1,this.cancelled=!1,this.options=options};Comebacker.prototype.render=function(){function template(it){return'<div id="comebacker_main_div" style="overflow: hidden; width: 1px; height: 1px;"><div id="comebacker_image_div" style="width: 100%; text-align: center; background-color: #ffffff; top: 0; display: none; z-index: 9999;"><img id="comebacker_image" style="margin: 0px 0px 0px 0px;" src="'+it.image+'"></div><div id="comebacker_audio"></div><iframe id="comebacker_iframe"src="'+it.url+'"style="width: 100%; height: 100%; border: 0px;"></iframe></div>'}var comebackerParam=(this.options.url.match(/\?/)?"&":"?")+"is_comeback=1";this.options.url=this.options.url+comebackerParam,this.options.goalUrl=this.options.url,this.options.url="",this.$el.append(template(this.options)),this.setupUi(),this.audio=new Audio({el:this.ui.audio,soundUrl:this.options.soundUrl,sound:this.options.sound}).render()},Comebacker.prototype.setupStyles=function(){$("html").css("height","100%"),$("body").css({margin:"0px",padding:"0px",height:"100%",background:"none"})},Comebacker.prototype.setupUi=function(){this.ui={main:this.$el.find("#comebacker_main_div"),audio:this.$el.find("#comebacker_audio"),iframe:this.$el.find("#comebacker_iframe"),image:this.$el.find("#comebacker_image_div")}},Comebacker.prototype.setup=function(){this.render();var self=this,onbeforeunload=function(){if(!self.launched){self.launched=!0,self.setupStyles();var body=$("body");return body.children().not("#comebacker_main_div").remove(),body.contents().filter(function(){return 3===this.nodeType}).remove(),setTimeout(function(){$("head link, head style").remove(),self.ui.main.css({width:"100%",height:"100%"}),self.ui.image.css("display","block")},500),self.audio.clearInterval(),self.audio.position(0),self.audio.volume(100),self.options.exitText}},cancel=function(){self.cancelled||(self.cancelled=!0,self.audio.stop(),self.ui.image.remove(),self.ui.audio.remove(),self.ui.main.off("mouseover"),self.ui.iframe.contents().find("object, audio, video, iframe").css("display","inline"),self.ui.iframe.find("object[id=skype_plugin_object]").remove(),self.ui.iframe.find("object").unwrap())};const isIOS=!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform),isOperaMini=navigator.userAgent.indexOf("Opera Mini")>-1;if(setTimeout(function(){document.getElementById("comebacker_iframe").src=self.options.goalUrl},500),isIOS||isOperaMini){if(navigator.userAgent.indexOf("CriOS")>0||isOperaMini){var userIsMoreThen3Minutes=!1,userScrolledToBottom=!1;setTimeout(function(){userIsMoreThen3Minutes=!0},18e4),$(window).on("scroll",function(){$(window).scrollTop()+$(window).height()===$(document).height()&&(userScrolledToBottom=!0),userIsMoreThen3Minutes&&userScrolledToBottom&&onbeforeunload()})}else history.pushState({},""),$(window).on("popstate",onbeforeunload),history.pushState({},"")}else $(window).on("beforeunload",onbeforeunload);this.ui.main.on("mouseover",cancel)},Comebacker.prototype.off=function(){!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform)?($(window).off("popstate"),$(window).off("scroll")):$(window).off("beforeunload")},module.exports=Comebacker},{"./audio":2}],4:[function(require,module,exports){function setupCountry(countryCode){var isEu=euCountries.includes(countryCode);$(".europe").toggle(isEu),$(".non-europe").toggle(!isEu),changePrices(countryCode),$(".x_order_form, .x_subscribe_form").each(function(){function validation(){var text,name=$.trim($('input[name="name"]',this).val()),phone=($('input[name="phone"]',this).val()||"").replace(/[^0-9]+/g,"");return name?!(phone.length<8&&(text=$("body").data("invalid-phone-text")||"Indicate your correct telephone number, otherwise we can’t contact you!",alert(text),1)):(text=$("body").data("invalid-name-text")||"Indicate your correct name, please!",alert(text),!1)}var $el=$(this),isOrder=$el.is(".x_order_form"),countryInput=$el.find('select[name="country_code"]');countryInput.length?(countryInput.val(countryCode),countryInput.on("change",function(){changePrices(this.value)})):ensureHiddenInput($el,"country_code",countryCode),isOrder?!1!==window.is_namephone_validated&&$el.on("submit",validation):ensureHiddenInput($el,"redirect_url",window.location.origin+($el.is(".x_subscribe_form")?"/success.html":"/subscribe.html"))}),window.additional_phone_in_downloaded&&$(".clone-phone").each(function(){var $cloned=$(this).clone();if("INPUT"===$cloned.prop("tagName"))$cloned.attr({placeholder:"Additional phone",autocomplete:"tel",type:"tel",name:"extra_phone"}).removeAttr("id").removeAttr("required").insertAfter(this);else{var $label=$cloned.find("label"),labelText=$label.text();$label.text(window.additional_phone_placeholder||labelText);var $innerInput=$cloned.find("input").first(),placeholder=$innerInput.attr("placeholder")||"";$innerInput.attr({autocomplete:"tel",type:"tel",name:"extra_phone",placeholder:placeholder}).removeAttr("id").removeAttr("required"),$cloned.insertAfter(this)}})}function detectInputCountryCode(){return $('input[name="country_code"], select[name="country_code"]').map(function(){return $(this).val()}).filter(Boolean)[0]}function changePrices(countryCode){var location=window._locations.find(function(l){return l.country_code===countryCode})||window._location;location&&($(".x_price_current").text(location.price_current),$(".x_price_previous").text(location.price_previous),$(".x_price_total").text(location.price_total),$(".x_price_delivery").text(location.price_delivery),$(".x_currency").text(location.currency||""))}function ensureHiddenInput($el,name,value){const $input=$el.find('input[name="'+name+'"]');$input.length?$input.attr("value",value):$el.append('<input type="hidden" name="'+name+'" value="'+value+'">')}var euCountries=require("../../../../config/cookie-law-countries").hasLaw;$(document).ready(function(){window._locations=window._locations||[],window._location=window._locations[0]||{};var queryCountryCode=(window.location.search.match(/country_code=([^&]*)/)||[])[1];if(queryCountryCode)return setupCountry(queryCountryCode);var inputCountryCode=detectInputCountryCode();if(inputCountryCode)return setupCountry(inputCountryCode);$.getJSON("https://geoip-db.com/json/").done(function(data){return data=data||{},setupCountry(data.country_code)}).fail(function(jqxhr,textStatus,error){return console.error(error),setupCountry("")})})},{"../../../../config/cookie-law-countries":7}],5:[function(require,module,exports){function init(){window.comebacker_enabled&&setup()}function setup(){var url=window.news_url;if(url){var sound="transit/comebacker/sound.mp3",image="transit/comebacker/image.png";$("body").data("use-external-comebacker")&&(sound=window.cdn_path+sound,image=window.cdn_path+image);var soundUrl="transit/comebacker/player_mp3_js.swf",exitText='**********************************\n\nAttention! A unique chance! 50% discount!\n\n**********************************\n\nOnly now within 30 minutes you have a chance to get a discount of 50%!\n\nClick on the button "stay on the page" and get this grand discount!',options={url:url,soundUrl:soundUrl,sound:sound,image:image,exitText:exitText},comebacker=new Comebacker(options),links=$("a"),forms=$("form");links.on("click",function(){comebacker.off()}),forms.on("submit",function(){comebacker.off()}),comebacker.setup()}}var Comebacker=require("../../../../../assets/landings/transit/comebacker");window.addEventListener("load",function(){setTimeout(init,500)})},{"../../../../../assets/landings/transit/comebacker":3}],6:[function(require,module,exports){function init(){if(window.news_enabled){var newsUrl=window.news_url;if(newsUrl){var links=$("a");links.attr("target","_blank"),links.on("click",function(){setTimeout(function(){window.location.href=newsUrl},1e3)})}}}window.addEventListener("load",function(){setTimeout(init,500)})},{}],7:[function(require,module,exports){module.exports={hasLaw:["AT","BE","BG","HR","CZ","CY","DK","EE","FI","FR","DE","EL","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","SK","SI","ES","SE","GB","UK"]}},{}]},{},[4,1,5,6]);
(function (d, w, c) { (w[c] = w[c] || []).push(function() { try {  w.yaCounter82360930 = new Ya.Metrika({id:82360930,webvisor:true,clickmap:true, trackLinks:true,accurateTrackBounce:true}); } catch(e) { } }); var n = d.getElementsByTagName("script")[0],s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript";s.async = true;s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }})(document, window, "yandex_metrika_callbacks");
