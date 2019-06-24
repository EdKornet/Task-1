let startBtn = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),
    expensesItem = document.querySelectorAll('.expenses-item'),
    data = document.querySelector('.data'),
    expenseBtn = data.getElementsByTagName("button")[0],
    optionalExpensesBtn = data.getElementsByTagName("button")[1],
    countBtn = data.getElementsByTagName("button")[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('#income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'), 
    year = document.querySelector('.year-value'), 
    month = document.querySelector('.month-value'), 
    day = document.querySelector('.day-value'),
    sumBudget = 0;
    

let money, date;

startBtn.addEventListener("click", ()=>{
  date = window.prompt("Введите дату YYYY-MM-DD", "1991-09-03");
  money = +window.prompt("введите свой бюджет на месяц", "10000");
  while(isNaN(money) || 
  money == "" ||
  money == null) {
   money = +window.prompt("введите свой бюджет на месяц", "20000");
  }
  appData.budget = money;
  appData.timeData = date;
  budgetValue.textContent = money.toFixed();
  year.value = new Date(Date.parse(date)).getFullYear();
  month.value = new Date(Date.parse(date)).getMonth() + 1;
  day.value = new Date(Date.parse(date)).getDate();


  expenseBtn.addEventListener('click', ()=> {
   
    for (let i = 0; i < expensesItem.length; i++){
      let a = expensesItem[i].value;
      let b = expensesItem[++i].value;
         if ((typeof(a)) === "string" && 
         a != '' && 
         b != '' && 
         a.length < 50){
          appData.expenses[a] = b;
          sumBudget += +b;
         }
         else {
        i--;
         }
    }
    expensesValue.textContent = sumBudget;
  });
  
  optionalExpensesBtn.addEventListener("click", ()=> {
    for(let i = 0; i < optionalExpensesItem.length; i++){
      let opt = optionalExpensesItem[i].value;
      appData.optionalExpenses[i] = opt;
      optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
     }
  });
 
  countBtn.addEventListener("click", ()=> {
  if(appData.budget != undefined) {
    appData.moneyPerDay = ((appData.budget - sumBudget ) / 30).toFixed();
    dayBudgetValue.textContent =  appData.moneyPerDay;
  
    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Мнимальный уровень достатка";
    } 
    else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "средний достаток";
    } 
    else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "ВЫсокий достаток";
    }
    else {
      levelValue.textContent = ("Error");
    }
  }
  else{
    dayBudgetValue.textContent = "Произошла ошибка"
  }
  });
  
  incomeItem.addEventListener("input", ()=> {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
  });
  
 
});

checkSavings.addEventListener("click", ()=> {
  if (appData.savings == true) {
    appData.savings = false;
  }
  else {
    appData.savings = true;
  }
});

sumValue.addEventListener("input", ()=> {
  if(appData.savings == true) {
    let sum = +sumValue.value;
    let percent = +percentValue.value;

    appData.monthInCome = sum/100/12*percent;
    appData.yearInCome = sum/100*percent;

    monthSavingsValue.textContent = appData.monthInCome.toFixed(1);
    yearSavingsValue.textContent = appData.yearInCome.toFixed(1);

  }
});

percentValue.addEventListener("input", ()=> {
  if(appData.savings == true) {
    let sum = +sumValue.value;
    let percent = +percentValue.value;

    appData.monthInCome = sum/100/12*percent;
    appData.yearInCome = sum/100*percent;

    monthSavingsValue.textContent = appData.monthInCome.toFixed(1);
    yearSavingsValue.textContent = appData.yearInCome.toFixed(1);
  }
});


let appData = {
    budget : money,
    timeData : date,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false,
    
};