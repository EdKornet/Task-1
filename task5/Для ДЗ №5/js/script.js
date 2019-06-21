let title = document.getElementById('title'),
    menu = document.querySelector(".menu"),
    allLi = document.querySelectorAll(".menu-item"),
    body = document.body,
    arr,
    adv = document.querySelector(".adv"),
    answer;
    

    menu.insertBefore(allLi[2], allLi[1]);
    body.style.background = 'url(../img/apple_true.jpg)';
  

    arr = title.innerHTML.split(" ");
    arr.splice(12, 0, 'подлинную');
    title.innerHTML = arr.join(" ");
    
  adv.parentNode.removeChild(adv);
   

  function func(){
    answer = prompt("Пользователь, как ты относишься к технике apple?");
    document.getElementById('prompt').innerHTML = answer;
  }

  setTimeout(func , 5000);