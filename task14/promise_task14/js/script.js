window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');


    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer

    let deadLine = '2019-10-21';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            // console.log('0' + t.seconds);
            if (t.total < 0) {
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";

                clearInterval(timeInterval);
            } else {
                if (t.hours <= 9) {
                    hours.textContent = '0' + t.hours;
                } else {
                    hours.textContent = t.hours;
                }

                if (t.minutes <= 9) {
                    minutes.textContent = '0' + t.minutes;
                } else {
                    minutes.textContent = t.minutes;
                }
                if (t.seconds <= 9) {
                    seconds.textContent = '0' + t.seconds;
                } else {
                    seconds.textContent = t.seconds;
                }


                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }

        }

    }

    setClock('timer', deadLine);


    //modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = "hidden";
    });

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = "";
    });


    let description = document.querySelectorAll('.description-btn');

    for (let i = 0; i < description.length; i++) {
        description[i].addEventListener('click', function () {
            document.querySelector('.overlay').style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = "hidden";
        });
    }


    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = "";
    });

    //formA

    let message = {
        loading: 'загрузка',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    function sendForm(elem) {
        elem.addEventListener('submit', (e) => {
            e.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);

            function postData(data) {

                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'http://localhost/ajax-task13/server.php');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                    let obj = {};
                    formData.forEach(function (value, key) {
                        obj[key] = value;
                    });

                    let json = JSON.stringify(obj);
                    request.send(json);

                    request.onreadystatechange = () => {
                        if (request.readyState < 4) {
                            resolve()
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve()
                        } else {
                            reject()
                        }
                    }

                })

            }// end postData

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => {
                    statusMessage.innerHTML = message.success
                })
                .catch(() => statusMessage = message.failure)
                .then(clearInput);
        });
    }

    sendForm(form);

    // form.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //     form.appendChild(statusMessage);
    //
    //     let request = new XMLHttpRequest();
    //     request.open('POST', 'http://localhost/ajax-task13/server.php');
    //     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    //
    //     let formData = new FormData(form);
    //     console.log(formData);
    //     let obj = {};
    //     formData.forEach(function (value, key) {
    //         console.log(value);
    //         console.log(key);
    //         obj[key] = value;
    //     });
    //
    //     let json = JSON.stringify(obj);
    //     request.send(json);
    //
    //     request.addEventListener('readystatechange', () => {
    //         if (request.readyState < 4) {
    //             statusMessage.innerHTML = message.loading;
    //         } else if (request.readyState === 4 && request.status == 200) {
    //             statusMessage.innerHTML = message.success;
    //         } else {
    //             statusMessage.innerHTML = message.failure;
    //         }
    //     });
    //
    //     for (let i = 0; i < input.length; i++) {
    //         input[i].value = '';
    //     }
    // });


    //second form

    let contactForm = document.getElementById('form'),
        contactInput = contactForm.getElementsByTagName('input');

    contactForm.addEventListener('submit', (e) => {

        e.preventDefault();
        contactForm.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'http://localhost/ajax-task13/server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData1 = new FormData(contactForm);

        console.log(contactForm);
        console.log(formData1);

        let obj1 = {};
        formData1.forEach(function (value, key) {
            console.log(value);
            console.log(key);
            obj1[key] = value;
        });
        console.log(obj1);
        let json1 = JSON.stringify(obj1);
        request.send(json1);

        request.addEventListener('readystatechange', () => {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < contactInput.length; i++) {
            contactInput[i].value = '';
        }

    });


});




