function toss() {
  var playerInput1 = document.getElementById("inp").value;
  var playerInput2 = document.getElementById("inp2").value;

  var inputPattern = /^\d*$/; // Regular expression to match only numbers

  if (
    playerInput1 === "" ||
    playerInput2 === "" ||
    inputPattern.test(playerInput1) ||
    inputPattern.test(playerInput2)
  ) {
    document.getElementById("res").textContent =
      "Please enter valid Player names above.";
  } else {
    var toss = Math.random() * 2;
    var change = Math.floor(toss);
    if (change === 0) {
      document.getElementById("res").textContent =
        "It's Heads !! " + playerInput1 + " Wins the Toss.";
    } else {
      document.getElementById("res").textContent =
        "It's Tails !! " + playerInput2 + " Wins the Toss.";
    }
  }
}
