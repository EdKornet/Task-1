let money, date;

function start() {
   money = +window.prompt("введите свой бюджет на месяц", "2000");
   date = window.prompt("Введите дату YYYY-MM-DD", "1991-09-03");
   while(isNaN(money) || 
   money == "" ||
   money == null) {
    money = +window.prompt("введите свой бюджет на месяц", "2000");
   }
}


start();

let appData = {
    budget : money,
    timeData : date,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings: true
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++){
    let a = window.prompt("Введите обязательную статью расходов в этом месяце", "1200");
    let b = window.prompt("Во сколько обойдется?", "100");
      
       if ((typeof(a)) === "string" && 
       a != '' && 
       b != '' && 
       a.length < 50){
        appData.expenses[a] = b;
       }
       else {
      i--;
       }
  }
}

chooseExpenses();


function detectDayBudget(){
  appData.moneyPerDay = (appData.budget/30).toFixed();
  window.alert("Ежедневный бюджет" + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel(){

  if (appData.moneyPerDay < 100) {
    console.log("Мнимальный уровень достатка");
  } 
  else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("средний достаток");
  } 
  else if (appData.moneyPerDay > 2000) {
    console.log("ВЫсокий достаток");
  }
  else {
    console.log("Error");
  }

}
detectLevel(); 

 function checkSavings(){
   if (appData.savings == true) {
     let save = +prompt("Какова сумма накоплений"),
         percent = +prompt("Под какой процент");

         appData.monthInCome = save/100/12*percent;
         alert("Доход в месяц с вашего депозита: " + appData.monthInCome);
   }
 }

 checkSavings();

 function chooseOptExpenses(){
   for(let i = 1; i < 4; i++){
    let a = window.prompt("Статья необязательных расходов");
    appData.optionalExpenses[i] = a;
   }
 }