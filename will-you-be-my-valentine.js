let messages = ["Пожалуйста?", "Дай мне шанс!", "Ты уверена?", "Подумай еще раз!", "Ты можешь сожалеть об этом!", "Последний шанс!", "Ботам пожалуйста?", "Не разбивай мне сердце 💔"];
let noCount = 0;
let noButton = document.getElementById("no");
let yesButton = document.getElementById("yes");
let messageText = document.getElementById("message");

noButton.addEventListener("click", rejectLove);
yesButton.addEventListener("click", acceptLove);

function rejectLove() {
    if (noCount < messages.length) {
        messageText.innerText = messages[noCount];
        noCount++;
        noButton.style.transform = `scale(${1 - noCount * 0.1})`;
        yesButton.style.transform = `scale(${1 + noCount * 0.1})`;
    }
    if (noCount === messages.length) {
        noButton.style.display = "none";
    }
}

function acceptLove() {
    document.getElementById("valentine").innerHTML = `
        <img src="https://media1.tenor.com/m/aEWN44So2ckAAAAC/kiss-kisses.gif" class="gif">
        <div class="question">ДААААААА ЯЯЯЯЯЯ ТЕБЯ ТАК СИЛЬНО ЛЮБЛЮ МОЯ СЛАДКАЯ ПРИНЦЕССА❤️</div>
    `;
    launchConfetti();
    startHeartRain();
}

function launchConfetti() {
    var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

function startHeartRain() {
    const heartContainer = document.getElementById("heart-container");
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}
