const messages = [
    "Are you sure?",
    "Really sure??",
    "Really Really Sure?",
    "Wifey please...",
    "🌹Please look at ur hubby before you click no again? Promise you won't regret🌹",
    "Woi don't click so fast ",
    "Please don't click no again I'll be very sad...",
    "Please noooo don press lovey T_T"
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
