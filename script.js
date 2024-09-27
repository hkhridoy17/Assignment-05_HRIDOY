// donation btn click
document.getElementById("donation-btn").addEventListener("click", function () {
  document.getElementById("history").classList.add("hidden");
  document
    .getElementById("history-btn")
    .classList.remove("bg-[#B4F461]", "border-transparent");
  document
    .getElementById("history-btn")
    .classList.add("border-2", "text-[rgba(17,17,17,0.7)]");
  document.getElementById("donation").classList.remove("hidden");
  document
    .getElementById("donation-btn")
    .classList.remove("bg-white", "text-[rgba(17,17,17,0.7)]");
  document
    .getElementById("donation-btn")
    .classList.add("bg-[#B4F461]", "border-transparent", "text-[#111111]");
});

//history btn click
document.getElementById("history-btn").addEventListener("click", function () {
  document.getElementById("donation").classList.add("hidden");
  document
    .getElementById("donation-btn")
    .classList.remove("bg-[#B4F461]", "border-transparent");
  document
    .getElementById("donation-btn")
    .classList.add("border-2", "bg-white", "text-[rgba(17,17,17,0.7)]");
  document.getElementById("history").classList.remove("hidden");
  document
    .getElementById("history-btn")
    .classList.remove("bg-white", "text-[rgba(17,17,17,0.7)]");
  document
    .getElementById("history-btn")
    .classList.add("bg-[#B4F461]", "border-transparent", "text-[#111111]");
});

document
  .getElementById("modal-close-btn")
  .addEventListener("click", function () {
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("input-card-1").value = "";
    document.getElementById("input-card-2").value = "";
    document.getElementById("input-card-3").value = "";
    document.getElementById("input-card-4").value = "";
  });

// donation start
let mainAmount = document.getElementById("main-amount").innerText;
let mainAmountNumber = parseFloat(mainAmount);

//card-1
document.getElementById("btn-card-1").addEventListener("click", function () {
  let inputValueCard1 = document.getElementById("input-card-1").value;
  let card1Balance = document.getElementById("amount-card-1").innerText;
  card1Balance = parseFloat(card1Balance);
  console.log(card1Balance);
  if (!isNaN(inputValueCard1)) {
    let inputNumberCard1 = parseFloat(inputValueCard1);
    if (inputNumberCard1 < mainAmountNumber && inputNumberCard1 >= 1) {
      //main balance
      let newMainBalance = mainAmount - inputNumberCard1;
      mainAmount = newMainBalance;
      document.getElementById("main-amount").innerText = newMainBalance;
      console.log(newMainBalance);
      //card balance
      let newCard1Balance = card1Balance + inputNumberCard1;
      card1Balance = newCard1Balance;
      document.getElementById("amount-card-1").innerText = newCard1Balance;
      console.log(newCard1Balance);
      //history
      let historyDiv = document.createElement("div");
      let historyP = document.createElement("p");
      historyP.innerText = `${inputNumberCard1} Taka is Donated for Flood Relief in Noakhali, Bangladesh`;
      let historySpan = document.createElement("span");
      let donationTime = new Date();
      historySpan.innerText = `Date: ${donationTime}`;
      historyDiv.appendChild(historyP);
      historyDiv.appendChild(historySpan);
      document.getElementById("history").prepend(historyDiv);
      //modal
      document.getElementById("modal").classList.remove("hidden");
    } else {
      alert("Invalid number or Insufficient balance");
      document.getElementById("input-card-1").value = "";
    }
  } else {
    alert("Invalid number. Please enter a valid number.");
    document.getElementById("input-card-1").value = "";
  }
});

//card-2
document.getElementById("btn-card-2").addEventListener("click", function () {
  let inputValueCard2 = document.getElementById("input-card-2").value;
  let card2Balance = document.getElementById("amount-card-2").innerText;
  card2Balance = parseFloat(card2Balance);
  console.log(card2Balance);
  if (!isNaN(inputValueCard2)) {
    let inputNumberCard2 = parseFloat(inputValueCard2);
    if (inputNumberCard2 < mainAmountNumber && inputNumberCard2 >= 1) {
      //main balance
      newMainBalance = mainAmount - inputNumberCard2;
      mainAmount = newMainBalance;
      document.getElementById("main-amount").innerText = newMainBalance;
      console.log(newMainBalance);
      //card balance
      let newCard2Balance = card2Balance + inputNumberCard2;
      card2Balance = newCard2Balance;
      document.getElementById("amount-card-2").innerText = newCard2Balance;
      console.log(newCard2Balance);
      //history
      let historyDiv = document.createElement("div");
      let historyP = document.createElement("p");
      historyP.innerText = `${inputNumberCard2} Taka is Donated for Flood Relief in Feni, Bangladesh`;
      let historySpan = document.createElement("span");
      let donationTime = new Date();
      historySpan.innerText = `Date: ${donationTime}`;
      historyDiv.appendChild(historyP);
      historyDiv.appendChild(historySpan);
      document.getElementById("history").prepend(historyDiv);
      //modal
      document.getElementById("modal").classList.remove("hidden");
    } else {
      alert("Invalid number.");
      document.getElementById("input-card-2").value = "";
    }
  } else {
    alert("Invalid number. Please enter a valid number.");
    document.getElementById("input-card-2").value = "";
  }
});

//card-3
document.getElementById("btn-card-3").addEventListener("click", function () {
  let inputValueCard3 = document.getElementById("input-card-3").value;
  let card3Balance = document.getElementById("amount-card-3").innerText;
  card3Balance = parseFloat(card3Balance);
  console.log(card3Balance);
  if (!isNaN(inputValueCard3)) {
    let inputNumberCard3 = parseFloat(inputValueCard3);
    if (inputNumberCard3 < mainAmountNumber && inputNumberCard3 >= 1) {
      //main balance
      newMainBalance = mainAmount - inputNumberCard3;
      mainAmount = newMainBalance;
      document.getElementById("main-amount").innerText = newMainBalance;
      console.log(newMainBalance);
      //card balance
      let newCard3Balance = card3Balance + inputNumberCard3;
      card3Balance = newCard3Balance;
      document.getElementById("amount-card-3").innerText = newCard3Balance;
      console.log(newCard3Balance);
      //history
      let historyDiv = document.createElement("div");
      let historyP = document.createElement("p");
      historyP.innerText = `${inputNumberCard3} Taka is Donated Aid for Injured in Quota Movement in Bangladesh`;
      let historySpan = document.createElement("span");
      let donationTime = new Date();
      historySpan.innerText = `Date: ${donationTime}`;
      historyDiv.appendChild(historyP);
      historyDiv.appendChild(historySpan);
      document.getElementById("history").prepend(historyDiv);
      //modal
      document.getElementById("modal").classList.remove("hidden");
    } else {
      alert("Invalid number.");
      document.getElementById("input-card-3").value = "";
    }
  } else {
    alert("Invalid number. Please enter a valid number.");
    document.getElementById("input-card-3").value = "";
  }
});

//card-4
document.getElementById("btn-card-4").addEventListener("click", function () {
  let inputValueCard4 = document.getElementById("input-card-4").value;
  let card4Balance = document.getElementById("amount-card-4").innerText;
  card4Balance = parseFloat(card4Balance);
  console.log(card4Balance);
  if (!isNaN(inputValueCard4)) {
    let inputNumberCard4 = parseFloat(inputValueCard4);
    if (inputNumberCard4 < mainAmountNumber && inputNumberCard4 >= 1) {
      //main balance
      newMainBalance = mainAmount - inputNumberCard4;
      mainAmount = newMainBalance;
      document.getElementById("main-amount").innerText = newMainBalance;
      console.log(newMainBalance);
      //card balance
      let newCard4Balance = card4Balance + inputNumberCard4;
      card4Balance = newCard4Balance;
      document.getElementById("amount-card-4").innerText = newCard4Balance;
      console.log(newCard4Balance);
      //history
      let historyDiv = document.createElement("div");
      let historyP = document.createElement("p");
      historyP.innerText = `${inputNumberCard4} Taka is Donated for Tree Plantation in Bangladesh`;
      let historySpan = document.createElement("span");
      let donationTime = new Date();
      historySpan.innerText = `Date: ${donationTime}`;
      historyDiv.appendChild(historyP);
      historyDiv.appendChild(historySpan);
      document.getElementById("history").prepend(historyDiv);
      //modal
      document.getElementById("modal").classList.remove("hidden");
    } else {
      alert("Invalid number.");
      document.getElementById("input-card-3").value = "";
    }
  } else {
    alert("Invalid number. Please enter a valid number.");
    document.getElementById("input-card-3").value = "";
  }
});
// donation end
