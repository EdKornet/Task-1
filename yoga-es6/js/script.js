 window.addEventListener('DOMContentLoaded', ()=> {
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
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', (event)=> {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++){
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
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
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
            if ( t.total < 0) {
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";

                clearInterval(timeInterval);
            }
            else {
                if(t.hours <= 9) {
                    hours.textContent = '0' + t.hours;
                }
                else {
                    hours.textContent = t.hours;
                }

                if(t.minutes <= 9) {
                    minutes.textContent = '0' + t.minutes;
                }
                else {
                    minutes.textContent = t.minutes;
                }
                if(t.seconds <= 9) {
                    seconds.textContent = '0' + t.seconds;
                }
                else {
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

        more.addEventListener('click', function(){
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = "hidden";
        });

        close.addEventListener('click', ()=>{
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = "";
        });


     let description = document.querySelectorAll('.description-btn');

     for(let i = 0; i < description.length; i++){
        description[i].addEventListener('click', function() {
        document.querySelector('.overlay').style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = "hidden";
     });
     }
    

     close.addEventListener('click', ()=>{
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = "";
    });

    
});
class Options {
    constructor(height, width, bg, fontSize, textAlign){
       this.height = height;
       this.width = width;
       this.bg = bg;
       this.fontSize = fontSize;
       this.textAlign = textAlign;
    }

    createDiv(text) {
        let div = document.createElement("div");
        let body = document.querySelector("body");
        div.innerHTML = text;
        body.appendChild(div);

       
        div.style.height = this.height + 'px';
        div.style.width =  this.width + 'px';
        div.style.background = this.bg;
        div.style.fontSize = this.fontSize + 'px';
        div.style.textAlign = this.textAlign;
    }



}

let blat = new Options(100, 200, 'blue', 10, 'center');

blat.createDiv('text');

