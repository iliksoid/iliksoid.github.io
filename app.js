let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#c6a669";

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

btn1.addEventListener("click", function() {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 1");
        item = "1";
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(item);
});


