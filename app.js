let avaibleBtns = document.querySelectorAll(".avaible-btn")
let Boxes = document.querySelectorAll(".box")

for (let i = 0; i < avaibleBtns.length; i++) {
    avaibleBtns[i].onclick = function () {
        let currentBtn = avaibleBtns[i]
        for (let k = 0; k < avaibleBtns.length; k++) {
            avaibleBtns[k].classList.remove("active")
        }
        currentBtn.classList.add("active")


        // 2
        let btnId = currentBtn.getAttribute("data-btn")
        let currentGif = document.querySelector(btnId)
        for (let k = 0; k < Boxes.length; k++) {
            Boxes[k].classList.remove("active")
        }
        currentGif.classList.add("active")
    }
}
document.querySelector(".avaible-btn:nth-child(1)").click()

let Boses = document.querySelectorAll(".acordeon")
for (let i = 0; i < Boses.length; i++) {
    Boses[i].onclick = function () {
        let span = Boses[i].querySelector("span")
        let list = Boses[i].querySelector(".viki")

        for (let k = 0; k < Boses.length; k++) {
            if (Boses[i] !== Boses[k]) {
                Boses[k].lastElementChild.classList.remove("show")
                Boses[k].querySelector("span").innerHTML = "+"
            }
        }

        list.classList.toggle("show")
        if (list.classList.contains("show")) {
            span.innerHTML = "-"
        } else {
            span.innerHTML = "+"
        }
    }
}

let burger = document.querySelector(".btn-burger")
let headRight = document.querySelector(".head-right")
function burgerClick() {
    headRight.classList.toggle("open")
} burger.onclick = burgerClick

let divDog = document.querySelector(".div-dog")
let Dog = document.querySelector(".div-dog img")
let dogLeft = 15
function dogRun() {
    divDog.removeChild(Dog)
    divDog.insertAdjacentHTML(
        "beforeend", // перший параметр - куди саме буде доданий html тег
        `
       <img class="run-dog" src="img/runDog.gif">
    `
    )
    let moveUpDog = setInterval(function () {
        dogLeft++
        document.querySelector(".run-dog").style.left = dogLeft + "%"
        if (document.querySelector(".run-dog").style.left == "95%") {
            clearInterval(moveUpDog)
            document.querySelector(".run-dog").style.transform = "scaleX(1)"
            let moveDownDog = setInterval(function () {
                dogLeft--
                document.querySelector(".run-dog").style.left = dogLeft + "%"
            }, 100)
        }
    }, 100)


} Dog.onclick = dogRun

let rateSection = document.querySelector(".rate-area")
function myPrompt(outElement) { // Прибрали параметр promptText
    // 1. Додаємо розмітку. Текст у <p> тепер статичний або його можна взагалі видалити
    
    rateSection.insertAdjacentHTML("beforeend",
        `
        <div class="div-rate">
            <input class="i2-rate">
            <button class="rate-button">Ok</button>
            <button class="rate-cancel">Cancel</button>
        </div>
        `
    );

    // 2. Шукаємо елементи в DOM
    const rateDiv = document.querySelector('.div-rate');
    const btnCancel = rateDiv.querySelector(".rate-cancel");
    const btnOk = rateDiv.querySelector(".rate-button");
    const inpRate = rateDiv.querySelector(".i2-rate");

    // 3. Кнопка "Скасувати"
    btnCancel.onclick = function () {
        rateDiv.remove();
    };

    // 4. Кнопка "Ок"
    btnOk.onclick = function () {
        if (outElement && inpRate) {
            outElement.innerHTML += 
            `
            <h1 class="left-heart">${inpRate.value}</h1>
            ` 
        }
        rateDiv.remove(); 
    };
}

// Пошук статичних елементів на сторінці
let out = document.querySelector(".out-rate");

// Обробник кліку на кнопку запуску модального вікна
document.querySelector(".your-rate").onclick = function () {
    // Тепер передаємо тільки елемент виводу, без тексту з iPrompt
    myPrompt(out);
};