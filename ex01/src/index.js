var capsLock = false;
var shiftLock = false;
var elements = document.getElementsByClassName("keys");
var shiftButton = document.getElementById('shift');
var buttonCapsLock = document.getElementById('caps-lock');
var buttonOK = document.getElementById('ok');


function setChar(value) {
    document.getElementById("keyboard-input").value += value;
    if (shiftLock) {
        shiftLock = false;
        setShiftLock(shiftButton, shiftLock);
        setButtonCaps(shiftLock);
    }
}

function backSpace() {
    document.getElementById("keyboard-input").value = document.getElementById("keyboard-input").value.slice(0, -1);
}

function enter() {
    document.getElementById("keyboard-input").value += "\n"
}

/* Caps Lock */
buttonCapsLock.onclick = function () {
    capsLock = !capsLock;

    setCapsLock(this);

    if (capsLock) {
        shiftLock = false;
        setShiftLock(shiftButton, shiftLock);
    }

    setButtonCaps(capsLock);
};

function setCapsLock(btn) {
    if (capsLock) {
        btn.style.color = "red";
    }
    else {
        btn.style.color = "white";
    }
}

/* Shift */
shiftButton.onclick = function () {
    shiftLock = !shiftLock;
    if (shiftLock && capsLock) {
        capsLock = false;
        setCapsLock(buttonCapsLock, capsLock);
    }

    setShiftLock(this, shiftLock);
    setButtonCaps(shiftLock);
};

function setShiftLock(btn, value) {
    if (value) {
        btn.style.color = "red";
    }
    else {
        btn.style.color = "white";
    }
}


/* Get all buttons on the page */
function setButtonCaps(value) {
    for (var i = 0, len = elements.length; i < len; i++) {

        if (value) {
            elements[i].style.textTransform = "uppercase";
            elements[i].value = elements[i].value.toUpperCase();
        }
        else {
            elements[i].style.textTransform = "lowercase";
            elements[i].value = elements[i].value.toLowerCase();
        }
    }
}

/**/
buttonOK.onclick = function () {
    window.alert(document.getElementById("keyboard-input").value)
};
