var yesBtn = document.getElementById("yesBtn");
var noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", function () {
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    this.style.position = "absolute";
    this.style.left = x + "px";
    this.style.top = y + "px";

    var newFontSize = parseInt(window.getComputedStyle(yesBtn).fontSize) + 40;
    yesBtn.style.fontSize = newFontSize + "px";

    yesBtn.style.width = (yesBtn.offsetWidth + 100) + "px";
    yesBtn.style.height = (yesBtn.offsetHeight + 80) + "px";

    yesBtn.style.position = "absolute";
    yesBtn.style.left = "50%";
    yesBtn.style.top = "50%";
    yesBtn.style.transform = "translate(-50%, -50%)";

    var yesBtnRect = yesBtn.getBoundingClientRect();
    var noBtnRect = this.getBoundingClientRect();

    if (
        noBtnRect.left < yesBtnRect.right &&
        noBtnRect.right > yesBtnRect.left &&
        noBtnRect.top < yesBtnRect.bottom &&
        noBtnRect.bottom > yesBtnRect.top
    ) {
        this.style.display = "none";
    }
});

yesBtn.addEventListener("click", function () {
    alert("you are gay =))))))");
});
