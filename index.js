let money = parseInt(window.prompt("введите свой бюджет на месяц", "2000грн"));
let data = parseInt(window.prompt("Введите дату YYYY-MM-DD", "1991-09-03"));
let a = parseInt(window.prompt("Введите обязательную статью расходов в этом месяце", "1200"));
let b = parseInt(window.prompt("Во сколько обойдется?", "100"));
let c = parseInt(window.prompt("Введите обязательную статью расходов в этом месяце", "1700"));
let d = parseInt(window.prompt("Во сколько обойдется?", "400"));
let budget;

let appData = {
    money : money,
    timeData : data,
    expenses : {
      a : b,
      c : b
    },
    optionalExpenses : {},
    income : [],
    savings: false
};
 budget = money / 30;
 window.alert(budget);