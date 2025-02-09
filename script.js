const messages = [
    "Are you sure?",
    "Really sure??",
    "Really Really Sure?",
    "Wifey please...",
    "Look at ur hubby and click no again!",
    "Woi don't click so fast ",
    "hold up hold up",
    "Please don't click no again i'll be very sad...",
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
