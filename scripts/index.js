const btn = document.getElementById("calculate-btn");

function handleClick() {
  document.getElementById("calculate-btn").innerHTML = "Recalculate";
  console.log("Button clicked");
  calculateProfit();
}
btn.addEventListener("click", handleClick);

function calculateProfit() {
  const cost = parseFloat(document.getElementById("material-cost").value);
  const price = parseFloat(document.getElementById("price").value);
  const quantity = parseInt(document.getElementById("quantity").value);
  const profitDisplay = document.getElementById("profit-amount");
  

  profitDisplay.innerHTML = "";
  
  const difference = price - cost;
  const profit = difference * quantity;

  if (difference > 0) {
    profitDisplay.innerHTML = `${profit.toFixed(2)}`;
  } else if (difference < 0) {
    profitDisplay.innerHTML = `${Math.abs(profit).toFixed(2)}`;
  } else {
    profitDisplay.innerHTML = "No Profit, No Loss";
  }
}