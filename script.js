// Function to update cycle status dynamically
function updateCycleStatus(status) {
    let output = document.getElementById("cycle-output");
    output.innerHTML = `System Status: <strong>${status}</strong>`;

    output.classList.remove("fade-in");
    setTimeout(() => output.classList.add("fade-in"), 100);

    let logContainer = document.getElementById("log-container");
    let newEntry = document.createElement("p");
    newEntry.innerHTML = `🔹 ${status}`;
    logContainer.appendChild(newEntry);
}

// Cycle phase functions
function menstruation() {
    updateCycleStatus("🩸 Flush Old Data - Menstruation in progress...");
}

function follicularPhase() {
    updateCycleStatus("🔍 Scanning for viable egg...");
}

function ovulation() {
    updateCycleStatus("⚠️ Critical vulnerability window open!");
}

function lutealPhase() {
    updateCycleStatus("🛡️ Security protocol enforced. Awaiting authentication request...");
}

function resetCycle() {
    document.getElementById("log-container").innerHTML = "";
    updateCycleStatus("♻️ System Reset - Awaiting Input...");
}

// Emergency Mode activation with typing effect
function activateEmergencyMode() {
    let textContainer = document.getElementById("emergency-text");
    let typingEffect = document.getElementById("typing-effect");

    textContainer.style.display = "block";

    let message = "🚨 EMERGENCY PROTOCOL INITIATED!\n\n🛑 DO NOT ARGUE! Logic is useless now.\n🌡️ Stay Calm & Listen.\n🍫 Deploy chocolate ASAP.\n💬 Say: 'I'm here for you.'\n🤗 Hug Protocol (if approved).";

    typingEffect.innerHTML = "";

    let i = 0;
    function typeWriter() {
        if (i < message.length) {
            typingEffect.innerHTML += message.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();

    let logContainer = document.getElementById("log-container");
    let newEntry = document.createElement("p");
    newEntry.innerHTML = "🚨 Emergency Mode Activated! Deploying comfort strategies...";
    logContainer.appendChild(newEntry);
}

// Boss Level Mode activation
function activateBossMode() {
    document.getElementById("boss-mode").style.display = "block";
    document.getElementById("boss-mode-button").style.display = "none";
}

function exitBossMode() {
    document.getElementById("boss-mode").style.display = "none";
    document.getElementById("boss-mode-button").style.display = "block";
}

// Randomized strategy generator
function generateStrategy() {
    let strategies = [
        "🧘 Deep Breathing Protocol - Guide her through 4-7-8 breathing.",
        "🍫 Deploy Emergency Chocolate - No questions asked, just deliver.",
        "🎭 Distraction Sequence - Initiate a lighthearted or fun conversation.",
        "💬 Reflective Listening - Repeat back what she says with validation.",
        "💖 Surprise Affirmations - Give an unexpected compliment or sweet reminder.",
        "🔄 Perspective Shift - Offer a different viewpoint, but gently."
    ];

    let randomIndex = Math.floor(Math.random() * strategies.length);
    document.getElementById("boss-strategy").innerHTML = strategies[randomIndex];
}

let loveCounter = 0
function secretLove() {
    if (loveCounter++ > 4) {alert("I love you! 💖");loveCounter=0}
}

