const basicMenuBtn = document.querySelector("#basic_menu");
const incomeMenuBtn = document.querySelector("#income_menu");
const expenseMenuBtn = document.querySelector("#expense_menu");
const resetMenuBtn = document.querySelector("#reset_menu");

function clickIncomeMenuBtn() {
  //수입만 출력
  const incomeList = historyArr.filter((item) => item.price > 0);
  historyList.innerHTML = "";

  for (i = 0; i < incomeList.length; i++) {
    const li = document.createElement("li");
    const valueBoxHTML = `
        <span id='select'>${incomeList[i].select}</span>
        <span id='subject'>${incomeList[i].subject}</span>
        <span id='price'>${incomeList[i].price}</span>`;

    li.innerHTML = valueBoxHTML;
    historyList.appendChild(li);
  }
}

incomeMenuBtn.addEventListener("click", clickIncomeMenuBtn);

function clickExpenseMenuBtn() {
  //지출만 출력
  const expenseList = historyArr.filter((item) => item.price < 0);
  historyList.innerHTML = "";

  for (i = 0; i < expenseList.length; i++) {
    const li = document.createElement("li");
    const valueBoxHTML = `
        <span id='select'>${expenseList[i].select}</span>
        <span id='subject'>${expenseList[i].subject}</span>
        <span id='price'>${expenseList[i].price}</span>`;

    li.innerHTML = valueBoxHTML;
    historyList.appendChild(li);
  }
}

expenseMenuBtn.addEventListener("click", clickExpenseMenuBtn);

function showAllHistory() {
  //전체 출력
  historyList.innerHTML = "";
  const parsedHistory = JSON.parse(savedHistory);
  historyArr = parsedHistory;
  parsedHistory.forEach(paintAccount);
}

basicMenuBtn.addEventListener("click", showAllHistory);

function resetHistory() {
  // 초기화
  historyList.innerHTML = "";
  localStorage.clear();
  total.innerText = "0";
  incomeTotal.innerText = "0";
  expenseTotal.innerText = "0";
}

resetMenuBtn.addEventListener("click", resetHistory);
