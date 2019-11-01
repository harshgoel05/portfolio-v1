function desg() {
  var a;
  a = document.getElementById("designation");
  setTimeout(function () {
      a.innerHTML = "I am an IOT enthusiast";
    }, 0);
  setTimeout(function () {
    a.innerHTML = "I am a Web Developer";
    }, 1000);
    setTimeout(function () {
      a.innerHTML = "I am a Computer Vision enthusiast";
      }, 2000);
}

desg();
setInterval(desg, 3000);