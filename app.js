let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#c6a669";

//let query_id = tg.initDataUnsafe.query_id;

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

let orders = new Set();

function toggleMainButton()
{
    if (orders.size == 0) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Выбрано товаров: " + orders.size);
        tg.MainButton.show();
    }
}

btn1.addEventListener("click", function() {
    let product_id = "Argentina";
    if (orders.has(product_id)) {
        orders.delete(product_id);
        btn1.firstChild.data = "Хочу"
    }
    else {
        orders.add(product_id);
        btn1.firstChild.data = "Не хочу"
    }
    toggleMainButton();
});

btn2.addEventListener("click", function() {
    let product_id = "Colombo";
    if (orders.has(product_id)) {
        orders.delete(product_id);
        btn2.firstChild.data = "Хочу"
    }
    else {
        orders.add(product_id);
        btn2.firstChild.data = "Не хочу"
    }
    toggleMainButton();
});

btn3.addEventListener("click", function() {
    let product_id = "Peru";
    if (orders.has(product_id)) {
        orders.delete(product_id);
        btn3.firstChild.data = "Хочу"
    }
    else {
        orders.add(product_id);
        btn3.firstChild.data = "Не хочу"
    }
    toggleMainButton();
});

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    web_app_data = Array.from(orders).join(", ");
    tg.sendData(web_app_data);
});


