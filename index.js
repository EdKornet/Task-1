let money = window.prompt("введите свой бюджет на месяц", "2000");
let date = window.prompt("Введите дату YYYY-MM-DD", "1991-09-03");

let appData = {
    budget : money,
    timeData : date,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings: false
};

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
};

// let i = 0;
// while (i < 2) {
//   let a = window.prompt("Введите обязательную статью расходов в этом месяце", "1200");
//   let b = window.prompt("Во сколько обойдется?", "100");
    
//      if ((typeof(a)) === "string" && 
//      a != '' && 
//      b != '' && 
//      a.length < 50){
//       appData.expenses[a] = b;
//      }
//      else {
//     i--;
//      }
//      i++;
// }

// let i = 0;
// do {
//   let a = window.prompt("Введите обязательную статью расходов в этом месяце", "1200");
//   let b = window.prompt("Во сколько обойдется?", "100");
    
//      if ((typeof(a)) === "string" && 
//      a != '' && 
//      b != '' && 
//      a.length < 50){
//       appData.expenses[a] = b;
//      }
//      else {
//     i--;
//      }
//      i++
// } while(i < 2);

appData.moneyPerDay = appData.budget/30;

 window.alert("Ежедневный бюджет" + appData.moneyPerDay);

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