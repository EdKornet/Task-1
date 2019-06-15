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
    savings : true,
    chooseExpenses : function(){
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
    },
    detectDayBudget : function(){
      appData.moneyPerDay = (appData.budget/30).toFixed();
      window.alert("Ежедневный бюджет" + appData.moneyPerDay);
    },
    detectLevel : function(){
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
    },
    checkSavings : function(){
      if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент");
   
            appData.monthInCome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthInCome);
      }
    },
    chooseOptExpenses : function(){
      for(let i = 1; i < 4; i++){
        let a = window.prompt("Статья необязательных расходов");
        appData.optionalExpenses[i] = a;
       }
    },
    chooseIncome : function(){
      let income = "";
      for (let i = 0; i < 1; i++){
        let items = prompt("Что принесет дополнительный доход? (перечислить через запятую)","");

        if ((typeof(items)) === "string" && items != "" && items != null){
          appData.income = items.split(', ');
          appData.income.push(prompt('Может что-то еще?'));
          appData.income.sort();
      
          console.log(income);
        }
        else{
          i--;
        }

      }

    

      appData.income.forEach(function(item){
        income = income + item + " ";
    });
    alert("Способы доп. заработка: " + income);

    }
};

appData.chooseIncome();
let allData = "";
for (let key in appData){
   allData = allData + appData[key];
}
console.log("Наша программа включает в себя данные: " + allData);
