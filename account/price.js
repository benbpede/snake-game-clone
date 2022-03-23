const total = document.querySelector(".total");
const incomeTotal = document.querySelector(".income_total");
const expenseTotal = document.querySelector(".expense_total");

function updatePrice() {
  //수입, 지출, 총 금액 계산하여 출력
  const price = historyArr.map((item) => Number(item.price));
  const totalPrice = price.reduce((acc, cur) => (acc += cur), 0);
  const income = price
    .filter((price) => price > 0)
    .reduce((acc, cur) => (acc += cur), 0);
  const expense = price
    .filter((price) => price < 0)
    .reduce((acc, cur) => (acc += cur), 0);

  incomeTotal.innerText = `${income}`;
  expenseTotal.innerText = `${expense}`;
  total.innerText = `${totalPrice}`;
}

updatePrice();
