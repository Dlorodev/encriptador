

function hideResultBefore() {
    document.getElementById('result-before').style.display = "none";
    document.getElementById('result-after').style.display = "flex";

}


//encrypt function
function encrypt() {
    let textarea1 = document.getElementById('textarea1');
    let textToEncrypt = textarea1.value;
    let textArray = [];
    let textEncrypted = "";

    for (let i = 0; i < textToEncrypt.length; i++) {
        textArray.push(textToEncrypt[i]);
    }

    for (let j = 0; j < textArray.length; j++) {
        if (textArray[j] == "e") {
            textArray[j] = "enter";
        } else if (textArray[j] == "i") {
            textArray[j] = "imes";
        } else if (textArray[j] == "a") {
            textArray[j] = "ai";
        } else if (textArray[j] == "o") {
            textArray[j] = "ober";
        } else if (textArray[j] == "u") {
            textArray[j] = "ufat";
        }
    }

    textEncrypted = textArray.join("");
    document.getElementById('textarea2').value = textEncrypted;
}

//decrypt function
function decrypt() {
    let textarea1 = document.getElementById('textarea1');
    let textToDecrypt = textarea1.value;
    let subStr = [/enter/g, /imes/g, /ai/g, /ober/g, /ufat/g];
    let replaceChar = ["e", "i", "a", "o", "u"];
    let decryptedText;

    for (let x = 0; x < subStr.length; x++) {
        textToDecrypt = textToDecrypt.replace(subStr[x], replaceChar[x]);

    }

    decryptedText = textToDecrypt;
    document.getElementById('textarea2').value = decryptedText;
}

//copy function
function copyText() {
    let textToCopy = document.getElementById('textarea2');

    document.getElementById('textarea1').value = "";
    textToCopy.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Texto copiado en el portapapeles!")
}

function changeResultArea() {
    var sectionResult = document.getElementById('section-result');
    var viewportWidth = window.innerWidth;

    if (viewportWidth <= 768) {
        sectionResult.classList.remove('section-result');
        sectionResult.classList.add('result-transform');
    } else if (viewportWidth <= 480) {
        sectionResult.classList.remove('section-result');
        sectionResult.classList.add('result-transform2');
    }
}