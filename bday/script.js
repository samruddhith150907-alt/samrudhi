const introScreen = document.getElementById("introScreen");
const mainContent = document.getElementById("mainContent");
const startBtn = document.getElementById("startBtn");

const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const closePopup = document.getElementById("closePopup");

const heartContainer = document.getElementById("heartContainer");
const confettiContainer = document.getElementById("confettiContainer");

const music = document.getElementById("backgroundMusic");
const musicBtn = document.getElementById("musicBtn");


/* START WEBSITE */

startBtn.addEventListener("click", () => {

    introScreen.style.transition = ".8s";
    introScreen.style.opacity = "0";

    setTimeout(() => {

        introScreen.style.display = "none";

        mainContent.classList.remove("hidden");

        document.body.style.background = "#090909";

        heartBurst(30);
        createConfetti(80);

        window.scrollTo(0, 0);

    }, 700);

});


/* POPUP */

function openPopup(title, message) {

    popupText.innerHTML = `
        <h2>${title}</h2>
        <p>${message}</p>
    `;

    popup.classList.remove("hidden");

}

function closePopupBox() {

    popup.classList.add("hidden");

}

closePopup.addEventListener("click", closePopupBox);

popup.addEventListener("click", event => {

    if (event.target === popup) {

        closePopupBox();

    }

});


/* MOVIE CARDS */

const movieMessages = {

    queen: {
        title: "👑 The Birthday Queen",
        message:
        "Today there is only one rule in this universe... Whatever the birthday queen says is correct 😂❤️"
    },

    crazy: {
        title: "😂 The Mystery",
        message:
        "Scientists are still investigating how one person can be this cute and this crazy at the same time. Research continues... 😂"
    },

    heart: {
        title: "❤️ Heart Theft Case",
        message:
        "Warning! This girl has been officially charged with stealing my heart and refusing to return it. Lifetime sentence: Staying with me 😂❤️"
    },

    drama: {
        title: "👑 Drama Queen",
        message:
        "New season releasing every day. Unlimited episodes. No cancellation option available 😂❤️"
    }

};

document.querySelectorAll(".movie-card").forEach(card => {

    card.addEventListener("click", () => {

        const data = movieMessages[card.dataset.popup];

        if (data) {

            openPopup(data.title, data.message);

            heartBurst(15);

        }

    });

});


/* GIFT SURPRISES */

const gifts = {

    1: {
        title: "🎁 Gift #01",
        message:
        "Congratulations! You won unlimited compliments from me for the entire day... okay maybe the entire year 😂❤️"
    },

    2: {
        title: "🎀 Gift #02",
        message:
        "You have received a Premium Subscription: Unlimited permission to trouble me 😂👑"
    },

    3: {
        title: "📦 Gift #03",
        message:
        "This box contains something extremely valuable... MY PATIENCE 😂❤️ Congratulations, you already own it."
    },

    4: {
        title: "🔒 SECRET GIFT UNLOCKED",
        message:
        "You officially unlocked a lifetime membership to my heart. No refund. No cancellation. No escape 😂❤️"
    }

};

document.querySelectorAll(".gift-box").forEach(gift => {

    gift.addEventListener("click", () => {

        const data = gifts[gift.dataset.gift];

        gift.style.transform = "scale(1.15) rotate(8deg)";

        setTimeout(() => {

            gift.style.transform = "";

            if (data) {

                openPopup(data.title, data.message);

                heartBurst(25);
                createConfetti(35);

            }

        }, 300);

    });

});


/* HEART SHOWER */

function createHeart() {

    const heart = document.createElement("span");

    const hearts = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "💓",
        "💘"
    ];

    heart.className = "heart";

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 22 + 16 + "px";

    heart.style.animationDuration =
        Math.random() * 4 + 4 + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}


function heartBurst(count) {

    for (let i = 0; i < count; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 80);

    }

}


/* CONTINUOUS HEART SHOWER */

setInterval(() => {

    if (!mainContent.classList.contains("hidden")) {

        createHeart();

    }

}, 900);


/* CONFETTI */

function createConfetti(count = 50) {

    const pieces = [
        "🎉",
        "✨",
        "🎊",
        "💖",
        "⭐",
        "🎂"
    ];

    for (let i = 0; i < count; i++) {

        const piece = document.createElement("span");

        piece.className = "confetti";

        piece.innerHTML =
            pieces[Math.floor(Math.random() * pieces.length)];

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.fontSize =
            Math.random() * 20 + 12 + "px";

        piece.style.animationDuration =
            Math.random() * 3 + 3 + "s";

        confettiContainer.appendChild(piece);

        setTimeout(() => {

            piece.remove();

        }, 7000);

    }

}


/* MUSIC */

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play().catch(() => {});

        musicBtn.innerHTML = "🔊";

    } else {

        music.pause();

        musicBtn.innerHTML = "🔇";

    }

});


/* WATCH OUR STORY */

document.getElementById("watchStory")
.addEventListener("click", () => {

    document.getElementById("memories")
    .scrollIntoView({
        behavior: "smooth"
    });

    heartBurst(20);

});


/* FUNNY FACTS */

document.getElementById("showFacts")
.addEventListener("click", () => {

    openPopup(

        "😂 OFFICIAL CHARACTER REPORT",

        "Cuteness: 100% ❤️<br><br>" +
        "Drama Level: 99% 😂<br><br>" +
        "Making Me Smile: 1000% 💖<br><br>" +
        "Anger Speed: Faster than WiFi ⚡😂"

    );

});


/* SHUFFLE MEMORIES */

document.getElementById("memoryShuffle")
.addEventListener("click", () => {

    const grid =
        document.querySelector(".memory-grid");

    const items =
        [...grid.children];

    items
    .sort(() => Math.random() - .5)
    .forEach(item => {

        grid.appendChild(item);

    });

    createConfetti(30);

});


/* VIDEO */

const videoModal =
    document.getElementById("videoModal");

const surpriseVideo =
    document.getElementById("surpriseVideo");


document.getElementById("playVideo")
.addEventListener("click", () => {

    videoModal.classList.remove("hidden");

    surpriseVideo.play().catch(() => {});

});


document.getElementById("closeVideo")
.addEventListener("click", () => {

    videoModal.classList.add("hidden");

    surpriseVideo.pause();

});


videoModal.addEventListener("click", event => {

    if (event.target === videoModal) {

        videoModal.classList.add("hidden");

        surpriseVideo.pause();

    }

});


/* PROGRESS BAR ANIMATION */

const progressBars =
    document.querySelectorAll(".progress-bar");

const progressObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            progressBars.forEach(bar => {

                bar.style.width =
                    bar.dataset.progress + "%";

            });

        }

    });

}, {
    threshold: .4
});


const statsBox =
    document.querySelector(".stats-box");

if (statsBox) {

    progressObserver.observe(statsBox);

}


/* SPINNER */

const wheel =
    document.getElementById("wheel");

const spinBtn =
    document.getElementById("spinBtn");

let wheelRotation = 0;

const wheelResults = [

    "❤️ You won unlimited love!",
    "🎁 A secret birthday gift!",
    "😂 You won one funny punishment!",
    "👑 Congratulations Queen!",
    "🍫 Chocolate reward unlocked!",
    "✨ Magic birthday wish unlocked!"

];


spinBtn.addEventListener("click", () => {

    const extraRotation =
        Math.floor(Math.random() * 360) + 1800;

    wheelRotation += extraRotation;

    wheel.style.transform =
        `rotate(${wheelRotation}deg)`;

    spinBtn.disabled = true;

    setTimeout(() => {

        spinBtn.disabled = false;

        const result =
            wheelResults[
                Math.floor(
                    Math.random() *
                    wheelResults.length
                )
            ];

        openPopup(
            "🎡 SPINNER RESULT",
            result
        );

        heartBurst(30);

    }, 5200);

});


/* SECRET UNLOCK */

document.getElementById("secretBtn")
.addEventListener("click", () => {

    openPopup(

        "🔓 SECRET UNLOCKED ❤️",

        "Congratulations Birthday Girl! 🎂<br><br>" +

        "You have officially unlocked the person " +
        "who will always support you, annoy you, " +
        "and make you laugh 😂❤️"

    );

    heartBurst(60);

    createConfetti(100);

});


/* DONT CLICK MESSAGE */

const dontClick =
    document.getElementById("dontClick");

const hiddenMessage =
    document.getElementById("hiddenMessage");

const typewriter =
    document.getElementById("typewriter");


dontClick.addEventListener("click", () => {

    hiddenMessage.classList.remove("hidden");

    const message =
        "I know you were told not to click this... " +
        "but you clicked it anyway 😂❤️ " +
        "Happy Birthday! Thank you for being one of " +
        "the most special parts of my life. " +
        "Keep smiling, keep shining, and keep being " +
        "your beautifully crazy self. ❤️🎂";

    typewriter.textContent = "";

    let i = 0;

    const typing =
    setInterval(() => {

        typewriter.textContent += message[i];

        i++;

        if (i >= message.length) {

            clearInterval(typing);

        }

    }, 25);

    heartBurst(30);

});


/* FINAL SURPRISE */

document.getElementById("finalSurprise")
.addEventListener("click", () => {

    const ending =
        document.querySelector(".ending-message");

    ending.classList.remove("hidden");

    createConfetti(150);

    heartBurst(100);

    document.body.style.background =
        "linear-gradient(135deg,#120008,#30001c,#09000f)";

    setTimeout(() => {

        ending.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 200);

});


/* CURSOR SPARKLES */

document.addEventListener(
"mousemove",
event => {

    if (
        mainContent.classList.contains("hidden")
    ) return;

    if (Math.random() > .75) {

        const sparkle =
            document.createElement("span");

        sparkle.className = "sparkle";

        sparkle.innerHTML = "✨";

        sparkle.style.left =
            event.clientX + "px";

        sparkle.style.top =
            event.clientY + "px";

        document
        .getElementById("sparkleContainer")
        .appendChild(sparkle);

        setTimeout(() => {

            sparkle.remove();

        }, 1000);

    }

});


/* RANDOM HERO GLOW */

setInterval(() => {

    const hero =
        document.querySelector(".hero");

    if (hero) {

        hero.style.filter =
            `brightness(${1 + Math.random() * .08})`;

    }

}, 2000);