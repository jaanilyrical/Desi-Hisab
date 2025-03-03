let btn1 = document.querySelector(".OK");
btn1.addEventListener("click", () => {
    btn1.disabled = true;
    // btn1.
})

let btn2 = document.querySelector(".AC");
btn2.addEventListener("click", () => {
    btn1.disabled = false;
    // btn1.
})
let soundBtn = new Audio();
soundBtn.src = "btn.wav";
let soundAC = new Audio();
soundAC.src = "ac.wav";
let soundDE = new Audio();
soundDE.src = "DE.mp3";
let soundOK = new Audio();
soundOK.src = "ok.wav";
let soundDone = new Audio();
soundDone.src = "done.wav";