function countdown() {
  var endDate = new Date("2023-06-03");
  var now = new Date();
  var difference = endDate.getTime() - now.getTime();

  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + " дн " + hours + " год " + minutes + " хв " + seconds + " сек";

  if (difference <= 0) {
    clearInterval(interval);
    document.getElementById("countdown").textContent = "Время истекло!";
  }
}

var interval = setInterval(countdown, 1000);
